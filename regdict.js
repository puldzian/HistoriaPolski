/*global, romanize*/

// Losuje któryś z N elementów
var losujTu = function (n) {
    "use strict";
    return Math.floor(Math.random() * (n));
};

var dict = {
    // Mieszko pokonał kogo?
    // START/KONIEC CZYNNOŚCI CZEGO w GDZIE?
    konstrukcja0: ["budowy", "konstrukcji", "rozudowy", "rozbudowy", "remontu", "renowacji", "dewastacji", "wyburzania", "rekonstrukcji"],
    konstrukcja0g: function () {
        var numerek = losujTu(dict.konstrukcja0.length);
        return dict.konstrukcja0[numerek];
    },
    proces0: ["początek", "rozpoczęcie", "koniec", "zakończenie", "ukończenie", "wstrzymanie", "zatrzymanie"],
    proces0g: function () {
        var numerek = losujTu(dict.proces0.length);
        return dict.proces0[numerek];
    },
    budynek0: ["zamku", "wieży strażniczej", "fortecy", "palisady", "murów obronnych", "murów miejskich", "hal kupieckich", "fosy", "barbakanu"],
    budynek0g: function () {
        var numerek = losujTu(dict.budynek0.length);
        return dict.budynek0[numerek];
    },
    miasto0: ["Bartnikach", "Białym Kościele", "Brzegu", "Chalnie", "Dobryszycach", "Dziekanowicach", "Głogowie", "Gogołowie", "Gościszowie", "Henrykowie", "Inowrocławiu", "Januszowicach", "Kałdusie", "Kościelcu", "Krakowie", "Kruszwicy", "Krzyworzece", "Legnicy", "Lubiążu", "Miechowie", "Pastuchowie", "Płóczkach Górnych", "Rudzie", "Sędziszowej", "Sokółce", "Stolcu", "Strzelnie", "Szprotawie", "Środzie Śląskiej", "Strońsku", "Sulejowie", "Tyńcu", "Tumie", "Wadowicach", "Warszawie", "Włocławku", "Wysocicach", "Złotoryi", "Żarnowie"],
    miasto0g: function () {
        var numerek = losujTu(dict.miasto0.length);
        return dict.miasto0[numerek];
    },
    papa0: ["Agapit", "Aleksander", "Anastazy", "Benedykt", "Bonifacy", "Celestyn", "Damazy", "Eugeniusz", "Feliks", "Gelazjusz", "Grzegorz", "Hadrian", "Honoriusz", "Innocenty", "Jan Paweł", "Jan", "Juliusz", "Kalikst", "Klemens", "Leon", "Lucjusz", "Marcelin", "Marcin", "Maryn", "Mikołaj", "Paweł", "Pelagiusz", "Pius", "Sergiusz", "Stefan", "Sykstus", "Sylwester", "Teodor", "Urban", "Wiktor"],
    papa0g: function () {
        var numerek = losujTu(dict.papa0.length);
        var kolejka = losujTu(5) + 1;
        return dict.papa0[numerek] + " " + romanize(kolejka);
    },
    imie0: ["Andrzej", "Cyryl", "Czesław", "Macław", "Masław", "Mieszko", "Puldziok", "Ścibor", "Wacław", "Wojmir", "Wojciech", "Zawisza"],
    imie0g: function () {
        var numerek = losujTu(dict.imie0.length);
        return dict.imie0[numerek];
    },
    nazwisko0: ["Anonim", "Czarny", "Jasienica", "Piastowic", "zwany Wilkiem"],
    nazwisko0g: function () {
        var numerek = losujTu(dict.nazwisko0.length);
        return dict.nazwisko0[numerek];
    },
    epitet0: ["kapitalny", "legendarny", "słynny", "świetny", "renomowany", "wybitny", "uznany", "znany"],
    epitet0g: function () {
        var numerek = losujTu(dict.epitet0.length);
        return dict.epitet0[numerek];
    },
    zawod0: ["bednarz", "ceglarz", "druciarz", "folusznik", "garncarz", "harcownik", "karpiniarz", "kołodziej", "klucznik", "kowal", "krzykacz miejski", "podczaszy", "rycerz", "smolarz", "tarczownik", "wojewoda", "wojownik", "zdun", "złotnik"],
    zawod0g: function () {
        var numerek = losujTu(dict.zawod0.length);
        return dict.zawod0[numerek];
    },
    budsakr0: ["katedry", "kościoła", "kapliczki", "kościółka", "bazyliki", "opactwa", "klasztoru", "kościoła filialnego", "kościoła"],
    budsakr0g: function () {
        var numerek = losujTu(dict.budsakr0.length);
        return dict.budsakr0[numerek];
    },
    swiety0: ["Bożego Ciała", "Jana Chrzciciela", "Matki Boskiej", "Narodzenia Najświętszej Maryi Panny", "świętej Jadwigi"],
    swiety0g: function () {
        var numerek = losujTu(dict.swiety0.length);
        return dict.swiety0[numerek];
    },
    urodtrup: ["urodził się", "zmarł", "umarł", "narodził się"],
    urodtrupg: function () {
        var numerek = losujTu(dict.urodtrup.length);
        return dict.urodtrup[numerek];
    }
};
