'use strict';

//function obliczWyplate() {
    
     
    for (var i=0; i<=19; i++) {
        var stawka = document.getElementsByClassName("stawka")[i].value;
        
        var godziny = document.getElementsByClassName("czas")[i].value;
        
//        obliczanie wypłaty lub wypłaty z nadgodzinami
        
        var wyplata = 0;
        
        if (godziny>160) {
            
        var podwojnaStawka = 2 * stawka;
        var nadgodziny = godziny - 160;
        var podstawa = stawka * godziny;
        var premia = podwojnaStawka * nadgodziny;
        var wyplata = podstawa + premia;
        }
        
        else {
        
        var wyplata = stawka * godziny;
        }
        
//        oznaczanie pracowników któzy przepracowali mniej niż 100 godzin
        
        if (godziny < 100) {
            document.getElementsByClassName("pracownik")[i].style.background="red";
        }
        
//        wstawianie wartości wynagrodzenia do pola span.wyplata
        document.getElementsByClassName("wyplata")[i].innerHTML=wyplata;


    }


        
//    }
