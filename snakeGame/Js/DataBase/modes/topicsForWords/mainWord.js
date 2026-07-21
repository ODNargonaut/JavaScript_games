/* Данный класс позоволяет получить тему со словами на Ru или En языке. */

class MainWord extends TopicWordEn
{
  // Кол-во тем всего (т.е неважно на каком языке!)
  // P.S. Потому, что на Ru или En - это одна и таже тема, меняется только язык.
  quantityTopic = 32;

  // Список тем на Ru и En
  list = 
  {
    "ru": 
    [
      {t: "рыбы", szw: 761, w: 0}, {t: "птицы", szw: 815, w: 0}, {t: "насекомые", szw: 580, w: 0}, {t: "млекопитающие", szw: 695, w: 0}, 
      {t: "рептилии", szw: 95, w: 0}, {t: "амфибии", szw: 35, w: 0}, {t: "беспозвоночные", szw: 50, w: 0}, {t: "животные", szw: 3675, w: 0}, 
      {t: "динозавры", szw: 644, w: 0}, {t: "деревья", szw: 603, w: 0}, {t: "цветы", szw: 292, w: 0}, {t: "грибы", szw: 263, w: 0},
      {t: "ягоды", szw: 62, w: 0}, {t: "овощи", szw: 104, w: 0}, {t: "фрукты", szw: 169, w: 0}, {t: "минералы", szw: 453, w: 0}, 
      {t: "горные породы", szw: 182, w: 0}, {t: "осадки", szw: 40, w: 0}, {t: "виды водоемов", szw: 146, w: 0}, {t: "растения", szw: 1493, w: 0}, 
      {t: "звезд. созвездия", szw: 88, w: 0}, {t: "микроорганизмы", szw: 94, w: 0}, {t: "бактерии", szw: 82, w: 0}, {t: "вирусы", szw: 98, w: 0}, 
      {t: "еда", szw: 471, w: 0}, {t: "покемоны", szw: 1007, w: 0}, {t: "кондитер. изделия", szw: 81, w: 0}, {t: "xим. элементы", szw: 119, w: 0}, 
      {t: "жанры", szw: 196, w: 0}, {t: "цвета", szw: 530, w: 0}, {t: "страны", szw: 191, w: 0}, {t: "города", szw: 1094, w: 0}
    ],
    "en": 
    [
      {t: "fishs", szw: 1022, w: 0}, {t: "birds", szw: 383, w: 0}, {t: "insects", szw: 805, w: 0}, {t: "mammals", szw: 201, w: 0}, 
      {t: "reptiles", szw: 100, w: 0}, {t: "amphibians", szw: 38,   w: 0}, {t: "invertebrates", szw: 53, w: 0}, {t: "animals", szw: 3257, w: 0}, 
      {t: "dinosaurs", szw: 655, w: 0}, {t: "trees", szw: 610, w: 0}, {t: "flowers", szw: 291, w: 0}, {t: "mushrooms", szw: 1109, w: 0}, 
      {t: "berries", szw: 39, w: 0}, {t: "mga utanon", szw: 96, w: 0}, {t: "bunga", szw: 164, w: 0}, {t: "minerals", szw: 1062, w: 0}, 
      {t: "rocks", szw: 177, w: 0}, {t: "precipitations", szw: 38, w: 0}, {t: "types of reservoirs", szw: 146, w: 0}, {t: "plants", szw: 2309, w: 0},
      {t: "star constellations", szw: 88, w: 0}, {t: "microorganisms", szw: 94, w: 0}, {t: "bacteria", szw: 104, w: 0}, {t: "viruses", szw: 73, w: 0}, 
      {t: "food", szw: 361, w: 0}, {t: "pokemons", szw: 1025, w: 0}, {t: "сonfection. products", szw: 237, w: 0}, {t: "chemical elements", szw: 118, w: 0}, 
      {t: "genres", szw: 193, w: 0}, {t: "colors", szw: 443, w: 0}, {t: "countries", szw: 192, w: 0}, {t: "cities", szw: 1095, w: 0}
    ]
  };


  // 
  selectedTopic(NTopic, language)
  {
    let b = (language=="ru"?true:language=="en"?false:"");

    switch((NTopic >= 0 ? NTopic : this.randomNum(0, this.quantityTopic)))
    {
      case 0: return this.topicFishs(b);                      // Рыбы
      case 1: return this.topicBirds(b);                      // Птицы
      case 2: return this.topicInsects(b);                    // Насекомые
      case 3: return this.topicMammals(b);                    // Mлекопитающие
      case 4: return this.topicReptiles(b);                   // Рептилии
      case 5: return this.topicAmphibians(b);                 // Амфибии
      case 6: return this.topicInvertebrates(b);              // Беспозвоночные
      case 7: return this.topicAnimals(b);                    // Животные
      case 8: return this.topicDinosaurs(b);                  // Динозавры
      case 9: return this.topicTrees(b);                      // Деревья
      case 10: return this.topicFlowers(b);                   // Цветы
      case 11: return this.topicMushrooms(b);                 // Грибы
      case 12: return this.topicBerries(b);                   // Ягоды
      case 13: return this.topicUtanon(b);                    // Овощи
      case 14: return this.topicBunga(b);                     // Фрукты
      case 15: return this.topicMinerals(b);                  // Минералы
      case 16: return this.topicRocks(b);                     // Горные породы
      case 17: return this.topicPrecipitations(b);            // Осадки
      case 18: return this.topicTypesOfReservoirs(b);         // Виды водоемов
      case 19: return this.topicPlants(b);                    // Растения
      case 20: return this.topicStarConstellations(b);        // Звездные созвездия
      case 21: return this.topicMicroorganisms(b);            // Микроорганизмы
      case 22: return this.topicBacteria(b);                  // Бактерии
      case 23: return this.topicViruses(b);                   // Вирусы
      case 24: return this.topicFood(b);                      // Еда
      case 25: return this.topicPokemons(b);                  // Покемоны
      case 26: return this.topicConfectioneryProducts(b);     // Кондитерские изделия
      case 27: return this.topicChemicalElements(b);          // Химические элементы
      case 28: return this.topicGenres(b);                    // Жанры
      case 29: return this.topicColors(b);                    // Цвета
      case 30: return this.topicCountries(b);                 // Страны
      case 31: return this.topicCities(b);                    // Города
    }
  }

