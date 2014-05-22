var $formulario = $('#formulario');

function mostrarFormulario(){

	$formulario.slideToggle();
	return false;
}

function agregarPost(){
	debugger;
	var clone = $('.item').first().clone().prepend('#contenido');
	clone.slideDown();
}

$('#publicar_nav a').click(mostrarFormulario);
$('.boton').click(agregarPost);
