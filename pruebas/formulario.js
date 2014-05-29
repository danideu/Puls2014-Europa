var $form 		= $('#formulario'),
	$titulo 	= $('#titulo'),	
	$url 		= $('#link'),
	$primerPost = $('.item').first(),
	$lista 		= $('#contenido'),
	ss    		= sessionStorage,
	ls 			= localStorage;

//Condición que recupera el valor del titulo y URL de la sesión por 
//si se ha cerrado la ventana sin querer.
if (ls.getItem('autosave')){
	$titulo.val(ss.getItem('titulo'));
	$url.val(ss.getItem('url'));
}

//Cada segundo se ejecutará la función anónima 
//que guardará en las variables de sesión el texto del formulario
var id = setInterval(function(){
	ss.setItem('titulo', $titulo.val());
	ss.setItem('url', $url.val());
}, 1000); 

function mostrarOcultarFormulario(){
	$form.slideToggle();
	$lista.slideToggle();
}

function validarUrl(){
	var txt = $url.val();
	var re = /(http(s)?:\\)?([\w-]+\.)+[\w-]+[.com|.in|.org]+(\[\?%&=]*)?/
	if (re.test(txt)) {
		alert('Valid URL')
	}
}


/*function grabarInformacion(e){
	e.preventDefault(); 

	var titulo = $titulo.val(),
		url    = $url.val(),
		ls     = localStorage, //Guardado durante un tiempo más prolongado.
		ss	   = sessionStorage; //Lo que dura la sesión del navegador

	ls.secItem('titulo', titulo);
	ls.secItem('url', url);

	ss.secItem('titulo', titulo);
	ss.secItem('url', url);
}*/

//Funcion que agrega un nuevo post en primer lugar dentro del contenido.
function agregarPost(e){
	//Para evitar que se envíe el formulario. Es decir, 
	//quita la función por defecto,en este caso el Submit.
	e.preventDefault(); 
	var titulo = $titulo.val(), 		//Valor del campo titulo del formulario
		url    = $url.val(), 			//Valor del campo titulo del formulario
		clone  = $primerPost.clone();	//Clonamos la caja del primer post

	/*Buscamo el primer elemento que coincida dentro de lo que hemos clonado
	  y le ponemos al texto nuestra variable titulo recogida del form y el enlace
	  de la variable url recogida del form.
	*/
	clone.find('.titulo_item a') 
		 .text(titulo)
		 .attr('href', url)

		clone.hide()

		//Situamos lo clonado al principio de la lista
		//es decir al principio de $('#contenido')
		$lista.prepend(clone) 
		mostrarOcultarFormulario();
		clone.fadeIn();
		$titulo.val("");
		$url.val("");

	//debugger; //Se para en el código cuando se esté ejecutando.
}

$('#publicar_nav a').click(mostrarOcultarFormulario);
$('#formulario').on('submit', agregarPost);
//$('#formulario').on('submit', grabarInformacion);
	
