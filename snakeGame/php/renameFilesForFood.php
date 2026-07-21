<?php

class renameFilesForFood
{
  private $errN = 0;

  private $dir = "img/food/16x16/";
  private $dirResult = "img/food/result/";
  private $dirBig = "img/food/big/";
  private $pattern = "";

  private $arrFiles = NULL;

  private $N = 2027;
  private $NB = 0;  // Для файлов с большим размером, чем 16x16.

  private $newName = "";
  private $bigFileName = "big-";
  private $format = "";

  private $W = 16;
  private $H = 16;

  private $br = "<br />";


  // 
  public function __construct($pattern, $newName, $format)
  {
    $abspath = dirname(__FILE__)."/";
    $this->dir = $abspath.$this->dir;
    $this->dirResult = $abspath.$this->dirResult;
    $this->dirBig = $abspath.$this->dirBig;

    $this->pattern = $pattern;
    $this->newName = $newName."-";
    $this->format = $format;

    echo "<pre>";

    $b = true;
    if (strlen($this->pattern) <= 0 && !($b=false)) echo "Error: укажите шаблон для поиска!".$this->br;
    if (strlen($this->newName) <= 1 && !($b=false)) echo "Error: укажите имя для нового файла!".$this->br;
    if (strlen($this->format)  <= 0 && !($b=false)) echo "Error: укажите формат для нового файла!".$this->br;

    if ($b)
    {
      $this->readDir();

      if (count($this->arrFiles) > 0)
        $this->renameFiles();
      else 
        echo "Файлов не обнаружено!<br />";
    }

    echo "</pre>";
  }

  // 
  private function readDir()
  {
    $this->arrFiles = glob($this->dir.$this->pattern);
  }

  // 
  private function renameFiles()
  {
    $br = $this->br;

    for ($i = 0; $i < count($this->arrFiles); $i++)
    {
      $oldName = $this->arrFiles[$i];
      $newName = $this->newName.($this->N++).$this->format;

      $fname = $this->dirResult.$newName;
      
      if (rename($oldName, $fname));
      else
      {
        echo "Error: Неполучилось изменить файл '".$oldName."'".$br;
        $this->errN++;
      }

      $sz = getimagesize($fname);
      if ($sz[0] > $this->W || $sz[1] > $this->H)
      {
        echo "Этот файл '".$fname."' - имеет не допустимый размер!".$br;
        echo "Перемещаю его в папку ".$this->dirBig.$br;

        if (!rename($fname, $this->dirBig.$this->bigFileName.($this->NB++).$this->format))
        {
          echo "Не удалось перемеситить файл в папку ".$this->dirBig.$br;
          $this->errN++;
        }

        echo $br;
      }
    }

    echo $br."Процесс переименования файлов завершен!".$br;
    echo "Кол-во ошибок: ".$this->errN.".".$br.$br;
  }
}

$o = new renameFilesForFood("*.png", "wall", ".png");

?>