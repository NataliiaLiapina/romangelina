<?php

	$path = "poz";
    $filelist = array();
	$i=0;
	$biz=0;
   
		
	$textimfg='';
	$textvd='';	
		
		
	$zi=1000;	
		
		
		$i=0;

$dir = "poz";
 $files = array();
 foreach (scandir($dir) as $file) $files[$file] = filemtime("$dir/$file");
 asort($files);
 $files = array_keys($files);
		
		
		
		
		
		
		$reversed = array_reverse($files);
foreach ( $reversed as $value ) {

$entry=$value;
			
			
			$findme1   = '.txt';
		
			
			$pos1 = strpos($entry, $findme1);

			
		if ($pos1 === false ) {	} else {
		$zi=$zi-1;
		
			
			
			
			
			
			
			
			
			
			
			
			if ($entry!='.' && $entry!='..') {
				
			?>	
				<div class="guest-book-block" data-sort="<?php echo $zi; ?>">
           
			<?php	
				
			$f = fopen('poz/'.$entry,'r');
			$i=0;
			while (!feof($f))	{
				$i++;
				if ($i==1) {
					echo '<h1>'.fgets($f).'</h1>';
				} elseif ($i==2)  {
					echo '<p>'.fgets($f).'</p>';
				} else {
					$stroka=fgets($f);
					
					$findme13   = '.mp3';
					$findme23   = '.mp4';
					//
					$pos33 = strpos($stroka, $findme13);
					$pos43 = strpos($stroka, $findme23);
					
					if ($pos33 === false && $pos43 === false ) {
						
					$textimfg=$textimfg.'<a href="poz/'.$stroka.'" target="_blank"><img src="poz/'.$stroka.'" alt=""></a>';
											
					
					} else {
						
					$textvd=$textvd.'<a href="poz/'.$stroka.'" target="_blank"><video> <source src="poz/'.$stroka.'"> </video> </a>';
						
						
					}
						
				}
			
				
				
				     
  
			
			}
			fclose($f);
		?>
		        <div class="guest-book-img">
                 <?php echo $textimfg; ?>
				  <?php echo $textvd; ?>
					
                </div>
            </div>
		<?php
		$textimfg='';
		$textvd='';
		}
		}
		}
	


?>

