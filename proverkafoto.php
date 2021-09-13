<?php

echo '<div class="gallery-row">';
$i=0;

$dir = "uploads";
 $files = array();
 foreach (scandir($dir) as $file) $files[$file] = filemtime("$dir/$file");
 asort($files);
 $files = array_keys($files);
 
$sekva=0;
$reversed = array_reverse($files);
foreach ( $reversed as $value ) {
	if ($value!='.' &&  $value!='..') {


 
if ($sekva==3) { echo '</div><div class="gallery-row">'; $sekva=0;}


$mystring = $value;
$findme   = '.mp';
$pos = strpos($mystring, $findme);
$entry=$value;
$i++;
if ($pos === false) {
	?>
<div class="gallery-wrapper">
                    <div class="img-gallery">
                        <div class="img-wrap">
                            <a href="uploads/<?php echo $value; ?>"><img src="uploads/<?php echo $entry; ?>" alt="img" onclick="currentSlide(<?php echo $i; ?>)"></a>
                        </div>  
                    </div>
                </div> 
	<?php			
} else {
	?>
	
 <div class="gallery-wrapper">
                    <div class="img-gallery">
                        <div class="img-wrap">
                            <a href="uploads/<?php echo $entry; ?>">
                                <video onclick="currentSlide(<?php echo $i; ?>)">
                                    <source src="uploads/<?php echo $entry; ?>">
                                </video>
                            </a>
                        </div>  
                    </div>
                </div> 	
	<?php
	
}
$sekva++;
	}
}


?>

			


 