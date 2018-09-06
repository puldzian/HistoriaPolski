/* global $, losuj */
$(document).ready(function () {
  'use strict'
  var danyRok = 960
  var historia = String()
  var koniec = 0 // TODO ogarnąć radzenie sobie z końcem
  var poleTekstowe = document.getElementById('historia')
  var start = 1
  var rokKonca = 2016
  var zdanie = 'To jest test.'

  var wystawZdanie = function (wygenerowane) {
    var status = '<b>' + danyRok + '</b>&nbsp;–&nbsp;' + wygenerowane + ' ' // TODO: bolduj danyRok
    historia = historia + status + ' '
  }

  // Główna funkcja generująca
  var historiaPolski = function () {
    if (start === 1) { // Chrzest Polski w zachowanej dekadzie
      start = 0
      danyRok = danyRok + losuj(10)
      zdanie = 'start'
      wystawZdanie(zdanie)
    } else if (danyRok < 1200) { // Wczesne średniowiecze
      danyRok = danyRok + losuj(40) + 1
      zdanie = 'wczesne'
      wystawZdanie(zdanie)
    } else if (danyRok >= 1200 && danyRok < 1400) { // Późne średniowiecze
      danyRok = danyRok + losuj(30) + 1
      zdanie = 'późne'
      wystawZdanie(zdanie)
    } else if (danyRok >= 1400 && danyRok < 1600) { // Renesans
      danyRok = danyRok + losuj(25) + 1
      zdanie = 'renesans'
      wystawZdanie(zdanie)
    } else if (danyRok >= 1600 && danyRok < 1800) { // Barok
      danyRok = danyRok + losuj(25) + 1
      zdanie = 'barok'
      wystawZdanie(zdanie)
    } else if (danyRok >= 1800 && danyRok < 1914) { // Zabory
      danyRok = danyRok + losuj(20) + 1
      zdanie = 'zabory'
      wystawZdanie(zdanie)
    } else if (danyRok >= 1914 && danyRok < 1946) { // Wojny i międzywojnie
      danyRok = danyRok + losuj(10) + 1
      zdanie = 'wojnie'
      wystawZdanie(zdanie)
    } else if (danyRok >= 1946 && danyRok < 1989) { // Komunizm
      danyRok = danyRok + losuj(10) + 1
      zdanie = 'komunism'
      wystawZdanie(zdanie)
    } else if (danyRok >= 1989 && danyRok < rokKonca) { // III RP
      danyRok = danyRok + losuj(3) + 1
      zdanie = 'epoka iii rp'
      wystawZdanie(zdanie)
    } else if (danyRok >= rokKonca) {
      danyRok = 2018 // Zamknięcie krypty!
      zdanie = 'Tworzę historię.' // TODO wykryj czy komputer, tablet czy telefon
      wystawZdanie(zdanie)
      koniec = 1 // TODO jeśli koniec = 1 to czyścimy ekran i stawiamy nowego tarota (potrzebna generacja całego txtu)
      return 0
    }
    historiaPolski()
    if (koniec === 1) {
      poleTekstowe.innerHTML += historia
      koniec = 2
      return 1
    }
    if (koniec === 2) {
      return 1
    }
  }

  // Co się stanie po naciśnięciu?
  $('#przycisk').click(function () {
    historiaPolski()
  })
})
