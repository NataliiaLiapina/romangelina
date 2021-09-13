


function slideajax() {
	
	$.ajax({
	url: 'proverkaslideblok.php',         
	method: 'POST',            
	dataType: 'html',          
	success: function(data){   
		
		$(".slider").html(data+'<div class="slider-close">&#10006;</div><a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a>');
	}
	});

}






function fotoajax() {
	
	$.ajax({
	url: 'proverkafoto.php',         
	method: 'POST',            
	dataType: 'html',          
	success: function(data){   
		
		$(".gallery").html(data);
	}
	});

}
fotoajax();
slideajax();



var files; // переменная. будет содержать данные файлов

// заполняем переменную данными файлов, при изменении значения file поля
$('input[type=file]').on('change', function(){
	files = this.files;
});





// обработка и отправка AJAX запроса при клике на кнопку upload_files
$('.input-submit').on( 'click', function( event ){

	event.stopPropagation(); // остановка всех текущих JS событий
	event.preventDefault();  // остановка дефолтного события для текущего элемента - клик для <a> тега

	// ничего не делаем если files пустой
	if( typeof files == 'undefined' ) return;

	// создадим данные файлов в подходящем для отправки формате
	var data = new FormData();
	$.each( files, function( key, value ){
		data.append( key, value );
	});

	// добавим переменную идентификатор запроса
	data.append( 'my_file_upload', 1 );

	// AJAX запрос
	$.ajax({
		url         : 'file.php',
		type        : 'POST',
		data        : data,
		cache       : false,
		dataType    : 'json',
		// отключаем обработку передаваемых данных, пусть передаются как есть
		processData : false,
		// отключаем установку заголовка типа запроса. Так jQuery скажет серверу что это строковой запрос
		contentType : false,
		// функция успешного ответа сервера
		success     : function( respond, status, jqXHR ){

			// ОК
			if( typeof respond.error === 'undefined' ){
				// файлы загружены, делаем что-нибудь

				// покажем пути к загруженным файлам в блок '.ajax-reply'


			$('#form-upload-btn').css('transition-duration','.2s');

			$('#form-upload').css('display','none');
			$('#form-upload-btn').css('display','block');
			$('#form-upload-btn').html('Фото загружены');
			
			$('#form-upload-btn').css('border-color','green');

			fotoajax();
			slideajax();
			
			setTimeout(function(){
					$('#form-upload-btn').css('border-color','#ffb6c1');
					$('#form-upload-btn').html('Загрузить фото');
			},2000);
			
			$('#form-upload')[0].reset();
			
			}
			// error
			else {
				console.log('ОШИБКА: ' + respond.error );
			}
		},
		// функция ошибки ответа сервера
		error: function( jqXHR, status, errorThrown ){
			console.log( 'ОШИБКА AJAX запроса: ' + status, jqXHR );
		}

	});

});




var form_upload_btn = document.getElementById("form-upload-btn");
form_upload_btn.addEventListener("click", function (event) {
    event.preventDefault();
    $("#form-upload-btn").css('display', 'none');
    $("#form-upload").css('display', 'flex');
});


var popup_slides = document.getElementsByClassName("gallery-wrapper");
for (var i = 0; i < popup_slides.length; i++){
popup_slides[i].addEventListener("click", function (event) {
    event.preventDefault();
        document.querySelector(".slider-back").style.display = "block";
        document.querySelector(".slider").style.display = "block";
        //document.querySelector(".slider").css('flex-direction', 'column');
        //document.querySelector(".slider").css('justify-content', 'space-between');
        $('body').css('overflow', 'hidden');

});
}

var close_slider = document.getElementsByClassName("slider-close");
for (var i = 0; i < close_slider.length; i++) {
    close_slider[i].addEventListener("click", function (event) {
        event.preventDefault()
        document.querySelector(".slider-back").style.display = "none";
        document.querySelector(".slider").style.display = "none";
        $('body').css('overflow', 'scroll');
    })
}

  $(document).on('click', '.slider-close', function(e){
      event.preventDefault()
        document.querySelector(".slider-back").style.display = "none";
        document.querySelector(".slider").style.display = "none";
        $('body').css('overflow', 'scroll');
    });





var slideIndex;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	 event.preventDefault();
	 $('.slider-back').css('display','block');
	 $('.slider').css('display','block');
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-block");
   
    //var dots = document.getElementsByClassName("demo");
    //var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //for (i = 0; i < dots.length; i++) {
    //    dots[i].className = dots[i].className.replace(" active", "");
    //}
    slides[slideIndex - 1].style.display = "flex";
    //dots[slideIndex - 1].className += " active";
    //captionText.innerHTML = dots[slideIndex - 1].alt;
}






  

