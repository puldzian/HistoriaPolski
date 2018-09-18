/* global $, gen, historia, losuj, rokStart, wystawZdanie */
$(document).ready(function () {
  'use strict'

  var epoka = 0
  var koniec = 0
  var poleTekstowe = document.getElementById('poleTekstowe')
  var rokTeraz = rokStart
  var start = 1

  function historiaPolski () {
    var zdanie = String()
    if (start === 1) {
      rokTeraz = rokTeraz + losuj(10)
      zdanie = gen(0)
      wystawZdanie(rokTeraz, zdanie)
      start = 0
    } else if (rokTeraz < 1200) {
      rokTeraz = rokTeraz + losuj(50)
      zdanie = 'Po drodze'
      wystawZdanie(rokTeraz, zdanie)
    } else {
      zdanie = 'No i cześć'
      wystawZdanie(rokTeraz, zdanie)
      // Dojechane do końca
      koniec = 1
      return 1
    }
    historiaPolski()
    if (koniec === 1) {
      // 'Przelej myśli na papier'
      poleTekstowe.innerHTML += historia
      koniec = 2
      return 1
    }
    if (koniec === 2) {
      return 1
    }
  }

  // Co się stanie po naciśnięciu?
  // TODO: Dynamika przycisku: 0. Jaka jest moja historia? 1. To nie jest moja historia 2. To jest moja historia 1<>2
  $('#przycisk').click(function () {
    historiaPolski()
  })
})
