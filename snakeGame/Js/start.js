/*

mode-1 = classic
mode-2 = infinitely
mode-3 = jumpFood
mode-4 = feedMe
mode-5 = words
mode-6 = mathematics
mode-7 = reverseMove
mode-8 = narrowingOfZone
mode-9 = maze
mode-10 = portals

*/

ctxData = new CanvasData();

// ctxData.mainSelectedMode("feedMe");  // Эта строка нужна только для тестирования!

snake = new Snake();

obst = new Obstacles();

food = new Food();

adaptation = new AdaptationGUI();
adaptation.changeWHInterf("blForOtherSides");
adaptation.changeWHInterf("indicator");
adaptation.changeWHInterf("lowerBlock");
adaptation.changeWHInterf("canvas");

gui = new GUI();
adaptation.display = gui.display;
gui.createModeList();
gui.createLevelsListForMaze();
gui.createColorsListForTopic("color", true);
gui.createColorsListForTopic("image", true);
gui.createAvatarsListForFoodOrSnake("snake", true);
gui.createAvatarsListForFoodOrSnake("food", true);
gui.createTopicListForModeWords("ru", true);
gui.createTopicListForModeWords("en", true);
gui.advBlock();
$(window).resize(function() { adaptation.changeWHInterf(); gui.cleanSheet(); });

// // Удаление всех данных user из БДЯ/ОЗУ
// YaGames.init().then(ysdk => 
// {
//   ysdk.getPlayer().then(_player => 
//   {
//     let delDtUser = async () => 
//     {
//       _player.setData({});

//       // Проверка:
//       console.log("==Check Delete Data==");
//       console.log("User: "+_player.getUniqueID());
//       console.log(await _player.getData());
//       console.log("==----END----==");
//     };

//     delDtUser();
//   });
// });

gui.showHideCanvas("none");
// gui.showHideDocumentation("block");
// gui.showHideUnderMenu("block");
gui.showHideMainGui("block");
// gui.showHideSettingsLanguage("block");
// gui.showHideInitUser("block");
// gui.showHideWarningForUser("block");
// gui.showHideSettingsJestik("block");
// gui.showHideModes("block");
// gui.showHideDescriptForMode("block", "narrowingOfZone");
// gui.showHideSettingsModeMathematics("block");
// gui.showHideSettingsModeWords("block");
// gui.showHideDecorationField("block");
// gui.showHideTopic("block");
// gui.showHideSettingsSnake("block");
// gui.showHideSettingsFood("block");
// gui.showHideRulesOfGame("block");
// gui.showHideLevelsForMaze("block");
// gui.showHideCountingResults("block", "off");
// gui.showHideGameOver("block", "off");



// if (ctxData.checkSelectedMode("maze"))
// {
//   gui.display.list["levelsForMaze"] = true;
//   gui.showHideLevelsForMaze("block");
//   gui.showOpenLevelsForMaze();
//   gui.showEarnedStarsBehindLevelForMaze();
// }



// 
function Update()
{
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Mode maze
  if (ctxData.checkSelectedMode("maze") && !ctxData.mode.current.o.activeMaze)
  {
    ctxData.mode.current.o.showNextMaze();
  }

  obst.drawObst();

  if (snake.delayBeforeStart() && !snake.activeStopMove)
    snake.movement();

  snake.drawOrganism();

  // Mode narrowingOfZone
  if (ctxData.checkSelectedMode("narrowingOfZone") && !ctxData.mode.current.o.activeNextPos)
  {
    ctxData.mode.current.o.showNextPosObst();
  }

  // Mode words
  if (ctxData.checkSelectedMode("words") && !ctxData.mode.current.o.separationActv)
  {
    ctxData.mode.current.o.splitIntoLetters();
  }

  // Mode mathematics
  if (ctxData.checkSelectedMode("mathematics") && !ctxData.mode.current.o.exampleActv)
  {
    ctxData.mode.current.o.createExample();
  }

  if (!ctxData.checkSelectedMode("maze"))
    food.drawFood();

  // Mode jumpFood
  if (ctxData.checkSelectedMode("jumpFood") && snake.countingDown.start && ctxData.mode.current.o.speedFps())
  {
    ctxData.mode.current.o.moveFood();
  }

  // Mode portals
  if (ctxData.checkSelectedMode("portals"))
  {
    ctxData.mode.current.o.drawPortals();
  }

  // Mode feedMe
  if (ctxData.checkSelectedMode("feedMe") && snake.countingDown.start && !snake.activeStopMove)
  {
    ctxData.mode.current.o.feedTheSnake();
  }
}
