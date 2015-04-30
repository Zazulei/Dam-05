alert('SceneScene1.js loaded');

function SceneScene1() {

};

function LoadFilmPopulares() {
	
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+"/discover/movie?sort_by=popularity.desc&api_key="+api_key,
		  success: function(data){
		  	alert('POPULARES');
		  	
		  	var row = 0;

	  		$("#movies").append('<div id="row-'+ row +'-title" class=""><img src="./images/title/pelisTop.png"/></div>');
		  	
		  	$("#movies").append('<div id="row-'+ row +'" class="row imgs-'+row+'"></div>');

	  		$("#row-"+ row).append('<div id="row-'+ row +'-arrow-l" class="col-xs-1 row-arros-l"><img src="./images/slider/arrow-l.png"/></div>');
		  	
		  	for (var i = 0; i < 16; i++) {
		  		$("#row-"+ row).append('<div id="img-'+row+'-'+i+'" class="col-xs-2 cont-row-'+row+' imgs-'+row+'" href="/movie/'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  		
		  		if(i >= 5) {
		  			$("#img-"+row+"-"+i).css( "display", "none" );
		  		}
		  	}

	  		$("#row-"+ row).append('<div id="row-'+ row +'-arrow-r" class="col-xs-1 row-arros-r"><img src="./images/slider/arrow-r.png"/></div>');
		  	
		  	$("#row-"+ row +"-arrow-l").css( "opacity", 0 );
		  	
		  	LoadFilm2013();
		  	
		  },
		  error: function(){
		  	alert('error');
		  }
		});

}

function LoadFilm2013() {
	
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  /*url: API+"/discover/movie?sort_by=vote_average.desc&api_key="+api_key,*/
		  url: API+"/discover/movie?primary_release_year=2013&api_key="+api_key,
		  /*url: API+"/movie/top_rated?api_key="+api_key,*/
		  success: function(data){
		  	alert('RATEADAS');

		  	var row = 1;
		  	
	  		$("#movies").append('<div id="row-'+ row +'-title" class=""><img src="./images/title/pelis2013.png"/></div>');

	  		$("#movies").append('<div id="row-'+ row +'" class="row imgs-'+row+'"></div>');
	  		

	  		$("#row-"+ row).append('<div id="row-'+ row +'-arrow-l" class="col-xs-1 row-arros-l"><img src="./images/slider/arrow-l.png"/></div>');
		  	
		  	for (var i = 0; i < 16; i++) {
		  		$("#row-"+ row).append('<div id="img-'+row+'-'+i+'" class="col-xs-2 cont-row-'+row+' imgs-'+row+'" href="/movie/'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  		
		  		if(i >= 5) {
		  			$("#img-"+row+"-"+i).css( "display", "none" );
		  		}
		  	}

	  		$("#row-"+ row).append('<div id="row-'+ row +'-arrow-r" class="col-xs-1 row-arros-r"><img src="./images/slider/arrow-r.png"/></div>');
	

		  	$("#row-"+ row +"-arrow-l").css( "opacity", 0 );
		  	
		  	LoadTv();
		  	
		  },
		  error: function(){
		  	alert('error');
		  }
		});
	
}

function LoadTv() {
	
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+"/discover/tv?api_key="+api_key,
		  success: function(data){
		  	alert('success');
		  	
		  	
		  	var row = 2;
		  	
	  		$("#movies").append('<div id="row-'+ row +'-title" class=""><img src="./images/title/seriesTop.png"/></div>');

	  		$("#movies").append('<div id="row-'+ row +'" class="row imgs-'+row+'"></div>');
	  		

	  		$("#row-"+ row).append('<div id="row-'+ row +'-arrow-l" class="col-xs-1 row-arros-l"><img src="./images/slider/arrow-l.png"/></div>');
	  	
		  	for (var i = 0; i < 16; i++) {
		  		$("#row-"+ row).append('<div id="img-'+row+'-'+i+'" class="col-xs-2 cont-row-'+row+' imgs-'+row+'" href="/tv/'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  		
		  		if(i >= 5) {
		  			$("#img-"+row+"-"+i).css( "display", "none" );
		  		}
		  	}

	  		$("#row-"+ row).append('<div id="row-'+ row +'-arrow-r" class="col-xs-1 row-arros-r"><img src="./images/slider/arrow-r.png"/></div>');
		  	

		  	$("#row-"+ row +"-arrow-l").css( "opacity", 0 );
	  		
		  	LoadTv2014();
		  	
		  },
		  error: function(){
		  	alert('error');
		  }
		});
	
}

function LoadTv2014() {
	
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+"/discover/tv?first_air_date_year=2014&api_key="+api_key,
		  success: function(data){
		  	alert('success');
		  	
		  	var row = 3;

	  		$("#movies").append('<div id="row-'+ row +'-title" class=""><img src="./images/title/seriesTop2014.png"/></div>');

	  		$("#movies").append('<div id="row-'+ row +'" class="row imgs-'+row+'"></div>');
	  		

	  		$("#row-"+ row).append('<div id="row-'+ row +'-arrow-l" class="col-xs-1 row-arros-l"><img src="./images/slider/arrow-l.png"/></div>');
		  	
		  	for (var i = 0; i < 16; i++) {
		  		$("#row-"+ row).append('<div id="img-'+row+'-'+i+'" class="col-xs-2 cont-row-'+row+' imgs-'+row+'" href="/tv/'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  		
		  		if(i >= 5) {
		  			$("#img-"+row+"-"+i).css( "display", "none" );
		  		}
		  	}

	  		$("#row-"+ row).append('<div id="row-'+ row +'-arrow-r" class="col-xs-1 row-arros-r"><img src="./images/slider/arrow-r.png"/></div>');
	
		  	$("#row-"+ row +"-arrow-l").css( "opacity", 0 );
		  	
		  	$('#movies div.col-xs-2').keynav();
		  	
		  },
		  error: function(){
		  	alert('error');
		  }
		});
	
}

