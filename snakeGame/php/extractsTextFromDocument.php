<?php

/*

  Данный скрипт извлекает слова на Ru или En языке из таблиц на сайте.

*/

class ExtractData
{
  private $LANGUAGE = "";
  private $BR = "<br />";
  private $NEWLINE = 10;     // длина строки
  private $NEXTNEWLINE = 0;  // следующая строка

  private $dirNameF = "./indexDocument/list_1.html";

  private $receivedDt = [];  // полученные данные


  // 
  public function __construct($language)
  {
    $this->LANGUAGE = $language;
    $this->NEXTNEWLINE = $this->NEWLINE-1;
  }

  // 
  public function extractDtFromFile()
  {
    $reg = $this->LANGUAGE=="ru"?'ЁёА-я':'[:alpha:]';
    preg_match_all('/['.$reg.'[:space:][:punct:]]+/u', file_get_contents($this->dirNameF), $this->receivedDt);

    // preg_match_all('/[ЁёА-я]+/u', file_get_contents("./index.html"), $res);
    // preg_match_all('/">[[:alpha:]\-\'\(\)[:space:]]+<\/a/u', file_get_contents($this->dirNameF), $this->receivedDt);

    // print_r($this->receivedDt);

    // $ar = file($this->dirNameF);
    // shuffle($ar);

    // print_r($ar);

    // for ($i = 0; $i < count($ar); $i++)
    // {
    //   echo trim($ar[$i]).$this->BR;
    // }

    // for ($i = 0; $i < count($ar); $i++)
    // {
    //   $a = [];
    //   if (preg_match_all('/<tr>/u', $ar[$i], $a))
    //   {
    //     echo $ar[$i+1].$this->BR;
    //   }
    // }

    // for ($i = 0; $i < count($ar); $i++) echo $ar[$i];

    // for ($i = 0; $i < count($ar); $i++)
    // {
    //   preg_match_all('/[ЁёА-я[:space:]]+\(/u', $ar[$i], $tmp);
    //   // $tmp = str_replace(" (", "", $ar[$i]);
    //   echo $ar[$i].$this->BR;
    // }

    // $tmpStr = "";
    // for ($i = 0; $i < count($this->receivedDt[0]); $i++)
    // {
    //   // $tmpStr .= preg_replace("/^\s/m", "", $this->receivedDt[0][$i]).$this->BR;
    //   $tmpStr .= trim(str_replace(["\n", "\">", "</a", "	"], "", $this->receivedDt[0][$i])).$this->BR;
    // }

    // echo $tmpStr;
  }

  // 
  public function processingDt($reverse=false)
  {
    $tmp = $this->receivedDt[0][0];

    if ($reverse)
    {
      // Эти действия нужны для данных, которые будут переведены на другой язык.
      $tmp = str_replace(["_", "\n"], [" ", ", "], $tmp);
    }
    else 
    {
      $tmp = str_replace([" ", "-"], "_", $tmp);
      $tmp = str_replace(["\n", "\n\n", "\n\n\n"], "\n", $tmp);
      $tmp = str_replace("\n", ",", $tmp);
      $tmp = str_replace(["__", "___", "____", "_____"], "_", $tmp);
      $tmp = str_replace(["__", "___", "____", "_____"], "_", $tmp);

      $tmp = str_replace([",_", "_,", ",,"], ",", $tmp);
    }
    echo $tmp;
  }

  // 
  public function endResult($s)
  {
    $sz = 0;
    $listSZ = [];
    $str = "";
    
    $arr = explode(',', $s);

    shuffle($arr);

    for ($i = 0; $i < count($arr); $i++)
    {
      if ($this->LANGUAGE == "ru")
        $sz = round(strlen($arr[$i]) / 2);  // для кирилицы
      else 
        $sz = strlen($arr[$i]);  // для английских

      if ($sz > 0)
      {
        if ($sz <= 30)
        {
          if ($sz >= 25) $listSZ[$i] = $sz;

          $str = "\"".$arr[$i]."\"";
          if ($i < count($arr)-1) $str .= ", ";
        }
      }
      if ($i == $this->NEXTNEWLINE) { $str .= "\n"; $this->NEXTNEWLINE += $this->NEWLINE; }

      echo $str;
    }

    echo $this->BR;
    echo count($arr).$this->BR.$this->BR;
    print_r($listSZ);
  }
}

echo "<pre>";

/*

  Не забудь поменять язык!

*/
$o = new ExtractData("en");
// $o->extractDtFromFile();
// $o->processingDt();
// $o->endResult("");

echo "</pre>";

?>