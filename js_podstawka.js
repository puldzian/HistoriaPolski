/* eslint no-unused-vars:off */
'use strict'

// Tutaj będą używane w projekcie zmienne
var historia = String()
var rokKoniec = 2018 // TODO: current.year
var rokStart = 960 // const

// Losuje któryś z N elementów
function losuj (n) {
  return Math.floor(Math.random() * (n))
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
