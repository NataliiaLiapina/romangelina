<?php

$i=0;

$dir = "uploads";
 $files = array();
 foreach (scandir($dir) as $file) $files[$file] = filemtime("$dir/$file");
 asort($files);
 $files = array_keys($files);
 
$reversed = array_reverse($files);
foreach ( $reversed as $value ) {
	if ($value!='.' &&  $value!='..') {


 


$mystring = $value;
$findme   = '.mp';
$pos = strpos($mystring, $findme);
$entry=$value;

if ($pos === false) {
	?>
    <div class="slide-block">
            <div class="slide">
                <img src="uploads/<?php echo $entry; ?>" alt="" />
            </div>
        </div>

	<?php			
} else {
	?>

				
		   <div class="slide-block">
            <div class="slide"> 
                <a href="uploads/<?php echo $entry; ?>" target="_blank">
                    <video>
                        <source src="uploads/<?php echo $entry; ?>">
                    </video>
                </a>
            </div>
        </div>		
				
				
				
				
				
				
				
				
				
				
	<?php
	
}
$sekva++;
	}
}


?>

			


 








































