/* global */

// Losuje któryś z N elementów
var losuj = function (n) {
  return Math.floor(Math.random() * (n))
}

// Prototyp słowa, które pozwala wyciągać wariant metodą .get()
// Miałem tu ciekawe perypetie, bo nie da się elementów arraya wprost wepchnąć do konstruktora
// Trzeba pchnąć jeden array, dlatego niżej w get musi wejść najpierw w array[0]
// A niżej w słowniku trzeba trzepać [[...]]
// Problemy nieistotne (już), ważne że da się wyciągać deklinację
function Slowo (materia) {
  this.warianty = Array(materia)
  this.daj = function (deklinacja) {
    var liczba = this.warianty[0].length
    var wylosowane = losuj(liczba)
    var slowo = this.warianty[0][wylosowane][deklinacja]
    return slowo
  }
}

// Właściwy słownik
var imieWczesne = new Slowo([['Leszko', 'Leszka'], ['Mieszko', 'Mieszka'], ['Przedbor', 'Przedbora']])
var plemieObce = new Slowo([['Bułgarzy', 'Bułgarów'], ['Czesi', 'Czechów'], ['Rusini', 'Rusinów']])
var plemieWlasne = new Slowo([['Lędzianie', 'Lędzian'], ['Polanie', 'Polan'], ['Wiślanie', 'Wiślan']])

// A tutaj wielki generator
var generator = function () {
  
}