  // Генерация случайных чисел
  randomNum(min, max)
  {
    let ntmp = Math.floor(Math.random() * (max - 0) + min);
    return (ntmp > max ? max : ntmp);
  }

  // Рыбы
  topicFishs(b)
  {
    if (b) return this.topicFishsRu();
    else return this.topicFishsEn();
  }

  // Птицы
  topicBirds(b)
  {
    if (b) return this.topicBirdsRu();
    else return this.topicBirdsEn();
  }

  // Насекомые
  topicInsects(b)
  {
    if (b) return this.topicInsectsRu();
    else return this.topicInsectsEn();
  }

  // Mлекопитающие
  topicMammals(b)
  {
    if (b) return this.topicMammalsRu();
    else return this.topicMammalsEn();
  }

  // Рептилии
  topicReptiles(b)
  {
    if (b) return this.topicReptilesRu();
    else return this.topicReptilesEn();
  }

  // Амфибии
  topicAmphibians(b)
  {
    if (b) return this.topicAmphibiansRu();
    else return this.topicAmphibiansEn();
  }

  // Беспозвоночные
  topicInvertebrates(b)
  {
    if (b) return this.topicInvertebratesRu();
    else return this.topicInvertebratesEn();
  }

  // Животные
  topicAnimals(b)
  {
    if (b) return this.topicAnimalsRu();
    else return this.topicAnimalsEn();
  }

  // Динозавры
  topicDinosaurs(b)
  {
    if (b) return this.topicDinosaursRu();
    else return this.topicDinosaursEn();
  }

  // Деревья
  topicTrees(b)
  {
    if (b) return this.topicTreesRu();
    else return this.topicTreesEn();
  }

  // Цветы
  topicFlowers(b)
  {
    if (b) return this.topicFlowersRu();
    else return this.topicFlowersEn();
  }

  // Грибы
  topicMushrooms(b)
  {
    if (b) return this.topicMushroomsRu();
    else return this.topicMushroomsEn();
  }

  // Ягоды
  topicBerries(b)
  {
    if (b) return this.topicBerriesRu();
    else return this.topicBerriesEn();
  }

  // Овощи
  topicUtanon(b)
  {
    if (b) return this.topicUtanonRu();
    else return this.topicUtanonEn();
  }

  // Фрукты
  topicBunga(b)
  {
    if (b) return this.topicBungaRu();
    else return this.topicBungaEn();
  }

  // Минералы
  topicMinerals(b)
  {
    if (b) return this.topicMineralsRu();
    else return this.topicMineralsEn();
  }

  // Горные породы
  topicRocks(b)
  {
    if (b) return this.topicRocksRu();
    else return this.topicRocksEn();
  }

  // Осадки
  topicPrecipitations(b)
  {
    if (b) return this.topicPrecipitationsRu();
    else return this.topicPrecipitationsEn();
  }

  // Виды водоемов
  topicTypesOfReservoirs(b)
  {
    if (b) return this.topicTypesOfReservoirsRu();
    else return this.topicTypesOfReservoirsEn();
  }

  // Растения
  topicPlants(b)
  {
    if (b) return this.topicPlantsRu();
    else return this.topicPlantsEn();
  }

  // Звездные созвездия
  topicStarConstellations(b)
  {
    if (b) return this.topicStarConstellationsRu();
    else return this.topicStarConstellationsEn();
  }

  // Микроорганизмы
  topicMicroorganisms(b)
  {
    if (b) return this.topicMicroorganismsRu();
    else return this.topicMicroorganismsEn();
  }

  // Бактерии
  topicBacteria(b)
  {
    if (b) return this.topicBacteriaRu();
    else return this.topicBacteriaEn();
  }

  // Вирусы
  topicViruses(b)
  {
    if (b) return this.topicVirusesRu();
    else return this.topicVirusesEn();
  }

  // Еда
  topicFood(b)
  {
    if (b) return this.topicFoodRu();
    else return this.topicFoodEn();
  }

  // Покемоны
  topicPokemons(b)
  {
    if (b) return this.topicPokemonsRu();
    else return this.topicPokemonsEn();
  }

  // Кондитерские изделия
  topicConfectioneryProducts(b)
  {
    if (b) return this.topicConfectioneryProductsRu();
    else return this.topicConfectioneryProductsEn();
  }

  // Химические элементы
  topicChemicalElements(b)
  {
    if (b) return this.topicChemicalElementsRu();
    else return this.topicChemicalElementsEn();
  }

  // Жанры
  topicGenres(b)
  {
    if (b) return this.topicGenresRu();
    else return this.topicGenresEn();
  }

  // Цвета
  topicColors(b)
  {
    if (b) return this.topicColorsRu();
    else return this.topicColorsEn();
  }

  // Страны
  topicCountries(b)
  {
    if (b) return this.topicCountriesRu();
    else return this.topicCountriesEn();
  }

  // Города
  topicCities(b)
  {
    if (b) return this.topicCitiesRu();
    else return this.topicCitiesEn();
  }
}
