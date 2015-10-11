class Hotel {
    private rooms: Array<Room>;
    private occupied: number = 0;

    constructor(rooms: number) {
        this.rooms = new Array<Room>(rooms);

        for (var i = 0; i < rooms; ++i) {
            this.rooms[i] = new Room();
        }
    }

    bookRoom(roomNr: number, customerName: string) {
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
    }

    vacateRoom(roomNr: number) {
        var room = this.rooms[roomNr];

        if (room.resident) {
            this.occupied--;
            this.rooms[roomNr].resident = null;
        } else {
            alert('Room not occupied');
        }
    }

    countOccupiedRooms() {
        alert(this.occupied);
    }
}

class Room {
    roomNr: number;
    resident: Resident;
}

class Resident {
    name: string;
}

var hotel = new Hotel(10);
hotel.bookRoom(1, 'Joshua');
hotel.vacateRoom(1);
hotel.bookRoom(2, 'Mustafa');
hotel.countOccupiedRooms();
