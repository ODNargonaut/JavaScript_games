/* Хранит ф-ии для кнопок в GUI языка */


class Language
{
  /* /// */
  cloneSetLang(e, elm, LANG)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: elm,
      atActv: [["transition", "0.3s"], ["background-size", "82%"]],
      prev: [["transition", "0.3s"], ["background-size", "100%"]],
      sec: 140,
      funSec: 140,
      fun: () => 
      {
        gui.ILanguage(false);
        gui.IShop(true);

        gui.setLanguage(LANG);
        gui.blSettings(false);
                  
        sAir.show();
        gui.checkShBtnPrevNextModel();
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  btnSetLangRu(e)
  {
    language.cloneSetLang(e, ".blFlagRu", gui.LANGRU);
  }

  /* /// */
  btnSetLangEn(e)
  {
    language.cloneSetLang(e, ".blFlagEn", gui.LANGEN);
  }
}
