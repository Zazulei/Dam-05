alert('SceneScene2.js loaded');
var hay_trailer=false;
var favorito=false;
function SceneScene2() {

};

SceneScene2.prototype.initialize = function () {
	alert("SceneScene2.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneScene2.prototype.handleShow = function (data) {
	alert("SceneScene2.handleShow()");
	// this function will be called when the scene manager show this scene
	$("#cover").html('');
	$("#title").html('');
	$("#seson").html('');
	$("#sinopsis").html('');
	$('#puntuacion').html('');
	$.ajax({
	  type: "GET",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+movie_id,
	  data: { api_key: api_key, language:"es"},
	  success: function(data){
	  	$("#details").css('background-image', 'url(' + base_url+'w1280'+data.backdrop_path + ')');
	  	$("#cover").append('<img src="'+base_url+'w342'+data.poster_path+'"/>');
	  	if(typeof data.title !="undefined"){
	  		$("#title").append('<h1>'+data.title+' ( '+(data.vote_average/2) +'/5 )</h1>');
	  		id = '/movie/'+data.id;
	  	}else{
	  		$("#title").append('<h1>'+data.name+' ( '+(data.vote_average/2) +'/5 )</h1>');
	  		id = '/tv/'+data.id;
	  	}
	  	
	  	if(typeof data.title == "undefined"){
	  		$("#seson").append('Temporadas: '+ data.number_of_seasons+'  Capitulos: '+ data.number_of_episodes);
	  		$("#seson").css("margin-bottom", "10px");
	  		//$("#seson").css("margin-top", "5px");
	  		//$("#capi").append('<h1>'+data.number_of_episodes+'</h1>');
	  		alert(data.number_of_seasons + " TEEEMPORADAS");
	  		alert(data.number_of_episodes + " CAPITULOS");
	  	} else {
	  		$("#seson").css("margin-bottom", "0px");
	  		//$("#seson").css("margin-top", "0px");
	  	}
	  	
	  	$("#sinopsis").append(data.overview);	  
		$.ajax({
			  type: "GET",
			  crossDomain: true,
			  async: true,
			  dataType: "json",
			  url: API+movie_id+'/videos',
			  data: { api_key: api_key},
			  success: function(data){
				  if(data.results.length>0){
					  trailer_id=data.results[0].key;
					  hay_trailer=true;
					  if(session_id==''){
						$('#svecKeyHelp_jz6l').sfKeyHelp({
							'red':'Trailer',
							'return':'Volver',
							'tools':'Login'
						});
					  }
				  }else{
					  hay_trailer=false;
					  if(session_id==''){
						$('#svecKeyHelp_jz6l').sfKeyHelp({
							'return':'Return',
							'tools':'Login'
						});
					  }else{
						  $('#svecKeyHelp_jz6l').sfKeyHelp({
								'return':'Return',
								'tools':'Logout'
						  });
					  }
				  }
			  }
			});
	  }
	});
	if(session_id==''){
		$('#puntuacion').append('<div class="col-xs-12 puntua">Logueate para puntuar</div>');	
	}else{ 
		alert(API+movie_id+'/account_states');
		$.ajax({
			  type: "GET",
			  crossDomain: true,
			  async: true,
			  dataType: "json",
			  url: API+movie_id+'/account_states',
			  data: { api_key: api_key, session_id: session_id},
			  success: function(data){
				  favorito=data.favorite;
				  alert('datooooos');
				  
				  if(favorito){
					  $('#svecKeyHelp_jz6l').sfKeyHelp({
							'red':'Trailer',
							'green':'Quitar de favoritos',
							'return':'Volver',
							'tools':'Logout'
						});

					$("#cover img").addClass("fav");
				  }else{
					  $('#svecKeyHelp_jz6l').sfKeyHelp({
							'red':'Trailer',
							'green':'Añadir a favoritos',
							'return':'Volver',
							'tools':'Logout'
						});
					alert("FFUUUUUUUUUUUERRRRRRRRRRRRRAAAAAAAAAAAAAAAAAAAAA");
					$("#cover img").removeClass("fav");
				  }
				  
				  if(typeof data.rated.value!="undefined"){	  
					  $('#puntuacion').append('<div id="punt" class="col-xs-12 puntua">Tu puntuación: '+data.rated.value+'</div>');	
					  $('#puntuacion').append('<div id="puntInfo" class="col-xs-12 puntua">Cambia la puntuación de la pel&iacute;cula con tu mando del 1 al 5</div>');	

				  }else{
					  $('#puntuacion').append('<div id="punt" class="col-xs-12 puntua"></div>');	
					  $('#puntuacion').append('<div id="puntInfo" class="col-xs-12 puntua">Puntua la pel&iacute;cula con tu mando del 1 al 5</div>');	
				  }
			  }
		});
		
	}
	
};

SceneScene2.prototype.handleHide = function () {
	alert("SceneScene2.handleHide()");
	// this function will be called when the scene manager hide this scene

};

SceneScene2.prototype.handleFocus = function () {
	alert("SceneScene2.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene2.prototype.handleBlur = function () {
	alert("SceneScene2.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene2.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene2.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};

function puntuar (puntuacion) {
	alert("TE PUNTUO CON " + puntuacion + " " + id);
	$.ajax({
	  type: "POST",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+id+'/rating',
	  data: { api_key: api_key, session_id: session_id, value: puntuacion },
	  success: function(data){
		alert("YA ESTAS PUNTUADO " + data );
	  	console.log(data);
	  	$('#punt').html('Tu puntuación: '+puntuacion);
	  	$('#puntInfo').html('Cambia la puntuación de la pel&iacute;cula con tu mando del 1 al 5');
	  }
	});
};

function addFavoritos () {
	var tipo=movie_id.indexOf('movie')>-1?'movie':'tv';

	  $.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+"/account",
		  data: { api_key: api_key,session_id:session_id },
		  success: function(data){
			alert('logeadoooooooooooooo');
			alert('data.id'+id);
			var a=id.split('/');
			var idm=a[a.length-1];
			alert('idm'+idm);
			var f=!favorito;
			alert(API+'/account/'+data.id+'/favorite?api_key='+api_key+'&session_id='+session_id+'&media_type='+tipo+'&media_id='+idm+'&favorite='+f);
			$.ajax({
				  type: "POST",
				  crossDomain: true,
				  async: true,
				  dataType: "json",
				  url: API+'/account/'+data.id+'/favorite?api_key='+api_key+'&session_id='+session_id+'&media_type='+tipo+'&media_id='+idm+'&favorite='+f,
				  /*data: { api_key: api_key, session_id: session_id, media_type:tipo, media_id:idm, favorite:f},*/
				  /*data: { api_key: api_key, session_id: session_id, media_type:tipo, media_id:idm, favorite:f},*/ 
				  success: function(data){
					  
					  alert("OKOKOKOKOKOKOKOK" );
					  alert(data.status_message );
					  alert("OKOKOKOKOKOKOKOK" );
					  alert("OKOKOKOKOKOKOKOK" );
				  	console.log(data);
				
				  	 if(f){
						  $('#svecKeyHelp_jz6l').sfKeyHelp({
								'red':'Trailer',
								'green':'Quitar de favoritos',
								'return':'Volver',
								'tools':'Logout'
							});

							$("#cover img").addClass("fav");
					  }else{
						  $('#svecKeyHelp_jz6l').sfKeyHelp({
								'red':'Trailer',
								'green':'Añadir a favoritos',
								'return':'Volver',
								'tools':'Logout'
							});
							alert("FFUUUUUUUUUUUERRRRRRRRRRRRRAAAAAAAAAAAAAAAAAAAAA");
							$("#cover img").removeClass("fav");
					  }
				  }
				});
		  }
		});  
	
	 
	
};


