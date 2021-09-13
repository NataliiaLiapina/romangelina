function obnovcomments() {
	$.ajax({
	url: 'obnovpoz.php',         
	method: 'POST',            
	dataType: 'html',   
	success: function(data){   
		$('.guest-book').html(data);
		
		
	items = $('.guest-book .guest-book-block');
	arItems = $.makeArray(items);
	arItems.sort(function(a, b) {
		return $(a).data("sort") - $(b).data("sort")
	});
	$(arItems).appendTo(".guest-book");
		
		
		
		
		
		
		
		
		
		
		
	}
	});
}

obnovcomments();






var files; // переменная. будет содержать данные файлов
var i=0;
// заполняем переменную данными файлов, при изменении значения file поля
$('input[type=file]').on('change', function(){
	i=1;
	files = this.files;
});




$('#textotpravka').on( 'click', function( event ){


	event.stopPropagation(); // остановка всех текущих JS событий
	event.preventDefault();  // остановка дефолтного события для текущего элемента - клик для <a> тега



if (i==0)  {
if ($('input[name=namesss]').val()=='') {	
	$('input[name=namesss]').css('border','1px solid red');	
} else {	
	$('input[name=namesss]').css('border','1px solid #ffb6c1');	
}	
	
	
if ($('textarea').val()=='') {	
	$('textarea').css('border','1px solid red');	
} else {	
	$('textarea').css('border','1px solid #ffb6c1');	
}	
	
if ($('input[name=namesss]').val()!='' && $('textarea').val()!='') {	
$.ajax({	
	url: 'zapis2.php',         	
	method: 'POST',            	
	dataType: 'html',   	
	data: {name: $('input[name=namesss]').val(), age: $('textarea').val()},	
	success: function(data){   	
		obnovcomments();	
		
	}	
});	
}	
	
	
	
	
	
	
	
} else {







	// ничего не делаем если files пустой
	if( typeof files == 'undefined' ) return;

	// создадим данные файлов в подходящем для отправки формате
	var data = new FormData();
	$.each( files, function( key, value ){
		data.append( key, value );
	});

	// добавим переменную идентификатор запроса
	data.append( 'my_file_upload', 1 );
	data.append( 'namesss', $('input[name=namesss]').val() );
	data.append( 'text1ss',$('textarea').val());
	// AJAX запрос
	$.ajax({
		url         : 'zapis.php',
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

			obnovcomments();
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
}
});

















//$('#textotpravka').click(function(event){
//		event.preventDefault();
//
//if ($('input[name=name]').val()=='') {
//	$('input[name=name]').css('border','1px solid red');
//} else {
//	$('input[name=name]').css('border','1px solid #ffb6c1');
//}
//
//
//if ($('textarea').val()=='') {
//	$('textarea').css('border','1px solid red');
//} else {
//	$('textarea').css('border','1px solid #ffb6c1');
//}
//
//if ($('input[name=name]').val()!='' && $('textarea').val()!='') {
//$.ajax({
//	url: 'zapis.php',         
//	method: 'POST',            
//	dataType: 'html',   
//	data: {name: $('input[name=name]').val(), age: $('textarea').val()},
//	success: function(data){   
//		obnovcomments();
//	
//	}
//});
//}
//	
//
//
//
//});