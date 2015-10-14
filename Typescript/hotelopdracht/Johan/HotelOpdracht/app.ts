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
    var numRooms = 5;
    var h = new Hotel(numRooms );
    
    h.arrRoom[0].Capaciteit = 1;
    h.arrRoom[1].Capaciteit = 1;
    h.arrRoom[2].Capaciteit = 2;
    h.arrRoom[3].Capaciteit = 4;
    h.arrRoom[4].Capaciteit = 4;

    for (var i = 0; i < numRooms; i++) {
        h.arrRoom[i].Kamer = i;
        $('#roombody').append($("<tr>")
            .append($("<td>").text(i+1))
            .append($("<td>").text (h.arrRoom[i].Capaciteit ))
            .append($("<td>").text(h.arrRoom[i].Capaciteit*50))
            .append($("<td>")));
    }


    //for (var i = 0; i < 2; i++) {
    //    h.arrReservation[i].Kamer = i;
    //    $('#reservationbody').append($("<tr>")
    //        .append($("<td>").text(i + 1))
    //        .append($("<td>").text(h.arrReservation[i].Capaciteit))
    //        .append($("<td>"))
    //        .append($("<td>"))
    //        .append($("<td>")));
    //}

    $("#Reservering").click(function () {
        var inName: string = $("#Name").val();
        var inPersons: number = $("#Persons").val();
        alert("Reservering voor: " +  inName + ' ' + inPersons);

        var kmr = 1;
        Reserveer(kmr);

    });


});

class Room {
    Kamer: number;
    Capaciteit: number;
    Prijs: number;
    Naam: string;
    constructor(kmr: number, cap: number, pr: number, nm: string) { };
}

class Reservation {
    Kamer: number;
    Capaciteit: number;
    Naam: string;
    Incheck: Date;
    Uitcheck: Date;
    constructor(kmr: number, cap: number, nm: string, inchk?: Date, uitchk?: Date) { };
}

class Hotel {
    arrRoom: Array<Room> = [];
    arrReservation: Array<Reservation> = [];
    constructor(rooms: number)
    {
        for (var i = 0; i < rooms; i++) {
            this.arrRoom.push(new Room(1, 1, 100, ''))
        };
        for (var i = 0; i < rooms; i++) {
            this.arrReservation.push(new Reservation(1, 1, ''));
        };
    };
}

function RoomTable()
{

};

function ReservationTable()
{

};

function Reserveer(kmr: number ) {
        $('#reservationbody').append($("<tr>")
            .append($("<td>").text(kmr))
            .append($("<td>"))
            .append($("<td>"))
            .append($("<td>"))
            .append($("<td>")));
    }

}


