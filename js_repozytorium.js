/* global losuj, Slowo */
'use strict'

// Zmienne historyczne

// Zmienne słownikowe
var afera = new Slowo([['afera'], ['afera korupcyjna'], ['skandal']])
var imieMWczesne = new Slowo([['Leszko', 'Leszka'], ['Mieszko', 'Mieszka'], ['Przedbor', 'Przedbora']])
var imieKWczesne = new Slowo([['Dobrawa', 'Dobrawę'], ['Lubomira', 'Lubomirę'], ['Wanda', 'Wandę']])
var imieK8 = new Slowo([['Alicja', 'Alicji'], ['Anna', 'Anny'], ['Beata', 'Beaty'], ['Katarzyna', 'Katarzyny'], ['Magdalena', 'Magdaleny']])

imie6k: function () {
    var slowo = ["Alicja", "Anna", "Magda", "Zofia", "Lidia", "Aleksandra", "Beata", "Karolina", "Justyna", "Małgorzata", "Joanna", "Katarzyna"],
        numer = losuj(slowo.length);
    return slowo[numer];
},

var krajOkupowany = new Slowo([['Bośnia', 'Bośni'], ['Etiopia', 'Etiopii'], ['Irak', 'Iraku'], ['Kampucza', 'Kampuczy'], ['Kosowo', 'Kosowie'], ['Serbia', 'Serbii'], ['Sudan', 'Sudanie']])
var misja = new Slowo([['interwencja humanitarna', 'interwencji humanitarnej'], ['interwencja pokojowa', 'interwencji pokojowej'], ['misja', 'misji'], ['misja pokojowa', 'misji pokojowej'], ['misja stabilizacyjna', 'misji stabilizacyjnej'], ['operacja pokojowa', 'operacji pokojowej'], ['operacja wsparcia pokoju', 'operacji wsparcia pokoju']])
var nazwiskoK8 = new Slowo([['Balcerowicz', 'Balcerowicz'], ['Kaczyńska', 'Kaczyńskiej'], ['Kwaśniewska', 'Kwaśniewskiej'], ['Lewandowska', 'Lewandowskiej']])
var organizacjaMnarodowa = new Slowo([['NATO', 'NATO'], ['Unia Europejska', 'Unii Europejskiej'], ['Wspólnota Niepodległych Państw', 'Wspólnoty Niepodległych Państw']])
var taknie = new Slowo([['tak'], ['nie']])
var wielkieLitery = new Slowo([['A'], ['B'], ['C'], ['D'], ['E'], ['F'], ['G'], ['H'], ['I'], ['J'], ['K'], ['M'], ['N'], ['O'], ['P'], ['R'], ['S'], ['T'], ['U'], ['W'], ['Z'], ['Ź'], ['Ż']])
var zaklad = new Slowo([['BGŻ', 'BGŻ'], ['zakłady Fameg', 'zakładów Fameg'], ['PZU', 'PZU'], ['WBK', 'WBK']])

function gen (epoka) { // eslint-disable-line
  'use strict'
  var wariant
  var zdanie
  if (epoka === 0) { // Chrzest
    return ('Chrzest')
  } else if (epoka === 1) { // Wczesne średniowiecze
    return ('Epoka pierwsza')
  } else if (epoka === 2) { // Późne średniowiecze
    return ('Epoka druga')
  } else if (epoka === 3) { // renesans
    return ('Epoka trzecia')
  } else if (epoka === 4) { // Barok
    return ('Epoka czwarta')
  } else if (epoka === 5) { // Zabory
    return ('Epoka piąta')
  } else if (epoka === 6) { // Wojnie
    return ('Epoka szósta')
  } else if (epoka === 7) { // Komunizm
    return ('Epoka siódma')
  } else if (epoka === 8) { // III RP
    wariant = losuj(4) + 1
    switch (wariant) {
      case 1:
        zdanie = 'Polscy żołnierze biorą udział w ' + misja.daj(1) + ' w ' + krajOkupowany.wycnij(1)
        break
      case 2:
        zdanie = 'Referendum w sprawie przystąpienia do ' + organizacjaMnarodowa.daj(1) + '. Wygrywa opcja "' + taknie.daj(0) + '"'
        break
      case 3:
        zdanie = 'Polska przystępuje do ' + organizacjaMnarodowa.daj(0)
        break
      case 4:
        zdanie = afera.daj(0) + ' w czasie prywatyzacji ' + zaklad.daj(1)
    }
    return (zdanie)
  }
}
