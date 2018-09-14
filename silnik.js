/* global $ */
$(document).ready(function () {
  'use strict'
  var danyRok = 960
  var historia = String()
  var koniec = 0 // TODO ogarnąć radzenie sobie z końcem
  var poleTekstowe = document.getElementById('historia')
  var rokKonca = 2016
  var start = 1
  var status
  var zdanie = 'To jest test.'

  // Kod importowany, powiększże literę
  function wielkaPierwszaLitera (arg) {
    var argo = arg
    return argo.charAt(0).toUpperCase() + argo.slice(1)
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

  // Losuje któryś z N elementów
  var losuj = function (n) {
    return Math.floor(Math.random() * (n))
  }

  // Prototyp słowa, które pozwala wyciągać wariant metodą .get()
  // Miałem tu ciekawe perypetie, bo nie da się elementów arraya wprost wepchnąć do konstruktora
  // Trzeba pchnąć jeden array, dlatego niżej w get musi wejść najpierw w array[0]
  // A niżej w słowniku trzeba trzepać [[...]]
  // Problemy nieistotne (już), ważne że da się wyciągać deklinację
  function Slowo (materia) {
    this.warianty = Array(materia)
    this.daj = function (deklinacja) {
      var liczba = this.warianty[0].length
      var wylosowane = losuj(liczba)
      var slowo = this.warianty[0][wylosowane][deklinacja]
      return slowo
    }
  }

  // Właściwy słownik
  // Użycie: slowo.daj(deklinacja)
  var bitwa = new Slowo([['bitwa', 'bitwy'], ['potyczka', 'potyczki'], ['starcie', 'starcia']])
  var bunt = new Slowo([['bunt'], ['powstanie']])
  var cesarzWczesny = new Slowo([['Berengar', 'Beregara'], ['Henryk', 'Henryka'], ['Ludwik', 'Ludwika'], ['Otton', 'Ottona']])
  var imieSwietyWczesny = new Slowo([['Cyryl', 'Cyryla'], ['Metody', 'Metodego'], ['Wojciech', 'Wojciecha']])
  var imieWczesne = new Slowo([['Leszko', 'Leszka'], ['Mieszko', 'Mieszka'], ['Przedbor', 'Przedbora']])
  var imieKWczesne = new Slowo([['Bożena', 'Bożenę'], ['Dobrawa', 'Dobrawę'], ['Dobromiła', 'Dobromiłę'], ['Lubomira', 'Lubomirę'], ['Milena', 'Milenę'], ['Mojmira', 'Mojmirę'], ['Rzepicha', 'Rzepichę'], ['Świetlana', 'Świetlanę'], ['Wanda', 'Wandę']])
  var miastoWczesne = new Slowo([['Biskupin', 'Biskupinem', 'Biskupinie'], ['Cedynia', 'Cedynią', 'Cedyni'], ['Płock', 'Płockiem', 'Płocku']])
  var naMisjiWczesne = new Slowo([['ewangelizując'], ['nawracając'], ['na terytorium'], ['na ziemiach'], ['w trakcie misji pośród'], ['w trakcie misji wśród']])
  var plemieObce = new Slowo([['Bułgarzy', 'Bułgarów', 'bułgarski', 'bułgarską'], ['Czesi', 'Czechów', 'czeski', 'czeską'], ['Litwini', 'Litwinów', 'litewski', 'litewską'], ['Prusi', 'Prusów', 'pruski', 'pruską'], ['Rusini', 'Rusinów', 'ruski', 'ruską']])
  var plemieWlasne = new Slowo([['Dziadoszanie', 'Dziadoszan'], ['Lędzianie', 'Lędzian'], ['Polanie', 'Polan'], ['Wiślanie', 'Wiślan']])
  var poslubil = new Slowo([['poślubił', 'poślubiła'], ['wziął za żonę', 'wzięła za męża']])
  var wizytowal = new Slowo([['gościł u'], ['nawiedził'], ['odwiedził'], ['wizytował']])
  var wladcaWczesny = new Slowo([['kniaź', 'kniazia', 'kniazia'], ['książę', 'księcia', 'księcia'], ['wojewoda', 'wojewody', 'wojewodę']])
  var wladczyniWczesna = new Slowo([['kniaziówna', 'kniaziównę'], ['księżna', 'księżną'], ['księżniczka', 'księżniczkę']])
  var wyruszyl = new Slowo([['najechał'], ['ruszył'], ['wyruszył']])
  var urzednikWczesny = new Slowo([['cześnik', 'cześnika'], ['kasztelan', 'kasztelana'], ['komes', 'komesa'], ['podczaszy', 'podczaszego'], ['skarbnik', 'skarbnika']])
  var zjazdWczesny = new Slowo([['sobór'], ['zjazd']])
  var zginalMeczensko = new Slowo([['poniósł męczeńską śmierć'], ['zginął tragicznie'], ['zginął męczeńsko'], ['został zamordowany']])
  var zwyciezyli = new Slowo([['pokonali'], ['rozgromili'], ['złamali obronę'], ['zwyciężyli']])

  // A tutaj wielki generator
  var generator = function () { // eslint-disable-line no-unused-vars
    if (start === 1) { // Generuj chrzest
      status = imieWczesne.daj(0) + ', władca ' + plemieWlasne.daj(1) + ', przyjmuje chrzest od ' + plemieObce.daj(1)
      start = 0
    } else if (start === 0 && danyRok < 1200) { // Generuj pierwszą epokę
      var wariant = losuj(8) // arg = liczba generatorów, ale indeksowane od 0
      if (wariant === 0) { // Władca wyruszył na plemię
        status = imieWczesne.daj(0) + ', ' + wladcaWczesny.daj(0) + ' ' + plemieWlasne.daj(1) + ', ' + wyruszyl.daj(0) + ' na ' + plemieObce.daj(1)
      } else if (wariant === 1) { // Bitwa pod X, Z zwycięża Y
        status = bitwa.daj(0) + ' pod ' + miastoWczesne.daj(1) + '. ' + plemieObce.daj(0) + ' ' + zwyciezyli.daj(0) + ' ' + plemieWlasne.daj(1)
      } else if (wariant === 2) { // Bitwa pod X, Y zwycięża Z
        status = bitwa.daj(0) + ' pod ' + miastoWczesne.daj(1) + '. ' + plemieWlasne.daj(0) + ' ' + zwyciezyli.daj(0) + ' ' + plemieObce.daj(1)
      } else if (wariant === 3) { // Wizyta cesarza
        var kturyCesarz = losuj(4) + 1
        kturyCesarz = romanizuj(kturyCesarz)
        status = zjazdWczesny.daj(0) + ' w ' + miastoWczesne.daj(2) + '. Cesarz ' + cesarzWczesny.daj(0) + ' ' + kturyCesarz + ' ' + wizytowal.daj(0) + ' ' + wladcaWczesny.daj(2) + ' ' + imieWczesne.daj(1)
      } else if (wariant === 4) { // Święty zamordowany
        status = 'Święty  ' + imieSwietyWczesny.daj(0) + ' ' + zginalMeczensko.daj(0) + ' ' + naMisjiWczesne.daj(0) + ' ' + plemieObce.daj(1)
      } else if (wariant === 5) { // Włądca rusza na plemię
        status = wladcaWczesny.daj(0) + ' ' + imieWczesne.daj(0) + ' ' + wyruszyl.daj(0) + ' na ' + plemieObce.daj(1)
      } else if (wariant === 6) { // Bunt urzędnika
        status = bunt.daj(0) + ' ' + urzednikWczesny.daj(1) + ' ' + imieWczesne.daj(1)
      } else if (wariant === 7) { // Władca bierze żone
        status = wladcaWczesny.daj(0) + ' ' + imieWczesne.daj(0) + ' ' + poslubil.daj(0) + ' ' + plemieObce.daj(3) + ' ' + wladczyniWczesna.daj(1) + ' ' + imieKWczesne.daj(1)
      }
    } else if (danyRok >= 1200 && danyRok < 1400) { // Generuj drugą epokę
      status = 'druga epoka'
    } else if (danyRok >= 1400 && danyRok < 1600) {
      // Generatory renesansu
    } else if (danyRok >= 1600 && danyRok < 1800) {
      // Generatory baroku
    } else if (danyRok >= 1800 && danyRok < 1914) {
      // Generatory zaborcze
    } else if (danyRok >= 1914 && danyRok < 1946) {
      // Generatory wojenne
    } else if (danyRok >= 1946 && danyRok < 1989) {
      // Generatory komunistyczne
    } else if (danyRok >= 1989 && danyRok < rokKonca) {
      // Generatory współczesne
    }
    status = wielkaPierwszaLitera(status)
    return status
  }

  // Maszynka do kompilowania zdań w historię
  var wystawZdanie = function (wygenerowane) { // TODO: wkomponować to w generator
    var status = '<b>' + danyRok + '</b>&nbsp;–&nbsp;' + wygenerowane + '. '
    historia = historia + status + ' '
  }

  // Główna pętla
  var historiaPolski = function () {
    if (start === 1) { // Chrzest Polski w zachowanej dekadzie
      danyRok = danyRok + losuj(10)
      zdanie = generator()
      wystawZdanie(zdanie)
    } else if (danyRok < 1200) { // Wczesne średniowiecze
      danyRok = danyRok + losuj(40) + 1
      zdanie = generator()
      wystawZdanie(zdanie)
    } else if (danyRok >= 1200 && danyRok < 1400) { // Późne średniowiecze
      danyRok = danyRok + losuj(30) + 1
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
      zdanie = 'Tworzę historię' // TODO wykryj czy komputer, tablet czy telefon
      wystawZdanie(zdanie)
      koniec = 1 // TODO jeśli koniec = 1 to czyścimy ekran i stawiamy nowego tarota (potrzebna generacja całego txtu)
      return 0
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
