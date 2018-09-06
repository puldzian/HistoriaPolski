/* global $ */
$(document).ready(function () {
  'use strict'
  var danyRok = 960
  var daneZdanieTestowe = 'element testowy'
  var poleTekstowe = document.getElementById('historia')

  // To wydarza się po naciśnięciu przycisku!
  var generuj = function () {
    var status = danyRok + ' – ' + daneZdanieTestowe + '. '
    poleTekstowe.append(status)
  }

  // Placeholder, co tu podepniesz, uruchomi się po naciśnięciu 1 zdania
  var przycisk = function () { // eslint-disable-line no-unused-vars
    generuj()
  }
})
