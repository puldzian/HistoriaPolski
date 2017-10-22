/*global $, losuj, romanize */

// Można było zrobić tak, że jest baza z arrayami i osobna funkcja,
// która z nich wyciąga. Tak powinno być. Ale jest tak, że każdy
// array wyrzuca po swojemu. Działa, więc nie ma co marudzić.

// Wyrzutnia słów do generatorów
var baza = {
    afera: function () {
        var slowo = ["afera", "skandal", "skandal korupcyjny", "afera korupcyjna", "skandal polityczny", "matactwo"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    atakujo0: function () {
        var slowo = ["atakują", "najeżdżają", "rabują", "podpalają", "okupują", "najeżdżają na", "spadają watahą na"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    bitwie: function () {
        var slowo = ["bitwie", "potyczce", "starciu"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    budynku0: function () {
        var slowo = ["zamku", "wieży strażniczej", "fortecy", "palisady", "murów obronnych", "murów miejskich", "hal kupieckich", "fosy", "barbakanu", "zamczyska", "zamku ksiażęcego", "warowni", "młyna", "huty żelaza", "folwarku", "mostu", "wilczych dołów", "targowiska"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    budynku4: function () {
        var slowo = ["stacji kolei żelaznej", "hal kupieckich", "wodociągów", "filtrów wodnych", "linii tramwajowej", "gazowni", "oświetlenia ulicznego", "pawilonów rzemieślniczych", "hali kupieckiej", "kolonii robotniczej", "budynku poczty i telegrafu", "wieży ciśnień", "akademii wojskowej", "garnizonu", "kanalizacji", "przędzalni", "kopalni węgla", "szkoły dla dziewcząt", "łaźni publicznej"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    budynku5: function () {
        var slowo = ["kombinatu petrochemicznego", "obwodnicy kolejowej", "huty stali", "kopalni żelaza", "elektrociepłowni", "elektrowni", "zakładów azotowych", "fabryki samochodów", "fabryki wagonów", "zakładów meblarskich", "kopalni węgla brunatnego", "kopalni węgla kamiennego", "kopalni siarki", "instytutu badawczego", "szkoły technicznej", "wyższej szkoły zawodowej", "nowego osiedla mieszkalnego", "linii tramwajowej", "biurowca administracji państwowej", "stacji benzynowej", "sklepu samoobsługowego", "rozgłośni radiowej", "lokalnego ośrodka telewizyjnego"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    budynku6: function () {
        var slowo = ["drapacza chmur", "biurowca", "specjalnej strefy ekonomicznej", "zabytkowego pałacyku", "centrum logistycznego", "galerii handlowej", "supermarketu", "obwodnicy", "drugiej obwodnicy", "trzeciej obwodnicy", "linii metra", "centrum handlowo-usługowego", "centrum konferencyjnego", "stadionu", "aquaparku", "multipleksu", "centrum rozrywkowo-usługowego", "siedziby ZUS", "oczyszczalni ścieków", "stacji benzynowej"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    budynkusakr0: function () {
        var slowo = ["katedry", "kościoła", "kapliczki", "kościółka", "bazyliki", "opactwa", "klasztoru", "kościoła filialnego", "kościoła"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    imie0: function () {
        var slowo = ["Bogusław", "Bogumił", "Bogusz", "Chwalibóg", "Czesław", "Częstoch", "Dobromir", "Domagoj", "Dobrowoj", "Jarosław", "Jaromir", "Kazimir", "Komor", "Krupa", "Nadziej", "Lubomir", "Macław", "Masław", "Mirosław", "Mieszko", "Miron", "Puldziok", "Racibor", "Rasław", "Radosław", "Rus", "Ścibor", "Sieciech", "Sulim", "Wacław", "Wojmir", "Wojciech", "Włodzisław", "Włodzimir", "Zawisza", "Zbigniew", "Ziemowit", "Częstowoj", "Ciesław", "Długomił", "Dobrogniew", "Falibog", "Gardomir", "Izasław", "Jaropełk", "Krzywosąd", "Lech", "Leszek", "Lubomir", "Małomir", "Miłosz", "Mojmir", "Mirmił", "Kajko", "Kokosz", "Nawoj", "Niebor", "Niezamysł", "Odolan", "Pomścibor", "Przemysł", "Przybor", "Radogost", "Rosław", "Sambor", "Siemierz", "Sławobor", "Sobiesław", "Świeciech", "Tęgomir", "Twardosław", "Ubysław", "Wacław", "Wiesław", "Wilkomir", "Wszebor", "Wszemysł", "Zadar", "Zdzierad", "Żegota", "Żelibor"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    imie5m: function () {
        var slowo = ["Edward", "Henryk", "Mieczysław", "Władysław", "Zdzisław", "Zbigniew", "Radosław", "Bartłomiej", "Edmund", "Wiesław", "Bolesław", "Anatol", "Lech", "Lesław", "Mieczysław", "Roch", "Józef", "Bartosz", "Jędrzej", "Sobiesław", "Jarosław", "Janusz", "Andrzej", "Wacław", "Jan", "Zygmunt", "Krzysztof", "Erwin", "Teofil", "Czesław", "Hieronim", "Jerzy"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    imie5k: function () {
        var slowo = ["Halina", "Helena", "Teresa", "Zdzisława", "Wiesława", "Henryka", "Genowefa", "Eulalia", "Honorata", "Jolanta", "Józefa", "Janina", "Małgorzata", "Magdalena", "Urszula", "Bogusława", "Bogna"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    imie6m: function () {
        var slowo = ["Piotr", "Andrzej", "Tomasz", "Leszek", "Łukasz", "Maciej", "Marek", "Henryk", "Mateusz", "Krzysztof", "Daniel", "Wojciech", "Paweł", "Artur", "Patryk", "Dominik", "Marcin", "Kajetan", "Adam", "Błażej", "Jan", "Janusz", "Donald", "Jarosław", "Jacek", "Bartosz", "Jakub", "Karol", "Miłosz"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    imie6k: function () {
        var slowo = ["Alicja", "Anna", "Magda", "Zofia", "Lidia", "Aleksandra", "Beata", "Karolina", "Justyna", "Małgorzata", "Joanna", "Katarzyna"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    konstrukcji: function () {
        var slowa = ["budowy", "konstrukcji", "rozudowy", "rozbudowy", "remontu", "renowacji", "dewastacji", "wyburzania", "rekonstrukcji"],
            numerek = losuj(slowa.length);
        return slowa[numerek];
    },
    kraina: function () {
        var slowo = ["Pomorze", "Śląsk", "Małopolska", "Wielkopolska", "Mazowsze", "Warmia", "Mazury", "Podlasie", "Zaolzie", "Kaszuby", "Podhale", "Zagłębie", "Prusy", "Ruś Czerwona", "Kujawy", "Orawa", "Spisz", "Łużyce", "Suwalszczyzna", "Wołyń", "Podole", "Inflanty", "Żmudź"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    kraine: function () {
        var slowo = ["Pomorze", "Śląsk", "Małopolskę", "Wielkopolskę", "Mazowsze", "Warmię", "Mazury", "Podlasie", "Zaolzie", "Kaszuby", "Podhale", "Zagłębie", "Prusy", "Ruś Czerwoną", "Kujawy", "Orawę", "Spisz", "Łużyce", "Suwalszczyznę", "Wołyń", "Podole", "Inflanty", "Żmudź"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    mialmiejsce: function () {
        var slowo = ["miał miejsce", "odbył się", "zorganizowano"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    miasto: function () {
        var slowo = ["Bartniki", "Biały Kościół", "Brzeg", "Dobryszyce", "Dziekanowice", "Głogów", "Gogołów", "Gościszów", "Henryków", "Inowrocław", "Januszowice", "Kościelec", "Kraków", "Kruszwica", "Krzyworzeka", "Legnica", "Lubiąż", "Miechów", "Pastuchów", "Płóczki Górne", "Ruda", "Sędziszowa", "Sokółka", "Stolec", "Strzelno", "Szprotawa", "Środa Śląska", "Strońsko", "Sulejów", "Tyniec", "Sztum", "Wadowice", "Warszawa", "Włocławek", "Wysocice", "Złotoryja", "Żarnów", "Radom", "Szczecin", "Poznań", "Wrocław", "Katowice", "Bytom", "Chorzów", "Zabrze", "Częstochowa", "Sosnowiec", "Rędziny", "Radomsko", "Piotrków Trybunalski", "Łódź", "Przemyśl", "Nysa", "Prudnik", "Pruszków", "Legionów", "Mińsk Mazowiecki", "Cedynia", "Bogatynia", "Biskupin", "Zawada", "Śliwaków", "Święta Anna", "Galonki", "Zalesie", "Zielona Góra", "Białystok", "Bydgoszcz", "Toruń", "Chełm", "Gniew", "Gdańsk", "Kołobrzeg", "Jelenia Góra", "Jastrzębia Góra", "Swoszowice", "Stalowa Wola", "Ogrodzieniec", "Olsztyn", "Mikołajki", "Żaby", "Wolbrom", "Zawiercie", "Rzeszów", "Jarosław", "Kostrzyn", "Suwałki", "Wilkowyja", "Kalisz", "Zagórze", "Tomaszów", "Bartodzieje"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    miastoe: function () {
        var slowo = ["Bartniki", "Biały Kościół", "Brzeg", "Dobryszyce", "Dziekanowice", "Głogów", "Gogołów", "Gościszów", "Henryków", "Inowrocław", "Januszowice", "Kościelec", "Kraków", "Kruszwicę", "Krzyworzekę", "Legnicę", "Lubiąż", "Miechów", "Pastuchów", "Płóczki Górne", "Rudę", "Sędziszową", "Sokółkę", "Stolec", "Strzelno", "Szprotawę", "Środę Śląską", "Strońsko", "Sulejów", "Tyniec", "Sztum", "Wadowice", "Warszawę", "Włocławek", "Wysocice", "Złotoryję", "Żarnów", "Radom", "Szczecin", "Poznań", "Wrocław", "Katowice", "Bytom", "Chorzów", "Zabrze", "Częstochowę", "Sosnowiec", "Rędziny", "Radomsko", "Piotrków Trybunalski", "Łódź", "Przemyśl", "Nysę", "Prudnik", "Pruszków", "Legionów", "Mińsk Mazowiecki", "Cedynię", "Bogatynię", "Biskupin", "Zawadę", "Śliwaków", "Świętą Annę", "Galonki", "Zalesie", "Zieloną Górę", "Białystok", "Bydgoszcz", "Toruń", "Chełm", "Gniew", "Gdańsk", "Kołobrzeg", "Jelenią Górę", "Jastrzębią Górę", "Swoszowice", "Stalową Wolę", "Ogrodzieniec", "Olsztyn", "Mikołajki", "Żaby", "Wolbrom", "Zawiercie", "Rzeszów", "Jarosław", "Kostrzyn", "Suwałki", "Wilkowyję", "Kalisz", "Zagórze", "Tomaszów", "Bartodzieje"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    miescie: function () {
        var slowo = ["Bartnikach", "Białym Kościele", "Brzegu", "Chalnie", "Dobryszycach", "Dziekanowicach", "Głogowie", "Gogołowie", "Gościszowie", "Henrykowie", "Inowrocławiu", "Januszowicach", "Kałdusie", "Kościelcu", "Krakowie", "Kruszwicy", "Krzyworzece", "Legnicy", "Lubiążu", "Miechowie", "Pastuchowie", "Płóczkach Górnych", "Rudzie", "Sędziszowej", "Sokółce", "Stolcu", "Strzelnie", "Szprotawie", "Środzie Śląskiej", "Strońsku", "Sulejowie", "Tyńcu", "Tumie", "Wadowicach", "Warszawie", "Włocławku", "Wysocicach", "Złotoryi", "Żarnowie", "Radomiu", "Szczecinie", "Poznaniu", "Wrocławiu", "Katowicach", "Bytomiu", "Chorzowie", "Zabrzu", "Częstochowie", "Sosnowcu", "Rędzinach", "Radomsku", "Piotrkowie Trybunalskim", "Łodzi", "Przemyślu", "Nysie", "Prudniku", "Pruszkowie", "Legionowie", "Mińsku Mazowieckim", "Cedyni", "Bogatyni", "Biskupinie", "Zawadzie", "Śliwakowie", "Świętej Annie", "Galonkach", "Zalesiu", "Zielonej Górze", "Białymstoku", "Bydgoszczy", "Toruniu", "Chełmie", "Gniewie", "Gdańsku", "Kołobrzegu", "Jeleniej Górze", "Jastrzębiej Górze", "Swoszowicach", "Stalowej Woli", "Ogrodzieńcu", "Olsztynie", "Mikołajkach", "Żabach", "Wolbromiu", "Zawierciu", "Rzeszowie", "Jarosławiu", "Kostrzynie", "Suwałkach", "Wilkowyi", "Kaliszu", "Zagórzu", "Tomaszowie"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    nazwisko0: function () {
        var slowo = ["Anonim", "Czarny", "Jasienica", "Piastowic", "zwany Wilkiem", "Dąbrowa", "Cholewa", "Dołęga", "Rawicz", "Szeliga", "Skuba", "Kossak", "Pomian", "Zaręba", "Dzierżek", "Gniewosz", "Strzębosz", "Kędzierzawy", "Laskonogi", "Krzywousty", "Siwy", "Otyły", "Gąska", "Broda", "Brzuchaty", "Kaczka", "Białowąs", "Cierpisz", "Nowosiodł", "Jajko", "Odolan", "Łokietek", "Krasek", "Piskorz", "Kłebosz", "Wierzbięta", "Grabiwoda", "Wilczek", "Zyz", "Pękawka", "Opoka", "Kwiatek", "Trzaska", "Konopka", "Jastrzębiec", "Zielonka", "Mądry", "Górka", "Poślad", "Nieczuj", "Włodek", "Wojno", "Włostowicz", "Sędowicz", "Sułkowicz", "Sędziwój", "Władysławowicz", "Długosz", "Mieszkowicz", "zwany Czarcim Ogonem", "zwany Wiedźmiarzem", "zwany Gonitwą", "Rębajło"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    nazwisko5m: function () {
        var slowo = ["Bierut", "Gomułka", "Giertych", "Gierek", "Berman", "Wałęsa", "Moczar", "Glemp", "Szechter", "Michnik", "Szczerek", "Staff", "Schaff", "Sztompka", "Płatek", "Szydło", "Podgórni", "Onak", "Wierzba", "Pułka", "Stasiuk", "Korwin", "Zawisza", "Ociepka", "Bukwa"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    nazwisko6m: function () {
        var slowo = ["Płucienniczak", "Płatek", "Palęcki", "Balcerowicz", "Wałęsa", "Kwaśniewski", "Kaczyński", "Tusk", "Gronkiewicz-Waltz", "Kaczmarek", "Lewandowski", "Krause", "Kulczyk", "Oleksy", "Miller", "Kowalski", "Nowak", "Matyjaszczyk", "Urban", "Pawlak", "Kalinowski", "Zasada", "Sobczyk", "Zandberg", "Zawisza", "Szydło", "Olechowski", "Płażyński", "Korwin-Mikke", "Wilk", "Petru", "Gomułka", "Giertych", "Wyszyński", "Michnik", "Wojewódzki", "Konieczny", "Olszewski", "Grochowski", "Choromański", "Świetlicki"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    papiez: function () {
        var slowo = ["Agapit", "Aleksander", "Anastazy", "Benedykt", "Bonifacy", "Celestyn", "Damazy", "Eugeniusz", "Feliks", "Gelazjusz", "Grzegorz", "Hadrian", "Honoriusz", "Innocenty", "Jan Paweł", "Jan", "Juliusz", "Kalikst", "Klemens", "Leon", "Lucjusz", "Marcelin", "Marcin", "Maryn", "Mikołaj", "Paweł", "Pelagiusz", "Pius", "Sergiusz", "Stefan", "Sykstus", "Sylwester", "Teodor", "Urban", "Wiktor"],
            numer = losuj(slowo.length),
            kolejka = losuj(5) + 1;
        return slowo[numer] + " " + romanize(kolejka);
    },
    plemie: function () {
        var slowa = ["Prusowie", "Węgrzy", "Wiślanie", "Ślężanie", "Jaćwingowie", "Polanie", "Gołęszanie", "Mazowszanie", "Lubuszanie", "Kaszubi", "Wolinianie", "Pyrzyczanie", "Obrzanie", "Bobrzanie", "Dziadoszanie", "Litwini", "Lędzianie", "Goplanie", "Wandale", "Czesi", "Chorwaci", "Rusini", "Dregowicze", "Wieluńczanie", "Wieleci", "Niemcy", "Sasowie", "Juci", "Danowie", "Żmudzini", "Eskimosi", "Wikingowie", "Rurykowicze"],
            numerek = losuj(slowa.length);
        return slowa[numerek];
    },
    plemienie: function () {
        var slowa = ["Prusów", "Węgrów", "Wiślan", "Ślężan", "Jaćwingów", "Polan", "Gołęszan", "Mazowszan", "Lubuszan", "Kaszubów", "Wolinian", "Pyrzyczan", "Obrzan", "Bobrzan", "Dziadoszan", "Litwinów", "Lędzian", "Goplan", "Wandali", "Czechów", "Chorwatów", "Rusinów", "Dregowiczów", "Wieluńczan", "Wieletów", "Niemców", "Sasów", "Jutów", "Danów", "Żmudzinów", "Eskimosów", "Wikingów", "Rurykowiczów", "Ściskopęków", "pogan", "bałwochwalców", "Słowaków", "pogańskie plemiona"],
            numerek = losuj(slowa.length);
        return slowa[numerek];
    },
    rzeka: function () {
        var slowa = ["Wisła", "Odra", "Niemen", "Dunaj", "Dniestr", "Łaba", "Warta", "Bug", "Narwia", "San", "Noteć", "Pilica", "Wieprz", "Dunajec", "Bóbr", "Łyna", "Nysa Łużycka", "Wkra", "Brda", "Prosna", "Drwęca", "Wisłok", "Wda", "Drawa", "Nysa Kłodzka", "Poprad", "Pasłęka", "Rega", "Bzura", "Wisłoka", "Obra", "Lega", "Biebrza", "Nida"],
            numerek = losuj(slowa.length);
        return slowa[numerek];
    },
    rzece: function () {
        var slowa = ["Wiśle", "Odrze", "Niemnie", "Dunaju", "Dniestrze", "Łabie", "Warcie", "Bugu", "Narwii", "Sanie", "Noteci", "Pilicy", "Wieprzu", "Dunajcu", "Bobrze", "Łynie", "Nysie Łużyckiej", "Wkrze", "Brdzie", "Drwęcy", "Wisłoku", "Wdzie", "Drawie", "Nysie Kłodzkiej", "Popradzie", "Pasłęce", "Redze", "Bzurze", "Wisłoce", "Obrze", "Ledze", "Biebrzy", "Nidzie"],
            numerek = losuj(slowa.length);
        return slowa[numerek];
    },
    rzeko: function () {
        var slowa = ["Wisłą", "Odrą", "Bałtykiem", "Niemnem", "Dunajem", "Dniestrem", "Łabą", "Wartą", "Bugiem", "Narwią", "Sanem", "Notecią", "Pilicą", "Wieprzem", "Dunajcem", "Bobrem", "Łyną", "Nysą Łużycką", "Wkrą", "Brdą", "Prosną", "Drwęcą", "Wisłokiem", "Wdą", "Drawą", "Nysą Kłodzką", "Popradem", "Pasłęką", "Regą", "Bzurą", "Wisłoką", "Obrą", "Legą", "Biebrzą", "Nidą"],
            numerek = losuj(slowa.length);
        return slowa[numerek];
    },
    spolka: function () {
        var slowa = ["PZU", "Fameg", "Stomil", "Polfa", "Jelfa", "WBK", "BGŻ", "SKOK", "Romet", "FSO", "FSM", "Star", "Jelcz", "MZK", "MPK", "PKP", "WKD", "SKM", "TP", "KWK Bełchatów", "GOP", "COP", "Bielbaw"],
            numerek = losuj(slowa.length);
        return slowa[numerek];
    },
    startkoniec: function () {
        var slowo = ["początek", "rozpoczęcie", "koniec", "zakończenie", "ukończenie", "wstrzymanie", "zatrzymanie"],
            numer = losuj(slowo.length);
        return slowo[numer];
    },
    swietej: function () {
        var slowa = ["Bożego Ciała", "Jana Chrzciciela", "Matki Boskiej", "Narodzenia Najświętszej Maryi Panny", "świętej Jadwigi", "świętej Kingi", "Piotra i Pawła", "świętego Bartłomieja", "świętego Wojciecha", "Wszystkich Świętych", "Archanioła Gabriela", "świętej Adeli", "świętej Katarzyny", "świętej Joanny", "świętej Heleny", "świętej Marty", "Krzyża Świętego", "świętego Tymoteusza", "świętego Marka", "świętej Magdaleny", "Piotra Męczennika", "świętego Dionizego", "świętego Tomasza", "świętego Jerzego", "świętego Szymona i świętej Ingi"],
            numerek = losuj(slowa.length);
        return slowa[numerek];
    },
    urozmarl: function () {
        var slowa = ["urodził się", "zmarł", "umarł", "narodził się"],
            numerek = losuj(slowa.length);
        return slowa[numerek];
    },
    wyrusza: function () {
        var slowa = ["wyrusza na", "zwycięża w boju", "organizuje najazd na", "napada na", "podbija", "chrystianizuje", "najeżdża na", "zdobywa ziemie", "organizuje wyprawę na"],
            numerek = losuj(slowa.length);
        return slowa[numerek];
    },
    zawod0: function () {
        var slowa = ["bednarz", "ceglarz", "druciarz", "folusznik", "garncarz", "harcownik", "karpiniarz", "kołodziej", "klucznik", "kowal", "krzykacz miejski", "podczaszy", "rycerz", "smolarz", "tarczownik", "wojewoda", "wojownik", "zdun", "złotnik"],
            numerek = losuj(slowa.length);
        return slowa[numerek];
    },
    zjazd: function () {
        var slowa = ["zjazd", "sobór"],
            numerek = losuj(slowa.length);
        return slowa[numerek];
    },
    znany: function () {
        var slowa = ["kapitalny", "legendarny", "słynny", "świetny", "renomowany", "wybitny", "uznany", "znany"],
            numerek = losuj(slowa.length);
        return slowa[numerek];
    },
    zwycieza: function () {
        var slowa = ["pokonuje", "zwycięża", "gromi"],
            numerek = losuj(slowa.length);
        return slowa[numerek];
    }
};
