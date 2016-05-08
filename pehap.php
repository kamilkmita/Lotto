<?php 



/*$first_step = explode( '<div class="wynik_lotto">' , $content );
$second_step = explode("</div>" , $first_step[1] );

echo $second_step[0];
*/

$url = 'http://lotto.pl/';
$content = file_get_contents($url);
echo $content;


?>






