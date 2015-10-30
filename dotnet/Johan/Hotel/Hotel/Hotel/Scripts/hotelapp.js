$(function () {
    $('#reserve').click(function () {
        var name = $('#name').val();
        var count = parseInt($('#count').val());
        var date = new Date($('#date').val());
        var nights = parseInt($('#nights').val());
        hotel.makeReservation(name, count, date, nights);
    });
});
function addReservationRow(reservation) {
    $('#reservations').append($('<tr>')
        .append($('<td>').text(reservation.guestCount))
        .append($('<td>').text(reservation.name))
        .append($('<td>').text(reservation.checkIn.toDateString()))
        .append($('<td>').text(reservation.checkOut.toDateString())));
}
var Room = (function () {
    function Room(index, capacity) {
        this.index = index;
        this.capacity = capacity;
        this.resident = null;
        this.price = capacity * 15;
    }
    return Room;
})();
var Reservation = (function () {
    function Reservation(name, guestCount, checkIn, nights) {
        this.room = null;
        this.guestCount = guestCount;
        this.name = name;
        this.checkIn = checkIn;
        this.checkOut = new Date();
        this.checkOut.setDate(checkIn.getDate() + nights);
    }
    return Reservation;
})();
var Hotel = (function () {
    function Hotel() {
        this.rooms = [];
        this.reservations = [];
        this.rooms.push(new Room(0, 1));
        this.rooms.push(new Room(1, 1));
        this.rooms.push(new Room(2, 2));
        this.rooms.push(new Room(3, 4));
        this.rooms.push(new Room(4, 4));
    }
    Hotel.prototype.makeReservation = function (name, guestCount, date, nights) {
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
            }
            else {
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
        }
        else {
            alert('no rooms available');
        }
    };
    Hotel.prototype.updateRooms = function () {
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
    };
    Hotel.prototype.getRooms = function (capacity) {
        var rooms = [];
        for (var i = 0; i < this.rooms.length; ++i) {
            if (this.rooms[i].capacity === capacity) {
                rooms.push(this.rooms[i]);
            }
        }
        return rooms;
    };
    Hotel.prototype.getFreeRooms = function (capacity) {
        var free = [];
        for (var i = 0; i < this.rooms.length; ++i) {
            var room = this.rooms[i];
            if (room.capacity === capacity && room.resident === null) {
                free.push(room);
            }
        }
        return free;
    };
    Hotel.prototype.getSortedReservations = function (capacity) {
        var reservations = [];
        for (var i = 0; i < this.reservations.length; ++i) {
            var reservation = this.reservations[i];
            if (reservation.guestCount === capacity) {
                reservations.push(reservation);
            }
        }
        return reservations.sort(function (a, b) {
            return a.checkIn.valueOf() - b.checkIn.valueOf();
        });
    };
    return Hotel;
})();
