'use strict';
var btn = document.getElementById("oblicz");
btn.addEventListener("click", function(e) {
    e.preventDefault();
    obliczWyplate();
});

function obliczWyplate() {
var array = [];

for (var i = 0; i <= 19; i++) {
    
    var stawka = parseInt(document.getElementsByClassName("stawka")[i].value);

    var godziny = parseInt(document.getElementsByClassName("czas")[i].value);

    //        obliczanie wypłaty lub wypłaty z nadgodzinami

    var wyplata = 0;

    if (godziny > 160) {
        
        var podwojnaStawka = 2 * stawka;
        var nadgodziny = godziny - 160;
        var podstawa = stawka * 160;
        var premia = podwojnaStawka * nadgodziny;
        var wyplata = podstawa + premia;
        
    } 
    
    else {
        
        var wyplata = stawka * godziny;
        
    }

    //        oznaczanie pracowników któzy przepracowali mniej niż 100 godzin

    if (godziny < 100) {
        
        document.getElementsByClassName("pracownik")[i].style.background = "red";
        
    }

    //        wstawianie wartości wynagrodzenia do pola span.wyplata
    
    document.getElementsByClassName("wyplata")[i].innerHTML = wyplata;

    //       przeszukiwanie w celu odnalezienia 3 najwyższych wynagrodzeń
    array.push(parseInt(document.getElementsByClassName("wyplata")[i].innerHTML));

}
for (var j = 0; j <= 2; j++) {

    var theBest = Math.max.apply(null, array);
    var theBestIndex = array.indexOf(theBest);

    //    wypisywanie nazwisk pod tekstem "Najlepsi pracownicy"
    
    var theBestEmployee = document.getElementsByClassName("pracownik")[theBestIndex].innerHTML;
    
    document.getElementById("najlepsi-pracownicy").innerHTML += "<br>" + theBestEmployee;

    array[theBestIndex] = 0;
}

}