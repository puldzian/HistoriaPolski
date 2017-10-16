/*global $, dict*/

var losujTo = function (n) {
    "use strict";
    return Math.floor(Math.random() * (n));
};

var gener = {
    prymitywna: function () {
        var statusik,
            wariant = losujTo(6);
        if (wariant === 0) {
            statusik = dict.proces0g() + " " + dict.konstrukcja0g() + " " + dict.budynek0g() + " w " + dict.miasto0g() + ".";
        } else if (wariant === 1) {
            statusik = "Urodził się " + dict.imie0g() + " " + dict.nazwisko0g() + ", przyszły papież " + dict.papa0g() + ".";
        } else if (wariant === 2) {
            statusik = "W " + dict.miasto0g() + " " + dict.urodtrupg() + " " + dict.imie0g() + " " + dict.nazwisko0g() + ", " + dict.epitet0g() + " " + dict.zawod0g() + ".";
        } else if (wariant === 3) {
            statusik = dict.proces0g() + " " + dict.konstrukcja0g() + " " + dict.budsakr0g() + " pod wezwaniem " + dict.swiety0g() + " w " + dict.miasto0g() + ".";
        } else if (wariant === 4) {
            statusik = "W " + dict.miasto0g() + " " + dict.urodtrupg() + " " + dict.imie0g() + " " + dict.nazwisko0g() + ".";
        } else if (wariant === 5) {
            statusik = "w bitwie pod X poległ NN";
        } else if (wariant === 6) {
            statusik = "odbył się zjazd w X";
        } else if (wariant === 7) {
            statusik = "wybuchło powstanie JAKIE w X";
        } else if (wariant === 8) {
            statusik = "nową stolicą Polski został X";
        } else if (wariant === 9) {
            statusik = "wypędzono NN do KRAJu";
        } else if (wariant === 10) {
            statusik = "wPolska odzyskała X (miasto)";
        } else if (wariant === 11) {
            statusik = "POKój w X, X przyznane KRAJ";
        } else if (wariant === 12) {
            statusik = "KORonacja NN na KOGO";
        } else if (wariant === 13) {
            statusik = "KORonacja NN na KOGO";
        } else if (wariant === 14) {
            statusik = "bunt NN i potyczka pod X";
        } else if (wariant === 15) {
            statusik = "KTO NN zdobywa X";
        } else if (wariant === 16) {
            statusik = "wyprawa NN na KRAINA";
        } else if (wariant === 17) {
            statusik = "Polska odzyskała XX (kraina)";
        } else if (wariant === 18) {
            statusik = "w KRAJ zmarł NN";
        } else if (wariant === 19) {
            statusik = "NN zdobył X";
        } else if (wariant === 20) {
            statusik = "NN stracił X";
        } else if (wariant === 21) {
            statusik = "NN wyruszył zbrojnie na KRAJ";
        } else if (wariant === 22) {
            statusik = "wojna domowa, NN pobił NN pod X";
        } else if (wariant === 23) {
            statusik = "BULLA potwierdza prawa BUDSACRUM w X";
        } else if (wariant === 23) {
            statusik = "Papież X ogłasza ekskomunikę N";
        } else if (wariant === 24) {
            statusik = "NN zakłada warownie w X";
        } else if (wariant === 25) {
            statusik = "potyczka polskich ŻOŁNIERZY z kimś";
        } else if (wariant === 26) {
            statusik = "święty N zamordowany przez PLEMIE";
        } else if (wariant === 27) {
            statusik = "relikwie świętego N złożone w SACRUM w X";
        } else if (wariant === 28) {
            statusik = "PApież XX pisze list do NN";
        } else if (wariant === 29) {
            statusik = "NN wyrusza na PLEMIE";
        } else if (wariant === 30) {
            statusik = "PLEMIE atakuje X i pali BUDYNEK";
        }
        return statusik;
    }
}
