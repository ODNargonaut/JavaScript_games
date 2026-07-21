// 
class MainLevel extends level_20
{
  // Конструктор здесь не нужет (т.е будет выдовать ошибку)!

  // 
  selectedLevel(lvl)
  {
    switch(lvl)
    {
      case 0: return this.getMazelevel_1();
      case 1: return this.getMazelevel_2();
      case 2: return this.getMazelevel_3();
      case 3: return this.getMazelevel_4();
      case 4: return this.getMazelevel_5();
      case 5: return this.getMazelevel_6();
      case 6: return this.getMazelevel_7();
      case 7: return this.getMazelevel_8();
      case 8: return this.getMazelevel_9();
      case 9: return this.getMazelevel_10();
      case 10: return this.getMazelevel_11();
      case 11: return this.getMazelevel_12();
      case 12: return this.getMazelevel_13();
      case 13: return this.getMazelevel_14();
      case 14: return this.getMazelevel_15();
      case 15: return this.getMazelevel_16();
      case 16: return this.getMazelevel_17();
      case 17: return this.getMazelevel_18();
      case 18: return this.getMazelevel_19();
      case 19: return this.getMazelevel_20();
    }
  }
}