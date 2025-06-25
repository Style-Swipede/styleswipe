const produkte = [
  // Alte Artikel (deine ursprüngliche Liste)
  {
    name: "Beiges Top",
    kategorie: "oberteil",
    farbe: "beige",
    groesse: "xs",
    anlass: "freizeit",
    bild: "Top.png",
    link: "https://h&m.de/",
    marke: "H&M"
  },
  {
    name: "Rosa Kleid",
    kategorie: "kleid",
    farbe: "rosa",
    groesse: "xs",
    anlass: "date",
    bild: "Kleid.png",
    link: "https://zara.de/",
    marke: "Zara"
  },
  {
    name: "Blaue Jeans",
    kategorie: "hose",
    farbe: "blau",
    groesse: "xs",
    anlass: "business",
    bild: "Jeans.png",
    link: "https://aboutyou.de/",
    marke: "About You"
  },
  {
    name: "Schwarze High Heels",
    kategorie: "schuhe",
    farbe: "schwarz",
    groesse: "37",
    anlass: "party",
    bild: "HighHeels.png",
    link: "https://only.de/",
    marke: "Only"
  },
  {
    name: "Satin Rock",
    kategorie: "rock",
    farbe: "beige",
    groesse: "xs",
    anlass: "date",
    bild: "Skirt.png",
    link: "https://bershka.de/",
    marke: "Bershka"
  },
  {
    name: "Beiger Pullover",
    kategorie: "oberteil",
    farbe: "beige",
    groesse: "xs",
    anlass: "freizeit",
    bild: "Pulli.png",
    link: "https://asos.de/",
    marke: "Asos"
  },
  {
    name: "Bunter Cardigan",
    kategorie: "oberteil",
    farbe: "bunt",
    groesse: "xs",
    anlass: "freizeit",
    bild: "Cardigan.png",
    link: "https://asos.de/",
    marke: "Asos"
  },
  {
    name: "Schwarze Jacke",
    kategorie: "oberteil",
    farbe: "schwarz",
    groesse: "xs",
    anlass: "freizeit",
    bild: "Jacke.png",
    link: "https://only.de/",
    marke: "Only"
  },
  {
    name: "Beiges Top",
    kategorie: "oberteil",
    farbe: "beige",
    groesse: "s",
    anlass: "freizeit",
    bild: "Top.png",
    link: "https://h&m.de/",
    marke: "H&M"
  },
  {
    name: "Rosa Kleid",
    kategorie: "kleid",
    farbe: "rosa",
    groesse: "s",
    anlass: "date",
    bild: "Kleid.png",
    link: "https://zara.de/",
    marke: "Zara"
  },
  {
    name: "Blaue Jeans",
    kategorie: "hose",
    farbe: "blau",
    groesse: "s",
    anlass: "business",
    bild: "Jeans.png",
    link: "https://aboutyou.de/",
    marke: "About You"
  },
  {
    name: "Schwarze High Heels",
    kategorie: "schuhe",
    farbe: "schwarz",
    groesse: "38",
    anlass: "party",
    bild: "HighHeels.png",
    link: "https://only.de/",
    marke: "Only"
  },
  {
    name: "Satin Rock",
    kategorie: "rock",
    farbe: "beige",
    groesse: "s",
    anlass: "date",
    bild: "Skirt.png",
    link: "https://bershka.de/",
    marke: "Bershka"
  },
  {
    name: "Beiger Pullover",
    kategorie: "oberteil",
    farbe: "beige",
    groesse: "s",
    anlass: "freizeit",
    bild: "Pulli.png",
    link: "https://asos.de/",
    marke: "Asos"
  },
  {
    name: "Bunter Cardigan",
    kategorie: "oberteil",
    farbe: "bunt",
    groesse: "s",
    anlass: "freizeit",
    bild: "Cardigan.png",
    link: "https://asos.de/",
    marke: "Asos"
  },
  {
    name: "Schwarze Jacke",
    kategorie: "oberteil",
    farbe: "schwarz",
    groesse: "s",
    anlass: "freizeit",
    bild: "Jacke.png",
    link: "https://only.de/",
    marke: "Only"
  },
  {
    name: "Beiges Top",
    kategorie: "oberteil",
    farbe: "beige",
    groesse: "m",
    anlass: "freizeit",
    bild: "Top.png",
    link: "https://h&m.de/",
    marke: "H&M"
  },
  {
    name: "Rosa Kleid",
    kategorie: "kleid",
    farbe: "rosa",
    groesse: "m",
    anlass: "date",
    bild: "Kleid.png",
    link: "https://zara.de/",
    marke: "Zara"
  },
  {
    name: "Blaue Jeans",
    kategorie: "hose",
    farbe: "blau",
    groesse: "m",
    anlass: "business",
    bild: "Jeans.png",
    link: "https://aboutyou.de/",
    marke: "About You"
  },
  {
    name: "Schwarze High Heels",
    kategorie: "schuhe",
    farbe: "schwarz",
    groesse: "39",
    anlass: "party",
    bild: "HighHeels.png",
    link: "https://only.de/",
    marke: "Only"
  },
  {
    name: "Satin Rock",
    kategorie: "rock",
    farbe: "beige",
    groesse: "m",
    anlass: "date",
    bild: "Skirt.png",
    link: "https://bershka.de/",
    marke: "Bershka"
  },
  {
    name: "Beiger Pullover",
    kategorie: "oberteil",
    farbe: "beige",
    groesse: "m",
    anlass: "freizeit",
    bild: "Pulli.png",
    link: "https://asos.de/",
    marke: "Asos"
  },
  {
    name: "Bunter Cardigan",
    kategorie: "oberteil",
    farbe: "bunt",
    groesse: "m",
    anlass: "freizeit",
    bild: "Cardigan.png",
    link: "https://asos.de/",
    marke: "Asos"
  },
  {
    name: "Schwarze Jacke",
    kategorie: "oberteil",
    farbe: "schwarz",
    groesse: "m",
    anlass: "freizeit",
    bild: "Jacke.png",
    link: "https://only.de/",
    marke: "Only"
  },
  {
    name: "Beiges Top",
    kategorie: "oberteil",
    farbe: "beige",
    groesse: "l",
    anlass: "freizeit",
    bild: "Top.png",
    link: "https://h&m.de/",
    marke: "H&M"
  },
  {
    name: "Rosa Kleid",
    kategorie: "kleid",
    farbe: "rosa",
    groesse: "l",
    anlass: "date",
    bild: "Kleid.png",
    link: "https://zara.de/",
    marke: "Zara"
  },
  {
    name: "Blaue Jeans",
    kategorie: "hose",
    farbe: "blau",
    groesse: "l",
    anlass: "business",
    bild: "Jeans.png",
    link: "https://aboutyou.de/",
    marke: "About You"
  },
  {
    name: "Schwarze High Heels",
    kategorie: "schuhe",
    farbe: "schwarz",
    groesse: "40",
    anlass: "party",
    bild: "HighHeels.png",
    link: "https://only.de/",
    marke: "Only"
  },
  {
    name: "Satin Rock",
    kategorie: "rock",
    farbe: "beige",
    groesse: "l",
    anlass: "date",
    bild: "Skirt.png",
    link: "https://bershka.de/",
    marke: "Bershka"
  },
  {
    name: "Beiger Pullover",
    kategorie: "oberteil",
    farbe: "beige",
    groesse: "l",
    anlass: "freizeit",
    bild: "Pulli.png",
    link: "https://asos.de/",
    marke: "Asos"
  },
  {
    name: "Bunter Cardigan",
    kategorie: "oberteil",
    farbe: "bunt",
    groesse: "l",
    anlass: "freizeit",
    bild: "Cardigan.png",
    link: "https://asos.de/",
    marke: "Asos"
  },
  {
    name: "Schwarze Jacke",
    kategorie: "oberteil",
    farbe: "schwarz",
    groesse: "l",
    anlass: "freizeit",
    bild: "Jacke.png",
    link: "https://only.de/",
    marke: "Only"
  },
  {
    name: "Beiges Top",
    kategorie: "oberteil",
    farbe: "beige",
    groesse: "xl",
    anlass: "freizeit",
    bild: "Top.png",
    link: "https://h&m.de/",
    marke: "H&M"
  },
  {
    name: "Rosa Kleid",
    kategorie: "kleid",
    farbe: "rosa",
    groesse: "xl",
    anlass: "date",
    bild: "Kleid.png",
    link: "https://zara.de/",
    marke: "Zara"
  },
  {
    name: "Blaue Jeans",
    kategorie: "hose",
    farbe: "blau",
    groesse: "xl",
    anlass: "business",
    bild: "Jeans.png",
    link: "https://aboutyou.de/",
    marke: "About You"
  },
  {
    name: "Schwarze High Heels",
    kategorie: "schuhe",
    farbe: "schwarz",
    groesse: "41",
    anlass: "party",
    bild: "HighHeels.png",
    link: "https://only.de/",
    marke: "Only"
  },
  {
    name: "Satin Rock",
    kategorie: "rock",
    farbe: "beige",
    groesse: "xl",
    anlass: "date",
    bild: "Skirt.png",
    link: "https://bershka.de/",
    marke: "Bershka"
  },
  {
    name: "Beiger Pullover",
    kategorie: "oberteil",
    farbe: "beige",
    groesse: "xl",
    anlass: "freizeit",
    bild: "Pulli.png",
    link: "https://asos.de/",
    marke: "Asos"
  },
  {
    name: "Bunter Cardigan",
    kategorie: "oberteil",
    farbe: "bunt",
    groesse: "xl",
    anlass: "freizeit",
    bild: "Cardigan.png",
    link: "https://asos.de/",
    marke: "Asos"
  },
  {
    name: "Schwarze Jacke",
    kategorie: "oberteil",
    farbe: "schwarz",
    groesse: "xl",
    anlass: "freizeit",
    bild: "Jacke.png",
    link: "https://only.de/",
    marke: "Only"
  },

  // NEUE ARTIKEL

  // Kleid2 beige
  { name: "Beiges Kleid 2", kategorie: "kleid", farbe: "beige", groesse: "xs", anlass: "party", bild: "Kleid2.png", link: "https://zalando.de/", marke: "Zalando" },
  { name: "Beiges Kleid 2", kategorie: "kleid", farbe: "beige", groesse: "s", anlass: "party", bild: "Kleid2.png", link: "https://zalando.de/", marke: "Zalando" },
  { name: "Beiges Kleid 2", kategorie: "kleid", farbe: "beige", groesse: "m", anlass: "party", bild: "Kleid2.png", link: "https://zalando.de/", marke: "Zalando" },
  { name: "Beiges Kleid 2", kategorie: "kleid", farbe: "beige", groesse: "l", anlass: "party", bild: "Kleid2.png", link: "https://zalando.de/", marke: "Zalando" },
  { name: "Beiges Kleid 2", kategorie: "kleid", farbe: "beige", groesse: "xl", anlass: "party", bild: "Kleid2.png", link: "https://zalando.de/", marke: "Zalando" },

  // Partytop schwarz
  { name: "Schwarzes Partytop", kategorie: "oberteil", farbe: "schwarz", groesse: "xs", anlass: "party", bild: "Partytop.png", link: "https://zalando.de/", marke: "Zalando" },
  { name: "Schwarzes Partytop", kategorie: "oberteil", farbe: "schwarz", groesse: "s", anlass: "party", bild: "Partytop.png", link: "https://zalando.de/", marke: "Zalando" },
  { name: "Schwarzes Partytop", kategorie: "oberteil", farbe: "schwarz", groesse: "m", anlass: "party", bild: "Partytop.png", link: "https://zalando.de/", marke: "Zalando" },
  { name: "Schwarzes Partytop", kategorie: "oberteil", farbe: "schwarz", groesse: "l", anlass: "party", bild: "Partytop.png", link: "https://zalando.de/", marke: "Zalando" },
  { name: "Schwarzes Partytop", kategorie: "oberteil", farbe: "schwarz", groesse: "xl", anlass: "party", bild: "Partytop.png", link: "https://zalando.de/", marke: "Zalando" },

  // Shorts schwarz
  { name: "Schwarze Shorts", kategorie: "hose", farbe: "schwarz", groesse: "xs", anlass: "freizeit", bild: "Shorts.png", link: "https://aboutyou.de/", marke: "About You" },
  { name: "Schwarze Shorts", kategorie: "hose", farbe: "schwarz", groesse: "s", anlass: "freizeit", bild: "Shorts.png", link: "https://aboutyou.de/", marke: "About You" },
  { name: "Schwarze Shorts", kategorie: "hose", farbe: "schwarz", groesse: "m", anlass: "freizeit", bild: "Shorts.png", link: "https://aboutyou.de/", marke: "About You" },
  { name: "Schwarze Shorts", kategorie: "hose", farbe: "schwarz", groesse: "l", anlass: "freizeit", bild: "Shorts.png", link: "https://aboutyou.de/", marke: "About You" },
  { name: "Schwarze Shorts", kategorie: "hose", farbe: "schwarz", groesse: "xl", anlass: "freizeit", bild: "Shorts.png", link: "https://aboutyou.de/", marke: "About You" },

  // Shirt weiß
  { name: "Weißes Shirt", kategorie: "oberteil", farbe: "weiß", groesse: "xs", anlass: "freizeit", bild: "Shirt.png", link: "https://aboutyou.de/", marke: "About You" },
  { name: "Weißes Shirt", kategorie: "oberteil", farbe: "weiß", groesse: "s", anlass: "freizeit", bild: "Shirt.png", link: "https://aboutyou.de/", marke: "About You" },
  { name: "Weißes Shirt", kategorie: "oberteil", farbe: "weiß", groesse: "m", anlass: "freizeit", bild: "Shirt.png", link: "https://aboutyou.de/", marke: "About You" },
  { name: "Weißes Shirt", kategorie: "oberteil", farbe: "weiß", groesse: "l", anlass: "freizeit", bild: "Shirt.png", link: "https://aboutyou.de/", marke: "About You" },
  { name: "Weißes Shirt", kategorie: "oberteil", farbe: "weiß", groesse: "xl", anlass: "freizeit", bild: "Shirt.png", link: "https://aboutyou.de/", marke: "About You" },

  // Blazer beige
  { name: "Beiger Blazer", kategorie: "oberteil", farbe: "beige", groesse: "xs", anlass: "business", bild: "Blazer.png", link: "https://zalando.de/", marke: "Zalando" },
  { name: "Beiger Blazer", kategorie: "oberteil", farbe: "beige", groesse: "s", anlass: "business", bild: "Blazer.png", link: "https://zalando.de/", marke: "Zalando" },
  { name: "Beiger Blazer", kategorie: "oberteil", farbe: "beige", groesse: "m", anlass: "business", bild: "Blazer.png", link: "https://zalando.de/", marke: "Zalando" },
  { name: "Beiger Blazer", kategorie: "oberteil", farbe: "beige", groesse: "l", anlass: "business", bild: "Blazer.png", link: "https://zalando.de/", marke: "Zalando" },
  { name: "Beiger Blazer", kategorie: "oberteil", farbe: "beige", groesse: "xl", anlass: "business", bild: "Blazer.png", link: "https://zalando.de/", marke: "Zalando" }
];
