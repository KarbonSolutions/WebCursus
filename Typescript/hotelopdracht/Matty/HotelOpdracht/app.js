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
});
var Room = (function () {
    function Room() {
    }
    return Room;
})();
var Reservation = (function () {
    function Reservation() {
    }
    return Reservation;
})();
var Hotel = (function () {
    function Hotel() {
    }
    return Hotel;
})();
//# sourceMappingURL=app.js.map