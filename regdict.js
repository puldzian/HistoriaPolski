/*global losujCos */
var dict = {
    // Mieszko pokonał kogo?
    // START/KONIEC CZYNNOŚCI CZEGO w GDZIE?
    konstrukcja0: ["budowy", "konstrukcji", "rozudowy", "rozbudowy", "remontu", "renowacji", "dewastacji", "wyburzania", "rekonstrukcji"],
    konstrukcja0g: function () {
        var numerek = losujCos(dict.konstrukcja0.length);
        return dict.konstrukcja0[numerek];
    },
    proces0: ["początek", "rozpoczęcie", "koniec", "zakończenie", "ukończenie", "wstrzymanie", "zatrzymanie"],
    budynek0: ["zamku", "wieży strażniczej", "fortecy", "palisady", "murów obronnych", "murów miejskich", "hal kupieckich", "fosy", "barbakanu"],
    budsakr0: ["katedry", "kościoła", "kapliczki", "kościółka", "bazyliki", "opactwa", "klasztoru", "kościoła filialnego", "kościoła"],
    swiety0: ["Bożego Ciała", "Jana Chrzciciela", "Matki Boskiej", "Narodzenia Najświętszej Maryi Panny", "świętej Jadwigi"],
    miasto0: ["Bartnikach", "Białym Kościele", "Brzegu", "Chalnie", "Dobryszycach", "Dziekanowicach", "Głogowie", "Gogołowie", "Gościszowie", "Henrykowie", "Inowrocławiu", "Januszowicach", "Kałdusie", "Kościelcu", "Krakowie", "Kruszwicy", "Krzyworzece", "Legnicy", "Lubiążu", "Miechowie", "Pastuchowie", "Płóczkach Górnych", "Rudzie", "Sędziszowej", "Sokółce", "Stolcu", "Strzelnie", "Szprotawie", "Środzie Śląskiej", "Strońsku", "Sulejowie", "Tyńcu", "Tumie", "Wadowicach", "Warszawie", "Włocławku", "Wysocicach", "Złotoryi", "Żarnowie"]
};
