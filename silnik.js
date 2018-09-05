/* global $ */

$(document).ready(function () {
  'use strict'

  var KONIEC = Date().getFullYear(); // Ostatni rok losowania = obecny
  var epoka = 12 // Odliczanie epok generatora
  var ileBylo // Suma wyrobionych zdań
  var daneZdanie
  var danyRok = 966
  var daneWygenerowane
  var ekranHistorii = document.getElementById('historia') // To będzie wypełniane na bieżąco

  // Losuje któryś z N elementów
  var losuj = function (n) {
    return Math.floor(Math.random() * (n))
  }
  // Badanie epoki; dodawanie lat
  // TODO: uelastycznić przejścia między epokami
  var kalendarz = function (epoka) {
    if (danyRok < 1200) {
      epoka = 1200 // Wczesne średniowiecze
      danyRok = danyRok + losuj(50)
    } else if (danyRok >= 1200 && danyRok < 1400) {
      epoka = 1400 // Późne Średniowiecze
      danyRok = danyRok + losuj(50)
    } else if (danyRok >= 1400 && danyRok < 1600) {
      epoka = 1600 // Renesans
      danyRok = danyRok + losuj(50)
    } else if (danyRok >= 1600 && danyRok < 1800) {
      epoka = 1800 // Barok
      danyRok = danyRok + losuj(50)
    } else if (danyRok >= 1800 && danyRok < 1914) {
      epoka = 1900 // Zabory
      danyRok = danyRok + losuj(50)
    } else if (danyRok >= 1914 && danyRok < 1946) {
      epoka = 1946 // Wojnie i międzywojnie
      danyRok = danyRok + losuj(50)
    } else if (danyRok >= 1946 && danyRok < 1989) {
      epoka = 1989 // Komunizm
      danyRok = danyRok + losuj(50)
    } else if (danyRok >= 1989 && danyRok <= KONIEC) {
      epoka = 2018 // III RP
      danyRok = danyRok + losuj(10)
    }
  }

  var dodajZdanie = function() {
    daneZdanie = '<b>' + danyRok + '</b> – ' + daneZdanie + '.'
    ileBylo = ileBylo + 1
    return daneZdanie
  }
  var generator = function() {

  }
})
