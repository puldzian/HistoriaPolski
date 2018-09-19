/* global $, gen, historia, losuj, rokKoniec, rokStart, wystawZdanie */
$(document).ready(function () {
  'use strict'

  var poleTekstowe = document.getElementById('poleTekstowe')
  var rokTeraz = rokStart
  var start = 1

  function historiaPolski () {
    var zdanie = String()
    if (start === 1) { // Chrzest
      rokTeraz = rokTeraz + losuj(10)
      zdanie = gen(0)
      wystawZdanie(rokTeraz, zdanie)
      start = 0
    } else if (start === 0 && rokTeraz < 1200) { // Epoka 1
      rokTeraz = rokTeraz + losuj(30)
      zdanie = gen(1)
      wystawZdanie(rokTeraz, zdanie)
    } else if (rokTeraz >= 1200 && rokTeraz < 1400) { // Epoka 2
      rokTeraz = rokTeraz + losuj(30)
      zdanie = gen(2)
      wystawZdanie(rokTeraz, zdanie)
    } else if (rokTeraz >= 1400 && rokTeraz < 1600) { // Epoka 3
      rokTeraz = rokTeraz + losuj(30)
      zdanie = gen(3)
      wystawZdanie(rokTeraz, zdanie)
    } else if (rokTeraz >= 1600 && rokTeraz < 1800) { // Epoka 4
      rokTeraz = rokTeraz + losuj(25)
      zdanie = gen(4)
      wystawZdanie(rokTeraz, zdanie)
    } else if (rokTeraz >= 1800 && rokTeraz < 1914) { // Epoka 5
      rokTeraz = rokTeraz + losuj(10)
      zdanie = gen(5)
      wystawZdanie(rokTeraz, zdanie)
    } else if (rokTeraz >= 1914 && rokTeraz < 1946) { // Epoka 6
      rokTeraz = rokTeraz + losuj(5)
      zdanie = gen(6)
      wystawZdanie(rokTeraz, zdanie)
    } else if (rokTeraz >= 1946 && rokTeraz < 1989) { // Epoka 7
      rokTeraz = rokTeraz + losuj(5)
      zdanie = gen(7)
      wystawZdanie(rokTeraz, zdanie)
    } else if (rokTeraz >= 1989 && rokTeraz < rokKoniec) { // Epoka 8
      rokTeraz = rokTeraz + losuj(5)
      zdanie = gen(8)
      wystawZdanie(rokTeraz, zdanie)
    } else if (rokTeraz >= rokKoniec) {
      rokTeraz = rokTeraz + losuj(1)
      zdanie = 'No i cześć'
      wystawZdanie(rokTeraz, zdanie)
      // Dojechane do końca
      poleTekstowe.innerHTML += historia
      return 1
    }
    historiaPolski()
  }

  // Co się stanie po naciśnięciu?
  // TODO: Dynamika przycisku: 0. Jaka jest moja historia? 1. To nie jest moja historia 2. To jest moja historia 1<>2
  $('#przycisk').click(function () {
    historiaPolski()
  })
})
