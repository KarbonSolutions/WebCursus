var Hotel = (function () {
    function Hotel(rooms) {
        this.occupied = 0;
        this.rooms = new Array(rooms);
        for (var i = 0; i < rooms; ++i) {
            this.rooms[i] = new Room();
        }
    }
    Hotel.prototype.bookRoom = function (roomNr, customerName) {
        var room = this.rooms[roomNr];
        if (room.resident == null) {
            this.occupied++;
            room.resident = {
                name: customerName
            };
        }
        else {
            alert('Room occupied');
        }
    };
    Hotel.prototype.vacateRoom = function (roomNr) {
        var room = this.rooms[roomNr];
        if (room.resident) {
            this.occupied--;
            this.rooms[roomNr].resident = null;
        }
        else {
            alert('Room not occupied');
        }
    };
    Hotel.prototype.countOccupiedRooms = function () {
        alert(this.occupied);
    };
    return Hotel;
})();
var Room = (function () {
    function Room() {
    }
    return Room;
})();
var Resident = (function () {
    function Resident() {
    }
    return Resident;
})();
var hotel = new Hotel(10);
hotel.bookRoom(1, 'Joshua');
hotel.vacateRoom(1);
hotel.bookRoom(2, 'Mustafa');
hotel.countOccupiedRooms();
//# sourceMappingURL=app.js.map