/*global $, document, gener*/
var rok = 966,
    rokkonca = new Date().getFullYear(),
    epoka = 0, // 0 - 966-1500, 1 - 1500 - 1900, 2 - 1900 - 2000, 3 - 2000+?
    kierunek = 1, // 1 - do przodu, 2 - do tyłu
    predkosc = 750,
    ileBylo = 0,
    status; // to służy do wypełniania

// Losuje któryś z N elementów
var losujCos = function (n) {
    "use strict";
    return Math.floor(Math.random() * (n));
};

// Podaj zmiene do kontrolki
var podajZmienne = function () {
    "use strict";
    $("#jsPredkosc").html(predkosc);
    $("#jsKierunek").html(kierunek);
    $("#jsEpoka").html(epoka);
    $("#jsSum").html(ileBylo);
    $("#jsEnd").html(rokkonca);
};

// Limiter prędkości
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

var wolniej = function () {
    if (predkosc != 2000) {
        predkosc = predkosc + 250;
    }
    predkosciomierz();
}

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
        // Prymitywizm
        epoka = 0;
        if (kierunek === 1) {
            rok = rok + losujCos(10);
        } else if (kierunek === 2) {
            rok = rok - losujCos(10);
        }                           // TU TRZEBA ZMIENIĆ TE LATA na 40
    } else if (rok >= 1200 && rok < 1400) {
        epoka = 1; // Średniowiecze
        if (kierunek === 1) {
            rok = rok + losujCos(30);
        } else if (kierunek === 2) {
            rok = rok - losujCos(30);
        }
    } else if (rok >= 1400 && rok < 2000) {
        epoka = 2; // Epoka zastępcza
        if (kierunek === 1) {
            rok = rok + losujCos(50);
        } else if (kierunek === 2) {
            rok = rok - losujCos(50);
        }
    } else if (rok >= 2000) {
        // Współczesność
        epoka = 9;
        if (kierunek === 1) {
            rok = rok + losujCos(10);
        } else if (kierunek === 2) {
            rok = rok - losujCos(10);
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

var generator = function () {
    if (epoka === 0) {
        // status = "Generuj prymitywną";
        status = gener.prymitywna();
    } else {
        status = "Epoka inna."
    }
    $("#jsStatus").html(status);
}

// SKRYPTY SYSTEMOWE

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
