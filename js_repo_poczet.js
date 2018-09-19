/* global dajEpoke, losuj, Slowo */

// Do arraya trafiają króle
var poczet = []

// NA potrzeby robienia poczetu
var rokIndeksu = 960

// Na koniec można to wjebać po prostu do js_repozytorium
var imieMWczesne = new Slowo([['Leszko', 'Leszka'], ['Mieszko', 'Mieszka'], ['Przedbor', 'Przedbora']])

// Obiekt pt król
function dodajKrola (epoka, obecnyRok) {
  var tenKrol = []
  // Te rzeczy niżej będą generowane
  var zgon = obecnyRok + losuj(50) // Długośćżycia zależna od epoki
  var imie = 'Imię'
  var numer = 'N'
  var przydomek = 'Przydomek'
  tenKrol.push(zgon, imie, numer, przydomek)
  return tenKrol
}

function zrobPoczet () {
  

}
