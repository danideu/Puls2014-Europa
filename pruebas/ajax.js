var base_Url = "http://query.yahooapis.com/v1/public/yql?";

function obtenerGeoInformacion(lat,lon){
	var query  = "SELECT * FROM geo.placefinder WHERE text='"+lat+", "+lon+"'";
	    query += " AND gflags='R'";
	query = encodeURIComponent(query); //Codificar el texto para utilizar en una URL.

	console.log(query);
}