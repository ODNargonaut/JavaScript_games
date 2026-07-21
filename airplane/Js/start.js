/* Старт программы */


function start()
{
  scene = new Scene();

  gui = new GUI();
  
  dtg = new DtGame();

  sky = new Sky();
  sea = new Sea();
  airplane = new Airplane();
  obst = new Obst();
  particle = new Particle();
  coins = new Coins();

  mouse = new Mouse();

  keypad = new Keypad();

  sAir = new showAirpane("canvasInShop");

  if (dtg.user.shopCoins.buy.bag[0].bl.actv)
    sAirAddCoins = new showAirpane("blShowAirBBFM", 2, 2);

  loop = new Loop();

  dtg.showCoinsUser();


  language = new Language();
  shop = new Shop();
  addCoins = new AddCoins();
  confirm = new Confirm();
  game = new Game();
  pause = new Pause();
  gameOver = new GameOver();

  gui.start();

  // gui.showInterface();
}


window.addEventListener("load", start, false);
