var base_Url = "http://query.yahooapis.com/v1/public/yql?";

function obtenerGeoInformacion(lat,lon){
	var query  = "SELECT * FROM geo.placefinder WHERE text='"+lat+", "+lon+"'";
	    query += " AND gflags='R'";
		query = encodeURIComponent(query); //Codificar el texto para utilizar en una URL.

	//console.log(query);

	var opciones = {
		url 			: base_Url + "q=" + query,
		dataType 		: 'jsonp',
		jsonpCallback 	: 'geocallback',
		data 			: {
				format: 'json'
		}
	}
	
	$.ajax(opciones);
}

function geocallback(datos){
	var info = datos.query.results.Result;
	var pais = info.country;
	var ciudad = info.city;
	var distrito = info.neighborhood;
	//console.log(info);
	console.log("Ahora mismo te encuentras en : " + ciudad);
	
}