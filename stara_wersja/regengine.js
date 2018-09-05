/*global $, document, gener, mapa*/
var rok = 966,
    // rokkonca = new Date().getFullYear(),
    rokkonca = 2017, // TESTER
    epoka = 0,
    kierunek = 1, // 1 - do przodu, 2 - do tyłu
    predkosc = 750,
    ileBylo = 0,
    status; // to służy do wypełniania

// Losuje któryś z N elementów
var losuj = function (n) {
    "use strict";
    return Math.floor(Math.random() * (n));
};

var mapa = [
    [[0],[1],[1],[0]],
    [[0],[1],[1],[0]],
    [[0],[1],[1],[0]]
]

var mapuj = function (kierunek) {
    var x = losuj(4);
    var y = losuj(3);
    /*
    var iluSasiadow;
    if (mapa[y-1][x] === 1 ) {
        iluSasiadow = iluSasiadow + 1;
    }
    if (mapa[y+1][x] === 1) {
        iluSasiadow = iluSasiadow + 1;
    }
    if (mapa[y][x-1] === 1) {
        iluSasiadow = iluSasiadow + 1;
    }
    if (mapa[y][x+1] === 1) {
        iluSasiadow = iluSasiadow + 1;
    }

    if (iluSasiadow < 2 && kierunek === 0) {
    mapa[y][x] = kierunek;
    }
    */
    mapa[y][x] = kierunek;
};

// no i tu trzeba dorobić, żeby to pojawiały i znikały obrazki,
// a nie jakaś matryca czy coś

// PRZYDAŁOBY SIĘ dbać o ciągłość terytorium - ale to ewntualnie na koniec

// Ograniczenie prędkości
var predkosciomierz = function () {
    if (predkosc === 250) {
        document.getElementById("jsSzybciej").style.color="red";
    } else if (predkosc === 2000) {
        document.getElementById("jsWolniej").style.color="red";
    } else {
        document.getElementById("jsSzybciej").style.color="white";
        document.getElementById("jsWolniej").style.color="white";
    }
}

// Przycisk WOLNIEJ
var wolniej = function () {
    if (predkosc != 2500) {
        predkosc = predkosc + 250;
    }
    predkosciomierz();
}

// Przycisk SZYBCIEJ
var szybciej = function () {
    if (predkosc != 250) {
        predkosc = predkosc - 250;
    }
    predkosciomierz();
}

// Kontrola upływu lat
var kalendarz = function () {
    "use strict";
    // Ustanów epokę
    if (rok < 1200) {
        epoka = 0; // Prymitywizm
        if (kierunek === 1) {
            rok = rok + losuj(40);
        } else if (kierunek === 2) {
            rok = rok - losuj(40);
        }
    } else if (rok >= 1200 && rok < 1400) {
        epoka = 1; // Średniowiecze
        if (kierunek === 1) {
            rok = rok + losuj(40);
        } else if (kierunek === 2) {
            rok = rok - losuj(40);
        }
    } else if (rok >= 1400 && rok < 1600) {
        epoka = 2; // Renesans
        if (kierunek === 1) {
            rok = rok + losuj(50);
        } else if (kierunek === 2) {
            rok = rok - losuj(50);
        }
    } else if (rok >= 1600 && rok < 1800) {
        epoka = 3; // Barok
        if (kierunek === 1) {
            rok = rok + losuj(50);
        } else if (kierunek === 2) {
            rok = rok - losuj(50);
        }
    } else if (rok >= 1800 && rok < 1900) {
        epoka = 4; // Rozbiory
        if (kierunek === 1) {
            rok = rok + losuj(50);
        } else if (kierunek === 2) {
            rok = rok - losuj(50);
        }
    } else if (rok >= 1900 && rok < 1990) {
        epoka = 5; // Dwudzisty
        if (kierunek === 1) {
            rok = rok + losuj(50);
        } else if (kierunek === 2) {
            rok = rok - losuj(50);
        }
    } else if (rok >= 1990) {
        epoka = 6; // Współczesność
        if (kierunek === 1) {
            rok = rok + losuj(10);
        } else if (kierunek === 2) {
            rok = rok - losuj(10);
        }
    }
    // Na granicy przedziału odbij kierunek
    if (rok > rokkonca) {
        rok = rokkonca;
        kierunek = 2;
        ileBylo = 0;
    } else if (rok < 966) {
        rok = 966;
        kierunek = 1;
        ileBylo = 0;
    }
    $("#jsRok").html(rok);
    // Koniec kalendarza
};

// Maszyna wyrzuca status adekwatny do epoki
var generator = function () {
    if (epoka === 0) {
        // status = "Generuj prymitywną";
        status = gener.prymitywna();
    } else if (epoka === 1) {
        status = gener.sredniowieczna();
    } else if (epoka === 2) {
        status = gener.renesans();
    } else if (epoka === 3) {
        status = gener.barok();
    } else if (epoka === 4) {
        status = gener.rozbiory();
    } else if (epoka === 5) {
        status = gener.dwudziesty();
    } else if (epoka === 6) {
        status = gener.dzisiaj();
    } else {
        status = "Znajdujemy się poza czasem!"
    }
    $("#jsStatus").html(status);
}

// SKRYPTY SYSTEMOWE

// Podaj zmiene do kontrolki
var podajZmienne = function () {
    "use strict";
    $("#jsPredkosc").html(predkosc);
    $("#jsKierunek").html(kierunek);
    $("#jsEpoka").html(epoka);
    $("#jsSum").html(ileBylo);
    $("#jsEnd").html(rokkonca);
    // Podgląd terytorium
    $("#m00").html(mapa[0][0]);
    $("#m01").html(mapa[0][1]);
    $("#m02").html(mapa[0][2]);
    $("#m03").html(mapa[0][3]);
    $("#m10").html(mapa[1][0]);
    $("#m11").html(mapa[1][1]);
    $("#m12").html(mapa[1][2]);
    $("#m13").html(mapa[1][3]);
    $("#m20").html(mapa[2][0]);
    $("#m21").html(mapa[2][1]);
    $("#m22").html(mapa[2][2]);
    $("#m23").html(mapa[2][3]);
};

// Agregator treści i wypełniacz
var agregator = function () {
    "use strict";
    kalendarz();
    generator();
    podajZmienne();
    ileBylo = ileBylo + 1;
    setTimeout(agregator, predkosc);
};

// Kliknij i uruchom
var rozrusznik = function () {
    "use strict";
    agregator();
};

// Gówno, nic tu nie ma
$(document).ready(function () {
    "use strict";
});
