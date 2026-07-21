/* Содержит разделы для докоментации на ru и en к игре "SNAKE 2D" */


class DocumentChapters
{
  // 
  getPage(language)
  {
    switch(language)
    {
      case "ru": return this.chaptersRu();
      case "en": return this.chaptersEn();
    }
  }

  // 
  getHTMLTeg(nch, left, top, w=0, h=0, text, o={})
  {
    o.nElm = (Object.hasOwn(o, "nElm")?o.nElm:"");

    let style = 'style="left: '+left+'%; top: '+top+'%; transform: translate(-'+left+'%, -'+top+'%); ';
    style += 'width: '+w+'px; height: '+h+'px; ';

    let bl = '<div class="devBl document-elm-'+o.nElm+'" '+style+'">';
    bl += '<code id="nch_'+nch.replace(".", "_")+'" class="codeText" data-nch="'+nch+'" onclick="gui.getDocumentPage(this)">'+nch+'. '+text+'</code>';
    bl += '</div>';

    return bl;
  }

  // ru
  chaptersRu()
  {
    return (
      this.getHTMLTeg("1.0", 4.2, 2, 620, 14, "Параметры режима \"математика\".", {nElm: "ru-0-1"})+
      this.getHTMLTeg("1.1", 8.5, 6.5, 620, 14, "Что такое операнд?", {nElm: "ru-0-2"})+
      this.getHTMLTeg("1.2", 8.5, 11, 620, 14, "Как настоить длину операнда?", {nElm: "ru-0-3"})+
      this.getHTMLTeg("2.0", 4.2, 15.5, 620, 14, "'Подменю'.", {nElm: "ru-0-4"})+
      this.getHTMLTeg("2.1", 8.5, 20, 620, 14, "Что такое 'Подменю'?", {nElm: "ru-0-5"})+
      this.getHTMLTeg("2.2", 8.5, 24.5, 620, 14, "Какие возможности предоставляет мне 'Подменю'?", {nElm: "ru-0-6"})+
      this.getHTMLTeg("2.3", 8.5, 29, 620, 14, "Я открыл(а) 'Подменю' и решил(а) поменять оформление поля!", {nElm: "ru-0-7"})+
      this.getHTMLTeg("2.4", 8.5, 33.5, 620, 14, "Я открыл(а) 'Подменю' и решил(а) поменять параметры еды для змейки!", {nElm: "ru-0-8"})+
      this.getHTMLTeg("2.5", 8.5, 38, 620, 14, "Я открыл(а) 'Подменю' и решил(а) поменять параметры для текущего режима!", {nElm: "ru-0-9"})+
      this.getHTMLTeg("2.6", 8.5, 42.5, 620, 14, "Почему моя змейка не двигается, когда я закрыл(а) 'Подменю'?", {nElm: "ru-0-10"}));
  }

  // en
  chaptersEn()
  {
    return (
      this.getHTMLTeg("1.0", 4.2, 2, 620, 14, "Parameters of the \"mathematics\" mode.", {nElm: "en-0-1"})+
      this.getHTMLTeg("1.1", 8.5, 6.5, 620, 14, "What is an operand?", {nElm: "en-0-2"})+
      this.getHTMLTeg("1.2", 8.5, 11, 620, 14, "How do I adjust the length of the operand?", {nElm: "en-0-3"})+
      this.getHTMLTeg("2.0", 4.2, 15.5, 620, 14, "'The submenu'.", {nElm: "en-0-4"})+
      this.getHTMLTeg("2.1", 8.5, 20, 620, 14, "What is a 'Submenu'?", {nElm: "en-0-5"})+
      this.getHTMLTeg("2.2", 8.5, 24.5, 620, 14, "What opportunities does the 'Submenu' provide me?", {nElm: "en-0-6"})+
      this.getHTMLTeg("2.3", 8.5, 29, 620, 14, "I opened the 'Submenu' and decided(a) change the design of the field!", {nElm: "en-0-7"})+
      this.getHTMLTeg("2.4", 11.5, 33.5, 680, 14, "I opened the 'Submenu' and decided(a) change the food parameters for the snake!", {nElm: "en-0-8"})+
      this.getHTMLTeg("2.5", 11.5, 38, 680, 14, "I opened the 'Submenu' and decided(a) change the parameters for the current mode!", {nElm: "en-0-9"})+
      this.getHTMLTeg("2.6", 11.5, 42.5, 620, 14, "Why doesn't my snake move when I closed the 'Submenu'?", {nElm: "en-0-10"}));
  }
}
