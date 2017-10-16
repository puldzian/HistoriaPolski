/*global $*/

var generator = function (epoka) {
    var statusik,
        wariant;
    "use strict";
    if (epoka === 0) {
        wariant = losujCos(1);
        switch(wariant):
            case 0:
            // Ukończono budowę czegoś w gdzieś
            statusik = "Ukończenie " + dict.konstrukcja0g + " gówna";
            break;
            case 1:
            // Urodził się NN, przyszły papież Z
            statusik = "w X urodził się NN, przyszły papież Z";
            break;
            case 2:
            // Urodził się NN, przyszły jakiś ktoś
            statusik = "w X urodził się NN, przyszły jakiś ktoś";
            break;
            case 3:
            // Ukończono budowę sacrum pod wezwaniem w gdzieś
            statusik = "Ukończono budowę sacrum pod wezwaniem w gdzieś";
            break;
            case 4:
            // w X zmarł jakiś ktoś
            statusik = "w X zmarł jakiś ktoś";
            break;
            case 5:
            // w bitwie pod X poległ NN
            statusik = "w bitwie pod X poległ NN";
            break;
            case 6:
            // odbył się zjazd w X
            statusik = "odbył się zjazd w gdzieś";
            break;
    } else if (epoka === 1) {
        statusik = "Epoka średniowieczna status";
    } else if (epoka === 2) {
        statusik = "Epoka pośrednia status";
    } else if (epoka === 9) {
        statusik = "Epoka współczesna status";
    }
    $("#jsStatus").html(statusik);
};

/* TE SĄ DO ZROBIENIA KURDE
bunt NN i potyczka pod X
KTO NN zdobywa X
KORonacja NN na KOGO
wybuchło powstanie JAKIE w X
POKój w X, X przyznane KRAJ
wypędzono NN
nową stolicą Polski został X
Polska odzyskała X (miasto)
Polska odzyskała XX (kraina)
NN zdobył X
NN stracił X
w KRAJ zmarł NN
NN wyruszył zbrojnie na KRAJ
wojna domowa, NN pobił NN pod X
wyprawa NN na KRAINA
BULLA potwierdza prawa BUDSACRUM w X

*/
