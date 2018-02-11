<?php
include "db_Model.php";
connect();
if (1) {
    $items = $_POST["data"];
    foreach($items as $item){

        $part = getPartByID($item);
        echo "<tr>
                <td>$part->name</td>
                <td>$part->calories</td>
                <td>$part->proteins</td>
                <td>$part->carbo</td>
                <td>$part->fat</td>
                <td>$part->vitaminA</td>
                <td>$part->vitaminB</td>
                <td>$part->iron</td>
             </tr>";
    }
}else{
    echo "NO DATA!";
}




?>