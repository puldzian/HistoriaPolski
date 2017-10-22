/*global $, losuj, baza, mapuj*/

//Główny proces generacyjny
var gener = {
    prymitywna: function () {
        var statusik,
            wariant = losuj(14);
        if (wariant === 0) {
            statusik = "W " + baza.miescie() + " urodził się " + baza.imie0() + " " + baza.nazwisko0() + ", przyszły papież " + baza.papiez() + ".";
        } else if (wariant === 1) {
            statusik = "W " + baza.miescie() + " " + baza.mialmiejsce() + " " + baza.zjazd() + ", któremu przewodził " + baza.imie0() + " " + baza.nazwisko0() + ".";
        } else if (wariant === 2) {
            statusik = baza.urozmarl() + " " + baza.imie0() + " " + baza.nazwisko0() + ".";
        } else if (wariant === 3) {
            statusik = baza.urozmarl() + " " + baza.imie0() + " " + baza.nazwisko0() + ", " + baza.znany() + " " + baza.zawod0() + ".";
        } else if (wariant === 4) {
            statusik = baza.startkoniec() + " " + baza.konstrukcji() + " " + baza.budynku0() + " w " + baza.miescie() + ".";
        } else if (wariant === 5) {
            statusik = baza.startkoniec() + " " + baza.konstrukcji() + " " + baza.budynkusakr0() + " w " + baza.miescie() + ".";
        } else if (wariant === 6) {
            statusik = baza.startkoniec() + " " + baza.konstrukcji() + " " + baza.budynkusakr0() + " pod wezwaniem " + baza.swietej() + " w " + baza.miescie() + ".";
        } else if (wariant === 7) {
            statusik = "W " + baza.bitwie() + " nad " + baza.rzeko() + " ginie " + baza.imie0() + " " + baza.nazwisko0() + ".";
        } else if (wariant === 8) {
            statusik = "W " + baza.bitwie() + " nad " + baza.rzeko() + " ginie " + baza.imie0() + " " + baza.nazwisko0() + ", " + baza.znany() + " " + baza.zawod0() + ".";
        } else if (wariant === 9) {
            statusik = "W " + baza.miescie() + " " + baza.urozmarl() + " " + baza.imie0() + " " + baza.nazwisko0() + ".";
        } else if (wariant === 10) {
            statusik = baza.plemie() + " " + baza.atakujo0() + " " + baza.miastoe() + ".";
            mapuj(0);
        } else if (wariant === 11) {
            statusik = baza.plemie() + " " + baza.atakujo0() + " " + baza.kraine() + ".";
            mapuj(0);
        } else if (wariant === 12) {
            statusik = baza.plemie() + " " + baza.atakujo0() + " " + baza.kraine() + ", w " + baza.bitwie() + " " + baza.zwycieza() + " ich " + baza.imie0() + " " + baza.nazwisko0() + ".";
        } else if (wariant === 13) {
            statusik = baza.imie0() + " " + baza.nazwisko0() + " " + baza.wyrusza() + " " + baza.plemienie() + ".";
            mapuj(1);
        } else if (wariant === 14) {
            statusik = baza.imie0() + " " + baza.nazwisko0() + " " + baza.wyrusza() + " " + baza.plemienie() + ".";
            mapuj(1);
        } else if (wariant === 13) {
            statusik = "Męczeńską śmiercią na ziemiach " + baza.plemienie() + " ginie " + baza.imie0() + " " + baza.nazwisko0() + ".";
        }
        return statusik;
    },
    sredniowieczna: function () {
        var statusik,
            wariant = losuj(1);
        if (wariant === 0) {
            statusik = "Epoka średniowieczna.";
        }
        return statusik;
    },
    renesans: function () {
        var statusik,
            wariant = losuj(1);
        if (wariant === 0) {
            statusik = "Epoka renesansowa.";
        }
        return statusik;
    },
    barok: function () {
        var statusik,
            wariant = losuj(1);
        if (wariant === 0) {
            statusik = "Epoka barokowa.";
        }
        return statusik;
    },
    rozbiory: function () {
        var statusik,
            wariant = losuj(1);
        if (wariant === 0) {
            statusik = "Epoka rozbiorowa.";
        }
        return statusik;
    },
    dwudziesty: function () {
        var statusik,
            wariant = losuj(1);
        if (wariant === 0) {
            statusik = "Epoka dwudziestowieczna.";
        }
        return statusik;
    },
    dzisiaj: function () {
        var statusik,
            wariant = losuj(5);
        if (wariant === 0) {
            statusik = "Epoka dzisiajowa (6).";
        } else if (wariant === 1) {
            statusik = baza.afera() + " w czasie prywatyzacji " + baza.spolka() + ".";
        } else if (wariant === 2) {
            statusik = "Upadek zakładów " + baza.spolka() + ".";
        } else if (wariant === 3) {
            statusik = baza.startkoniec() + " " + baza.konstrukcji() + " " + baza.budynku6() + " w " + baza.miescie() + ".";
        } else if (wariant === 4) {
            statusik = baza.startkoniec() + " " + baza.konstrukcji() + " " + baza.budynkusakr0() + " w " + baza.miescie() + ".";
        }
        return statusik;
    },
};
