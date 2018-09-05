/* global $ */

$(document).ready(function () {
  'use strict'
  var danyRok = 960
  var daneZdanie = 'zdanie testowe'
  var koniec = 2017
  var poleTekstowe = document.getElementById('historia')

  // Losuje któryś z N elementów
  var losuj = function (n) {
    return Math.floor(Math.random() * (n))
  }

  var wstawZdanie = function () {
    var status = danyRok + ' – ' + daneZdanie + '. '
    poleTekstowe.append(status)
  }

  var dodajRok = function () {
    if (danyRok === 960) { // Chrzest Polski
      danyRok = danyRok + losuj(10)
    } else if (danyRok < 1200) { // Wczesne średniowiecze
      danyRok = danyRok + losuj(40) + 1
    } else if (danyRok >= 1200 && danyRok < 1400) { // Późne średniowiecze
      danyRok = danyRok + losuj(30) + 1
    } else if (danyRok >= 1400 && danyRok < 1600) { // Renesans
      danyRok = danyRok + losuj(25) + 1
    } else if (danyRok >= 1600 && danyRok < 1800) { // Barok
      danyRok = danyRok + losuj(20) + 1
    } else if (danyRok >= 1800 && danyRok < 1914) { // Zabory
      danyRok = danyRok + losuj(15) + 1
    } else if (danyRok >= 1914 && danyRok < 1946) { // Wojny i międzywojnie
      danyRok = danyRok + losuj(10) + 1
    } else if (danyRok >= 1946 && danyRok < 1989) { // Komunizm
      danyRok = danyRok + losuj(10) + 1
    } else if (danyRok >= 1989 && danyRok <= koniec) { // III RP
      danyRok = danyRok + losuj(3) + 1
    }
  }
  var generator = function () {
    if (danyRok < koniec) {
      dodajRok()
      wstawZdanie()
      generator()
    }
  }

  // Odpalenie maszyny
  generator()
})
