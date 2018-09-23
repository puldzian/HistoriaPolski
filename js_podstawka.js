/* eslint no-unused-vars:off */
'use strict'

// Tutaj będą używane w projekcie zmienne
var historia = String()
var rokKoniec = 2018 // TODO: current.year
var rokStart = 960 // const

function dajEpoke (n) {
  if (n < 1200) {
    return 1
  } else if (n >= 1200 && n < 1400) { // Generuj drugą epokę
    return 2
  } else if (n >= 1400 && n < 1600) {
    return 3
  } else if (n >= 1600 && n < 1800) {
    return 4
  } else if (n >= 1800 && n < 1914) {
    return 5
  } else if (n >= 1914 && n < 1946) {
    return 6
  } else if (n >= 1946 && n < 1989) {
    return 7
  } else if (n >= 1989 && n < rokKoniec) {
    return 8
  } else {
    return 9
  }
}

// Losuje któryś z N elementów
function losuj (n) {
  return Math.floor(Math.random() * (n))
}

// Udostępnia metodę .daj() do wyciągania przypadkowego wyrazu
function Slowo (materia) {
  var warianty = Array(materia)
  this.daj = function (deklinacja) {
    var liczba = warianty[0].length
    var wylosowane = losuj(liczba)
    var slowo = warianty[0][wylosowane][deklinacja]
    return slowo
  }
  this.wytnij = function (deklinacja) {
    var liczba = warianty[0].length
    var wylosowane = losuj(liczba)
    var slowo = warianty[0][wylosowane][deklinacja]
    warianty.splice(wylosowane, 1)
    return slowo
  }
}

// Konwertuj numer arabski na rzymski
// http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
function romanizuj (num) {
  if (!+num) {
    return false
  }
  var digits = String(+num).split('')
  var key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  var roman = ''
  var i = 3
  while (i--) {
    roman = (key[+digits.pop() + (i * 10)] || '') + roman
  }
  return Array(+digits.join('') + 1).join('M') + roman
}

// Powiększże pierwszą literę
function wielkaPierwszaLitera (arg) {
  var argo = arg
  return argo.charAt(0).toUpperCase() + argo.slice(1)
}

// Maszynka do kompilowania zdań w historię
function wystawZdanie (rok, wygenerowane) { // TODO: wkomponować to w generator
  var status = '<b>' + rok + '</b>&nbsp;–&nbsp;' + wygenerowane + '. '
  historia = historia + status + ' '
}