function LoadFavouriteMovies() {
	if(session_id!=""){
		$.ajax({
			  type: "GET",
			  crossDomain: true,
			  async: true,
			  dataType: "json",
			  url: API+"/account/"+session_id+"/favorite/movies&api_key="+api_key,
			  data: { api_key: api_key, session_id: session_id, sort_by: 'created_at.desc' },
			  success: function(data){
			  	alert('success');
			  	
			  	var row = 3;
	
		  		$("#movies").append('<div id="row-'+ row +'-title" class=""><img src="./images/title/seriesTop2014.png"/></div>');
	
		  		$("#movies").append('<div id="row-'+ row +'" class="row imgs-'+row+'"></div>');
		  		
	
		  		$("#row-"+ row).append('<div id="row-'+ row +'-arrow-l" class="col-xs-1 row-arros-l"><img src="./images/slider/arrow-l.png"/></div>');
			  	
			  	for (var i = 0; i < 16; i++) {
			  		$("#row-"+ row).append('<div id="img-'+row+'-'+i+'" class="col-xs-2 cont-row-'+row+' imgs-'+row+'" href="/tv/'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
			  		
			  		if(i >= 5) {
			  			$("#img-"+row+"-"+i).css( "display", "none" );
			  		}
			  	}
	
		  		$("#row-"+ row).append('<div id="row-'+ row +'-arrow-r" class="col-xs-1 row-arros-r"><img src="./images/slider/arrow-r.png"/></div>');
		
			  	$("#row-"+ row +"-arrow-l").css( "opacity", 0 );
			  	
			  	$('#movies div.col-xs-2').keynav();
			  	
			  },
			  error: function(){
			  	alert('error');
			  }
			});
	}
}

function LoadFavouriteTV() {
	if(session_id!=""){
		$.ajax({
			  type: "GET",
			  crossDomain: true,
			  async: true,
			  dataType: "json",
			  url: API+"/account/"+session_id+"/favorite/tv&api_key="+api_key,
			  data: { api_key: api_key, session_id: session_id, sort_by: 'created_at.desc' },
			  success: function(data){
			  	alert('success');
			  	
			  	var row = 3;
	
		  		$("#movies").append('<div id="row-'+ row +'-title" class=""><img src="./images/title/seriesTop2014.png"/></div>');
	
		  		$("#movies").append('<div id="row-'+ row +'" class="row imgs-'+row+'"></div>');
		  		
	
		  		$("#row-"+ row).append('<div id="row-'+ row +'-arrow-l" class="col-xs-1 row-arros-l"><img src="./images/slider/arrow-l.png"/></div>');
			  	
			  	for (var i = 0; i < 16; i++) {
			  		$("#row-"+ row).append('<div id="img-'+row+'-'+i+'" class="col-xs-2 cont-row-'+row+' imgs-'+row+'" href="/tv/'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
			  		
			  		if(i >= 5) {
			  			$("#img-"+row+"-"+i).css( "display", "none" );
			  		}
			  	}
	
		  		$("#row-"+ row).append('<div id="row-'+ row +'-arrow-r" class="col-xs-1 row-arros-r"><img src="./images/slider/arrow-r.png"/></div>');
		
			  	$("#row-"+ row +"-arrow-l").css( "opacity", 0 );
			  	
			  	$('#movies div.col-xs-2').keynav();
			  	
			  },
			  error: function(){
			  	alert('error');
			  }
			});
	}
}
SceneScene1.prototype.initialize = function () {
	alert("SceneScene1.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	alert(api_key);
	session_id = localStorage.getItem('session_id');
	_username = localStorage.getItem('user_name');

	
	alert(session_id);

	alert(API+"/discover/movie?api_key="+api_key);
	LoadFilmPopulares();
	

	//$("#login").html('Porque no estas registrado?');
	
	if(session_id==""){
		$('#svecKeyHelp_if6u').sfKeyHelp({
			'move':'Mover',
			'enter':'Seleccionar',
			'tools':'Login'
		});
		$("#login").html('');
	}else{
		$('#svecKeyHelp_if6u').sfKeyHelp({
			'move':'Mover',
			'enter':'Seleccionar',
			'tools':'Logout'
		});
		$("#login").html('Hola, <spam>'+_username+'</spam> ¿Como estás?');
	}
};

SceneScene1.prototype.handleShow = function (data) {
	alert("SceneScene1.handleShow()");
	// this function will be called when the scene manager show this scene
	if(session_id==''){
		$('#svecKeyHelp_if6u').sfKeyHelp({
			'move':'Mover',
			'enter':'Seleccionar',
			'tools':'Login'
		});

		$("#login").html('');
	}else{
		$('#svecKeyHelp_if6u').sfKeyHelp({
			'move':'Mover',
			'enter':'Seleccionar',
			'tools':'Logout'
		});

		$("#login").html('Hola, <spam>'+_username+'</spam> ¿Como estás?');
	}
};

SceneScene1.prototype.handleHide = function () {
	alert("SceneScene1.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene1.prototype.handleFocus = function () {
	alert("SceneScene1.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene1.prototype.handleBlur = function () {
	alert("SceneScene1.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};




