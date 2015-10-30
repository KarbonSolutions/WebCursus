$(function () {
    $('#reserve').click(function () {
        var name = $('#name').val();
        var count = parseInt($('#count').val());
        var date = new Date($('#date').val());
        var nights = parseInt($('#nights').val());
        alert(name + count + date + nights);
        //hotel.makeReservation(name, count, date, nights);
    });
});
//function addReservationRow(reservation: Reservation) {
//    $('#reservations').append($('<tr>')
//        .append($('<td>').text(reservation.guestCount))
//        .append($('<td>').text(reservation.name))
//        .append($('<td>').text(reservation.checkIn.toDateString()))
//        .append($('<td>').text(reservation.checkOut.toDateString()))
//    );
//}
//    class Room {
//        index: number;
//            capacity: number;
//            resident: string;
//            price: number;
//        constructor(index: number, capacity: number) {
//            this.index = index;
//            this.capacity = capacity;
//            this.resident = null;
//            this.price = capacity * 15;
//        }
//    }
//    class Reservation {
//        room: number;
//            guestCount: number;
//            name: string;
//            checkIn: Date;
//            checkOut: Date;
//        constructor(name: string, guestCount: number, checkIn: Date, nights: number) {
//            this.room = null;
//            this.guestCount = guestCount;
//            this.name = name;
//            this.checkIn = checkIn;
//            this.checkOut = new Date();
//            this.checkOut.setDate(checkIn.getDate() + nights);
//        }
//    }
//    class Hotel {
//        rooms: Array<Room> = [];
//            reservations: Array<Reservation> = [];
//        constructor() {
//            this.rooms.push(new Room(0, 1));
//            this.rooms.push(new Room(1, 1));
//            this.rooms.push(new Room(2, 2));
//            this.rooms.push(new Room(3, 4));
//            this.rooms.push(new Room(4, 4));
//        }
//        makeReservation(name: string, guestCount: number, date: Date, nights: number) {
//            var newReservation = new Reservation(name, guestCount, date, nights);
//            var reservations = this.getSortedReservations(guestCount);
//            var conflicts = 0;
//            for (var i = 0; i < reservations.length; ++i) {
//                var reservation = reservations[i];
//                if (reservation.checkIn <= newReservation.checkIn) {
//                    if (reservation.checkOut > newReservation.checkOut) {
//                        conflicts++;
//                        break;
//                    }
//                } else {
//                    if (reservation.checkIn < newReservation.checkOut) {
//                        conflicts++;
//                        break;
//                    }
//                }
//            }
//            if (conflicts < this.getFreeRooms(guestCount).length) {
//                this.reservations.push(newReservation);
//                addReservationRow(newReservation);
//                this.updateRooms();
//            } else {
//                alert('no rooms available');
//            }
//        }
//            updateRooms() {
//                var roomSizes = [1, 2, 4];
//                for (var i = 0; i < this.reservations.length; ++i) {
//                    this.reservations[i].room = null;
//                }
//                for (var s = 0; s < roomSizes.length; ++s) {
//                    var size = roomSizes[s];
//                    var reservations = this.getSortedReservations(size);
//                    var rooms = this.getRooms(size);
//                    var length = Math.min(rooms.length, reservations.length);
//                    for (var i = 0; i < length; ++i) {
//                        var room = rooms[i];
//                        room.resident = reservations[i].name;
//                        reservations[i].room = room.index;
//                        $('#room' + room.index).children(':last').text(room.resident);
//                    }
//                }
//            }
//            getRooms(capacity: number): Array<Room> {
//                var rooms: Array<Room> = [];
//            for (var i = 0; i < this.rooms.length; ++i) {
//                if (this.rooms[i].capacity === capacity) {
//                    rooms.push(this.rooms[i]);
//                }
//            }
//            return rooms;
//        }
//        getFreeRooms(capacity: number): Array<Room> {
//            var free: Array<Room> = [];
//            for (var i = 0; i < this.rooms.length; ++i) {
//                var room = this.rooms[i];
//                if (room.capacity === capacity && room.resident === null) {
//                    free.push(room);
//                }
//            }
//            return free;
//        }
//        getSortedReservations(capacity: number): Array<Reservation> {
//            var reservations: Array<Reservation> = [];
//            for (var i = 0; i < this.reservations.length; ++i) {
//                var reservation = this.reservations[i];
//                if (reservation.guestCount === capacity) {
//                    reservations.push(reservation);
//                }
//            }
//            return reservations.sort((a, b) => {
//                return a.checkIn.valueOf() - b.checkIn.valueOf();
//            });
//        }
//    } 
