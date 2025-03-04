/*****************************************************************
  data.js
  Obsahuje 286 otázok v jedinom poli ALL_QUESTIONS (1 až 286).
******************************************************************/

const ALL_QUESTIONS = [
  // 1
  {
    question: "Regulatívy priestorového usporiadania a funkčného využívania územia určuje:",
    options: [
      "katastrálne usporiadanie",
      "rozhodnutie stavebného úradu",
      "územnoplánovacia dokumentácia"
    ],
    answer: 2
  },
  // 2
  {
    question: "Územnotechnické podklady a územné štúdie sú:",
    options: [
      "povinné prílohy stavebného konania",
      "podklady pre katastrálne mapovanie",
      "územnoplánovacie podklady"
    ],
    answer: 2
  },
  // 3
  {
    question: "Možnosti udržateľného územného rozvoja posudzuje a podmienky zmien na území overuje:",
    options: [
      "územné rozhodnutie",
      "celoplošný stavebný prieskum",
      "územná štúdia"
    ],
    answer: 2
  },
  // 4
  {
    question: "Skutočný stav na území popisuje a údaje o aktuálnom stave využívania územia obsahuje:",
    options: [
      "projekt pre stavebné povolenie",
      "technická správa stavebného zámeru",
      "územná štúdia"
    ],
    answer: 2
  },
  // 5
  {
    question: "Systematické a nepretržité vytváranie podmienok pre udržateľný rozvoj patrí medzi cieľ:",
    options: [
      "stavebného konania",
      "katastrálnej evidencie",
      "územného plánovania"
    ],
    answer: 2
  },
  // 6
  {
    question: "Koncepcia územného rozvoja Slovenska, koncepcia územného rozvoja regiónu, územný plán mikroregiónu, územný plán obce a územný plán zóny tvoria:",
    options: [
      "prílohu katastrálneho operátu",
      "záväznú smernicu regionálnych rozvojových projektov",
      "územnoplánovaciu dokumentáciu"
    ],
    answer: 2
  },
  // 7
  {
    question: "Na záväznú a informatívnu časť sa člení:",
    options: [
      "stavebné povolenie",
      "kolaudačné rozhodnutie",
      "územnoplánovacia dokumentácia"
    ],
    answer: 2
  },
  // 8
  {
    question: "Povinnosť aktualizácie územnoplánovacích podkladov má orgán územného plánovania najmenej:",
    options: [
      "každý rok",
      "každých 10 rokov",
      "každé 4 roky"
    ],
    answer: 2
  },
  // 9
  {
    question: "Určenie podmienky na umiestnenie stavby a zmenu využitia územia je predmetom:",
    options: [
      "kolaudačného konania",
      "rozporového konania",
      "územného konania"
    ],
    answer: 2
  },
  // 10
  {
    question: "Rozhodnutie o umiestnení stavby a o využití územia sa vydáva na základe:",
    options: [
      "odborného stavebného dozoru",
      "rozhodnutia o stavebnej uzávere",
      "územného konania"
    ],
    answer: 2
  },
  // 11
  {
    question: "Stavebný pozemok sa určuje rozhodnutím:",
    options: [
      "o užívaní stavby",
      "o zmene stavby pred dokončením",
      "o umiestnení stavby"
    ],
    answer: 2
  },
  // 12
  {
    question: "Nové využívanie územia sa povoľuje rozhodnutím:",
    options: [
      "o odstránení stavby",
      "o stavebnom uzávere",
      "o využívaní územia"
    ],
    answer: 2
  },
  // 13
  {
    question: "Povolenie zmeny územného rozhodnutia jeho nahradením novým územným rozhodnutím je v kompetencii:",
    options: [
      "katastrálneho úradu",
      "ministerstva životného prostredia",
      "stavebného úradu"
    ],
    answer: 2
  },
  // 14
  {
    question: "Stavebná konštrukcia s vymedzenou účelovou funkciou, postavená stavebnými prácami zo stavebných výrobkov, ktorá je pevne spojená so zemou alebo ktorej osadenie vyžaduje úpravu podkladu je:",
    options: [
      "inžiniersky objekt",
      "dočasné zariadenie",
      "stavba"
    ],
    answer: 2
  },
  // 15
  {
    question: "Upevnenie stavebnej konštrukcie strojnými súčiastkami alebo zvarom o pevný základ v zemi alebo o inú stavbu sa považuje za:",
    options: [
      "základné kotvenie konštrukcie",
      "časovo obmedzenú montáž konštrukcie",
      "pevné spojenie stavebnej konštrukcie so zemou"
    ],
    answer: 2
  },
  // 16
  {
    question: "Stavby sa členia podľa stavebnotechnického vyhotovenia a účelu na:",
    options: [
      "rekreačné a priemyselné stavby",
      "obytné a komerčné stavby",
      "pozemné a inžinierske stavby"
    ],
    answer: 2
  },
  // 17
  {
    question: "Priestorovo sústredené zastrešené budovy, ktoré sú stavebnotechnicky vhodné a určené na ochranu ľudí, zvierat alebo vecí; nemusia mať steny, ale musia mať strechu, sú:",
    options: [
      "dočasné stavby na sezónne využitie",
      "technologické stavby",
      "pozemné stavby"
    ],
    answer: 2
  },
  // 18
  {
    question: "Na bytové a nebytové budovy sa členia:",
    options: [
      "inžinierske objekty",
      "vedľajšie stavby",
      "pozemné stavby"
    ],
    answer: 2
  },
  // 19
  {
    question: "Medzi inžinierske stavby patria:",
    options: [
      "pivničné priestory rodinných domov",
      "domy sociálnych služieb",
      "zábavné a oddychové parky, zoologické a botanické záhrady"
    ],
    answer: 2
  },
  // 20
  {
    question: "Medzi bytové budovy patria aj:",
    options: [
      "sklady a priemyselné haly",
      "rekreačné chaty a chalupy",
      "detské domovy, študentské domovy, domovy dôchodcov a útulky bezdomovcov"
    ],
    answer: 2
  },
  // 21
  {
    question: "Budova určená na bývanie pozostávajúca zo 4-roch a viacerých bytov, so spoločným hlavným vstupom z verejnej komunikácie je:",
    options: [
      "viacúčelová administratívna stavba",
      "podnikateľský objekt",
      "bytový dom"
    ],
    answer: 2
  },
  // 22
  {
    question: "Stavby, v ktorých je viac ako 50 % využiteľnej podlahovej plochy určenej na nebytové účely, sú:",
    options: [
      "dočasné stavby",
      "rodinné domy",
      "nebytové budovy"
    ],
    answer: 2
  },
  // 23
  {
    question: "Hygiena, zdravie a životné prostredie patrí:",
    options: [
      "medzi doplnkové služby stavebného úradu",
      "medzi doplnkové posudky investora",
      "medzi základné požiadavky na stavby"
    ],
    answer: 2
  },
  // 24
  {
    question: "Vyhláška č. 532/2002 Z. z. určuje:",
    options: [
      "maximálnu výšku poistného pre stavebný dozor",
      "podrobné pravidlá pre kolaudáciu diaľnic",
      "všeobecné technické požiadavky na výstavbu a na stavby užívané osobami s obmedzenou schopnosťou pohybu a orientácie"
    ],
    answer: 2
  },
  // 25
  {
    question: "Na stavbu je možné použiť iba stavebný výrobok:",
    options: [
      "ktorý nevyhovuje žiadnemu z platných technických predpisov",
      "ktorý je dostupný bez ohľadu na jeho bezpečnosť",
      "ktorý je podľa osobitných predpisov vhodný na použitie v stavbe na zamýšľaný účel"
    ],
    answer: 2
  },
  // 26
  {
    question: "Odborné činnosti, ktorými sa uskutočňuje stavba zo stavebných výrobkov, sú:",
    options: [
      "dokumentačné a revízne práce",
      "dodávky stavebného materiálu",
      "stavebné práce"
    ],
    answer: 2
  },
  // 27
  {
    question: "Časť územia určená územným plánom obce alebo zóny alebo územným rozhodnutím na zastavanie je:",
    options: [
      "verejné priestranstvo",
      "ochranné pásmo",
      "stavebný pozemok"
    ],
    answer: 2
  },
  // 28
  {
    question: "Priestor určený počas uskutočňovania stavby na vykonávanie stavebných prác a na uskladňovanie stavebných výrobkov a dopravných a iných zariadení je:",
    options: [
      "stavebný objekt",
      "skladové priestory",
      "stavenisko"
    ],
    answer: 2
  },
  // 29
  {
    question: "Stavenisko tvorí:",
    options: [
      "iba verejné komunikácie v blízkosti stavby",
      "iba súkromné parcely v bezprostrednom okolí stavby",
      "stavebný pozemok, prípadne v určenom rozsahu aj iné pozemky alebo ich časti"
    ],
    answer: 2
  },
  // 30
  {
    question: "Len právnická alebo fyzická osoba oprávnená na vykonávanie stavebných prác podľa osobitných predpisov s výnimkou jednoduchých stavieb a ich zmien a drobných stavieb môže uskutočňovať:",
    options: [
      "geodetické zameranie stavby",
      "rozhodnutie o spôsobe využitia stavby",
      "stavbu alebo jej zmenu"
    ],
    answer: 2
  },
  // 31
  {
    question: "Vedenie uskutočňovania jednoduchých stavieb a ich zmien svojpomocou musí byť zabezpečené:",
    options: [
      "celoplošnou kolaudáciou",
      "povolením okresného úradu",
      "stavebným dozorom"
    ],
    answer: 2
  },
  // 32
  {
    question: "Vybrané činnosti, ktorých výsledok má vplyv na ochranu verejných záujmov vo výstavbe zahŕňajú:",
    options: [
      "prevádzkovanie ubytovacích zariadení v okolí stavby",
      "audítorské služby pre rozpočet investora",
      "projektovú činnosť, vedenie uskutočňovania stavieb a vybrané geodetické a kartografické činnosti"
    ],
    answer: 2
  },
  // 33
  {
    question: "Projektová činnosť, vedenie uskutočňovania stavieb a vybrané geodetické a kartografické práce sú:",
    options: [
      "činnosti vyhradené pre štátne inštitúcie",
      "nezáväzné odporúčania pri príprave územných plánov",
      "vybrané činnosti vo výstavbe"
    ],
    answer: 2
  },
  // 34
  {
    question: "Za správnosť a úplnosť vypracovania dokumentácie stavby a za realizovateľnosť projektu zodpovedá:",
    options: [
      "zhotoviteľ stavby",
      "majiteľ susedného pozemku",
      "projektant"
    ],
    answer: 2
  },
  // 35
  {
    question: "Stavebné povolenie alebo ohlásenie stavebnému úradu je potrebné na uskutočnenie:",
    options: [
      "len stavieb financovaných z verejných zdrojov",
      "stavebných prác vykonávaných v ochrannom pásme lesa",
      "stavieb, ich zmien a na udržiavacie práce"
    ],
    answer: 2
  },
  // 36
  {
    question: "Pri stavbách každého druhu bez zreteľa na ich stavebnotechnické vyhotovenie, účel a čas trvania, pokiaľ stavebný zákon a osobitné predpisy neustanovujú inak, sa vyžaduje:",
    options: [
      "kolaudačné konanie pred začatím výstavby",
      "len súhlas dotknutých susedov",
      "stavebné povolenie"
    ],
    answer: 2
  },
  // 37
  {
    question: "Pri drobných stavbách, ktoré plnia doplnkovú funkciu ku hlavnej stavbe a ktoré nemôžu podstatne ovplyvniť životné prostredie, postačí:",
    options: [
      "len ústne informovať starostu",
      "predložiť katastrálnemu úradu situačný výkres",
      "ohlasenie stavebnému úradu"
    ],
    answer: 2
  },
  // 38
  {
    question: "Projektant v časti, ktorá sa týka projektu stavby, je:",
    options: [
      "investorom stavby",
      "verejným dozorom",
      "účastníkom stavebného konania"
    ],
    answer: 2
  },
  // 39
  {
    question: "Záväzné podmienky uskutočnenia a užívania stavby určuje:",
    options: [
      "zmluva o diele medzi investorom a zhotoviteľom",
      "výlučne normy Európskej únie",
      "stavebné povolenie"
    ],
    answer: 2
  },
  // 40
  {
    question: "Lehota na dokončenie stavby, povinnosť dodržať príslušné technické predpisy a požiadavky dotknutých orgánov a určenie stavebného dozora alebo kvalifikovanej osoby pri stavbách uskutočňovaných svojpomocou patrí medzi:",
    options: [
      "doplnkové informácie pre kataster",
      "nezáväzné odporúčania stavebného úradu",
      "záväzné podmienky uskutočnenia a užívania stavby"
    ],
    answer: 2
  },
  // 41
  {
    question: "Ak sa so stavbou nezačalo po nadobudnutí právoplatnosti stavebného povolenia a pokiaľ stavebný úrad neurčil na začatie stavby dlhšiu lehotu, stavebné povolenie stráca platnosť:",
    options: [
      "uplynutím lehoty šesť mesiacov od jeho právoplatnosti",
      "uplynutím lehoty jeden rok od jeho právoplatnosti",
      "uplynutím lehoty dva roky od jeho právoplatnosti"
    ],
    answer: 2
  },
  // 42
  {
    question: "Ak sa na dokončenú stavbu alebo jej časť spôsobilú na samostatné užívanie alebo jej zmenu vyžadovalo stavebné povolenie, takúto stavbu je možné užívať na základe:",
    options: [
      "zmluvy o dielo",
      "písomného súhlasu investora",
      "kolaudačného rozhodnutia"
    ],
    answer: 2
  },
  // 43
  {
    question: "Vlastník stavby v súlade s dokumentáciou overenou stavebným úradom, stavebným a kolaudačným rozhodnutím je povinný:",
    options: [
      "nepretržite zabezpečovať prístup verejnosti do stavby",
      "uzatvoriť poistenie stavby proti živelným pohromám",
      "udržiavať stavbu v dobrom stavebnom stave"
    ],
    answer: 2
  },
  // 44
  {
    question: "Náklady na odstránenie stavby znáša:",
    options: [
      "príslušný stavebný úrad",
      "obec, v ktorej katastrálnom území sa stavba nachádza",
      "vlastník stavby"
    ],
    answer: 2
  },
  // 45
  {
    question: "Ak stavba svojím stavom ohrozuje život alebo zdravie osôb, prípadne značné majetkové alebo kultúrne hodnoty, stavebný úrad nariadi:",
    options: [
      "zastaviť všetky práce a stavbu ponechať v pôvodnom stave",
      "zmeniť účel využívania stavby",
      "vykonať neodkladné zabezpečovacie práce"
    ],
    answer: 2
  },
  // 46
  {
    question: "Ochranu verejných záujmov ako aj práv právom chránených záujmov fyzických osôb a právnických osôb, ktoré vyplývajú z uskutočňovania stavby alebo jej zmeny, zabezpečuje:",
    options: [
      "organizácia spravujúca katastrálnu mapu",
      "regionálne riaditeľstvo policajného zboru",
      "štátny stavebný dohľad"
    ],
    answer: 2
  },
  // 47
  {
    question: "Poverení zamestnanci stavebného úradu, regionálneho úradu, Slovenskej stavebnej inšpekcie a iných orgánov štátnej správy oprávnených osobitnými predpismi dozerať na uskutočňovanie, užívanie a odstraňovanie stavieb v medziach týchto predpisov sú:",
    options: [
      "odborne spôsobilé osoby vybraté investorom",
      "vlastníci pozemkov v susedstve stavby",
      "orgány štátneho stavebného dohľadu"
    ],
    answer: 2
  },
  // 48
  {
    question: "Užívanie stavby v rozpore s kolaudačným rozhodnutím je protiprávnym konaním, ktorého znaky určuje stavebný zákon a je sankcionované:",
    options: [
      "verejným napomenutím",
      "príkazom na zrušenie živnosti",
      "pokutou"
    ],
    answer: 2
  },
  // 49
  {
    question: "Protiprávne konanie právnickej osoby a fyzickej osoby oprávnenej na podnikanie je v stavebnom zákone kvalifikované ako:",
    options: [
      "priestupok v súkromnoprávnej oblasti",
      "trestný čin proti životnému prostrediu",
      "správny delikt"
    ],
    answer: 2
  },
  // 50
  {
    question: "Orgány štátneho stavebného dohľadu sú podľa povahy nedostatkov zistených na stavbe oprávnené:",
    options: [
      "ukončiť pracovnoprávny vzťah so stavebným dozorom",
      "vyvlastniť stavebný pozemok vo verejnom záujme",
      "vyzvať stavebníka, oprávnenú osobu alebo právnickú osobu uskutočňujúcu stavbu na zjednanie nápravy"
    ],
    answer: 2
  },
  // 51
  {
    question: "Špeciálne stavebné úrady vykonávajú pôsobnosť stavebného úradu:",
    options: [
      "len pri vydávaní územných rozhodnutí",
      "vo veciach katastrálneho mapovania",
      "v stavebnom konaní a kolaudačnom konaní"
    ],
    answer: 2
  },
  // 52
  {
    question: "Špeciálne stavebné úrady pre stavby vymenované v stavebnom zákone (ustanovenie § 120 ods. 1) konajú podľa stavebného zákona a sú:",
    options: [
      "ustanovené priamo uznesením obecného zastupiteľstva",
      "poverené výlučne ústredným orgánom štátnej správy pre dopravu",
      "pre jednotlivé oblasti určené osobitnými predpismi, podľa ktorých vykonávajú štátnu správu"
    ],
    answer: 2
  },
  // 53
  {
    question: "Ochranu zložiek životného prostredia a iných osobitných záujmov zabezpečujú:",
    options: [
      "regionálne organizácie občianskych združení",
      "súkromné firmy s licenciou na environmentálny audit",
      "dotknuté orgány podľa osobitných predpisov"
    ],
    answer: 2
  },
  // 54
  {
    question: "Ak počas výstavby dôjde ku nálezu mimoriadne významnej kultúrnej pamiatky, ktorej význam potvrdí Ministerstvo kultúry SR, stavebný úrad vydané stavebné povolenie:",
    options: [
      "neodkladne predĺži o 2 roky",
      "ponechá v platnosti bez možnosti úpravy",
      "môže zmeniť alebo zrušiť"
    ],
    answer: 2
  },
  // 55
  {
    question: "V prípade živelnej pohromy alebo havárie môže stavebný úrad vydať aj bez príslušných dokladov:",
    options: [
      "záväznú metodiku na opravu stavby",
      "pokyn na demontáž a prevoz stavby",
      "predbežné povolenie"
    ],
    answer: 2
  },
  // 56
  {
    question: "Územné rozhodnutie a všetky súvisiace písomnosti je povinný evidovať a ich ukladanie zabezpečovať:",
    options: [
      "dotknutý orgán ochrany životného prostredia",
      "autorizovaný projektant",
      "príslušný stavebný úrad"
    ],
    answer: 2
  },
  // 57
  {
    question: "Stavebné povolenie a všetky súvisiace písomnosti je povinný evidovať a ich ukladanie zabezpečovať:",
    options: [
      "účastník konania, ktorému bolo stavebné povolenie doručené",
      "geodet, ktorý vykonával zameranie stavby",
      "stavebný úrad, ktorý ho vydal"
    ],
    answer: 2
  },
  // 58
  {
    question: "Reklamné stavby definuje:",
    options: [
      "vyhláška o prevádzkovom poriadku miest a obcí",
      "zákon o cestnej premávke",
      "stavebný zákon (ustanovenie § 43 ods. 3)"
    ],
    answer: 2
  },
  // 59
  {
    question: "Reklamné stavby podliehajú stavebnému povoleniu vydanému stavebným úradom alebo ohláseniu stavebnému úradu podľa:",
    options: [
      "miesta ich umiestnenia vo vzťahu k ochrannému pásmu lesa",
      "farebného prevedenia a typu konštrukcie",
      "veľkosti informačnej plochy"
    ],
    answer: 2
  },
  // 60
  {
    question: "Orgány štátneho stavebného dohľadu nadobúdajú oprávnenie robiť zápisy do stavebného denníka:",
    options: [
      "na pokyn investora stavby",
      "iba na žiadosť zhotoviteľa stavby",
      "na základe stavebného zákona"
    ],
    answer: 2
  },
  // 61
  {
    question: "Pod pojmom „susedná stavba“ sa rozumie stavba, ktorej užívanie môže byť navrhovanou stavbou dotknuté:",
    options: [
      "len na pozemku, ktorý má spoločnú hranicu so stavebným pozemkom",
      "výlučne v prípade, ak sa jedná o stavbu s väčším počtom podlaží",
      "na pozemku, ktorý nemusí mať spoločnú hranicu s pozemkom, o ktorý v konaní ide"
    ],
    answer: 2
  },
  // 62
  {
    question: "Letiská a prístavy pre účely stavebného zákona patria medzi:",
    options: [
      "dočasné stavby",
      "stavby slúžiace na individuálnu rekreáciu",
      "líniové stavby"
    ],
    answer: 2
  },
  // 63
  {
    question: "Komplexný a vyvážený rozvoj, ktorý zahŕňa rozvoj všetkých hmotných a nehmotných zložiek, činností a procesov, ktoré sa vzťahujú na územie a ich vzájomné vzťahy je:",
    options: [
      "strategický regionálny manažment",
      "harmonický urbanistický rozvoj",
      "udržateľný územný rozvoj"
    ],
    answer: 2
  },
  // 64
  {
    question: "Bytové budovy, ktorých zastavaná plocha nepresahuje 300 m2, majú jedno nadzemné podlažie, môžu mať aj jedno podzemné podlažie a podkrovie, alebo majú dve nadzemné podlažia s plochou strechou a môžu mať aj jedno podzemné podlažie, sú:",
    options: [
      "drobné stavby",
      "priemyselné objekty",
      "jednoduché stavby"
    ],
    answer: 2
  },
  // 65
  {
    question: "Stavby na individuálnu rekreáciu a oporné múry sú:",
    options: [
      "líniové stavby",
      "dočasné stavby",
      "jednoduché stavby"
    ],
    answer: 2
  },
  // 66
  {
    question: "Prízemné stavby a stavby zariadenia staveniska, ak ich zastavaná plocha nepresahuje 300 m2 a výšku 15 m, sú:",
    options: [
      "veľké priemyselné objekty",
      "reklamné stavby zvláštneho významu",
      "jednoduché stavby"
    ],
    answer: 2
  },
  // 67
  {
    question: "Podzemné stavby, pokiaľ ich zastavaná plocha nepresahuje 300 m2 a hĺbka 6,0 m, sú:",
    options: [
      "podzemné technologické objekty, ktoré nespadajú do stavebnej legislatívy",
      "dočasné sklady stavebných materiálov",
      "jednoduché stavby"
    ],
    answer: 2
  },
  // 68
  {
    question: "Sklady horľavín a výbušnín, stavby pre civilnú obranu, stavby pre požiarnu ochranu, stavby uránového priemyslu a jadrovo-energetických zariadení:",
    options: [
      "sa považujú za drobné stavby",
      "automaticky podliehajú územnému konaniu bez ohľadu na ich rozsah",
      "sa nepovažujú za jednoduché stavby"
    ],
    answer: 2
  },
  // 69
  {
    question: "Nadstavby, prístavby, stavebné úpravy stavieb sú:",
    options: [
      "dočasné zásahy do stavieb",
      "vnútorné úpravy, ktoré nie je potrebné ohlásiť",
      "zmenami dokončených stavieb"
    ],
    answer: 2
  },
  // 70
  {
    question: "Prízemné stavby, ak ich zastavaná plocha nepresahuje 25 m2 a výšku 5 m (vrátane garáže) patria medzi:",
    options: [
      "jednoduché stavby, ak spĺňajú všetky požiadavky protipožiarnej ochrany",
      "stavby na podnikateľské účely",
      "drobné stavby, ak plnia doplnkovú funkciu k hlavnej stavbe"
    ],
    answer: 2
  },
  // 71
  {
    question: "Stavby na lesnej pôde slúžiace na zabezpečovanie lesnej výroby a poľovníctva, ak ich zastavaná plocha nepresahuje 30 m2 a výšku 5,0 m, sú:",
    options: [
      "inžinierske stavby s určením pre hospodársku ťažbu",
      "stavby trvalého charakteru vyžadujúce stavebné povolenie",
      "drobné stavby"
    ],
    answer: 2
  },
  // 72
  {
    question: "Oprava a výmena nepodstatných stavebných konštrukcií, najmä vnútorných priečok, omietok, obkladov stien, podláh a podobne sa považuje za:",
    options: [
      "radikálnu rekonštrukciu stavby",
      "stavebné úpravy vyžadujúce stavebné povolenie",
      "bežné udržiavacie práce"
    ],
    answer: 2
  },
  // 73
  {
    question: "Prípojky stavieb a pozemkov na verejné rozvodné siete a kanalizáciu všetkých stavieb a pozemkov a pripojenie drobných stavieb a pozemkov na rozvodné siete a kanalizáciu hlavnej stavby, sú:",
    options: [
      "časti hlavnej stavby, ktoré vyžadujú stavebné povolenie",
      "technologické nadstavby komunálnych sietí",
      "drobné stavby"
    ],
    answer: 2
  },
  // 74
  {
    question: "Stavba garáže je drobnou stavbou, ktorú možno uskutočniť na ohlásenie stavebnému úradu, ak:",
    options: [
      "pôdorys garáže presiahne 50 m2 a nebude mať viac ako 2 podlažia",
      "garáž má najviac 10 m2 a nemá samostatný prístup z ulice",
      "bude plniť doplnkovú funkciu k hlavnej stavbe, má najviac 25 m2 zastavanej plochy a výšku 5 m"
    ],
    answer: 2
  },
  // 75
  {
    question: "Vyhláška č. 453/2000 Z. z., ktorou sa vykonávajú niektoré ustanovenia stavebného zákona, sa týka:",
    options: [
      "náležitostí pri verejnom obstarávaní stavieb",
      "podrobných pravidiel katastrálneho konania",
      "stavebného poriadku a územného rozhodovania"
    ],
    answer: 2
  },
  // 76
  {
    question: "Návrh na vydanie rozhodnutia o umiestnení stavby a o využití územia je návrhom na vydanie:",
    options: [
      "kolaudačného rozhodnutia",
      "stavebného povolenia",
      "územného rozhodnutia"
    ],
    answer: 2
  },
  // 77
  {
    question: "Návrh na vydanie územného rozhodnutia obsahuje okrem iného aj zoznam:",
    options: [
      "všetkých stavebných materiálov potrebných pre výstavbu",
      "všetkých zmluvných partnerov investora",
      "všetkých známych účastníkov územného konania"
    ],
    answer: 2
  },
  // 78
  {
    question: "Ku návrhu na vydanie územného rozhodnutia o umiestnení stavby a o využití územia, ak vlastníkom pozemku nie je navrhovateľ, je potrebný súhlas:",
    options: [
      "ktoréhokoľvek suseda bez ohľadu na vlastnícke práva",
      "príslušného katastrálneho úradu",
      "vlastníka pozemku alebo osoby, ktorá má k pozemku iné právo"
    ],
    answer: 2
  },
  // 79
  {
    question: "V návrhu na vydanie územného rozhodnutia o umiestnení stavby údaje o súlade so schválenou územnoplánovacou dokumentáciou:",
    options: [
      "nemusia byť uvedené, ak s tým súhlasí starosta obce",
      "sa vyžadujú len pri priemyselných a výrobných objektoch",
      "musia byť dostatočne zrejmé"
    ],
    answer: 2
  },
  // 80
  {
    question: "Z dokumentácie pre územné rozhodnutie o umiestnení stavby musí byť dostatočne zrejmý:",
    options: [
      "spôsob financovania stavby",
      "rozpis prác na stavbe a cenová kalkulácia",
      "rozsah a usporiadanie staveniska"
    ],
    answer: 2
  },
  // 81
  {
    question: "Rozhodnutie o umiestnení stavby sa nevyžaduje na stavby, ktorých podmienky na umiestnenie podrobne rieši:",
    options: [
      "zmluva o budúcej kúpnej zmluve pozemku",
      "vyhláška ministerstva životného prostredia",
      "územný plán zóny, ak je to v jeho záväznej časti uvedené"
    ],
    answer: 2
  },
  // 82
  {
    question: "V návrhu na vydanie územného rozhodnutia líniových stavieb alebo v odôvodnených prípadoch aj zvlášť rozsiahlej stavby s veľkým počtom účastníkov konania údaje o dotknutých pozemkoch obsahujú:",
    options: [
      "len písomný súhlas s archeologickým prieskumom",
      "geologický posudok bez uvedenia katastrálnych hraníc",
      "opis prebiehajúcich hraníc územia"
    ],
    answer: 2
  },
  // 83
  {
    question: "Návrh na vydanie územného rozhodnutia o novom využití územia obsahuje okrem iného aj dokumentáciu, z ktorej musí byť dostatočne zrejmé výškové usporiadanie navrhovaných zmien, ktorými sa podstatne:",
    options: [
      "mení druh vlastníckeho práva k pozemku",
      "zvyšuje hustota obyvateľstva v danej obci",
      "mení vzhľad prostredia alebo odtokové pomery"
    ],
    answer: 2
  },
  // 84
  {
    question: "Návrh na vydanie územného rozhodnutia o vymedzení chránenej časti krajiny obsahuje okrem iného aj údaje, z ktorých musí byť dostatočne zrejmá:",
    options: [
      "výška nájmu za využívanie chránenej oblasti",
      "povinnosť vlastníka chráneného územia zabezpečiť sprievodcovskú službu",
      "predpokladaná doba trvania navrhovaného opatrenia"
    ],
    answer: 2
  },
  // 85
  {
    question: "Územné rozhodnutie obsahuje okrem všeobecných náležitostí aj:",
    options: [
      "detailný rozpis stavebných materiálov",
      "finančný prehľad rozpočtu stavby",
      "druh, účel a stručný opis predmetu územného rozhodnutia"
    ],
    answer: 2
  },
  // 86
  {
    question: "K návrhu na vydanie rozhodnutia o umiestnení stavby sa podľa miesta, druhu, rozsahu a predpokladaných účinkov stavby predkladá dokumentácia pre územné rozhodnutie:",
    options: [
      "v jednom vyhotovení s listom vlastníctva pozemku",
      "až po vydaní stavebného povolenia",
      "vo dvoch vyhotoveniach"
    ],
    answer: 2
  },
  // 87
  {
    question: "Dokumentáciu na územné rozhodnutie okrem jednoduchých stavieb vypracováva u vybraných činností, ktorých výsledok má vplyv na ochranu verejných záujmov vo výstavbe:",
    options: [
      "orgán štátnej správy bez odbornej spôsobilosti",
      "susedný vlastník pozemku v rámci dohodnutých zmlúv",
      "oprávnená osoba"
    ],
    answer: 2
  },
  // 88
  {
    question: "Pri ohlásenej drobnej stavbe uskutočňovanej svojpomocou vyhlásenie kvalifikovanej osoby, že bude zabezpečovať vedenie uskutočňovania stavby:",
    options: [
      "nie je potrebné, ak majiteľ stavby má viac ako 10-ročnú prax v stavebníctve",
      "vyžaduje sa len pri stavbách vyšších ako 5 metrov",
      "je povinnou súčasťou ohlásenia"
    ],
    answer: 2
  },
  // 89
  {
    question: "Ku ohlásenej drobnej stavbe sa jednoduchý situačný výkres a jednoduchý technický opis stavby:",
    options: [
      "nevyžaduje, ak ide o investíciu obce",
      "dokladá len pri prístavbe vo väčšom rozsahu",
      "pripojí vo dvoch vyhotoveniach"
    ],
    answer: 2
  },
  // 90
  {
    question: "Po ohlásení drobných stavieb, stavebných úprav a udržiavacích prác môže stavebný úrad určiť, že podliehajú:",
    options: [
      "povinnej prehliadke geodeta",
      "úplnému zastaveniu bez možnosti vyjadrenia účastníkov",
      "stavebnému povoleniu a nariadiť doplnenie podkladov"
    ],
    answer: 2
  },
  // 91
  {
    question: "K žiadosti o stavebné povolenie sa projektová dokumentácia stavby (projekt stavby) vypracovaná oprávnenou osobou prikladá:",
    options: [
      "len v elektronickej podobe bez ohľadu na stavebný zákon",
      "v 5-ich vyhotoveniach",
      "v 3-och vyhotoveniach"
    ],
    answer: 2
  },
  // 92
  {
    question: "Ku žiadosti o stavebné povolenie sa kópia všeobecne záväzného nariadenia obce o schválení územného plánu zóny, v prípade, že sa územné rozhodnutie nevyžaduje:",
    options: [
      "neprikladá, ak stavba nepresahuje 150 m2",
      "nikdy nevyžaduje",
      "prikladá"
    ],
    answer: 2
  },
  // 93
  {
    question: "Projektová dokumentácia stavby, ktorá sa predkladá k stavebnému konaniu, obsahuje podľa druhu a účelu stavby najmä:",
    options: [
      "zoznam všetkých možných stavebných materiálov, ktoré sú na trhu",
      "dokument o vlastníckych vzťahoch k pozemku na 50 rokov dopredu",
      "sprievodnú správu, súhrnnú technickú správu, celkovú situáciu stavby a ďalšie výkresy a údaje"
    ],
    answer: 2
  },
  // 94
  {
    question: "Statické posúdenie stavby, ktoré preukazuje mechanickú odolnosť a stabilitu nosnej konštrukcie, je súčasťou projektovej dokumentácie stavby k žiadosti:",
    options: [
      "o vydanie územného rozhodnutia",
      "o vydanie katastrálneho plánu",
      "o stavebné povolenie"
    ],
    answer: 2
  },
  // 95
  {
    question: "Ak zmena stavby spočíva iba v nepodstatných odchýlkach od projektovej dokumentácie overenej v stavebnom konaní, možno zmenu po dohode so stavebným úradom:",
    options: [
      "opätovne posúdiť v úplne novom stavebnom konaní",
      "vyriešiť len s vlastníkom susedného pozemku",
      "vyznačiť priamo v overených vyhotoveniach pôvodnej projektovej dokumentácie a prerokovať v kolaudačnom konaní"
    ],
    answer: 2
  },
  // 96
  {
    question: "Na ústne konanie o povolení užívania stavby spojené s miestnym zisťovaním sa predkladá:",
    options: [
      "občiansky preukaz všetkých účastníkov konania",
      "fotodokumentácia zamerania interiéru stavby",
      "doklad o vytýčení priestorovej polohy stavby"
    ],
    answer: 2
  },
  // 97
  {
    question: "Na ústne konanie o povolení užívania stavby sa predkladá projektová dokumentácia:",
    options: [
      "overená vlastníkom susedných nehnuteľností",
      "neschválená žiadnym stavebným úradom",
      "overená stavebným úradom v stavebnom konaní alebo pri povoľovaní zmeny stavby pred jej dokončením"
    ],
    answer: 2
  },
  // 98
  {
    question: "Na kolaudačné konanie sa predkladajú doklady určené:",
    options: [
      "orgánom štátneho stavebného dohľadu pred zahájením stavby",
      "miestnym úradom bez ohľadu na podmienky stavebného povolenia",
      "v podmienkach stavebného povolenia"
    ],
    answer: 2
  },
  // 99
  {
    question: "K návrhu na povolenie zmeny v užívaní stavby sa okrem iného dokumenty, z ktorých je zrejmé, na aký pôvodný účel bola stavba povolená:",
    options: [
      "neprikladajú, ak sa nemení kapacita stavby",
      "prikladajú len pri priemyselných stavbách",
      "prikladajú"
    ],
    answer: 2
  },
  // 100
  {
    question: "Žiadosť o povolenie na odstránenie stavby dôvody odstránenia stavby a predpokladaný termín začatia a skončenia prác:",
    options: [
      "neobsahuje, ak sa jedná o drobnú stavbu",
      "prikladá sa len pri havarijnom stave budovy",
      "obsahuje"
    ],
    answer: 2
  },
  // 101
  {
    question: "Žiadosť o povolenie na odstránenie stavby údaje o tom, ako sa naloží s vybúraným materiálom a kam sa prebytočný materiál uloží:",
    options: [
      "nevyžaduje sa, ak majiteľ stavby odpad odvezie na nelegálnu skládku",
      "prikladá sa iba na požiadanie susedov",
      "obsahuje"
    ],
    answer: 2
  },
  // 102
  {
    question: "Ku žiadosti o povolenie na odstránenie stavby v prípade radovej zástavby statické posúdenie, ktorým sa preukazuje stabilita susedných stavieb, sa:",
    options: [
      "neprikladá, ak ide o nedostavaný základ",
      "nevyžaduje, ak sú susedné stavby v dobrom technickom stave",
      "prikladá"
    ],
    answer: 2
  },
  // 103
  {
    question: "Súčasťou dokumentácie vedenia stavby uloženej na stavenisku je:",
    options: [
      "kópia listu vlastníctva v digitálnej forme",
      "denný záznam zamestnancov pracujúcich na stavbe",
      "stavebný denník"
    ],
    answer: 2
  },
  // 104
  {
    question: "Zapisujú sa do stavebného denníka najmä údaje o odchýlkach od projektovej dokumentácie overenej stavebným úradom v stavebnom konaní alebo od podmienok určených v stavebnom povolení alebo inom rozhodnutí či opatrení:",
    options: [
      "nie, stavebný denník slúži len na evidenciu dochádzky robotníkov",
      "nie, záznamy sa robia až po kolaudácii",
      "áno, zapisujú sa všetky dôležité okolnosti týkajúce sa uskutočňovania stavby"
    ],
    answer: 2
  },
  // 105
  {
    question: "Záznamy do stavebného denníka sa zapisujú:",
    options: [
      "raz mesačne alebo podľa potreby investora",
      "len po ukončení výkopových prác",
      "denne"
    ],
    answer: 2
  },
  // 106
  {
    question: "Ak ide o technicky jednoduchú stavbu alebo o stavebné práce malého rozsahu, pri ktorých tak určil stavebný úrad v podmienkach stavebného povolenia, denné záznamy do stavebného denníka môžu byť nahradené jedným záznamom:",
    options: [
      "mesačne, ak sú práce prerušené",
      "len na začiatku a na konci stavby",
      "za obdobie najviac 7-mich dní"
    ],
    answer: 2
  },
  // 107
  {
    question: "Obstaranie dokumentácie skutočného realizovania stavby môže nariadiť:",
    options: [
      "miestne zastupiteľstvo, ak je stavba financovaná z verejných zdrojov",
      "súkromný zhotoviteľ, ktorý o to požiada",
      "stavebný úrad"
    ],
    answer: 2
  },
  // 108
  {
    question: "Vyhláška č. 532/2002 Z. z. je vyhláška, ktorou sa ustanovujú podrobnosti:",
    options: [
      "o spracovaní údajov katastrálnej mapy",
      "o pravidlách financovania sociálnej bytovej výstavby",
      "o všeobecných technických požiadavkách na výstavbu a o všeobecných technických požiadavkách na stavby užívané osobami s obmedzenou schopnosťou pohybu a orientácie"
    ],
    answer: 2
  },
  // 109
  {
    question: "Vyhláška č. 532/2002 Z. z. ustanovuje aj podrobnosti o všeobecných technických požiadavkách na:",
    options: [
      "výhradné služby projektantov s licenciou od ministerstva",
      "dočasné reklamné stavby pri cestných komunikáciách",
      "stavby užívané osobami s obmedzenou schopnosťou pohybu a orientácie"
    ],
    answer: 2
  },
  // 110
  {
    question: "Pri umiestňovaní stavby a jej začleňovaní do územia sa musia rešpektovať obmedzenia vyplývajúce zo všeobecne záväzných právnych predpisov chrániacich verejné záujmy a predpokladaný rozvoj územia podľa:",
    options: [
      "rozhodnutia vlastníka susedného pozemku",
      "podmienok zmluvy o dielo uzavretej s investorom",
      "územného plánu obce, prípadne územného plánu zóny"
    ],
    answer: 2
  },
  // 111
  {
    question: "Potrubné, telekomunikačné a elektrické rozvody a vedenia sa v zastavanej časti obce umiestňujú:",
    options: [
      "prednostne na nadzemné vedenia v chráničkách",
      "len na fasády a strechy priľahlých budov",
      "pod povrch zeme"
    ],
    answer: 2
  },
  // 112
  {
    question: "Pozemok určený na zastavanie je:",
    options: [
      "verejné priestranstvo so zeleňou",
      "ochranné pásmo komunikácií",
      "stavebný pozemok"
    ],
    answer: 2
  },
  // 113
  {
    question: "Ak rodinné domy vytvárajú medzi sebou voľný priestor, vzdialenosť medzi nimi nesmie byť menšia ako:",
    options: [
      "3,0 m",
      "10,0 m",
      "7,0 m"
    ],
    answer: 2
  },
  // 114
  {
    question: "Vzdialenosť rodinných domov od spoločných hraníc pozemkov nesmie byť menšia ako:",
    options: [
      "1,0 m",
      "3,0 m",
      "2,0 m"
    ],
    answer: 2
  },
  // 115
  {
    question: "Vzdialenosť priečelí budov, v ktorých sú okná obytných miestností, musí byť od okraja pozemnej komunikácie najmenej:",
    options: [
      "5,0 m, ak ide o ulice v historickej zástavbe",
      "2,0 m, pokiaľ to vyhovuje dopravným predpisom",
      "3,0 m; táto požiadavka neplatí pre budovy umiestňované v stavebných medzerách radovej zástavby"
    ],
    answer: 2
  },
  // 116
  {
    question: "Pripojenie stavby na pozemné komunikácie podľa druhu a účelu stavby musí spĺňať aj požiadavky:",
    options: [
      "vlastníka susednej nehnuteľnosti",
      "občianskeho združenia pôsobiaceho v regióne",
      "na dopravnú obsluhu, parkovanie a prístup a použitie požiarnej techniky"
    ],
    answer: 2
  },
  // 117
  {
    question: "Garáž, odstavná a parkovacia plocha pre vozidlo nad 3,5 t, ak nie sú v uzatvorených priestoroch stavby a ak nie sú určené pre špeciálne policajné vozidlo, požiarne vozidlo a sanitné vozidlo, sa umiestňujú:",
    options: [
      "vedľa rodinného domu a musia mať samostatný vjazd",
      "bez obmedzenia v akomkoľvek obytnom území",
      "mimo obytnej časti mesta a obce"
    ],
    answer: 2
  },
  // 118
  {
    question: "Odstavná plocha má byť:",
    options: [
      "pokrytá betónovými panelmi",
      "upravená ako asfaltová cesta",
      "zazelenená"
    ],
    answer: 2
  },
  // 119
  {
    question: "Nadzemné alebo podzemné vedenie vrátane armatúry, zariadenia a konštrukcie na vedení zabezpečujúce napojenie územia, obce a ich častí a stavby na jednotlivé druhy technického vybavenia územia je:",
    options: [
      "podružné príslušenstvo rodinného domu",
      "dočasný rozvod vody a elektriny",
      "miestny rozvod technického vybavenia územia"
    ],
    answer: 2
  },
  // 120
  {
    question: "Čistiareň odpadových vôd do 500 ekvivalentných obyvateľov je:",
    options: [
      "splaškový zberač s obmedzeným prietokom",
      "kanalizačná čerpacia stanica pre mestské aglomerácie",
      "malá čistiareň"
    ],
    answer: 2
  },
  // 121
  {
    question: "Tam, kde splaškové odpadové vody nemožno odvádzať do verejnej kanalizácie, buduje sa:",
    options: [
      "zariadenie na spaľovanie komunálneho odpadu",
      "vsakovacia nádrž pre zachytávanie dažďovej vody",
      "malá čistiareň alebo žumpa"
    ],
    answer: 2
  },
  // 122
  {
    question: "Len v určenom rozsahu a v určenom čase sa pre stavenisko môžu užívať:",
    options: [
      "susedné súkromné pozemky bez písomného súhlasu ich vlastníkov",
      "všetky okolité nehnuteľnosti v havarijnom stave",
      "verejné priestranstvo a pozemná komunikácia"
    ],
    answer: 2
  },
  // 123
  {
    question: "Obmedzenie vibrácií, ktoré by mohli porušiť stavbu alebo ktoré by obmedzili jej užívanie, patrí do ustanovení:",
    options: [
      "protipožiarnej ochrany pri užívaní stavby",
      "environmentálnej kompatibility stavebných materiálov",
      "mechanickej odolnosti a stability stavby"
    ],
    answer: 2
  },
  // 124
  {
    question: "Mechanická odolnosť a stabilita patrí medzi:",
    options: [
      "povinné prílohy návrhu katastrálneho konania",
      "doplnkové kritériá pri vydávaní stavebného povolenia",
      "základné požiadavky na stavby"
    ],
    answer: 2
  },
  // 125
  {
    question: "Technické požiadavky na protipožiarnu bezpečnosť pri výstavbe a pri užívaní stavieb sa ustanovujú:",
    options: [
      "zákonom o ochrane lesov",
      "rozhodnutím ministerstva pôdohospodárstva",
      "vyhláškou Ministerstva vnútra SR č. 94/2004 Z. z. v znení neskorších predpisov"
    ],
    answer: 2
  },
  // 126
  {
    question: "Dostatočné denné osvetlenie, priame vetranie a dostatočné vykurovanie s možnosťou regulácie tepla musí mať zabezpečené:",
    options: [
      "každý sklad alebo hospodárska budova",
      "povalový priestor v nadstavbe",
      "obytná miestnosť"
    ],
    answer: 2
  },
  // 127
  {
    question: "Vetranie a osvetlenie príslušenstva bytu sú prípustné aj zo svetlíkovej alebo vetracej šachty, ak tieto majú pôdorys najmenej:",
    options: [
      "1 m² a najmenšiu svetlú výšku 1500 mm",
      "3 m² a dĺžku kratšej strany 1000 mm",
      "5 m² a dĺžku kratšej strany 1500 mm"
    ],
    answer: 2
  },
  // 128
  {
    question: "Preslnenie bytu sa posudzuje podľa STN:",
    options: [
      "73 4307",
      "73 0011",
      "73 4301"
    ],
    answer: 2
  },
  // 129
  {
    question: "Vhodné riešenie výškových rozdielov v úrovni podláh, správne sklony schodíšť, riešenie ochranných zábradlí patria medzi požiadavky na:",
    options: [
      "estetickú jednotu exteriéru a interiéru",
      "protipožiarnu odolnosť konštrukcií",
      "bezpečnosť stavby pri užívaní"
    ],
    answer: 2
  },
  // 130
  {
    question: "Pri zabezpečovaní ochrany stavby proti vonkajšiemu hluku od dopravy sa musia prednostne uplatňovať:",
    options: [
      "protihlukové ploty pre jednotlivé rodinné domy",
      "stavebné úpravy zamerané len na fasády objektu",
      "urbanistické opatrenia pred opatreniami chrániacimi jednotlivé stavby"
    ],
    answer: 2
  },
  // 131
  {
    question: "Ochrana osôb a budov pred nepriaznivým pôsobením hluku a vibrácií sa posudzuje podľa:",
    options: [
      "zákona o cestnej premávke",
      "zákona o vodách",
      "zákona č. 355/2007 Z. z. o ochrane, podpore a rozvoji verejného zdravia v znení neskorších predpisov"
    ],
    answer: 2
  },
  // 132
  {
    question: "Energetická úspornosť a tepelná ochrana patria medzi:",
    options: [
      "doplnkové pokyny pri stavebnom uzávere",
      "odporúčané pravidlá obecných stavebných predpisov",
      "základné požiadavky na stavby"
    ],
    answer: 2
  },
  // 133
  {
    question: "Vykurovanie, chladenie, vetranie, zásobovanie vodou a jej odvádzanie, úprava, ohrev a rozvod teplej vody, osvetlenie a preprava osôb alebo predmetov sa navrhujú a zhotovujú so zreteľom na:",
    options: [
      "geografickú polohu staveniska bez ohľadu na ďalšie aspekty",
      "výhradne estetické požiadavky investora",
      "nízku potrebu energie pri splnení požiadaviek na predpokladaný účel užívania budovy"
    ],
    answer: 2
  },
  // 134
  {
    question: "Skrývka kultúrnej vrstvy pôdy, ktorá sa musí premiestniť a uložiť tak, ako to organizácia výstavby a uchovanie kvality kultúrnej vrstvy pôdy vyžadujú, sa musí vykonať:",
    options: [
      "len ak to vyžadujú archeologické nálezy",
      "až po ukončení všetkých stavebných prác",
      "pri zemných prácach každého druhu"
    ],
    answer: 2
  },
  // 135
  {
    question: "Steny a priečky stavby musia spĺňať z hľadiska ochrany proti hluku požiadavky stavebnej akustiky:",
    options: [
      "iba na tlmenie nárazových zvukov",
      "len medzi sociálnymi zariadeniami a obytnými miestnosťami",
      "na nepriezvučnosť proti zvuku šíriacemu sa vzduchom z vonkajšieho prostredia a medzi miestnosťami v budove"
    ],
    answer: 2
  },
  // 136
  {
    question: "Stropná konštrukcia nad otvoreným prechodom a priestorom musí spĺňať požiadavky z hľadiska:",
    options: [
      "protipožiarnej odolnosti proti šíreniu plynov z pivničných priestorov",
      "odolnosti proti zaťaženiu snehom počas zimného obdobia",
      "difúzie vodnej pary a vzduchovej priepustnosti"
    ],
    answer: 2
  },
  // 137
  {
    question: "Šikmá strecha so sklonom strešných rovín strmšia ako 25 stupňov musí mať:",
    options: [
      "paropriepustnú fóliu s hrúbkou minimálne 5 mm",
      "komínový lapač iskier",
      "zachytávač zosúvajúceho sa snehu"
    ],
    answer: 2
  },
  // 138
  {
    question: "Z hľadiska vlhkostného režimu možno pokladať za vyhovujúcu aj takú strechu, v ktorej kondenzuje vodná para, ak sa tým:",
    options: [
      "nezníži statická únosnosť nosnej konštrukcie stavby pod 50 %",
      "nemení tvar krokiev a latovania",
      "neohrozí funkcia a životnosť obvodovej steny stavby"
    ],
    answer: 2
  },
  // 139
  {
    question: "Namiesto schodišťa možno navrhnúť šikmú rampu, ktorá na únikových cestách nesmie mať väčší sklon ako:",
    options: [
      "1 : 5",
      "1 : 10",
      "1 : 8"
    ],
    answer: 2
  },
  // 140
  {
    question: "Každý schodišťový stupeň v jednom schodišťovom ramene musí mať:",
    options: [
      "protišmykovú úpravu zámkovej dlažby",
      "rozdiel vo výške najviac 5 mm",
      "rovnakú výšku"
    ],
    answer: 2
  },
  // 141
  {
    question: "V jednom schodišťovom ramene (ak nejde o pomocné schodište) môže byť schodišťových stupňov najviac:",
    options: [
      "8",
      "20",
      "16"
    ],
    answer: 2
  },
  // 142
  {
    question: "Najmenšia dovolená podchodná výška rampy nameraná na zvislici je:",
    options: [
      "1900 mm",
      "2300 mm",
      "2100 mm"
    ],
    answer: 2
  },
  // 143
  {
    question: "Schodište a rampa širšie ako 2200 mm musia byť vybavené doplnkovým zábradlím s držadlom, ktoré ich rozdelí na pruhy široké najviac:",
    options: [
      "2000 mm",
      "2500 mm",
      "2200 mm"
    ],
    answer: 2
  },
  // 144
  {
    question: "Sklon schodišťových ramien hlavného schodišťa (ak nejde o bytový dom bez výťahu) nesmie byť väčší ako:",
    options: [
      "45 stupňov",
      "25 stupňov",
      "35 stupňov"
    ],
    answer: 2
  },
  // 145
  {
    question: "Vo všetkých prípadoch, keď nie je predpísaná väčšia výška alebo dovolená znížená výška, je najmenšia dovolená výška zábradlia vrátane držadla - základná:",
    options: [
      "850 mm",
      "1100 mm",
      "1000 mm"
    ],
    answer: 2
  },
  // 146
  {
    question: "Najmenšia dovolená výška zábradlia vrátane držadla – znížená, ak je hĺbka voľného priestoru najviac 3 m, je:",
    options: [
      "800 mm",
      "1000 mm",
      "900 mm"
    ],
    answer: 2
  },
  // 147
  {
    question: "Najmenšia dovolená výška zábradlia - zvýšená - 1100 mm je, ak je okrem iných podmienok hĺbka voľného priestoru väčšia ako:",
    options: [
      "8 m",
      "15 m",
      "12 m"
    ],
    answer: 2
  },
  // 148
  {
    question: "Najmenšia dovolená výška zábradlia - zvláštna - 1200 mm je, ak je hĺbka voľného priestoru väčšia ako:",
    options: [
      "20 m",
      "10 m",
      "30 m"
    ],
    answer: 2
  },
  // 149
  {
    question: "Medzery v zábradlí v bytovom dome nesmú byť širšie ako:",
    options: [
      "150 mm a v prevádzke určenej deťom 100 mm",
      "100 mm a v prevádzke určenej deťom 60 mm",
      "120 mm a v prevádzke určenej deťom 80 mm"
    ],
    answer: 2
  },
  // 150
  {
    question: "Výška umiestnenia spodného obrysu balkóna, lodžie a arkiera nad chodníkom musí byť najmenej:",
    options: [
      "2500 mm a nad cestou 4000 mm",
      "3500 mm a nad cestou 5000 mm",
      "3000 mm a nad cestou najmenej 4500 mm"
    ],
    answer: 2
  },
  // 151
  {
    question: "Balkón a lodžia sa musia zabezpečiť zábradlím s výškou:",
    options: [
      "800 mm až 1000 mm podľa konštrukčného vyhotovenia",
      "1200 mm až 1500 mm podľa sklonu strechy",
      "900 mm až 1200 mm podľa hĺbky voľného priestoru"
    ],
    answer: 2
  },
  // 152
  {
    question: "Balkón a lodžia musia byť odvodnené tak, aby neznehodnocovali žiadnu inú časť stavby a musia byť odvodnené do dažďového odpadového potrubia, ak majú pôdorysnú plochu väčšiu ako:",
    options: [
      "8 m²",
      "10 m²",
      "5 m²"
    ],
    answer: 2
  },
  // 153
  {
    question: "Odklon komínového prieduchu od zvislice nesmie byť väčší ako:",
    options: [
      "10°, výnimočne pri rekonštrukcii stavby až 20°",
      "20°, výnimočne pri novostavbe až 30°",
      "15°, výnimočne pri rekonštrukcii stavby až 30°"
    ],
    answer: 2
  },
  // 154
  {
    question: "Okenný parapet v obytnej a pobytovej miestnosti, pod ktorým je voľný vonkajší priestor hlbší ako 0,5 m, musí byť vysoký najmenej:",
    options: [
      "750 mm alebo sa musí doplniť tepelnou izoláciou",
      "900 mm s povinným bezpečnostným sklom",
      "850 mm alebo musí byť vybavený zábradlím najmenej do tejto výšky"
    ],
    answer: 2
  },
  // 155
  {
    question: "Výťah sa zriaďuje v bytovom dome s viac ako:",
    options: [
      "3 NP",
      "5 NP",
      "4 NP"
    ],
    answer: 2
  },
  // 156
  {
    question: "Evakuačný a požiarny výťah, ktorý je súčasťou priestoru chránenej únikovej cesty, musí mať kabínu z nehorľavých látok a materiálov s veľkosťou najmenej:",
    options: [
      "1000 mm x 2000 mm",
      "1500 mm x 2000 mm",
      "1100 mm x 2200 mm"
    ],
    answer: 2
  },
  // 157
  {
    question: "Hlavný uzáver vnútorného vodovodu, ktorý musí byť prístupný a jeho umiestnenie musí byť viditeľné a trvalo označené, sa osadzuje:",
    options: [
      "za vodomer, aby bolo možné merať spotrebu aj pri uzavretí",
      "na konci všetkých odbočiek v rozvode",
      "pred vodomer"
    ],
    answer: 2
  },
  // 158
  {
    question: "Kanalizačné potrubie z plastu vedené chránenou únikovou cestou:",
    options: [
      "je dovolené len voľne uložiť bez ďalších bezpečnostných požiadaviek",
      "môže byť nahradené rozvodom z kovu so zníženou tepelnou odolnosťou",
      "musí byť požiarne oddelené"
    ],
    answer: 2
  },
  // 159
  {
    question: "Trvalo prístupný a viditeľne označený hlavný vypínač elektrickej energie musí mať:",
    options: [
      "iba verejné budovy, obchodné centrá a priemyselné haly",
      "len stavby zaradené do zvýšeného požiarneho rizika",
      "každá stavba"
    ],
    answer: 2
  },
  // 160
  {
    question: "Hlavný uzáver odberného plynového zariadenia sa nesmie umiestniť:",
    options: [
      "do vstupnej chodby rodinného domu",
      "do samostatnej technickej miestnosti",
      "v obytnej a pobytovej miestnosti, v špajzi, vo svetlíku a v šachte"
    ],
    answer: 2
  },
  // 161
  {
    question: "Pre navrhovanie bytových budov platí STN:",
    options: [
      "75 4301",
      "73 4501",
      "73 4301"
    ],
    answer: 2
  },
  // 162
  {
    question: "Svetlá výška obytných miestností musí byť najmenej:",
    options: [
      "2400 mm",
      "2700 mm",
      "2600 mm"
    ],
    answer: 2
  },
  // 163
  {
    question: "Najmenšia podlahová plocha obytnej miestnosti je:",
    options: [
      "6 m²",
      "10 m²",
      "8 m²"
    ],
    answer: 2
  },
  // 164
  {
    question: "Najmenšia výmera plochy bytu, ak tvorí byt jediná miestnosť, je:",
    options: [
      "15 m²",
      "25 m²",
      "20 m²"
    ],
    answer: 2
  },
  // 165
  {
    question: "Autoservis a čerpacia stanica kvapalných palív vrátane zariadenia na manipuláciu s nimi sa nesmie umiestňovať:",
    options: [
      "v tesnej blízkosti nemocnice",
      "na území národného parku",
      "v ochrannom pásme vodného zdroja slúžiaceho na zásobovanie pitnou vodou"
    ],
    answer: 2
  },
  // 166
  {
    question: "Najmenšiu svetlú výšku miestností a priestorov v základnej škole, strednej, vyššej škole a špeciálnej škole pri dodržaní všetkých podmienok denného osvetlenia na pracovnú plochu možno znížiť na 3000 mm, ak sa dodrží objem vzduchu na jedného žiaka:",
    options: [
      "3 m³",
      "4,5 m³",
      "5,3 m³"
    ],
    answer: 2
  },
  // 167
  {
    question: "Rodinný dom musí mať z hľadiska domového vybavenia na pozemku:",
    options: [
      "najmenej 2 garážové stojiská na 1 byt",
      "vyhradený priestor na drobnú stavbu do 25 m²",
      "najmenej 1 garážové stojisko na 1 byt"
    ],
    answer: 2
  },
  // 168
  {
    question: "Najmenšia plocha izby v hoteli, moteli alebo penzióne pri jednoposteľovej a dvojposteľovej izbe je:",
    options: [
      "6 m² a 10 m²",
      "9 m² a 14 m²",
      "8 m² a 12,6 m²"
    ],
    answer: 2
  },
  // 169
  {
    question: "Zariadenie na osobnú hygienu v hoteli, moteli alebo penzióne musí mať plochu najmenej:",
    options: [
      "3 m²",
      "5 m²",
      "4 m²"
    ],
    answer: 2
  },
  // 170
  {
    question: "Stavba na zhromažďovanie väčšieho počtu osôb je stavba s minimálne jedným priestorom určeným na zhromaždenie najmenej:",
    options: [
      "100 osôb, v ktorom na jednu osobu pripadá podlahová plocha menšia ako 3 m²",
      "250 osôb, v ktorom na jednu osobu pripadá podlahová plocha menšia ako 6 m²",
      "200 osôb, v ktorom na jednu osobu pripadá podlahová plocha menšia ako 4 m²"
    ],
    answer: 2
  },
  // 171
  {
    question: "Stavba na zhromažďovanie väčšieho počtu osôb musí mať:",
    options: [
      "osobitne určené kryté záchytné parkovisko",
      "minimálne jeden priechod do vedľajšej budovy",
      "najmenej dva východy vedúce na voľné priestranstvo"
    ],
    answer: 2
  },
  // 172
  {
    question: "Informačné, reklamné a propagačné zariadenie nesmie svojím vyhotovením a umiestnením okrem iného:",
    options: [
      "presahovať výšku 20 m",
      "ohrozovať príslušníkov integrovaného záchranného systému",
      "rušiť krajinný ráz, ohrozovať bezpečnosť a brániť rozhľadu na pozemnej komunikácii"
    ],
    answer: 2
  },
  // 173
  {
    question: "Pri stavbách užívaných osobami s obmedzenou schopnosťou pohybu a orientácie výškový rozdiel pri priechode a vodorovnej vnútornej komunikácii musí byť znížený na:",
    options: [
      "50 mm",
      "30 mm",
      "20 mm"
    ],
    answer: 2
  },
  // 174
  {
    question: "Pri stavbách užívaných osobami so zníženou schopnosťou pohybu a orientácie musí byť chodník široký najmenej:",
    options: [
      "1500 mm a môže mať pozdĺžny sklon najviac 1 : 10 a priečny 1 : 40",
      "1000 mm a môže mať pozdĺžny sklon najviac 1 : 8 a priečny 1 : 50",
      "1300 mm a môže mať pozdĺžny sklon najviac 1 : 12 a priečny sklon najviac 1 : 50"
    ],
    answer: 2
  },
  // 175
  {
    question: "Pre nevidiacu alebo slabozrakú osobu musí byť každá prekážka trvalého aj dočasného charakteru, ktorá sa nachádza na pešej komunikácii, pevne vyznačená pri zemi obrubou do výšky:",
    options: [
      "150 mm a vo výške 1000 mm pevným, hmatným označením",
      "50 mm a vo výške 1200 mm pevným, hmatným označením",
      "100 mm a vo výške 1100 mm pevným, hmatným a kontrastným označením"
    ],
    answer: 2
  },
  // 176
  {
    question: "Ovládanie signalizačného zariadenia na priechode osobami so zníženou schopnosťou pohybu a orientácie musí byť umiestnené vo výške:",
    options: [
      "800 mm až 1000 mm",
      "1300 mm až 1500 mm",
      "900 mm až 1200 mm"
    ],
    answer: 2
  },
  // 177
  {
    question: "Okraj pešej komunikácie pri vozovke musí byť vyznačený po celej dĺžke zníženého obrubníka smerom do chodníka varovným pásom, ktorý má šírku:",
    options: [
      "300 mm",
      "600 mm",
      "400 mm"
    ],
    answer: 2
  },
  // 178
  {
    question: "Pre osoby so zníženou schopnosťou pohybu a orientácie musí byť pred vstupom do stavby vodorovná plocha najmenej:",
    options: [
      "1000 mm x 1000 mm, ak sa dvere otvárajú smerom von",
      "1200 mm x 1500 mm, ak sa dvere otvárajú smerom dnu",
      "1500 mm x 1500 mm, ak sa dvere otvárajú smerom dnu alebo sú posuvné"
    ],
    answer: 2
  },
  // 179
  {
    question: "Pre osoby so zníženou schopnosťou pohybu a orientácie kľučka alebo držadlo dverí musí byť najviac vo výške:",
    options: [
      "1300 mm",
      "1000 mm",
      "1100 mm"
    ],
    answer: 2
  },
  // 180
  {
    question: "V budovách pre osoby so zníženou schopnosťou pohybu a orientácie výťah nesmie mať:",
    options: [
      "akustické hlásenie",
      "presklené steny kabíny",
      "dvere otvárateľné ručne"
    ],
    answer: 2
  },
  // 181
  {
    question: "Parapet v obytnej miestnosti určenej na užívanie osobou na vozíku nemôže byť vyššie nad podlahou ako:",
    options: [
      "800 mm",
      "650 mm",
      "700 mm"
    ],
    answer: 2
  },
  // 182
  {
    question: "V dome s bytmi osobitného určenia a v inej stavbe na bývanie určenej na užívanie osobou na vozíku musia mať dvere šírku najmenej:",
    options: [
      "800 mm a musia byť vybavené aspoň jedným madlom z vnútornej strany",
      "950 mm a musia byť vybavené z obidvoch strán elektrickým otváračom",
      "900 mm a musia byť vybavené z obidvoch strán šikmými držadlami"
    ],
    answer: 2
  },
  // 183
  {
    question: "Záchodová kabína navrhovaná pre osobu na vozíku musí mať najmenšie pôdorysné rozmery v novonavrhovanej budove:",
    options: [
      "1400 mm x 1600 mm",
      "1500 mm x 1900 mm",
      "1600 mm x 1800 mm"
    ],
    answer: 2
  },
  // 184
  {
    question: "Vaňa pre osobu na vozíku musí mať najmenší rozmer:",
    options: [
      "1700 mm x 700 mm",
      "1500 mm x 600 mm",
      "1600 mm x 700 mm"
    ],
    answer: 2
  },
  // 185
  {
    question: "Manipulačný manévrovací priestor pre osobu na vozíku je:",
    options: [
      "štvorec s rozmermi 1200 mm x 1200 mm",
      "obdĺžnik 1400 mm x 1000 mm",
      "kruh s priemerom 1500 mm"
    ],
    answer: 2
  },
  // 186
  {
    question: "Halový priestor nebytovej budovy určenej pre verejnosť musí byť vybavený aj:",
    options: [
      "informačnou tabuľou s digitálnym displejom",
      "núdzovým lôžkovým priestorom",
      "vodiacimi líniami"
    ],
    answer: 2
  },
  // 187
  {
    question: "Šírka stojiska na odstavnej ploche pre vozidlo osoby s obmedzenou schopnosťou pohybu a orientácie musí byť najmenej:",
    options: [
      "2800 mm a môže mať sklon najviac 1 : 25",
      "3200 mm a môže mať sklon najviac 1 : 15",
      "3500 mm a môže mať sklon najviac 1 : 20"
    ],
    answer: 2
  },
  // 188
  {
    question: "Vyhláška o obsahu a spôsobe spracovania územnoplánovacej dokumentácie a o územnoplánovacích podkladoch a všeobecných požiadavkách na priestorové usporiadanie územia a funkčné využívanie územia je vyhláška č.:",
    options: [
      "392/2022 Z. z.",
      "394/2023 Z. z.",
      "392/2023 Z. z."
    ],
    answer: 2
  },
  // 189
  {
    question: "Podklad na spracovanie zadania a na riešenie územnoplánovacej dokumentácie tvoria:",
    options: [
      "len aktuálne aerofotografie a katastrálna mapa",
      "štúdie spracované pre iné obce v regióne",
      "existujúce údaje o území vedené v informačnom systéme alebo prieskum územia vlastným zisťovaním"
    ],
    answer: 2
  },
  // 190
  {
    question: "Samosprávny kraj obstaráva:",
    options: [
      "územný plán zóny pre obce s menej ako 1000 obyvateľmi",
      "schvaľovanie drobných územných štúdií pre súkromných investorov",
      "koncepciu územného rozvoja regiónu"
    ],
    answer: 2
  },
  // 191
  {
    question: "Sídelná štruktúra, krajinná štruktúra, hospodárska a sociálna infraštruktúra patria medzi zásady:",
    options: [
      "katastrálneho mapovania",
      "posudzovania vplyvov na životné prostredie",
      "priestorového usporiadania a funkčného využívania územia"
    ],
    answer: 2
  },
  // 192
  {
    question: "Záväzná časť územného plánu sa vyhlasuje:",
    options: [
      "písomným oznámením na obecnej tabuli",
      "verejnou vyhláškou stavebného úradu",
      "všeobecne záväzným právnym predpisom"
    ],
    answer: 2
  },
  // 193
  {
    question: "Celá dokumentácia zmien a doplnkov územnoplánovacej dokumentácie musí byť uložená:",
    options: [
      "v okresnom archíve pre verejné listiny",
      "v katastri nehnuteľností ako súčasť pozemkových kníh",
      "spolu s kompletnou pôvodnou schválenou územnoplánovacou dokumentáciou"
    ],
    answer: 2
  },
  // 194
  {
    question: "Autorizovaným architektom a autorizovaným stavebným inžinierom je ten, kto je:",
    options: [
      "držiteľom maturitného vysvedčenia v odbore pozemné stavby",
      "povolený stavebným úradom na výkon stavebného dozoru",
      "zapísaný v zozname autorizovaných architektov alebo v zozname autorizovaných stavebných inžinierov"
    ],
    answer: 2
  },
  // 195
  {
    question: "Architekti a inžinieri môžu vykonávať regulované povolanie sústavne:",
    options: [
      "len v združení s inými subjektmi bez ohľadu na odbor",
      "v pracovnom pomere na mestskom alebo obecnom úrade",
      "vo vlastnom mene a na vlastnú zodpovednosť ako slobodné povolanie"
    ],
    answer: 2
  },
  // 196
  {
    question: "Autorizovaný architekt a autorizovaný inžinier je viazaný:",
    options: [
      "iba projektovou dokumentáciou schválenou investorom",
      "požiadavkami občianskych združení v regióne",
      "ústavou, ústavnými zákonmi, zákonmi a ďalšími všeobecne záväznými právnymi predpismi"
    ],
    answer: 2
  },
  // 197
  {
    question: "Architekt alebo inžinier v súvislosti s poskytovaním služieb, ak by mohla vzniknúť ujma na právach alebo oprávnených záujmoch objednávateľa, je v medziach zákona povinný:",
    options: [
      "prednostne informovať katastrálny úrad",
      "zaslať každú dokumentáciu na kontrolu regionálnemu úradu",
      "zachovať mlčanlivosť o všetkých skutočnostiach, o ktorých sa dozvedel v súvislosti s poskytovaním služieb pre objednávateľa"
    ],
    answer: 2
  },
  // 198
  {
    question: "Ak pokyny objednávateľa sú v rozpore so zákonom, s inými všeobecne záväznými právnymi predpismi, s predpismi komory alebo so schválenou územnoplánovacou dokumentáciou, stavebným povolením alebo so slovenskou technickou normou, alebo sú technicky neuskutočniteľné alebo ich vykonanie by ohrozilo životy alebo zdravie občanov alebo dobré mravy a objednávateľ napriek upozorneniu trvá na ich splnení, architekt alebo inžinier tieto služby:",
    options: [
      "splní, ale písomne od toho dáva výhradu",
      "dočasne preruší a vyžiada si stanovisko súdu",
      "odmietne vykonať"
    ],
    answer: 2
  },
  // 199
  {
    question: "Ak zistí komora na verejnej architektonickej alebo na inej odbornej súťaži nedodržanie pravidiel čestného súťaženia a nesúlad s právnymi predpismi, inžinier alebo architekt sa verejnej súťaže:",
    options: [
      "môže zúčastniť s podmienečným schválením",
      "zúčastní pod dozorom komory",
      "nesmie zúčastniť"
    ],
    answer: 2
  },
  // 200
  {
    question: "Inžinier alebo architekt môže poskytovať služby bezodplatne, ak ide o práce malého rozsahu pre zariadenia zdravotníckej a sociálnej starostlivosti alebo charitatívne zariadenia, alebo:",
    options: [
      "iba ak objednávateľ podpíše prehlásenie o odmietnutí finančnej kompenzácie",
      "na základe písomného súhlasu stavebného úradu",
      "iba so súhlasom komory"
    ],
    answer: 2
  },
  // 201
  {
    question: "Architekt a inžinier po zápise do zoznamu architektov alebo inžinierov uzavrie zmluvu o poistení zodpovednosti za škodu, ktorá by mohla vzniknúť v súvislosti s výkonom jeho činnosti a činnosti jeho zamestnancov:",
    options: [
      "do 3 mesiacov",
      "do 30 dní",
      "do desať dní"
    ],
    answer: 2
  },
  // 202
  {
    question: "Dokumenty, projekty, odborné posudky, odhady, dobrozdania a iné písomnosti, ktoré sú výsledkom činnosti architektov a inžinierov, ak je na nich vlastnoručný podpis pôvodcu a odtlačok jeho úradnej pečiatky, sú pre úradné účely:",
    options: [
      "neverejnými písomnosťami",
      "prílohami katastrálneho operátu",
      "verejnými listinami"
    ],
    answer: 2
  },
  // 203
  {
    question: "Autorizačné osvedčenie stráca platnosť:",
    options: [
      "ak držiteľ tohto osvedčenia odcestoval do zahraničia na dlhšie ako 3 roky",
      "dňom úmrtia uvedenej osoby",
      "dňom vyčiarknutia zo zoznamu architektov alebo zoznamu stavebných inžinierov"
    ],
    answer: 2
  },
  // 204
  {
    question: "Rozhodujúcim predpokladom na zapísanie do zoznamu architektov alebo zoznamu stavebných inžinierov je:",
    options: [
      "predchádzajúce pôsobenie ako zamestnanec komory",
      "absolvovanie aspoň 10-ročnej praxe v stavebníctve",
      "úspešné vykonanie autorizačnej skúšky a zloženie sľubu"
    ],
    answer: 2
  },
  // 205
  {
    question: "Uchádzač, ktorý na autorizačnej skúške neuspel, má právo vykonať odvolaciu autorizačnú skúšku, ak podá komore písomné odvolanie proti výroku skúšobnej komisie v lehote:",
    options: [
      "do 5 dní od oznámenia výsledku skúšky",
      "do 30 dní od oznámenia výsledku skúšky",
      "do 15 dní od oznámenia výsledku skúšky"
    ],
    answer: 2
  },
  // 206
  {
    question: "Architekt a inžinier je povinný oznámiť komore a vrátiť jej autorizačné osvedčenie a pečiatku v prípade, keď nevykonával povolanie, na ktoré má autorizáciu:",
    options: [
      "2 roky",
      "10 rokov",
      "5 rokov"
    ],
    answer: 2
  },
  // 207
  {
    question: "Najvyšším orgánom Slovenskej komory stavebných inžinierov, ktorý tvoria všetci členovia komory, je:",
    options: [
      "Disciplinárna komisia",
      "Rada regionálnych združení",
      "Valné zhromaždenie"
    ],
    answer: 2
  },
  // 208
  {
    question: "Valné zhromaždenie sa môže platne uznášať, ak pozvánka bola preukázateľne zaslaná každému členovi komory najmenej 21 dní pred rokovaním na adresu stáleho sídla ateliéru alebo kancelárie a na zhromaždení je prítomná, vrátane zastúpených, najmenej:",
    options: [
      "jedna pätina členov komory",
      "polovica členov komory",
      "jedna tretina členov komory"
    ],
    answer: 2
  },
  // 209
  {
    question: "Regionálnymi problémami inžinierov sa zaoberajú:",
    options: [
      "stavebné úrady s pôsobnosťou pre kraj",
      "občianske združenia so sídlom v regióne",
      "regionálne združenia komory"
    ],
    answer: 2
  },
  // 210
  {
    question: "Najvyšším výkonným orgánom Slovenskej komory stavebných inžinierov so všeobecnou pôsobnosťou je:",
    options: [
      "Dozorná rada",
      "Disciplinárna komisia",
      "predstavenstvo"
    ],
    answer: 2
  },
  // 211
  {
    question: "Výkonným orgánom Slovenskej komory stavebných inžinierov pre veci týkajúce sa autorizácie a výkonu povolania inžiniera:",
    options: [
      "disciplinárna komisia",
      "valné zhromaždenie",
      "autorizačná komisia"
    ],
    answer: 2
  },
  // 212
  {
    question: "Komoru navonok zastupuje a koná v jej mene vo všetkých veciach, ktoré zákon alebo štatút komory nezveruje inému:",
    options: [
      "tajomník komory",
      "autorizačná komisia",
      "predseda"
    ],
    answer: 2
  },
  // 213
  {
    question: "Návrh na začatie disciplinárneho konania dáva:",
    options: [
      "Dozorná rada",
      "Valné zhromaždenie",
      "predseda komory"
    ],
    answer: 2
  },
  // 214
  {
    question: "Komora financuje svoju činnosť:",
    options: [
      "výlučne z dotácií zo štátneho rozpočtu",
      "výhradne z darov a sponzorských príspevkov",
      "z vlastných príjmov"
    ],
    answer: 2
  },
  // 215
  {
    question: "Škodou na stavbe sa rozumie:",
    options: [
      "nenapraviteľné verejnoprávne znehodnotenie priestoru",
      "strata vlastníckeho práva k pozemku",
      "majetková strata (ujma), ktorú je možné objektívne vyjadriť v peniazoch/eurách"
    ],
    answer: 2
  },
  // 216
  {
    question: "Za znalca v odbore stavebníctvo sa považuje:",
    options: [
      "autorizovaný projektant s praxou nad 20 rokov",
      "fyzická osoba oprávnená vlastným rozhodnutím súdu",
      "iba osoba, ktorá je zapísaná v zozname znalcov (vedenom Ministerstvom spravodlivosti SR)"
    ],
    answer: 2
  },
  // 217
  {
    question: "Základným predpokladom vzniku záväzku ku náhrade škody je:",
    options: [
      "poistenie stavby proti živelným pohromám",
      "písomné priznanie vinníka",
      "objektívne existujúca príčinná súvislosť medzi protiprávnym úkonom a vzniknutou škodou"
    ],
    answer: 2
  },
  // 218
  {
    question: "Pri náhrade škody sa problematika bezdôvodného obohatenia:",
    options: [
      "posudzuje len vo veciach zmlúv o dielo",
      "vôbec neberie do úvahy",
      "musí zohľadniť vždy"
    ],
    answer: 2
  },
  // 219
  {
    question: "Znalecká činnosť (v súlade so zákonom č. 382/2004 Z. z.) v odbore stavebníctvo:",
    options: [
      "je podnikanie, ktoré podlieha registrácii na živnostenskom úrade",
      "podlieha koncesovaniu miestnym orgánom",
      "nie je podnikanie"
    ],
    answer: 2
  },
  // 220
  {
    question: "Rozhodnutie Krajského pamiatkového úradu SR je potrebné vyžiadať si v prípade, ak sa stavebné práce vykonávajú:",
    options: [
      "pri rekreačných chatách v horských oblastiach",
      "na akejkoľvek stavbe financovanej z verejných zdrojov",
      "na pamiatkovo chránenej nehnuteľnosti alebo na pamiatkovo chránenom území, aj keď samotná predmetná nehnuteľnosť nie je predmetom pamiatkovej ochrany"
    ],
    answer: 2
  },
  // 221
  {
    question: "Reštaurátorské práce môže vykonávať:",
    options: [
      "ktokoľvek s patričnými skúsenosťami a vzdelaním v odbore dejín umenia",
      "len vybraná firma, ktorá sa preukáže 10-ročnou praxou",
      "člen Komory reštaurátorov alebo vysoká škola v rámci študijného programu"
    ],
    answer: 2
  },
  // 222
  {
    question: "O povinnosti vykonať archeologický výskum rozhoduje:",
    options: [
      "Pamiatkový úrad SR centrálny",
      "Ministerstvo kultúry SR",
      "Krajský pamiatkový úrad"
    ],
    answer: 2
  },
  // 223
  {
    question: "Rozhodnutie Krajského pamiatkového úradu SR k stavebnej obnove kultúrnej pamiatky je vlastník povinný vyžiadať si:",
    options: [
      "až po vykonaní stavebných prác",
      "iba v prípade, že ide o pamiatku národného významu",
      "pred začatím samotných prác stavebnej obnovy"
    ],
    answer: 2
  },
  // 224
  {
    question: "Právom pamiatkového dohľadu, ktorý vykonáva Krajský pamiatkový úrad SR, je:",
    options: [
      "vyvlastniť pamiatku vo verejnom záujme",
      "nahradiť úlohu stavebného úradu vo veci vydania povolenia",
      "oznámiť stavebnému úradu zistené nedostatky a ak by mohlo dôjsť k ohrozeniu pamiatky, svojím rozhodnutím zastaviť stavbu"
    ],
    answer: 2
  },
  // 225
  {
    question: "Ak pri stavebných prácach príde k nepredvídaným nálezom (archeologickým, kultúrne cenných predmetov, detailov stavby a pod.), je ten, kto práce vykonáva, povinný:",
    options: [
      "iba vyhotoviť fotografickú dokumentáciu pre vlastné potreby",
      "naložiť s nálezom podľa vlastného uváženia, ak nejde o národnú pamiatku",
      "nález bezodkladne ohlásiť stavebnému úradu a príslušnému pracovisku Pamiatkového úradu SR a prijať opatrenia na jeho ochranu"
    ],
    answer: 2
  },
  // 226
  {
    question: "Podkladom pre rozhodnutie Krajského pamiatkového úradu SR je dokumentácia obsahujúca:",
    options: [
      "stavebný rozpočet bez popisu kultúrnej hodnoty pamiatky",
      "výlučne fotokópie katastrálnych listov",
      "identifikačné údaje, majetkovoprávne údaje o kultúrnej pamiatke, jej plánované budúce využívanie a špecifikáciu predpokladaných zmien pamiatky"
    ],
    answer: 2
  },
  // 227
  {
    question: "Pod pamiatkovým fondom sa rozumie:",
    options: [
      "len súbor hnuteľných predmetov v majetku múzeí a galérií",
      "všetky predmety a budovy, ktoré majú viac ako 100 rokov",
      "súbor hnuteľných a nehnuteľných vecí vyhlásený podľa zákona č. 49/2002 Z. z. za národné kultúrne pamiatky, pamiatkové rezervácie a pamiatkové zóny, aj keď sa len začalo konanie o ich vyhlásenie"
    ],
    answer: 2
  },
  // 228
  {
    question: "Krajský pamiatkový úrad v prípade obnovy nehnuteľnej kultúrnej pamiatky vydáva tieto druhy úradných dokumentov:",
    options: [
      "výhradne správu o archeologických nálezoch",
      "písomné upozornenie, ktoré nie je záväzné",
      "záväzné stanovisko alebo rozhodnutie k plánovanému zámeru obnovy podľa povahy veci a stupňa prípravy obnovy"
    ],
    answer: 2
  },
  // 229
  {
    question: "Pred začatím obnovy národnej kultúrnej pamiatky je vlastník povinný Krajskému pamiatkovému úradu predložiť žiadosť, ktorá obsahuje:",
    options: [
      "len písomný súhlas starostu obce",
      "finančné krytie z verejných zdrojov",
      "zámer obnovy, identifikačné a majetkovoprávne údaje o národnej kultúrnej pamiatke, plánované budúce využitie a špecifikáciu jej predpokladaných zmien"
    ],
    answer: 2
  },
  // 230
  {
    question: "Pamiatky sú na Slovensku chránené podľa:",
    options: [
      "zákona č. 50/1976 Zb. (stavebný zákon)",
      "zákona č. 245/2008 Z. z. o výchove a vzdelávaní",
      "zákona č. 49/2002 Z. z. o ochrane pamiatkového fondu v znení neskorších predpisov"
    ],
    answer: 2
  },
  // 231
  {
    question: "Krajský pamiatkový úrad sa vyjadruje k stavebnej činnosti na:",
    options: [
      "stavbách, ktoré hraničia s pamiatkovým územím",
      "ľubovoľnej nehnuteľnosti, ak to navrhne obec",
      "všetkých nehnuteľných Národných kultúrnych pamiatkach a na všetkých objektoch v pamiatkovom území alebo ochrannom pásme"
    ],
    answer: 2
  },
  // 232
  {
    question: "Zásada reverzibility znamená, že:",
    options: [
      "je možné použiť pri oprave konštrukcie akékoľvek chemické prípravky",
      "je možné pri obnove pamiatky nahradiť starý materiál modernými plastmi",
      "po ukončení stavebného zásahu sa dá opravovaná konštrukcia vrátiť do približne pôvodného stavu"
    ],
    answer: 2
  },
  // 233
  {
    question: "Zásada kompatibility znamená, že:",
    options: [
      "všetky stavebné práce musia byť vykonané rovnakou firmou",
      "pri pamiatke sa nové materiály musia vzhľadom odlišovať",
      "použité stavebné materiály majú zlučiteľné stavebno-fyzikálne vlastnosti s pôvodnou stavebnou hmotou pamiatky"
    ],
    answer: 2
  },
  // 234
  {
    question: "Nekalou súťažou podľa Obchodného zákonníka je:",
    options: [
      "zverejňovanie osobných údajov zamestnancov konkurenčnej firmy",
      "oznamovanie ceny za služby formou verejnej vyhlášky",
      "konanie v rozpore s dobrými mravmi súťaže a spôsobilé privodiť ujmu iným súťažiacim alebo spotrebiteľom"
    ],
    answer: 2
  },
  // 235
  {
    question: "Všeobecná doba premlčania v záväzkových vzťahoch podľa Obchodného zákonníka je:",
    options: [
      "tri roky",
      "päť rokov",
      "štyri roky"
    ],
    answer: 2
  },
  // 236
  {
    question: "Zmluvy podľa Obchodného zákonníka musia byť uzavreté písomne:",
    options: [
      "vo všetkých prípadoch, inak sú neplatné",
      "vždy, ak si to vyžiada obec alebo mesto",
      "len keď to vyplýva zo zákona alebo aspoň jedna strana prejaví vôľu na písomné uzavretie"
    ],
    answer: 2
  },
  // 237
  {
    question: "Záručná doba za akosť v zmluve o dielo podľa Obchodného zákonníka:",
    options: [
      "môže byť stanovená iba ústnym dohovorom bez písomného potvrdenia",
      "nie je potrebná, pretože sa uplatňujú všeobecné reklamačné podmienky",
      "musí byť dohodnutá písomne v zmluve alebo poskytnutá vyhlásením zhotoviteľa"
    ],
    answer: 2
  },
  // 238
  {
    question: "Cena v kúpnej zmluve podľa Obchodného zákonníka:",
    options: [
      "je vždy povinnou prílohou zmluvy o dielo",
      "musí byť stanovená štátom",
      "musí byť dohodnutá, iba ak zo zmluvy nevyplýva úmysel uzavrieť zmluvu bez dohody o cene"
    ],
    answer: 2
  },
  // 239
  {
    question: "Obchodný zákonník:",
    options: [
      "určuje, že návrh zmluvy musí vždy predkladať objednávateľ",
      "stanovuje povinnosť určiť cenu pre všetky typy zmlúv o spolupráci",
      "nestanovuje, kto má návrh zmluvy predložiť"
    ],
    answer: 2
  },
  // 240
  {
    question: "Verejnú obchodnú spoločnosť môžu založiť:",
    options: [
      "iba traja alebo viacerí spoločníci",
      "akékoľvek fyzické osoby bez obmedzenia počtu",
      "najmenej dvaja spoločníci"
    ],
    answer: 2
  },
  // 241
  {
    question: "Spoločnosť s ručením obmedzeným:",
    options: [
      "môže založiť len jediný spoločník vždy s neobmedzeným ručením",
      "môže založiť maximálne 10 spoločníkov",
      "môže založiť najviac 50 spoločníkov"
    ],
    answer: 2
  },
  // 242
  {
    question: "Konateľ spoločnosti s ručením obmedzeným:",
    options: [
      "musí mať vysokoškolské vzdelanie ekonomického smeru",
      "je viazaný pokynmi dozorného orgánu obce",
      "je štatutárnym orgánom spoločnosti, ktorého oprávnenie konať v mene spoločnosti zákon neobmedzuje"
    ],
    answer: 2
  },
  // 243
  {
    question: "V pracovnej zmluve je zamestnávateľ povinný so zamestnancom dohodnúť podstatné náležitosti, ktorými sú:",
    options: [
      "pracovný čas a povinnosť mlčanlivosti",
      "skúšobnú dobu a povinnosť dodržiavať interný poriadok",
      "druh práce, miesto výkonu práce, deň nástupu do práce, mzdové podmienky"
    ],
    answer: 2
  },
  // 244
  {
    question: "Podľa Občianskeho zákonníka pri zhotovení stavby je:",
    options: [
      "dvojročná záručná doba",
      "päťročná záručná doba",
      "trojročná záručná doba"
    ],
    answer: 2
  },
  // 245
  {
    question: "Rozsah náhrady škody predstavuje:",
    options: [
      "len náklady na odstránenie škody",
      "všetky prípadné výdavky súvisiace s poistením",
      "skutočnú škodu a ušlý zisk"
    ],
    answer: 2
  },
  // 246
  {
    question: "Právny úkon podľa Občianskeho zákonníka je neplatný:",
    options: [
      "iba ak účastník nemá trvalé bydlisko v Slovenskej republike",
      "pokiaľ nie je zaregistrovaný na miestnom úrade",
      "ak odporuje zákonu, obchádza ho alebo sa prieči dobrým mravom"
    ],
    answer: 2
  },
  // 247
  {
    question: "Podľa Občianskeho zákonníka pri zmluve o dielo cena podľa rozpočtu:",
    options: [
      "môže byť kedykoľvek zvýšená zhotoviteľom bez súhlasu objednávateľa",
      "nie je pre žiadnu stranu záväzná",
      "nesmie byť bez súhlasu objednávateľa zvýšená"
    ],
    answer: 2
  },
  // 248
  {
    question: "Verejnou prácou podľa zákona č. 254/1998 Z. z. o verejných prácach:",
    options: [
      "je akákoľvek stavba zabezpečovaná zahraničným investorom",
      "sú len tie stavby, ktoré presahujú investičný náklad 1 mil. eur",
      "je stavba alebo činnosť na prípravu a uskutočňovanie stavby financovanej celkom alebo sčasti z verejných investícií"
    ],
    answer: 2
  },
  // 249
  {
    question: "Zákon č. 18/1996 Z. z. v platnom znení definuje pojem „cena“ ako:",
    options: [
      "dohodu o rozsahu prác a lehôt výstavby",
      "len orientačný odhad nákladov v stavebnom rozpočte",
      "peňažnú sumu dohodnutú pri nákupe a predaji tovaru, prípadne tarifu"
    ],
    answer: 2
  },
  // 250
  {
    question: "Dohodou o cene podľa zákona č. 18/1996 Z. z. v platnom znení je:",
    options: [
      "jednostranné vyhlásenie predávajúceho o cene bez dohody kupujúceho",
      "dohoda o zaplatení faktúry až po zrealizovaní stavby",
      "dohoda o výške ceny alebo o spôsobe, ako sa cena vytvorí, pričom spôsob musí cenu dostatočne určiť; dohoda vznikne aj zaplatením ceny, ktorú predávajúci požadoval"
    ],
    answer: 2
  },
  // 251
  {
    question: "Rozpočet stavebného objektu vzniká:",
    options: [
      "z priamej objednávky investora bez ocenenia",
      "porovnaním cien podobnej stavby v regióne",
      "na základe úplného výkazu výmer ocenením všetkých položiek jednotkovými cenami"
    ],
    answer: 2
  },
  // 252
  {
    question: "V jednotkovej cene stavebnej práce podľa zaužívaného kalkulačného vzorca je obsiahnuté:",
    options: [
      "len cena materiálu a mzdy (bez strojov, réžií a zisku)",
      "náklady na geodetické zameranie, zápis do katastra a notárske poplatky",
      "náklady na materiál, priame mzdy, prevádzku stavebných strojov, ostatné priame náklady, výrobnú réžiu, správnu réžiu a zisk"
    ],
    answer: 2
  },
  // 253
  {
    question: "Štruktúra rozpočtu stavebného objektu podľa Triednika stavebných konštrukcií a prác (TSKP) pri zostavovaní výkazu výmer je:",
    options: [
      "len skupina PSV (pridružená stavebná výroba) a VRN (vedľajšie rozpočtové náklady)",
      "rozpis na konštrukčné detaily bez určenia rozpočtových nákladov",
      "základné rozpočtové náklady (ZRN) v členení HSV, PSV, M a vedľajšie rozpočtové náklady (VRN)"
    ],
    answer: 2
  },
  // 254
  {
    question: "Za spracovanie výkazu výmer pri obstarávaní zákaziek na uskutočnenie stavebných prác podľa zákona č. 343/2015 Z. z. o verejnom obstarávaní a o zmene a doplnení niektorých zákonov v znení neskorších predpisov je zodpovedný:",
    options: [
      "zhotoviteľ, ktorý si jednotlivo navrhne ceny za práce",
      "kontrolór obce a miestna samospráva",
      "obstarávateľ (verejný obstarávateľ), aby bolo možné porovnať cenové ponuky"
    ],
    answer: 2
  },
  // 255
  {
    question: "Podľa zákona č. 343/2015 Z. z. o verejnom obstarávaní sú postupy vo verejnom obstarávaní pri nadlimitných zákazkách:",
    options: [
      "verejná dražba, elektronická aukcia a priame objednávky",
      "výlučne užšia súťaž pre domácich uchádzačov",
      "verejná súťaž, užšia súťaž, rokovacie konanie so zverejnením, súťažný dialóg, inovatívne partnerstvo, priame rokovacie konanie"
    ],
    answer: 2
  },
  // 256
  {
    question: "Štruktúru ceny verejnej práce v zmysle zákona č. 254/1998 Z. z. o verejných prácach a vyhlášky č. 83/2008 Z. z. tvorí:",
    options: [
      "len cena stavebného materiálu a miezd",
      "rozpis celkových nákladov bez vyvolaných investícií",
      "osem častí: príprava, stavebná časť, technologická časť, zariadenie staveniska, vyvolané investície, výkup pozemkov a odvody za odňatie pôdy, rezerva a iné investície"
    ],
    answer: 2
  },
  // 257
  {
    question: "Zmluva o dielo uzavretá podľa Obchodného zákonníka č. 513/1991 Zb. v aktuálnom znení musí obsahovať:",
    options: [
      "písomný súhlas starostu obce",
      "termíny kolaudačného konania",
      "cenu stavebného diela alebo spôsob jej určenia"
    ],
    answer: 2
  },
  // 258
  {
    question: "Orientačná cena stavebného objektu prepočtom sa vypočíta:",
    options: [
      "z paušálneho poplatku za 1 m² zastavanej plochy podľa obce",
      "ako priemerná hodnota štatistických stavebných cien v danom kraji",
      "súčinom rozsahu stavebného objektu v merných jednotkách a cenového ukazovateľa, aktualizovaného na požadovanú cenovú úroveň"
    ],
    answer: 2
  },
  // 259
  {
    question: "Fakturácia naviac prác je možná:",
    options: [
      "iba ak neprekročí 10 % z celkovej ceny diela",
      "bez akéhokoľvek odsúhlasenia investora",
      "podľa odsúhlaseného rozpočtu k dodatku alebo podľa dodatkov s pevnou cenou"
    ],
    answer: 2
  },
  // 260
  {
    question: "Náklady na inžiniersku činnosť stavby sú:",
    options: [
      "výdavky na projektovú dokumentáciu, ktoré platí investor priamo projektantovi",
      "rezervné zdroje na odstraňovanie envirozáťaží",
      "všetky náklady na technickú pomoc investorovi a činnosti poverenej osoby pri príprave a realizácii stavby"
    ],
    answer: 2
  },
  // 261
  {
    question: "Triednik stavebných konštrukcií a prác (TSKP) zabezpečuje:",
    options: [
      "rozdelenie nákladov stavby podľa zdrojov financovania",
      "detailné členenie strojného vybavenia na stavbe",
      "jednotné triedenie čiastkovej stavebnej produkcie podľa skupiny stavebných dielov"
    ],
    answer: 2
  },
  // 262
  {
    question: "Aký je rozdiel v kalkulovaní priamych a nepriamych nákladov v jednotkovej cene stavebnej práce:",
    options: [
      "priame náklady sa určia paušálne, nepriame presnou kalkuláciou",
      "nepriame náklady zahŕňajú najmä materiál a prácu, priame zahŕňajú réžie",
      "priame náklady sa viažu ku konkrétnej mernej jednotke, nepriame sa kalkulujú prirážkou"
    ],
    answer: 2
  },
  // 263
  {
    question: "Pri výpočte nákladov na zariadenie staveniska percentuálnou sadzbou sú základňou pre výpočet:",
    options: [
      "ušlé zisky iných subjektov",
      "réžia investora",
      "základné rozpočtové náklady stavebného objektu"
    ],
    answer: 2
  },
  // 264
  {
    question: "Formy fakturácie používané v stavebníctve sú:",
    options: [
      "jednorazové faktúry až po ukončení všetkých stavebných prác",
      "len predbežné platby s vyúčtovaním po 1 roku",
      "preddavky, splátky, faktúry a konečná (výsledná) faktúra"
    ],
    answer: 2
  },
  // 265
  {
    question: "V jednotkovej cene stavebnej práce réžie (výrobná a správna) sú:",
    options: [
      "priamym nákladom",
      "započítané v nákladoch na materiál",
      "nepriamym nákladom"
    ],
    answer: 2
  },
  // 266
  {
    question: "Triednik stavebných prác (TSP) je:",
    options: [
      "určený len pre kategorizáciu priemyselných stavieb",
      "povinný dokument stavebného úradu pre vydanie územného rozhodnutia",
      "jednotné triedenie čiastkovej stavebnej produkcie podľa „činnosti“"
    ],
    answer: 2
  },
  // 267
  {
    question: "Zákon č. 60/2018 Z. z. o technickej normalizácii v znení neskorších predpisov upravuje pôsobnosť:",
    options: [
      "Ministerstva dopravy v oblasti projektovej dokumentácie diaľnic",
      "Ministerstva hospodárstva SR v oblasti kontroly stavebných výrobkov",
      "Úradu pre normalizáciu, metrológiu a skúšobníctvo SR v oblasti technickej normalizácie"
    ],
    answer: 2
  },
  // 268
  {
    question: "Úrad pre normalizáciu, metrológiu a skúšobníctvo Slovenskej republiky je podľa zákona č. 60/2018 Z. z.:",
    options: [
      "jednotkou civilnej ochrany vo výstavbe",
      "podriadenou organizáciou Ministerstva obrany SR",
      "slovenským národným normalizačným orgánom"
    ],
    answer: 2
  },
  // 269
  {
    question: "Podľa zákona č. 60/2018 Z. z. o technickej normalizácii je slovenskou technickou normou:",
    options: [
      "norma, ktorú vydal ktorýkoľvek výrobca na Slovensku",
      "odporúčanie zahraničného subjektu, ktoré sa automaticky uplatňuje",
      "technická norma prijatá ÚNMS SR a zaradená do sústavy STN"
    ],
    answer: 2
  },
  // 270
  {
    question: "Slovenská technická norma má podľa zákona č. 60/2018 Z. z. značku:",
    options: [
      "SE",
      "TSN",
      "STN"
    ],
    answer: 2
  },
  // 271
  {
    question: "Dodržiavanie slovenských technických noriem je podľa zákona č. 60/2018 Z. z.:",
    options: [
      "povinné pri všetkých stavbách nad 100 m²",
      "povinné iba pri verejných prácach",
      "dobrovoľné"
    ],
    answer: 2
  },
  // 272
  {
    question: "Podľa zákona č. 60/2018 Z. z. je spôsob prijatia európskej normy alebo iného normalizačného dokumentu:",
    options: [
      "vždy len povinný preklad do štátneho jazyka a priloženie anglickej verzie",
      "elektronické sprístupnenie na webstránke Úradu vlády",
      "preklad do štátneho jazyka, alebo prevzatie bez prekladu, prípadne s anotáciou"
    ],
    answer: 2
  },
  // 273
  {
    question: "Podľa zákona č. 60/2018 Z. z. názov „Slovenská technická norma“ a značka „STN“:",
    options: [
      "môže použiť ktokoľvek na označenie odporúčaného technického postupu",
      "je možné použiť aj v patentovom konaní pre technologické inovácie",
      "nesmie byť použitý pre iný dokument"
    ],
    answer: 2
  },
  // 274
  {
    question: "Podľa zákona č. 60/2018 Z. z. sa slovenská technická norma poskytuje:",
    options: [
      "bezodplatne prostredníctvom elektronickej knihy",
      "iba v čase konania verejných stavebných zákaziek",
      "za úhradu"
    ],
    answer: 2
  },
  // 275
  {
    question: "Technická norma je podľa Nariadenia Európskeho parlamentu a Rady (EÚ) č. 1025/2012:",
    options: [
      "povinná smernica EÚ pre všetky výrobky",
      "administratívne odporúčanie, ktoré členské krajiny musia vydať ako zákon",
      "technická špecifikácia na opakované použitie, prijatá uznaným normalizačným orgánom, s dobrovoľným dodržiavaním"
    ],
    answer: 2
  },
  // 276
  {
    question: "Vyhláška č. 76/2019 Z. z. o výške úhrady za poskytovanie technickej normy definuje citáciu podstatnej časti STN alebo TNI ako:",
    options: [
      "doslovné uvedenie ľubovoľného počtu strán normy",
      "opis dôležitých častí normy bez uvedenia zdroja",
      "doslovné uvedenie viac ako jednej strany A4 a max. 20 % z rozsahu normy"
    ],
    answer: 2
  },
  // 277
  {
    question: "Podľa nariadenia Európskeho parlamentu a Rady (EÚ) č. 1025/2012 skratka CEN znamená:",
    options: [
      "Centrálne európske nariadenie",
      "Centrum environmentálnych noriem",
      "Európsky výbor pre normalizáciu"
    ],
    answer: 2
  },
  // 278
  {
    question: "Podľa nariadenia Európskeho parlamentu a Rady (EÚ) č. 1025/2012 jedným zo základných princípov normalizačnej praxe je:",
    options: [
      "absolútna dôvernosť",
      "výlučná povinnosť všetkých subjektov EÚ normy nakupovať",
      "transparentnosť"
    ],
    answer: 2
  },
  // 279
  {
    question: "Podľa nariadenia Európskeho parlamentu a Rady (EÚ) č. 1025/2012 má Európsky výbor pre normalizáciu v elektrotechnike skratku:",
    options: [
      "ELECTRO-EUR",
      "EENE",
      "CENELEC"
    ],
    answer: 2
  },
  // 280
  {
    question: "Podľa vnútorných predpisov európskych normalizačných organizácií (CEN/CENELEC) ich členovia:",
    options: [
      "môžu dobrovoľne prevziať európske normy podľa svojich možností",
      "nesmú uplatniť vlastné národné normy v prípade nesúladu",
      "musia prevziať európske normy (EN) ako identické národné normy a zrušiť tie národné normy, ktoré sú s EN v rozpore"
    ],
    answer: 2
  },
  // 281
  {
    question: "Základné požiadavky na stavby sa uvádzajú:",
    options: [
      "v ústave SR",
      "v smernici Ministerstva hospodárstva SR",
      "v nariadení (EÚ) č. 305/2011, ktorým sa ustanovujú harmonizované podmienky uvádzania stavebných výrobkov na trh"
    ],
    answer: 2
  },
  // 282
  {
    question: "V nariadení Európskeho parlamentu a Rady (EÚ) č. 305/2011 sa ustanovujú:",
    options: [
      "len pravidlá pre stavebný dozor a kontrolu stavieb",
      "sankcie za nedodržiavanie stavebného zákona členskými štátmi",
      "podmienky uvádzania stavebných výrobkov na trh, spôsob vyjadrenia parametrov výrobkov a používanie označenia CE"
    ],
    answer: 2
  },
  // 283
  {
    question: "Problematikou uvádzania stavebných výrobkov na trh Slovenskej republiky sa zaoberá:",
    options: [
      "zákon o obecnom zriadení",
      "zákon o správnom konaní",
      "zákon č. 133/2013 Z. z. o stavebných výrobkoch v znení neskorších predpisov"
    ],
    answer: 2
  },
  // 284
  {
    question: "Čo sú stavebné výrobky:",
    options: [
      "produkty určené výhradne na dočasné zastrešenie",
      "akékoľvek výrobky podliehajúce colnému konaniu",
      "výrobky alebo zostavy určené na trvalé zabudovanie do stavieb, pričom ich parametre ovplyvňujú základné požiadavky na stavby"
    ],
    answer: 2
  },
  // 285
  {
    question: "Pri bežnej údržbe počas ekonomicky primeraného obdobia životnosti musia stavby spĺňať:",
    options: [
      "požiadavky daňovej správy",
      "stanovy komory inžinierov",
      "základné požiadavky na stavby"
    ],
    answer: 2
  },
  // 286
  {
    question: "Trvalo udržateľné využívanie prírodných zdrojov:",
    options: [
      "nemá žiadny súvis so stavebníctvom",
      "je len dobrovoľným princípom bez legislatívnej úpravy",
      "je jednou zo 7 základných požiadaviek na stavby"
    ],
    answer: 2
  }
];

// Koniec súboru data.js
