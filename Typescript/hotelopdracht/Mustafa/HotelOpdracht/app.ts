/// <reference path="jquery.d.ts" />
/// <reference path="bootstrap.d.ts" />

/*
De bedoeling van deze opdracht is om een hotel reserverings applicatie te creeren.
De web applicatie gaat gebruikt worden door de receptie van het hotel.

De volgende features moeten ondersteund worden:

- Een tabel tonen met alle kamers:
    ---------------------------------------------------------
    | Kamer | Capaciteit | Prijs | Naam gast (indien bezet) |
    ---------------------------------------------------------
 
- De receptie moet door de naam van de persoon die reserveert, het aantal personen,
  de incheck datum en het aantal nachten van verblijf automatisch een vrije kamer
  kunnen boeken. De bovengenoemde tabel moet dit ook reflecteren.
  Als er geen vrije kamer is, kan het nog steeds zo zijn dat er een kamer vrijkomt
  voor de incheck datum, hou dus ook een lijst van reserveringen bij! Mocht er echt
  geen ruimte zijn, geef dan een melding met de eerste datum die wel kan.

- Een tabel met alle reserveringen:
    -------------------------------------------------------------------
    | Kamer | Capaciteit | Naam gast | Incheck datum | Uitcheck datum |
    -------------------------------------------------------------------

- 5 kamers, waarvan er 2 één persoons zijn, 1 twee persoons en 2 vier persoons.

Als bonus kun je de twee tabellen onderverdelen in tabladen.
Extra bonus:

Maak bij deze opdracht gebruik van jQuery en TypeScript, geef alle variablen een type!
Voor de opmaak van je html bestand kun je Bootstrap gebruiken, de files hiervoor 
zitten in het project, kijk op http://getbootstrap.com/css/ voor de benodigde html
elementen en klassen.

Tips:
 - De type van jQuery objecten in TypeScript is JQuery
 - TypeScript arrays hebben het type Array<type>, waarbij type het type van het object is.

*/

$(function () {
    // binnen deze functie kun je html elementen ophalen en bewerken.
    var hotel = new Hotel();
    for (var i = 0; i < hotel.rooms.length; ++i) {
        var room = hotel.rooms[i];
        $('#rooms').append($('<tr>').attr('id', 'room' + i)
            .append($('<td>').text(i))
            .append($('<td>').text(room.capacity))
            .append($('<td>').text(room.price))
            .append($('<td>').text(''))
        );
    }

    $('#reserve').click(function () {
        var name: string = $('#name').val();
        var count: number = parseInt($('#count').val());
        var date = new Date($('#date').val());
        var nights: number = parseInt($('#nights').val());
        hotel.makeReservation(name, count, date, nights);
    });
});

function addReservationRow(reservation: Reservation) {
    $('#reservations').append($('<tr>')
        .append($('<td>').text(reservation.guestCount))
        .append($('<td>').text(reservation.name))
        .append($('<td>').text(reservation.checkIn.toDateString()))
        .append($('<td>').text(reservation.checkOut.toDateString()))
    );
}

class Room {
    index: number;
    capacity: number;
    resident: string;
    price: number;

    constructor(index:number, capacity: number) {
        this.index = index;
        this.capacity = capacity;
        this.resident = null;
        this.price = capacity * 15;
    }
}

class Reservation {
    room: number;
    guestCount: number;
    name: string;
    checkIn: Date;
    checkOut: Date;

    constructor(name:string, guestCount: number, checkIn: Date, nights: number) {
        this.room = null;
        this.guestCount = guestCount;
        this.name = name;
        this.checkIn = checkIn;
        this.checkOut = new Date();
        this.checkOut.setDate(checkIn.getDate() + nights);
    }
}

class Hotel {
    rooms: Array<Room> = [];
    reservations: Array<Reservation> = [];

    constructor() {
        this.rooms.push(new Room(0, 1));
        this.rooms.push(new Room(1, 1));
        this.rooms.push(new Room(2, 2));
        this.rooms.push(new Room(3, 4));
        this.rooms.push(new Room(4, 4));
    }

    makeReservation(name: string, guestCount: number, date: Date, nights: number) {
        var newReservation = new Reservation(name, guestCount, date, nights);
        var reservations = this.getSortedReservations(guestCount);
        var conflicts = 0;

        for (var i = 0; i < reservations.length; ++i) {
            var reservation = reservations[i];

            if (reservation.checkIn <= newReservation.checkIn) {
                if (reservation.checkOut > newReservation.checkOut) {
                    conflicts++;
                    break;
                }
            } else {
                if (reservation.checkIn < newReservation.checkOut) {
                    conflicts++;
                    break;
                }
            }
        }

        if (conflicts < this.getFreeRooms(guestCount).length) {
            this.reservations.push(newReservation);
            addReservationRow(newReservation);
            this.updateRooms();
        } else {
            alert('no rooms available');
        }
    }

    updateRooms() {
        var roomSizes = [1, 2, 4];

        for (var i = 0; i < this.reservations.length; ++i) {
            this.reservations[i].room = null;
        }

        for (var s = 0; s < roomSizes.length; ++s) {
            var size = roomSizes[s];
            var reservations = this.getSortedReservations(size);
            var rooms = this.getRooms(size);
            var length = Math.min(rooms.length, reservations.length);

            for (var i = 0; i < length; ++i) {
                var room = rooms[i];
                room.resident = reservations[i].name;
                reservations[i].room = room.index;

                $('#room' + room.index).children(':last').text(room.resident);
            }
        }
    }

    getRooms(capacity: number): Array<Room> {
        var rooms: Array<Room> = [];

        for (var i = 0; i < this.rooms.length; ++i) {
            if (this.rooms[i].capacity === capacity) {
                rooms.push(this.rooms[i]);
            }
        }

        return rooms;
    }

    getFreeRooms(capacity: number): Array<Room> {
        var free: Array<Room> = [];

        for (var i = 0; i < this.rooms.length; ++i) {
            var room = this.rooms[i];

            if (room.capacity === capacity && room.resident === null) {
                free.push(room);
            }
        }

        return free;
    }

    getSortedReservations(capacity: number) : Array<Reservation> {
        var reservations: Array<Reservation> = [];

        for (var i = 0; i < this.reservations.length; ++i) {
            var reservation = this.reservations[i];

            if (reservation.guestCount === capacity) {
                reservations.push(reservation);
            }
        }

        return reservations.sort((a, b) => {
            return a.checkIn.valueOf() - b.checkIn.valueOf();
        });
    }
}