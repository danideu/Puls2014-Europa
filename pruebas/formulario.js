var $form = $('#formulario'),
	$titulo = $('#titulo'),	
	$url = $('#link'),
	$primerPost = $('.item').first(),
	$lista = $('#contenido');


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
//Funcion que agrega un nuevo post en primer lugar dentro del contenido.
function agregarPost(e){
	//Para evitar que se envíe el formulario. Es decir, 
	//quita la función por defecto,en este caso el Submit.
	e.preventDefault(); 
	var titulo = $titulo.val(),
		url    = $url.val(),
		clone  = $primerPost.clone();

		clone.find('.titulo_item a')
			.text(titulo)
			.attr('href', url)

		clone.hide()

		$lista.prepend(clone)
		mostrarOcultarFormulario();
		clone.fadeIn()

	//debugger; //Se para en el código cuando se esté ejecutando.
}
$('#publicar_nav a').click(mostrarOcultarFormulario);
$('#formulario').on('submit', agregarPost);
	