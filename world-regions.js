// world-regions.js
// Complete country → states/provinces/regions dataset
// Declared with var (not const) so they are globally accessible
// from index.html's inline <script> tag after this file loads.

var WORLD = {
  // ── Americas ────────────────────────────────────────────────────────────
  US: {
    name: "United States", sym: "$", co2: 0.42, clim: "mixed", def: 2200,
    reg: [
      "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
      "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
      "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
      "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada",
      "New Hampshire","New Jersey","New Mexico","New York","North Carolina",
      "North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
      "South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
      "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
      "Washington D.C."
    ]
  },
  CA: {
    name: "Canada", sym: "C$", co2: 0.13, clim: "cold", def: 2500,
    reg: [
      "Alberta","British Columbia","Manitoba","New Brunswick",
      "Newfoundland and Labrador","Northwest Territories","Nova Scotia","Nunavut",
      "Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon"
    ]
  },
  MX: {
    name: "Mexico", sym: "MXN ", co2: 0.48, clim: "hot", def: 18000,
    reg: [
      "Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas",
      "Chihuahua","Coahuila","Colima","Durango","Guanajuato","Guerrero","Hidalgo",
      "Jalisco","Mexico City","Michoacán","Morelos","México","Nayarit","Nuevo León",
      "Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa",
      "Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"
    ]
  },
  BR: {
    name: "Brazil", sym: "R$", co2: 0.09, clim: "hot", def: 4800,
    reg: [
      "Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal",
      "Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul",
      "Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí",
      "Rio Grande do Norte","Rio Grande do Sul","Rio de Janeiro","Rondônia",
      "Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"
    ]
  },
  AR: {
    name: "Argentina", sym: "ARS ", co2: 0.35, clim: "mixed", def: 120000,
    reg: [
      "Buenos Aires","Buenos Aires City","Catamarca","Chaco","Chubut","Córdoba",
      "Corrientes","Entre Ríos","Formosa","Jujuy","La Pampa","La Rioja","Mendoza",
      "Misiones","Neuquén","Río Negro","Salta","San Juan","San Luis",
      "Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego","Tucumán"
    ]
  },
  CL: {
    name: "Chile", sym: "CLP ", co2: 0.41, clim: "mixed", def: 600000,
    reg: [
      "Arica and Parinacota","Tarapacá","Antofagasta","Atacama","Coquimbo",
      "Valparaíso","Metropolitan","O'Higgins","Maule","Ñuble","Biobío",
      "La Araucanía","Los Ríos","Los Lagos","Aysén","Magallanes"
    ]
  },
  CO: {
    name: "Colombia", sym: "COP ", co2: 0.18, clim: "hot", def: 3600000,
    reg: [
      "Amazonas","Antioquia","Arauca","Atlántico","Bolívar","Boyacá","Caldas",
      "Caquetá","Casanare","Cauca","Cesar","Chocó","Córdoba","Cundinamarca",
      "Bogotá D.C.","Guainía","Guaviare","Huila","La Guajira","Magdalena","Meta",
      "Nariño","Norte de Santander","Putumayo","Quindío","Risaralda",
      "San Andrés y Providencia","Santander","Sucre","Tolima","Valle del Cauca",
      "Vaupés","Vichada"
    ]
  },
  PE: {
    name: "Peru", sym: "S/", co2: 0.24, clim: "mixed", def: 3600,
    reg: [
      "Amazonas","Áncash","Apurímac","Arequipa","Ayacucho","Cajamarca","Callao",
      "Cusco","Huancavelica","Huánuco","Ica","Junín","La Libertad","Lambayeque",
      "Lima","Loreto","Madre de Dios","Moquegua","Pasco","Piura","Puno",
      "San Martín","Tacna","Tumbes","Ucayali"
    ]
  },
  VE: { name: "Venezuela", sym: "VES ", co2: 0.22, clim: "hot", def: 800,
    reg: ["Amazonas","Anzoátegui","Apure","Aragua","Barinas","Bolívar","Carabobo",
      "Cojedes","Delta Amacuro","Distrito Capital","Falcón","Guárico","Lara",
      "Mérida","Miranda","Monagas","Nueva Esparta","Portuguesa","Sucre","Táchira",
      "Trujillo","Vargas","Yaracuy","Zulia"] },
  EC: { name: "Ecuador", sym: "$", co2: 0.21, clim: "hot", def: 1200,
    reg: ["Azuay","Bolívar","Cañar","Carchi","Chimborazo","Cotopaxi","El Oro",
      "Esmeraldas","Galápagos","Guayas","Imbabura","Loja","Los Ríos","Manabí",
      "Morona Santiago","Napo","Orellana","Pastaza","Pichincha","Santa Elena",
      "Santo Domingo de los Tsáchilas","Sucumbíos","Tungurahua","Zamora Chinchipe"] },
  BO: { name: "Bolivia", sym: "Bs", co2: 0.31, clim: "mixed", def: 1800,
    reg: ["Beni","Chuquisaca","Cochabamba","La Paz","Oruro","Pando","Potosí","Santa Cruz","Tarija"] },
  PY: { name: "Paraguay", sym: "₲", co2: 0.04, clim: "hot", def: 2400000,
    reg: ["Alto Paraguay","Alto Paraná","Amambay","Asunción","Boquerón","Caaguazú",
      "Caazapá","Canindeyú","Central","Concepción","Cordillera","Guairá","Itapúa",
      "Misiones","Ñeembucú","Paraguarí","Presidente Hayes","San Pedro"] },
  UY: { name: "Uruguay", sym: "UYU ", co2: 0.05, clim: "temperate", def: 15000,
    reg: ["Artigas","Canelones","Cerro Largo","Colonia","Durazno","Flores","Florida",
      "Lavalleja","Maldonado","Montevideo","Paysandú","Río Negro","Rivera","Rocha",
      "Salto","San José","Soriano","Tacuarembó","Treinta y Tres"] },
  // ── Caribbean ──────────────────────────────────────────────────────────
  CU: { name: "Cuba", sym: "CUP ", co2: 0.36, clim: "hot", def: 2400,
    reg: ["Artemisa","Camagüey","Ciego de Ávila","Cienfuegos","Granma","Guantánamo",
      "Holguín","Isla de la Juventud","La Habana","Las Tunas","Matanzas","Mayabeque",
      "Pinar del Río","Sancti Spíritus","Santiago de Cuba","Villa Clara"] },
  JM: { name: "Jamaica", sym: "J$", co2: 0.61, clim: "hot", def: 180000,
    reg: ["Clarendon","Hanover","Kingston","Manchester","Portland","Saint Andrew",
      "Saint Ann","Saint Catherine","Saint Elizabeth","Saint James","Saint Mary",
      "Saint Thomas","Trelawny","Westmoreland"] },
  // ── Europe ─────────────────────────────────────────────────────────────
  GB: {
    name: "United Kingdom", sym: "£", co2: 0.23, clim: "temperate", def: 1800,
    reg: [
      // England regions
      "East Midlands","East of England","Greater London","North East England",
      "North West England","South East England","South West England",
      "West Midlands","Yorkshire and the Humber",
      // Devolved
      "Scotland","Wales","Northern Ireland"
    ]
  },
  DE: {
    name: "Germany", sym: "€", co2: 0.38, clim: "temperate", def: 2100,
    reg: [
      "Baden-Württemberg","Bavaria","Berlin","Brandenburg","Bremen","Hamburg",
      "Hesse","Lower Saxony","Mecklenburg-Vorpommern","North Rhine-Westphalia",
      "Rhineland-Palatinate","Saarland","Saxony","Saxony-Anhalt",
      "Schleswig-Holstein","Thuringia"
    ]
  },
  FR: {
    name: "France", sym: "€", co2: 0.06, clim: "temperate", def: 1600,
    reg: [
      "Auvergne-Rhône-Alpes","Bourgogne-Franche-Comté","Brittany","Centre-Val de Loire",
      "Corsica","Grand Est","Hauts-de-France","Île-de-France","Normandy",
      "Nouvelle-Aquitaine","Occitanie","Pays de la Loire","Provence-Alpes-Côte d'Azur"
    ]
  },
  ES: {
    name: "Spain", sym: "€", co2: 0.21, clim: "mixed", def: 1400,
    reg: [
      "Andalusia","Aragon","Asturias","Balearic Islands","Basque Country",
      "Canary Islands","Cantabria","Castilla-La Mancha","Castile and León",
      "Catalonia","Extremadura","Galicia","La Rioja","Community of Madrid",
      "Region of Murcia","Navarre","Valencian Community",
      "Ceuta","Melilla"
    ]
  },
  IT: {
    name: "Italy", sym: "€", co2: 0.24, clim: "mixed", def: 1700,
    reg: [
      "Abruzzo","Aosta Valley","Apulia","Basilicata","Calabria","Campania",
      "Emilia-Romagna","Friuli Venezia Giulia","Lazio","Liguria","Lombardy",
      "Marche","Molise","Piedmont","Sardinia","Sicily","Trentino-South Tyrol",
      "Tuscany","Umbria","Veneto"
    ]
  },
  NL: { name: "Netherlands", sym: "€", co2: 0.45, clim: "temperate", def: 1900,
    reg: ["Drenthe","Flevoland","Friesland","Gelderland","Groningen","Limburg",
      "North Brabant","North Holland","Overijssel","South Holland","Utrecht","Zeeland"] },
  BE: { name: "Belgium", sym: "€", co2: 0.17, clim: "temperate", def: 1800,
    reg: ["Antwerp","Brussels","East Flanders","Flemish Brabant","Hainaut",
      "Liège","Limburg","Luxembourg","Namur","Walloon Brabant","West Flanders"] },
  CH: { name: "Switzerland", sym: "CHF", co2: 0.04, clim: "cold", def: 2800,
    reg: ["Aargau","Appenzell Ausserrhoden","Appenzell Innerrhoden","Basel-Landschaft",
      "Basel-Stadt","Bern","Fribourg","Geneva","Glarus","Graubünden","Jura",
      "Lucerne","Neuchâtel","Nidwalden","Obwalden","Schaffhausen","Schwyz",
      "Solothurn","St. Gallen","Thurgau","Ticino","Uri","Valais","Vaud","Zug","Zurich"] },
  AT: { name: "Austria", sym: "€", co2: 0.16, clim: "cold", def: 2000,
    reg: ["Burgenland","Carinthia","Lower Austria","Salzburg","Styria",
      "Tyrol","Upper Austria","Vienna","Vorarlberg"] },
  PL: { name: "Poland", sym: "PLN ", co2: 0.77, clim: "cold", def: 4800,
    reg: ["Greater Poland","Holy Cross","Kuyavian-Pomeranian","Lesser Poland",
      "Łódź","Lower Silesian","Lublin","Lubusz","Masovian","Opole","Pomeranian",
      "Silesian","Subcarpathian","Podlaskie","Warmian-Masurian","West Pomeranian"] },
  SE: { name: "Sweden", sym: "SEK ", co2: 0.05, clim: "cold", def: 18000,
    reg: ["Blekinge","Dalarna","Gävleborg","Gotland","Halland","Jämtland",
      "Jönköping","Kalmar","Kronoberg","Norrbotten","Örebro","Östergötland",
      "Skåne","Södermanland","Stockholm","Uppsala","Värmland","Västerbotten",
      "Västernorrland","Västmanland","Västra Götaland"] },
  NO: { name: "Norway", sym: "NOK ", co2: 0.02, clim: "cold", def: 22000,
    reg: ["Agder","Innlandet","Møre og Romsdal","Nordland","Oslo",
      "Rogaland","Troms og Finnmark","Trøndelag","Vestfold og Telemark","Vestland","Viken"] },
  DK: { name: "Denmark", sym: "DKK ", co2: 0.16, clim: "temperate", def: 16000,
    reg: ["Capital","Central Denmark","North Denmark","Zealand","Southern Denmark"] },
  FI: { name: "Finland", sym: "€", co2: 0.10, clim: "cold", def: 1900,
    reg: ["Central Finland","Central Ostrobothnia","Kainuu","Kymenlaakso","Lapland",
      "North Karelia","North Ostrobothnia","North Savo","Ostrobothnia","Päijät-Häme",
      "Pirkanmaa","Satakunta","South Karelia","South Ostrobothnia","South Savo",
      "Southwest Finland","Tavastia Proper","Uusimaa"] },
  PT: { name: "Portugal", sym: "€", co2: 0.25, clim: "hot", def: 1100,
    reg: ["Alentejo","Algarve","Azores","Centro","Lisbon","Madeira","Norte"] },
  GR: { name: "Greece", sym: "€", co2: 0.52, clim: "hot", def: 1400,
    reg: ["Attica","Central Greece","Central Macedonia","Crete","Eastern Macedonia and Thrace",
      "Epirus","Ionian Islands","North Aegean","Peloponnese","South Aegean",
      "Thessaly","Western Greece","Western Macedonia"] },
  CZ: { name: "Czech Republic", sym: "CZK ", co2: 0.42, clim: "temperate", def: 35000,
    reg: ["Central Bohemia","Hradec Králové","Karlovy Vary","Liberec","Moravian-Silesian",
      "Olomouc","Pardubice","Plzeň","Prague","South Bohemia","South Moravia","Ústí nad Labem","Vysočina","Zlín"] },
  HU: { name: "Hungary", sym: "HUF ", co2: 0.24, clim: "temperate", def: 280000,
    reg: ["Baranya","Bács-Kiskun","Békés","Borsod-Abaúj-Zemplén","Budapest",
      "Csongrád-Csanád","Fejér","Győr-Moson-Sopron","Hajdú-Bihar","Heves",
      "Jász-Nagykun-Szolnok","Komárom-Esztergom","Nógrád","Pest","Somogy",
      "Szabolcs-Szatmár-Bereg","Tolna","Vas","Veszprém","Zala"] },
  RO: { name: "Romania", sym: "RON ", co2: 0.28, clim: "temperate", def: 5400,
    reg: ["Alba","Arad","Argeș","Bacău","Bihor","Bistrița-Năsăud","Botoșani",
      "Brăila","Brașov","Bucharest","Buzău","Călărași","Caraș-Severin","Cluj",
      "Constanța","Covasna","Dâmbovița","Dolj","Galați","Giurgiu","Gorj",
      "Harghita","Hunedoara","Ialomița","Iași","Ilfov","Maramureș","Mehedinți",
      "Mureș","Neamț","Olt","Prahova","Sălaj","Satu Mare","Sibiu","Suceava",
      "Teleorman","Timiș","Tulcea","Vâlcea","Vaslui","Vrancea"] },
  UA: { name: "Ukraine", sym: "₴", co2: 0.35, clim: "temperate", def: 12000,
    reg: ["Cherkasy","Chernihiv","Chernivtsi","Crimea","Dnipropetrovsk","Donetsk",
      "Ivano-Frankivsk","Kharkiv","Kherson","Khmelnytskyi","Kiev","Kirovohrad",
      "Luhansk","Lviv","Mykolaiv","Odessa","Poltava","Rivne","Sumy","Ternopil",
      "Vinnytsia","Volyn","Zakarpattia","Zaporizhzhia","Zhytomyr"] },
  RU: { name: "Russia", sym: "₽", co2: 0.51, clim: "cold", def: 38000,
    reg: ["Altai Republic","Amur","Arkhangelsk","Astrakhan","Belgorod","Bryansk",
      "Buryatia","Chechen Republic","Chelyabinsk","Chukotka","Chuvashia","Dagestan",
      "Ingushetia","Irkutsk","Ivanovo","Jewish Autonomous Oblast","Kabardino-Balkaria",
      "Kaliningrad","Kalmykia","Kaluga","Kamchatka","Karachay-Cherkessia","Karelia",
      "Kemerovo","Khabarovsk","Khakassia","Khanty-Mansi","Kirov","Komi",
      "Kostroma","Krasnodar","Krasnoyarsk","Kurgan","Kursk","Leningrad","Lipetsk",
      "Magadan","Mari El","Mordovia","Moscow","Moscow Oblast","Murmansk",
      "Nenets","Nizhny Novgorod","North Ossetia","Novgorod","Novosibirsk",
      "Omsk","Orel","Orenburg","Penza","Perm","Primorsky","Pskov","Rostov",
      "Ryazan","Saint Petersburg","Sakha (Yakutia)","Sakhalin","Samara",
      "Saratov","Smolensk","Stavropol","Sverdlovsk","Tambov","Tatarstan","Tomsk",
      "Tula","Tuva","Tver","Tyumen","Udmurtia","Ulyanovsk","Vladimir","Volgograd",
      "Vologda","Voronezh","Yamalo-Nenets","Yaroslavl","Zabaykalsky"] },
  TR: { name: "Turkey", sym: "₺", co2: 0.51, clim: "mixed", def: 14000,
    reg: ["Adana","Adıyaman","Afyonkarahisar","Ağrı","Aksaray","Amasya","Ankara",
      "Antalya","Ardahan","Artvin","Aydın","Balıkesir","Bartın","Batman","Bayburt",
      "Bilecik","Bingöl","Bitlis","Bolu","Burdur","Bursa","Çanakkale","Çankırı",
      "Çorum","Denizli","Diyarbakır","Düzce","Edirne","Elazığ","Erzincan",
      "Erzurum","Eskişehir","Gaziantep","Giresun","Gümüşhane","Hakkari","Hatay",
      "Iğdır","Isparta","Istanbul","İzmir","Kahramanmaraş","Karabük","Karaman",
      "Kars","Kastamonu","Kayseri","Kırıkkale","Kırklareli","Kırşehir","Kilis",
      "Kocaeli","Konya","Kütahya","Malatya","Manisa","Mardin","Mersin","Muğla",
      "Muş","Nevşehir","Niğde","Ordu","Osmaniye","Rize","Sakarya","Samsun",
      "Siirt","Sinop","Sivas","Şanlıurfa","Şırnak","Tekirdağ","Tokat","Trabzon",
      "Tunceli","Uşak","Van","Yalova","Yozgat","Zonguldak"] },
  // ── Middle East ────────────────────────────────────────────────────────
  AE: {
    name: "UAE", sym: "AED ", co2: 0.45, clim: "hot", def: 8000,
    reg: ["Abu Dhabi","Ajman","Dubai","Fujairah","Ras Al Khaimah","Sharjah","Umm Al Quwain"]
  },
  SA: { name: "Saudi Arabia", sym: "SAR ", co2: 0.73, clim: "hot", def: 10000,
    reg: ["Al Bahah","Al Jawf","Al Madinah","Al-Qassim","Asir","Eastern Province",
      "Ha'il","Jazan","Makkah","Najran","Northern Borders","Riyadh","Tabuk"] },
  IL: { name: "Israel", sym: "₪", co2: 0.47, clim: "hot", def: 8000,
    reg: ["Central","Haifa","Jerusalem","Northern","Southern","Tel Aviv"] },
  IQ: { name: "Iraq", sym: "IQD ", co2: 0.55, clim: "hot", def: 1200000,
    reg: ["Al Anbar","Al Muthanna","Al-Qādisiyyah","Babil","Baghdad","Basra",
      "Dahuk","Dhi Qar","Diyala","Halabja","Erbil","Karbala","Kirkuk","Maysan",
      "Najaf","Nineveh","Saladin","Sulaymaniyah","Wasit"] },
  IR: { name: "Iran", sym: "IRR ", co2: 0.58, clim: "hot", def: 80000000,
    reg: ["Alborz","Ardabil","Bushehr","Chaharmahal and Bakhtiari","East Azerbaijan",
      "Fars","Gilan","Golestan","Hamadan","Hormozgan","Ilam","Isfahan","Kerman",
      "Kermanshah","Khuzestan","Kohgiluyeh and Boyer-Ahmad","Kurdistan","Lorestan",
      "Markazi","Mazandaran","North Khorasan","Qazvin","Qom","Razavi Khorasan",
      "Semnan","Sistan and Baluchestan","South Khorasan","Tehran","West Azerbaijan",
      "Yazd","Zanjan"] },
  JO: { name: "Jordan", sym: "JOD ", co2: 0.45, clim: "hot", def: 1400,
    reg: ["Ajloun","Aqaba","Balqa","Irbid","Jerash","Karak","Ma'an","Madaba",
      "Mafraq","Amman","Tafilah","Zarqa"] },
  KW: { name: "Kuwait", sym: "KWD ", co2: 0.62, clim: "hot", def: 1200,
    reg: ["Al Ahmadi","Al Asimah","Al Farwaniyah","Al Jahra","Hawalli","Mubarak Al-Kabeer"] },
  QA: { name: "Qatar", sym: "QAR ", co2: 0.49, clim: "hot", def: 14000,
    reg: ["Ad Dawhah","Al Khor","Al Rayyan","Al Shahaniya","Al Wakrah",
      "Ash Shamal","Az Za'ayin","Umm Salal"] },
  OM: { name: "Oman", sym: "OMR ", co2: 0.60, clim: "hot", def: 1800,
    reg: ["Ad Dhahirah","Al Batinah North","Al Batinah South","Al Buraimi",
      "Al Dakhiliyah","Al Sharqiyah North","Al Sharqiyah South","Al Wusta",
      "Dhofar","Musandam","Muscat"] },
  // ── Asia-Pacific ───────────────────────────────────────────────────────
  CN: {
    name: "China", sym: "¥", co2: 0.63, clim: "mixed", def: 12000,
    reg: [
      "Anhui","Beijing","Chongqing","Fujian","Gansu","Guangdong","Guangxi",
      "Guizhou","Hainan","Hebei","Heilongjiang","Henan","Hong Kong","Hubei",
      "Hunan","Inner Mongolia","Jiangsu","Jiangxi","Jilin","Liaoning","Macau",
      "Ningxia","Qinghai","Shaanxi","Shandong","Shanghai","Shanxi","Sichuan",
      "Tianjin","Tibet","Xinjiang","Yunnan","Zhejiang"
    ]
  },
  IN: {
    name: "India", sym: "₹", co2: 0.71, clim: "hot", def: 60000,
    reg: [
      "Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam",
      "Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli and Daman and Diu",
      "Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir",
      "Jharkhand","Karnataka","Kerala","Ladakh","Lakshadweep","Madhya Pradesh",
      "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha",
      "Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
      "Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
    ]
  },
  JP: {
    name: "Japan", sym: "¥", co2: 0.47, clim: "mixed", def: 280000,
    reg: [
      "Aichi","Akita","Aomori","Chiba","Ehime","Fukui","Fukuoka","Fukushima",
      "Gifu","Gunma","Hiroshima","Hokkaido","Hyogo","Ibaraki","Ishikawa",
      "Iwate","Kagawa","Kagoshima","Kanagawa","Kochi","Kumamoto","Kyoto",
      "Mie","Miyagi","Miyazaki","Nagano","Nagasaki","Nara","Niigata","Oita",
      "Okayama","Okinawa","Osaka","Saga","Saitama","Shiga","Shimane","Shizuoka",
      "Tochigi","Tokushima","Tokyo","Tottori","Toyama","Wakayama","Yamagata",
      "Yamaguchi","Yamanashi"
    ]
  },
  AU: {
    name: "Australia", sym: "A$", co2: 0.79, clim: "hot", def: 2000,
    reg: [
      "Australian Capital Territory","New South Wales","Northern Territory",
      "Queensland","South Australia","Tasmania","Victoria","Western Australia"
    ]
  },
  NZ: { name: "New Zealand", sym: "NZ$", co2: 0.12, clim: "temperate", def: 2200,
    reg: ["Auckland","Bay of Plenty","Canterbury","Gisborne","Hawke's Bay",
      "Manawatu-Whanganui","Marlborough","Nelson","Northland","Otago",
      "Southland","Taranaki","Tasman","Waikato","Wellington","West Coast"] },
  KR: {
    name: "South Korea", sym: "₩", co2: 0.46, clim: "mixed", def: 900000,
    reg: ["Busan","Chungcheongbuk-do","Chungcheongnam-do","Daegu","Daejeon",
      "Gangwon-do","Gwangju","Gyeonggi-do","Gyeongsangbuk-do","Gyeongsangnam-do",
      "Incheon","Jeju","Jeollabuk-do","Jeollanam-do","Sejong","Seoul","Ulsan"] },
  SG: {
    name: "Singapore", sym: "S$", co2: 0.41, clim: "hot", def: 2400,
    reg: ["Central Region","East Region","North Region","North-East Region","West Region"]
  },
  MY: { name: "Malaysia", sym: "RM", co2: 0.58, clim: "hot", def: 5400,
    reg: ["Johor","Kedah","Kelantan","Kuala Lumpur","Labuan","Melaka","Negeri Sembilan",
      "Pahang","Penang","Perak","Perlis","Putrajaya","Sabah","Sarawak","Selangor","Terengganu"] },
  ID: { name: "Indonesia", sym: "Rp", co2: 0.82, clim: "hot", def: 20000000,
    reg: ["Aceh","Bali","Bangka Belitung","Banten","Bengkulu","Central Java",
      "Central Kalimantan","Central Sulawesi","East Java","East Kalimantan",
      "East Nusa Tenggara","Gorontalo","Jakarta","Jambi","Lampung","Maluku",
      "North Kalimantan","North Maluku","North Sulawesi","North Sumatra",
      "Papua","Riau","Riau Islands","South Kalimantan","South Sulawesi",
      "South Sumatra","Southeast Sulawesi","West Java","West Kalimantan",
      "West Nusa Tenggara","West Papua","West Sulawesi","West Sumatra","Yogyakarta"] },
  PH: { name: "Philippines", sym: "₱", co2: 0.56, clim: "hot", def: 90000,
    reg: ["Bangsamoro","Bicol","Cagayan Valley","Calabarzon","Caraga",
      "Central Luzon","Central Visayas","Cordillera","Davao","Eastern Visayas",
      "Ilocos","Metro Manila","Mimaropa","Northern Mindanao","Soccsksargen",
      "Western Visayas","Zamboanga Peninsula"] },
  TH: { name: "Thailand", sym: "฿", co2: 0.53, clim: "hot", def: 60000,
    reg: ["Bangkok","Central","Eastern","North","Northeastern","South","Western"] },
  VN: { name: "Vietnam", sym: "₫", co2: 0.65, clim: "hot", def: 3600000,
    reg: ["An Giang","Ba Ria-Vung Tau","Bac Giang","Bac Kan","Bac Lieu","Bac Ninh",
      "Ben Tre","Binh Dinh","Binh Duong","Binh Phuoc","Binh Thuan","Ca Mau",
      "Can Tho","Cao Bang","Da Nang","Dak Lak","Dak Nong","Dien Bien","Dong Nai",
      "Dong Thap","Gia Lai","Ha Giang","Ha Nam","Ha Noi","Ha Tinh","Hai Duong",
      "Hai Phong","Hau Giang","Hoa Binh","Ho Chi Minh City","Hung Yen","Khanh Hoa",
      "Kien Giang","Kon Tum","Lai Chau","Lam Dong","Lang Son","Lao Cai","Long An",
      "Nam Dinh","Nghe An","Ninh Binh","Ninh Thuan","Phu Tho","Phu Yen",
      "Quang Binh","Quang Nam","Quang Ngai","Quang Ninh","Quang Tri","Soc Trang",
      "Son La","Tay Ninh","Thai Binh","Thai Nguyen","Thanh Hoa","Thua Thien Hue",
      "Tien Giang","Tra Vinh","Tuyen Quang","Vinh Long","Vinh Phuc","Yen Bai"] },
  PK: { name: "Pakistan", sym: "PKR ", co2: 0.40, clim: "hot", def: 180000,
    reg: ["Azad Kashmir","Balochistan","Gilgit-Baltistan","Islamabad Capital Territory",
      "Khyber Pakhtunkhwa","Punjab","Sindh"] },
  BD: { name: "Bangladesh", sym: "৳", co2: 0.59, clim: "hot", def: 18000,
    reg: ["Barisal","Chittagong","Dhaka","Khulna","Mymensingh","Rajshahi","Rangpur","Sylhet"] },
  LK: { name: "Sri Lanka", sym: "LKR ", co2: 0.46, clim: "hot", def: 60000,
    reg: ["Central","Eastern","North Central","North Western","Northern",
      "Sabaragamuwa","Southern","Uva","Western"] },
  NP: { name: "Nepal", sym: "NPR ", co2: 0.09, clim: "mixed", def: 60000,
    reg: ["Bagmati","Gandaki","Karnali","Koshi","Lumbini","Madhesh","Sudurpashchim"] },
  // ── Africa ─────────────────────────────────────────────────────────────
  ZA: {
    name: "South Africa", sym: "R", co2: 0.92, clim: "mixed", def: 18000,
    reg: ["Eastern Cape","Free State","Gauteng","KwaZulu-Natal","Limpopo",
      "Mpumalanga","North West","Northern Cape","Western Cape"]
  },
  NG: { name: "Nigeria", sym: "₦", co2: 0.43, clim: "hot", def: 240000,
    reg: ["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue",
      "Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT Abuja",
      "Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara",
      "Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers",
      "Sokoto","Taraba","Yobe","Zamfara"] },
  EG: { name: "Egypt", sym: "EGP ", co2: 0.46, clim: "hot", def: 12000,
    reg: ["Alexandria","Assiut","Aswan","Beheira","Beni Suef","Cairo","Dakahlia",
      "Damietta","Faiyum","Gharbia","Giza","Ismailia","Kafr El Sheikh","Luxor",
      "Matruh","Minya","Monufia","New Valley","North Sinai","Port Said","Qalyubia",
      "Qena","Red Sea","Sharqia","Sohag","South Sinai","Suez"] },
  ET: { name: "Ethiopia", sym: "ETB ", co2: 0.02, clim: "hot", def: 3600,
    reg: ["Addis Ababa","Afar","Amhara","Benishangul-Gumuz","Dire Dawa",
      "Gambela","Harari","Oromia","Sidama","Somali","South West Ethiopia","SNNPR","Tigray"] },
  KE: { name: "Kenya", sym: "KSh", co2: 0.07, clim: "hot", def: 36000,
    reg: ["Baringo","Bomet","Bungoma","Busia","Elgeyo-Marakwet","Embu","Garissa",
      "Homa Bay","Isiolo","Kajiado","Kakamega","Kericho","Kiambu","Kilifi","Kirinyaga",
      "Kisii","Kisumu","Kitui","Kwale","Laikipia","Lamu","Machakos","Makueni","Mandera",
      "Marsabit","Meru","Migori","Mombasa","Murang'a","Nairobi","Nakuru","Nandi",
      "Narok","Nyamira","Nyandarua","Nyeri","Samburu","Siaya","Taita-Taveta",
      "Tana River","Tharaka-Nithi","Trans-Nzoia","Turkana","Uasin Gishu","Vihiga",
      "Wajir","West Pokot"] },
  GH: { name: "Ghana", sym: "GH₵", co2: 0.27, clim: "hot", def: 3600,
    reg: ["Ahafo","Ashanti","Bono","Bono East","Central","Eastern","Greater Accra",
      "North East","Northern","Oti","Savannah","Upper East","Upper West","Volta","Western","Western North"] },
  TZ: { name: "Tanzania", sym: "TSh", co2: 0.05, clim: "hot", def: 1200000,
    reg: ["Arusha","Dar es Salaam","Dodoma","Geita","Iringa","Kagera","Katavi",
      "Kigoma","Kilimanjaro","Lindi","Manyara","Mara","Mbeya","Morogoro","Mtwara",
      "Mwanza","Njombe","Pemba North","Pemba South","Pwani","Rukwa","Ruvuma",
      "Shinyanga","Simiyu","Singida","Songwe","Tabora","Tanga","Zanzibar Central",
      "Zanzibar North","Zanzibar South and Central","Zanzibar Urban/West"] },
  MA: { name: "Morocco", sym: "MAD ", co2: 0.61, clim: "hot", def: 9000,
    reg: ["Béni Mellal-Khénifra","Casablanca-Settat","Drâa-Tafilalet",
      "Fès-Meknès","Guelmim-Oued Noun","Laâyoune-Sakia El Hamra",
      "Marrakech-Safi","Oriental","Rabat-Salé-Kénitra","Souss-Massa",
      "Tanger-Tétouan-Al Hoceïma"] },
  DZ: { name: "Algeria", sym: "DZD ", co2: 0.49, clim: "hot", def: 42000,
    reg: ["Adrar","Aïn Defla","Aïn Témouchent","Algiers","Annaba","Batna","Béchar",
      "Béjaïa","Biskra","Blida","Bordj Bou Arréridj","Bouira","Boumerdès","Chlef",
      "Constantine","Djelfa","El Bayadh","El Oued","El Tarf","Ghardaïa","Guelma",
      "Illizi","Jijel","Khenchela","Laghouat","Mascara","Médéa","Mila","Mostaganem",
      "M'Sila","Naâma","Oran","Ouargla","Oum el Bouaghi","Relizane","Saïda",
      "Sétif","Sidi Bel Abbès","Skikda","Souk Ahras","Tamanghasset","Tébessa",
      "Tiaret","Tindouf","Tipaza","Tissemsilt","Tizi Ouzou","Tlemcen"] },
};

