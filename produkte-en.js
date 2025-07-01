const produkte = [
  // Alte Artikel (deine ursprüngliche Liste)
  {
    name: "Beige Top",
    kategorie: "top",
    farbe: "beige",
    groesse: "xs",
    anlass: "casual",
    bild: "Top.png",
    link: "https://h&m.de/",
    brand: "H&M"
  },
  {
    name: "Pink Kleid",
    kategorie: "dress",
    farbe: "pink",
    groesse: "xs",
    anlass: "date",
    bild: "Kleid.png",
    link: "https://zara.de/",
    marke: "Zara"
  },
  {
    name: "Blue Jeans",
    kategorie: "pants",
    farbe: "blue",
    groesse: "xs",
    anlass: "business",
    bild: "Jeans.png",
    link: "https://aboutyou.de/",
    brand: "About You"
  },
  {
    name: "Black High Heels",
    kategorie: "shoes",
    farbe: "black",
    groesse: "37",
    anlass: "party",
    bild: "HighHeels.png",
    link: "https://only.de/",
    brand: "Only"
  },
  {
    name: "Satin Skirt",
    kategorie: "skirt",
    farbe: "beige",
    groesse: "xs",
    anlass: "date",
    bild: "Skirt.png",
    link: "https://bershka.de/",
    brand: "Bershka"
  },
  {
    name: "Beige Sweater",
    kategorie: "top",
    farbe: "beige",
    groesse: "xs",
    anlass: "casual",
    bild: "Pulli.png",
    link: "https://asos.de/",
    brand: "Asos"
  },
  {
    name: "Colourful Cardigan",
    kategorie: "top",
    farbe: "",
    groesse: "xs",
    anlass: "casual",
    bild: "Cardigan.png",
    link: "https://asos.de/",
    brand: "Asos"
  },
  {
    name: "Black Jacket",
    kategorie: "top",
    farbe: "black",
    groesse: "xs",
    anlass: "casual",
    bild: "Jacke.png",
    link: "https://only.de/",
    brand: "Only"
  },
  {
    name: "Beige Top",
    kategorie: "top",
    farbe: "beige",
    groesse: "s",
    anlass: "casual",
    bild: "Top.png",
    link: "https://h&m.de/",
    brand: "H&M"
  },
  {
    name: "Rosa Kleid",
    kategorie: "kleid",
    farbe: "rosa",
    groesse: "s",
    anlass: "date",
    bild: "Kleid.png",
    link: "https://zara.de/",
    brand: "Zara"
  },
  {
    name: "Blue Jeans",
    kategorie: "pants",
    farbe: "blue",
    groesse: "s",
    anlass: "business",
    bild: "Jeans.png",
    link: "https://aboutyou.de/",
    brand: "About You"
  },
  {
    name: "Black High Heels",
    kategorie: "shoes",
    farbe: "black",
    groesse: "38",
    anlass: "party",
    bild: "HighHeels.png",
    link: "https://only.de/",
    brand: "Only"
  },
  {
    name: "Satin Skirt",
    kategorie: "skirt",
    farbe: "beige",
    groesse: "s",
    anlass: "date",
    bild: "Skirt.png",
    link: "https://bershka.de/",
    brand: "Bershka"
  },
  {
    name: "Beige Sweater",
    kategorie: "top",
    farbe: "beige",
    groesse: "s",
    anlass: "casual",
    bild: "Pulli.png",
    link: "https://asos.de/",
    brand: "Asos"
  },
  {
    name: "Colourful Cardigan",
    kategorie: "top",
    farbe: "",
    groesse: "s",
    anlass: "casual",
    bild: "Cardigan.png",
    link: "https://asos.de/",
    brand: "Asos"
  },
  {
    name: "Black Jacket",
    kategorie: "top",
    farbe: "schwarz",
    groesse: "s",
    anlass: "freizeit",
    bild: "Jacke.png",
    link: "https://only.de/",
    brand: "Only"
  },
  {
    name: "Beige Top",
    kategorie: "top",
    farbe: "beige",
    groesse: "m",
    anlass: "casual",
    bild: "Top.png",
    link: "https://h&m.de/",
    brand: "H&M"
  },
  {
    name: "Pink Dress",
    kategorie: "dress",
    farbe: "pink",
    groesse: "m",
    anlass: "date",
    bild: "Kleid.png",
    link: "https://zara.de/",
    brand: "Zara"
  },
  {
    name: "Blue Jeans",
    kategorie: "pants",
    farbe: "blue",
    groesse: "m",
    anlass: "business",
    bild: "Jeans.png",
    link: "https://aboutyou.de/",
    brand: "About You"
  },
  {
    name: "Black High Heels",
    kategorie: "shoes",
    farbe: "black",
    groesse: "39",
    anlass: "party",
    bild: "HighHeels.png",
    link: "https://only.de/",
    brand: "Only"
  },
  {
    name: "Satin Skirt",
    kategorie: "skirt",
    farbe: "beige",
    groesse: "m",
    anlass: "date",
    bild: "Skirt.png",
    link: "https://bershka.de/",
    brand: "Bershka"
  },
  {
    name: "Beige Sweater",
    kategorie: "top",
    farbe: "beige",
    groesse: "m",
    anlass: "casual",
    bild: "Pulli.png",
    link: "https://asos.de/",
    brand: "Asos"
  },
  {
    name: "Colourful Cardigan",
    kategorie: "top",
    farbe: "",
    groesse: "m",
    anlass: "casual",
    bild: "Cardigan.png",
    link: "https://asos.de/",
    brand: "Asos"
  },
  {
    name: "Black Jacket",
    kategorie: "top",
    farbe: "black",
    groesse: "m",
    anlass: "casual",
    bild: "Jacke.png",
    link: "https://only.de/",
    brand: "Only"
  },
  {
    name: "Beige Top",
    kategorie: "top",
    farbe: "beige",
    groesse: "l",
    anlass: "casual",
    bild: "Top.png",
    link: "https://h&m.de/",
    brand: "H&M"
  },
  {
    name: "Pink Dress",
    kategorie: "dress",
    farbe: "pink",
    groesse: "l",
    anlass: "date",
    bild: "Kleid.png",
    link: "https://zara.de/",
    brand: "Zara"
  },
  {
    name: "Blue Jeans",
    kategorie: "pants",
    farbe: "blue",
    groesse: "l",
    anlass: "business",
    bild: "Jeans.png",
    link: "https://aboutyou.de/",
    brand: "About You"
  },
  {
    name: "Black High Heels",
    kategorie: "shoes",
    farbe: "black",
    groesse: "40",
    anlass: "party",
    bild: "HighHeels.png",
    link: "https://only.de/",
    brand: "Only"
  },
  {
    name: "Satin Skirt",
    kategorie: "skirt",
    farbe: "beige",
    groesse: "l",
    anlass: "date",
    bild: "Skirt.png",
    link: "https://bershka.de/",
    brand: "Bershka"
  },
  {
    name: "Beige Sweater",
    kategorie: "top",
    farbe: "beige",
    groesse: "l",
    anlass: "casual",
    bild: "Pulli.png",
    link: "https://asos.de/",
    brand: "Asos"
  },
  {
    name: "Colourful Cardigan",
    kategorie: "top",
    farbe: "",
    groesse: "l",
    anlass: "casual",
    bild: "Cardigan.png",
    link: "https://asos.de/",
    brand: "Asos"
  },
  {
    name: "Black Jacket",
    kategorie: "top",
    farbe: "black",
    groesse: "l",
    anlass: "casual",
    bild: "Jacke.png",
    link: "https://only.de/",
    brand: "Only"
  },
  {
    name: "Beige Top",
    kategorie: "top",
    farbe: "beige",
    groesse: "xl",
    anlass: "casual",
    bild: "Top.png",
    link: "https://h&m.de/",
    brand: "H&M"
  },
  {
    name: "Pink Dress",
    kategorie: "dress",
    farbe: "pink",
    groesse: "xl",
    anlass: "date",
    bild: "Kleid.png",
    link: "https://zara.de/",
    brand: "Zara"
  },
  {
    name: "Blue Jeans",
    kategorie: "pants",
    farbe: "blue",
    groesse: "xl",
    anlass: "business",
    bild: "Jeans.png",
    link: "https://aboutyou.de/",
    brand: "About You"
  },
  {
    name: "Black High Heels",
    kategorie: "shoe",
    farbe: "black",
    groesse: "41",
    anlass: "party",
    bild: "HighHeels.png",
    link: "https://only.de/",
    brand: "Only"
  },
  {
    name: "Satin Skirt",
    kategorie: "skirt",
    farbe: "beige",
    groesse: "xl",
    anlass: "date",
    bild: "Skirt.png",
    link: "https://bershka.de/",
    brand: "Bershka"
  },
  {
    name: "Beige Sweater",
    kategorie: "top",
    farbe: "beige",
    groesse: "xl",
    anlass: "casual",
    bild: "Pulli.png",
    link: "https://asos.de/",
    brand: "Asos"
  },
  {
    name: "Colourful Cardigan",
    kategorie: "top",
    farbe: "",
    groesse: "xl",
    anlass: "casual",
    bild: "Cardigan.png",
    link: "https://asos.de/",
    brand: "Asos"
  },
  {
    name: "Black Jacket",
    kategorie: "top",
    farbe: "black",
    groesse: "xl",
    anlass: "casual",
    bild: "Jacke.png",
    link: "https://only.de/",
    brand: "Only"
  },

  // NEUE ARTIKEL

  // Kleid2 beige
  { name: "Beige Dress", kategorie: "dress", farbe: "beige", groesse: "xs", anlass: "party", bild: "Kleid2.png", link: "https://zalando.de/", brand: "Zalando" },
  { name: "Beige Dress", kategorie: "dress", farbe: "beige", groesse: "s", anlass: "party", bild: "Kleid2.png", link: "https://zalando.de/", brand: "Zalando" },
  { name: "Beige Dress", kategorie: "dress", farbe: "beige", groesse: "m", anlass: "party", bild: "Kleid2.png", link: "https://zalando.de/", brand: "Zalando" },
  { name: "Beige Dress", kategorie: "dress", farbe: "beige", groesse: "l", anlass: "party", bild: "Kleid2.png", link: "https://zalando.de/", brand: "Zalando" },
  { name: "Beige Dress", kategorie: "dress", farbe: "beige", groesse: "xl", anlass: "party", bild: "Kleid2.png", link: "https://zalando.de/", brand: "Zalando" },

  // Partytop schwarz
  { name: "Black Partytop", kategorie: "top", farbe: "black", groesse: "xs", anlass: "party", bild: "Partytop.png", link: "https://zalando.de/", brand: "Zalando" },
  { name: "Black Partytop", kategorie: "top", farbe: "black", groesse: "s", anlass: "party", bild: "Partytop.png", link: "https://zalando.de/", brand: "Zalando" },
  { name: "Black Partytop", kategorie: "top", farbe: "black", groesse: "m", anlass: "party", bild: "Partytop.png", link: "https://zalando.de/", brand: "Zalando" },
  { name: "Black Partytop", kategorie: "top", farbe: "black", groesse: "l", anlass: "party", bild: "Partytop.png", link: "https://zalando.de/", brand: "Zalando" },
  { name: "Black Partytop", kategorie: "top", farbe: "black", groesse: "xl", anlass: "party", bild: "Partytop.png", link: "https://zalando.de/", brand: "Zalando" },

  // Shorts schwarz
  { name: "Black Shorts", kategorie: "pants", farbe: "black", groesse: "xs", anlass: "casual", bild: "Shorts.png", link: "https://aboutyou.de/", brand: "About You" },
  { name: "Black Shorts", kategorie: "pants", farbe: "black", groesse: "s", anlass: "casual", bild: "Shorts.png", link: "https://aboutyou.de/", brand: "About You" },
  { name: "Black Shorts", kategorie: "pants", farbe: "black", groesse: "m", anlass: "casual", bild: "Shorts.png", link: "https://aboutyou.de/", brand: "About You" },
  { name: "Black Shorts", kategorie: "pants", farbe: "black", groesse: "l", anlass: "casual", bild: "Shorts.png", link: "https://aboutyou.de/", brand: "About You" },
  { name: "Black Shorts", kategorie: "pants", farbe: "black", groesse: "xl", anlass: "casual", bild: "Shorts.png", link: "https://aboutyou.de/", brand: "About You" },

  // Shirt weiß
  { name: "Weißes Shirt", kategorie: "top", farbe: "white", groesse: "xs", anlass: "casual", bild: "Shirt.png", link: "https://aboutyou.de/", brand: "About You" },
  { name: "Weißes Shirt", kategorie: "top", farbe: "white", groesse: "s", anlass: "casual", bild: "Shirt.png", link: "https://aboutyou.de/", brand: "About You" },
  { name: "Weißes Shirt", kategorie: "top", farbe: "white", groesse: "m", anlass: "casual", bild: "Shirt.png", link: "https://aboutyou.de/", brand: "About You" },
  { name: "Weißes Shirt", kategorie: "top", farbe: "white", groesse: "l", anlass: "casual", bild: "Shirt.png", link: "https://aboutyou.de/", brand: "About You" },
  { name: "Weißes Shirt", kategorie: "top", farbe: "white", groesse: "xl", anlass: "casual", bild: "Shirt.png", link: "https://aboutyou.de/", brand: "About You" },

  // Blazer beige
  { name: "Blazer Beige", kategorie: "top", farbe: "beige", groesse: "xs", anlass: "business", bild: "Blazer.png", link: "https://zalando.de/", brand: "Zalando" },
  { name: "Blazer Beige", kategorie: "top", farbe: "beige", groesse: "s", anlass: "business", bild: "Blazer.png", link: "https://zalando.de/", brand: "Zalando" },
  { name: "Blazer Beige", kategorie: "top", farbe: "beige", groesse: "m", anlass: "business", bild: "Blazer.png", link: "https://zalando.de/", brand: "Zalando" },
  { name: "Blazer Beige", kategorie: "top", farbe: "beige", groesse: "l", anlass: "business", bild: "Blazer.png", link: "https://zalando.de/", brand: "Zalando" },
  { name: "Blazer Beige", kategorie: "top", farbe: "beige", groesse: "xl", anlass: "business", bild: "Blazer.png", link: "https://zalando.de/", brand: "Zalando" }
];
