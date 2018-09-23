/* global losuj, Slowo */
'use strict'

// Zmienne historyczne

// Zmienne słownikowe
var imieMWczesne = new Slowo([['Leszko', 'Leszka'], ['Mieszko', 'Mieszka'], ['Przedbor', 'Przedbora']])
var imieKWczesne = new Slowo([['Dobrawa', 'Dobrawę'], ['Lubomira', 'Lubomirę'], ['Wanda', 'Wandę']])
var krajOkupowany = new Slowo([['Bośnia', 'Bośni'], ['Etiopia', 'Etiopii'], ['Irak', 'Iraku'], ['Kampucza', 'Kampuczy'], ['Kosowo', 'Kosowie'], ['Serbia', 'Serbii'], ['Sudan', 'Sudanie']])
var organizacjaMnarodowa = new Slowo([['NATO', 'NATO'], ['Unia Europejska', 'Unii Europejskiej'], ['Wspólnota Niepodległych Państw', 'Wspólnoty Niepodległych Państw']])
var taknie = new Slowo([['tak'], ['nie']])

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
    wariant = losuj(2)
    switch (wariant) {
      case 0:
        zdanie = 'Polscy żołnierze biorą udział w misji w ' + krajOkupowany.wytnij(1)
        break
      case 1:
        zdanie = 'Referendum w sprawie przystąpienia do ' + organizacjaMnarodowa.wytnij(1) + '. Wygrywa opcja "' + taknie.daj(0) + '"'
        break
      default:
        zdanie = 'Coś nie tak'
    }
    return (zdanie)
  }
}
