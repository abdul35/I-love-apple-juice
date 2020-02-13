<form action="" method="POST">
    
    <input type="text" name="arr">
    <button>Sort</button>
    
</form>


<?php




$arr = $_POST['arr'];
if (isset($arr)) {
    
    $arrConvert = explode("," , $arr);
    $tmp;


    function sortingComb($arr) {

        $fact = 1.247;
        $len = count($arr) / $fact;
        for ($i = 0; $i < $len; $i++) {
            for ($j = 0; $j < $i + 1; $j++) {
                
                $elemR = (($len - 1) - ($i - $j));
                
                if ($arr[$j] > $arr[$elemR]) {
                    
                    $tmp = $arr[$j];
                    $arr[$j] = $arr[$elemR];
                    $arr[$elemR] = $tmp;
                
                }
                
            }   
        }    
        return $arr;
    }

        $sortArr = sortingComb($arrConvert);
        print_r($sortArr);
    }
    


?>
