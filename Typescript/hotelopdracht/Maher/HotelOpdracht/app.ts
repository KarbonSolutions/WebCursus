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
    var hotel = new Hotel();
    $('#butClick').click(function () {
        var GastName = $('#Name').val();
        var IncheckD = $('#Incheck').val();
        var CapN = $('#Cap').val();
        hotel.RSV(GastName, CapN, IncheckD)
    });
    // binnen deze functie kun je html elementen ophalen en bewerken.
    for (var i = 0; i < hotel.Rooms.length; i++) {
        var room = hotel.Rooms[i]
        $('#Hotel').append($('<tr>')
            .append($('<td>').text(room.Number))
            .append($('<td>').text(room.Capaciteit))
            .append($('<td>').text(room.Prijs))
            .append($('<td>').text(room.NaamGast).addClass('customer')));
    }
   });

class Room {
    Number: number;
    Prijs: number;
    Capaciteit: number;
    NaamGast: string;

    constructor(Number: number, Prijs: number, Capaciteit: number, NaamGast: string) {
        this.Number = Number;
        this.Prijs = Prijs;
        this.NaamGast = NaamGast;
        this.Capaciteit = Capaciteit;
    }
   }

class Reservation {
    Kamer: Room;
    IncheckDatum: Date;
    UitcheckDatum: Date;
    constructor(Kamer: Room, IncheckDatum: Date, UitcheckDatum: Date) {
        this.Kamer = Kamer;
        this.IncheckDatum = IncheckDatum;
        this.UitcheckDatum = UitcheckDatum;
    }
};

class Hotel {
    Rooms: Array<Room> = [];
    Reservations: Array<Reservation> = [];

    constructor() {
        this.Rooms.push(new Room(1, 190, 2, ''));
        this.Rooms.push(new Room(2, 150, 4,''));
        this.Rooms.push(new Room(3, 250, 2, 'Family Ree'));
        this.Rooms.push(new Room(4, 140, 1, 'De heer Piet'));
        this.Rooms.push(new Room(5, 140, 1, 'Mevrouw sint'));

    }

    RSV(Naam: string, Cap: number, IncheckD: Date) {                  
        for (var i = 0; i < this.Rooms.length; i++) {
            var free = true;
            var room = this.Rooms[i];

            for (var k = 0; k < this.Reservations.length && free; ++k) {
                if (this.Reservations[k].Kamer.Number == room.Number) {
                    free = false;
                }
            }


        }


        /*/if free 
        var table = $('#Hotel tr .customer');
         this.Reservations.push(new Reservation(   ));
      */
        
    }


}