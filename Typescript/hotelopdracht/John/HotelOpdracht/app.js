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
    var myHotel = new Hotel('The Small Garden Beach Hotel', 10);
    //myHotel.Kamers[0].Gast = "Mr. M. Jackson"
    //myHotel.Kamers[3].Gast = "Mr. J. Onassis"
    //myHotel.Kamers[5].Gast = "Mr. Elvis Presley after passed away"
    var body = $("tbody.KamerOverzicht");
    for (var i = 0; i < myHotel.Kamers.length; i++) {
        var kamer = myHotel.Kamers[i];
        var tr = $('<tr/>').attr('id', kamer.Number).append($('<td/>').text(i)).append($('<td/>').text(kamer.Number).addClass('kamernummer')).append($('<td/>').text(kamer.Capaciteit)).append($('<td/>').text(kamer.Prijs)).append($('<td/>').text(kamer.Gast).addClass('Gast')).appendTo(body);
        var selection = $("select.RoomList");
        var option = $("<option/>").text(kamer.Number).appendTo(selection);
    }
    $("#reserveer").click(function () {
        var KamerNummer = $("select.RoomList").val();
        var IncheckDatum = $("input#IncheckDatum").val();
        var UitcheckDatum = $("input#UitcheckDatum").val();
        var Gast = $("input#Gast").val();
        myHotel.Reserveer(parseInt(KamerNummer), IncheckDatum, UitcheckDatum, Gast);
    });
});
/*
---------------------------------------------------------
    | Kamer | Capaciteit | Prijs | Naam gast (indien bezet) |
---------------------------------------------------------
*/
var Room = (function () {
    function Room(KamerNummer, Prijs, Gast) {
        if (Prijs === void 0) { Prijs = 60; }
        if (Gast === void 0) { Gast = "leeg"; }
        this.Number = KamerNummer;
        this.Prijs = Prijs;
    }
    return Room;
})();
/*
-------------------------------------------------------------------
    | Kamer | Capaciteit | Naam gast | Incheck datum | Uitcheck datum |
-------------------------------------------------------------------
*/
var Reservation = (function () {
    function Reservation(KamerNummer, IncheckDatum, UitcheckDatum, Gast) {
        if (Gast === void 0) { Gast = "leeg"; }
        this.Kamer = KamerNummer;
        this.Gast = Gast;
        this.IncheckDatum = new Date(IncheckDatum);
        this.UitcheckDatum = new Date(UitcheckDatum);
    }
    return Reservation;
})();
var Hotel = (function () {
    function Hotel(Naam, AantalKamers) {
        this.Naam = Naam;
        this.Kamers = [];
        this.Reserveringen = [];
        for (var i = 0; i < AantalKamers; i++) {
            this.Kamers.push(new Room(101 + i));
        }
    }
    Hotel.prototype.Reserveer = function (KamerNummer, IncheckDatum, UitcheckDatum, Gast) {
        for (var i = 0; i < this.Kamers.length; i++) {
            if (this.Kamers[i].Number == KamerNummer) {
                this.Kamers[i].Gast = Gast;
                break;
            }
        }
        //Find existing reservation
        // Add reservation
        this.Reserveringen.push(new Reservation(KamerNummer, IncheckDatum, UitcheckDatum, Gast));
        this.Update();
    };
    Hotel.prototype.Update = function () {
        for (var i = 0; i < this.Reserveringen.length; i++) {
            var res = this.Reserveringen[i];
            $('#' + this.Reserveringen[i].Kamer + ' .Gast').text(this.Reserveringen[i].Gast);
        }
    };
    return Hotel;
})();
//# sourceMappingURL=app.js.map