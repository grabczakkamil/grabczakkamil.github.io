'use strict';
$(function () {

    $("button").click(function () {

        $('body').append('<div id="dane-programisty"></div>');

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {


            var str = "imie: " + data.imie + "; " + "nazwisko: " + data.nazwisko + "; " + "zawód: " + data.zawod + "; " + "firma: " + data.firma + "; ";
            $("#dane-programisty").html(str);

        });
    });

});