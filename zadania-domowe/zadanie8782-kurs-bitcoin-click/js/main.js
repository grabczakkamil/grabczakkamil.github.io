'use strict';
$(function () {

    $("#get").click(function () {

        $.getJSON('https://blockchain.info/pl/ticker/', function (data) {
            if ($("#kupno").html() != 0) {

                var oldBuy = $("#kupno").html();
                var oldSell = $("#sprzedaz").html();

                var buy = data.PLN.buy;

                var sell = data.PLN.sell;


                $("#kupno").html(buy);
                $("#sprzedaz").html(sell);

                if (oldBuy < buy) {
                    $("#strzalka-kupno").html('<i class="fa fa-arrow-up"></i>');
                    $("#strzalka-kupno").css({
                        color: 'green'
                    });

                } else if (oldBuy = buy) {
                    $("#strzalka-kupno").html('<i class="fa fa-minus"></i>');
                    $("#strzalka-kupno").css({
                        color: 'blue'
                    });
                } else {
                    $("#strzalka-kupno").html('<i class="fa fa-arrow-down"></i>');
                    $("#strzalka-kupno").css({
                        color: 'red'
                    });
                }

                if (oldSell < sell) {
                    $("#strzalka-sprzedaz").html('<i class="fa fa-arrow-up"></i>');
                    $("#strzalka-sprzedaz").css({
                        color: 'green'
                    });
                } else if (oldSell = sell) {
                    $("#strzalka-sprzedaz").html('<i class="fa fa-minus"></i>');
                    $("#strzalka-sprzedaz").css({
                        color: 'blue'
                    });
                } else {
                    $("#strzalka-sprzedaz").html('<i class="fa fa-arrow-down"></i>');
                    $("#strzalka-sprzedaz").css({
                        color: 'red'
                    });
                }
            } else {
                var buy = data.PLN.buy;
                var sell = data.PLN.sell;

                $("#kupno").html(buy);
                $("#sprzedaz").html(sell);
            }
        });
    });
});