/* global $ */
$(document).ready(function () {
  var poczet = String()

  // BEGIN IMPORT Z SILNIK.JS
  var danyRok = 960
  var rokKonca = 2016

  // Losuje któryś z N elementów
  var losuj = function (n) {
    return Math.floor(Math.random() * (n))
  }

  // Maszynka do kompilowania zdań w historię
  var wystawZdanie = function (wygenerowane) {
    var status = wygenerowane + '. '
    poczet = poczet + status + ' '
  }

  function Slowo (materia) {
    this.warianty = Array(materia)
    this.daj = function (deklinacja) {
      var liczba = this.warianty[0].length
      var wylosowane = losuj(liczba)
      var slowo = this.warianty[0][wylosowane][deklinacja]
      return slowo
    }
  }

  // END IMPORT

  function Krol (imie, numer, przydomek, rokStart, dlugoscZycia) {
    this.imie = imie
    this.numer = numer
    this.przydomek = przydomek
    this.rokStart = rokStart
    this.dlugoscZycia = dlugoscZycia
  }

  var imiona1 = new Slowo([['Bolko', 'Bolka', 0], ['Leszko', 'Leszka', 0], ['Mieszko', 'Mieszka', 0]])
  var imiona1dlugosc = imiona1.length
  var przydomki1 = new Slowo([['Chromy', 'Chromego'], ['Łysy', 'Łysego'], ['Pochmurny', 'Pochmurnego']])
  var przydomki1dlugosc = przydomki1.length

  var zrobKrola = function () {
    var rokStart = danyRok
    var dlugoscZycia = losuj(30) + 5 // liczba od 6 do 36?
    danyRok = danyRok + dlugoscZycia // PRzestawia danyRok o żywot
    var magicznaLiczbaKrola = losuj(imiona1dlugosc)
    var imieKrola = imiona1[magicznaLiczbaKrola][0] // RETURN String: imie w mianowniku
    var numerKrola = imiona1[imieKrola][2] // RETURN Int: kolejny numerek
    numerKrola = numerKrola + 1 // Tutaj dodaje kolejną cyferkę TODO:zwróc ją do licznika
    var czyMaPrzydomek = losuj(1)
    var magicznyPrzydomekKrola
    var przydomekKrola
    if (czyMaPrzydomek === 1) {
      magicznyPrzydomekKrola = losuj(przydomki1dlugosc)
      przydomekKrola = przydomki1[magicznyPrzydomekKrola][0]
    }
    return (imieKrola, numerKrola, przydomekKrola, rokStart, danyRok)
  }

  // Funkcja główna
  var poczetKrolow = function () {
    var tenKrol = zrobKrola() // To musi iść do przygotowanego obiektu
    console.log('Co teras') // Poprawne wyrzucanie króla
  }

  // Bezpośrednio przeniesiona z silnika
  $('#przycisk').click(function () {
    poczetKrolow()
  })
})
