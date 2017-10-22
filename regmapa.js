/*global $, losuj*/

/*
1. jeśli terytorium ma 0, to znika, jak ma 1 to się pojawia
2. terytorium jest podatne na zmiany, jeśli ma tylko 2 sąsiadów
    (jak ma 3 albo więcej, to się nie zmienia)
ERGO Potrzeba funkcji do sprawdzania sąsiadów danego terytorium?
INACZEJ: funkcja do wybierania terytoriów granicznych
*/

var mapa = [
    [[0],[1],[0],[1]],
    [[0],[1],[0],[1]],
    [[0],[1],[0],[1]]
]

var mapuj = function (kierunek) {
    var x = losuj(4);
    var y = losuj(3);
    mapa[y][x] = kierunek;
};

// no i tu trzeba dorobić, żeby to pojawiały i znikały obrazki,
// a nie jakaś matryca czy coś

// PRZYDAŁOBY SIĘ dbać o ciągłość terytorium - ale to ewntualnie na koniec