// Rebate data — keyed by country code, then by region name or "_" for default
var REBATES = {
  US: {
    "California":      [{n:"CA CPUC Shading Rebate",d:"Building envelope upgrade rebate",a:800,t:"f"},{n:"IRA 25C Tax Credit",d:"Federal — 30% of qualified install costs",a:.30,t:"p"},{n:"PG&E Smart Home Incentive",d:"Utility demand response programme",a:200,t:"f"}],
    "New York":        [{n:"NYSERDA Home Performance",d:"State efficiency retrofit programme",a:1200,t:"f"},{n:"IRA 25C Tax Credit",d:"Federal — 30% of qualified install costs",a:.30,t:"p"},{n:"ConEd Demand Reduction",d:"Utility incentive",a:350,t:"f"}],
    "Texas":           [{n:"Oncor Efficiency Rebate",d:"Utility building envelope programme",a:400,t:"f"},{n:"IRA 25C Tax Credit",d:"Federal — 30% of qualified install costs",a:.30,t:"p"}],
    "Florida":         [{n:"FPL EnergyEfficiency Rebate",d:"Florida Power & Light programme",a:350,t:"f"},{n:"IRA 25C Tax Credit",d:"Federal — 30% of qualified install costs",a:.30,t:"p"}],
    "Illinois":        [{n:"ComEd Energy Efficiency",d:"Utility rebate programme",a:450,t:"f"},{n:"IRA 25C Tax Credit",d:"Federal — 30% of qualified install costs",a:.30,t:"p"}],
    "Colorado":        [{n:"Xcel Energy Rebate",d:"Building envelope efficiency rebate",a:500,t:"f"},{n:"IRA 25C Tax Credit",d:"Federal — 30% of qualified install costs",a:.30,t:"p"}],
    "Washington":      [{n:"Puget Sound Energy Rebate",d:"Utility efficiency programme",a:550,t:"f"},{n:"IRA 25C Tax Credit",d:"Federal — 30% of qualified install costs",a:.30,t:"p"}],
    "Massachusetts":   [{n:"MassSave Rebate",d:"State energy efficiency programme",a:900,t:"f"},{n:"IRA 25C Tax Credit",d:"Federal — 30% of qualified install costs",a:.30,t:"p"}],
    _:                 [{n:"IRA 25C Tax Credit",d:"Federal — 30% of qualified install costs",a:.30,t:"p"},{n:"Local Utility Rebate",d:"Check your local utility provider",a:300,t:"f"}]
  },
  CA: {
    "British Columbia": [{n:"BC Hydro Power Smart Rebate",d:"Utility efficiency rebate",a:600,t:"f"},{n:"Canada Greener Homes Grant",d:"Federal home energy grant",a:1200,t:"f"}],
    "Ontario":          [{n:"Enbridge Home Efficiency Rebate",d:"Utility-backed efficiency programme",a:700,t:"f"},{n:"Canada Greener Homes Grant",d:"Federal home energy grant",a:1200,t:"f"}],
    "Quebec":           [{n:"Rénoclimat Grant",d:"Quebec provincial efficiency grant",a:800,t:"f"},{n:"Canada Greener Homes Grant",d:"Federal home energy grant",a:1200,t:"f"}],
    _:                  [{n:"Canada Greener Homes Grant",d:"Federal home energy grant",a:1200,t:"f"},{n:"Provincial Utility Rebate",d:"Check your provincial utility",a:400,t:"f"}]
  },
  GB: { _: [{n:"ECO4 Scheme",d:"Energy Company Obligation",a:600,t:"f"},{n:"Boiler Upgrade Scheme (linked)",d:"Coupled HVAC efficiency",a:400,t:"f"},{n:"5% VAT Reduction",d:"On energy-saving materials",a:.05,t:"p"}] },
  DE: {
    "Bavaria":          [{n:"BAFA Building Efficiency Grant",d:"Federal envelope grant — 20%",a:.20,t:"p"},{n:"KfW Efficiency Grant",d:"KfW Bank renovation subsidy",a:1200,t:"f"},{n:"Bavaria State Energy Bonus",d:"State top-up grant",a:500,t:"f"}],
    _:                  [{n:"BAFA Building Efficiency Grant",d:"Federal envelope grant — 20%",a:.20,t:"p"},{n:"KfW Efficiency Grant",d:"KfW Bank renovation subsidy",a:1200,t:"f"}]
  },
  FR: { _: [{n:"MaPrimeRénov'",d:"French state energy renovation grant",a:.35,t:"p"},{n:"CEE Certificates",d:"Energy Savings Certificates scheme",a:400,t:"f"}] },
  ES: { _: [{n:"MOVES Programme",d:"Spanish state efficiency grant",a:.30,t:"p"},{n:"Community Energy Grant",d:"Autonomous community supplement",a:300,t:"f"}] },
  IT: { _: [{n:"Ecobonus 65%",d:"Italian tax deduction for energy upgrades",a:.65,t:"p"},{n:"Superbonus 110% (linked works)",d:"For qualifying renovation packages",a:800,t:"f"}] },
  AU: {
    "Victoria":          [{n:"Victorian Energy Upgrades (VEU)",d:"Accredited certificate scheme",a:900,t:"f"},{n:"NABERS Smart Shading",d:"National performance incentive",a:500,t:"f"}],
    "New South Wales":   [{n:"NSW Energy Security Safeguard",d:"ESS activity for shading systems",a:700,t:"f"},{n:"NABERS Smart Shading",d:"National incentive",a:500,t:"f"}],
    "Queensland":        [{n:"Qld Building Upgrade Finance",d:"State-backed efficiency finance",a:.15,t:"p"},{n:"NABERS Smart Shading",d:"National incentive",a:500,t:"f"}],
    _:                   [{n:"NABERS Improvement Incentive",d:"National building energy rating",a:500,t:"f"},{n:"CEFC Finance",d:"Low-interest finance for upgrades",a:.15,t:"p"}]
  },
  NZ: { _: [{n:"EECA Energy Efficiency Grant",d:"Energy Efficiency Conservation Authority",a:.20,t:"p"},{n:"Warmer Kiwi Homes (linked)",d:"Insulation and heat pump programme",a:500,t:"f"}] },
  AE: {
    "Dubai":   [{n:"DEWA Green Building Incentive",d:"DEWA sustainability programme",a:2000,t:"f"},{n:"Dubai Green Building Scheme",d:"Municipality certification rebate",a:1500,t:"f"}],
    "Abu Dhabi":[{n:"Estidama Pearl Rating Incentive",d:"Abu Dhabi urban planning incentive",a:1800,t:"f"},{n:"ADWEA Efficiency Rebate",d:"Utility efficiency programme",a:600,t:"f"}],
    _:         [{n:"UAE Green Building Council",d:"Sustainability certification benefit",a:1000,t:"f"}]
  },
  SA: { _: [{n:"Saudi Green Building Council",d:"Sustainability certification benefit",a:3000,t:"f"},{n:"NEOM Smart Building Grant",d:"For qualifying developments",a:.20,t:"p"}] },
  SG: { _: [{n:"BCA Green Mark Incentive",d:"Building Authority green grant — 15%",a:.15,t:"p"},{n:"NEA Energy Efficiency Fund",d:"National environment agency",a:800,t:"f"}] },
  MY: { _: [{n:"GreenTech Malaysia Grant",d:"Green Technology Financing Scheme",a:.15,t:"p"},{n:"MyHIJAU Certification Incentive",d:"Green product certification",a:1000,t:"f"}] },
  IN: { _: [{n:"MNRE Smart Building Subsidy",d:"Ministry of Renewable Energy — 30%",a:.30,t:"p"},{n:"BEE Star Rating Incentive",d:"Bureau of Energy Efficiency",a:25000,t:"f"}] },
  JP: {
    "Tokyo":   [{n:"ZEB Ready METI Subsidy",d:"Zero energy building programme — 33%",a:.33,t:"p"},{n:"Tokyo Cap-and-Trade Incentive",d:"Emissions trading benefit",a:150000,t:"f"},{n:"Tokyo Cool Facade Grant",d:"Urban heat island reduction",a:80000,t:"f"}],
    _:         [{n:"ZEB Ready METI Subsidy",d:"Zero energy building programme — 33%",a:.33,t:"p"},{n:"Prefectural Efficiency Grant",d:"Check your prefectural office",a:100000,t:"f"}]
  },
  KR: { _: [{n:"Korea Green Building Certification",d:"GBCC incentive programme",a:.15,t:"p"},{n:"KEPCO Demand Response",d:"Utility demand management programme",a:200000,t:"f"}] },
  CN: { _: [{n:"Green Building Star Rating Subsidy",d:"Ministry of Housing green building grant",a:.20,t:"p"},{n:"Provincial Energy Efficiency Fund",d:"Check your provincial authority",a:5000,t:"f"}] },
  ZA: { _: [{n:"SANEDI Energy Efficiency Grant",d:"National energy efficiency programme",a:.20,t:"p"},{n:"SSEG Incentive",d:"Small-scale embedded generation",a:2000,t:"f"}] },
  EG: { _: [{n:"NEEAP Building Efficiency Grant",d:"National Energy Efficiency Action Plan",a:.15,t:"p"},{n:"EBRD Green Economy Financing",d:"European Bank green finance scheme",a:5000,t:"f"}] },
  NG: { _: [{n:"NERC Efficiency Incentive",d:"Nigerian Electricity Regulatory Commission",a:.10,t:"p"},{n:"REEEP Green Building Grant",d:"Renewable Energy Efficiency Partnership",a:200000,t:"f"}] },
  _: { _: [{n:"National Energy Efficiency Scheme",d:"Check your national energy authority for available programmes",a:.10,t:"p"},{n:"Local Utility Rebate",d:"Contact your electricity utility provider",a:0,t:"f"}] }
};
