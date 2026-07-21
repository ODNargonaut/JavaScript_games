/* Хранит ф-ии для кнопок в GUI подтверждение */


class Confirm
{
  /* /// */
  btnClose(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".blConfirmCloseImg",
      atActv: [["transition", "0.2s"], ["background-size", "80%"]],
      prev: [["transition", "0.3s"], ["background-size", "100%"]],
      sec: 100,
      funSec: 100,
      fun: () => 
      {
        gui.IConfirm(false);
    
        switch(gui.interface.current.I)
        {
          case "shop":     
            gui.IShop(true); 
            // gui.blSettings(false);
            break;
          
          case "addCoins": 
            gui.IAddCoins(true); 
            break;
        }
      }
    };

    gui.atClickActv(o);
  }

  /* /// */
  btnContinue(e)
  {
    gui.preventDefault(e);

    let o = 
    {
      elm: ".blConfirmContinueImg",
      atActv: [["transition", "0.2s"], ["background-size", "80%"]],
      prev: [["transition", "0.3s"], ["background-size", "100%"]],
      sec: 100,
      funSec: 100,
      atFlag: true,
      fun: () => 
      {
        gui.IConfirm(false);
    
        switch(gui.interface.current.I)
        {
          case "shop":
          {
            gui.IShop(true);

            gui.blSettings(false);
      
            let o = sAir.models[sAir.nModel];
            if (dtg.user.coins >= o.getPrice(sAir.nColorModel))
            {
              // console.log(o.getPrice(sAir.nColorModel));
        
              dtg.addCoinsUser(-o.getPrice(sAir.nColorModel));
        
              sAir.buyOrSelModel(true);
              gui.checkPurchasedModel();
            }
            else
              gui.notEnoughCoins();

            break;
          }

          case "addCoins":
          {
            gui.IAddCoins(true);
            
            if (gui.confirmPFM.pfm >= 0)
            {
              dtg.buyProduct(gui.confirmPFM.pfm);
              gui.checkShBtnPrevNextModel();
            }
            
            break;
          }
        }
      }
    };

    gui.atClickActv(o);
  }
}
