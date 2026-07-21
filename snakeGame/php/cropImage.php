<?php 
/* 

  Данный класс отвечает за обрезку изображения.

*/

class CropImage
{
  private $quantityErr = 0;

  private $dirMain = "./img/wall/";
  private $dirFull = "full/";
  private $dirChapter = "chapter/";

  private $fileNameSrc = "walls.png";

  private $currentW = 0;
  private $currentH = 0;

  private $N = 2027;

  private $fNameSave = "wall-";
  private $format = ".png";

  private $resW = 16;
  private $resH = 16;

  private $quantitySpaceX = 3;  // Кол-во пробелов между спрайтов по оси X.
  private $quantitySpaceY = 3;  // Кол-во пробелов между спрайтов по оси Y.
  private $spaceLengthX = 4;    // Длина каждого прабела по оси X в пикселях.
  private $spaceLengthY = 4;    // Длина каждого прабела по оси Y в пикселях.

  private $offsetX = 0;
  private $offsetY = 0;


  // 
  public function __construct($quntityFull, $fn, $fnSave, $format=".png")
  {
    $this->fNameSave = $fnSave;
    $this->format = $format;

    for ($i = 1; $i <= $quntityFull; $i++)
    {
      $this->fileNameSrc = $this->dirMain.$this->dirFull.$fn.$i.$this->format;

      $dt = getimagesize($this->fileNameSrc);
      $this->currentW = $dt[0] - ($this->quantitySpaceX * $this->spaceLengthX);
      $this->currentH = $dt[1] - ($this->quantitySpaceY * $this->spaceLengthY);

      echo "<code>";
      $this->main();
      echo "</code>";
    }
  }

  // 
  private function main()
  {
    $br = "<br />";

    $fullImg = imagecreatefrompng($this->fileNameSrc);

    $totalX = $this->currentW / $this->resW;
    $totalY = $this->currentH / $this->resH;

    $offsetY = 0;

    for ($y = 0; $y < $totalY; $y++)
    {
      $offsetX = 0;

      if ($y > 0) $offsetY += $this->spaceLengthY;

      for ($x = 0; $x < $totalX; $x++)
      {
        $resImg = imagecreatetruecolor($this->resW, $this->resH);
        
        $this->setTransparentBackground($resImg);

        if ($x > 0) $offsetX += $this->spaceLengthX;

        // Копирование
        imagecopy($resImg, $fullImg, 0, 0, $this->resW * $x + $offsetX, $this->resH * $y + $offsetY, $this->resW, $this->resH);

        imagepng($resImg, $this->dirMain.$this->dirChapter.$this->fNameSave.strval($this->N++).$this->format);

        imagedestroy($resImg);
      }
    }

    imagedestroy($fullImg);

    echo "Изображения вырезаны!".$br;
    echo "Готовых вырезаных изображений: ".strval($totalX * $totalY).$br.$br;
  }

  // Прозрачный фон
  private function setTransparentBackground($img)
  {
    imagealphablending($img, false);
    $transparency = imagecolorallocatealpha($img, 0, 0, 0, 127);
    imagefill($img, 0, 0, $transparency);
    imagesavealpha($img, true);
  }
}

// $o = new CropImage(50, "wallFull-", "wall-");

?>