$('#reserve').click(function () {
    var name = $('#name').val();
    var count = parseInt($('#count').val());
    var date = new Date($('#date').val());
    var nights = parseInt($('#nights').val());
    //hotel.makeReservation(name, count, date, nights);
    alert(nights);
});
//# sourceMappingURL=Hotel.js.map