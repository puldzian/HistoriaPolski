/* global losuj, Slowo */
'use strict'



// Zmienne historyczne

// Zmienne słownikowe
var imieMWczesne = new Slowo([['Leszko', 'Leszka'], ['Mieszko', 'Mieszka'], ['Przedbor', 'Przedbora']])
var imieKWczesne = new Slowo([['Dobrawa', 'Dobrawę'], ['Lubomira', 'Lubomirę'], ['Wanda', 'Wandę']])

function gen (epoka) { // eslint-disable-line
  'use strict'
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
    return ('Epoka ósma')
  }
}
