alert('SceneSceneLogin.js loaded');
var id_usuario='';
function SceneSceneLogin() {

};

SceneSceneLogin.prototype.initialize = function () {
	alert("SceneSceneLogin.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	var username = '';
	$('#password').sfTextInput({
		text:'',
		maxlength:30,
		oncomplete: function (text) 
		{
	        if (text) {
	        	password = text;
	        	$.ajax({
				  type: "GET",
				  crossDomain: true,
				  async: true,
				  dataType: "json",
				  url: API+"/authentication/token/new",
				  data: { api_key: api_key },
				  success: function(data){
				  	var request_token = data.request_token;

				  	$.ajax({
					  type: "GET",
					  crossDomain: true,
					  async: true,
					  dataType: "json",
					  url: API+"/authentication/token/validate_with_login",
					  data: { api_key: api_key, request_token: request_token, username: username, password: password },
					  success: function(data){

					  		$.ajax({
							  type: "GET",
							  crossDomain: true,
							  async: true,
							  dataType: "json",
							  url: API+"/authentication/session/new",
							  data: { api_key: api_key, request_token: request_token },
							  success: function(data){
								alert('logeadoooooooooooooo');
								_username=username;
							  	session_id = data.session_id;
				    			//Utilizamos la caché del navegador
				    			localStorage.setItem('session_id', session_id);
				    			localStorage.setItem('user_name', _username);
				    			sf.scene.hide('SceneLogin');
				    			sf.scene.show(last_scene);
				    			sf.scene.focus(last_scene);
							  }
							});
					  	
					  }
					});

				  }
				});
	        }
	        else {
	        	//error
	        }
	    }
	});
	$('#username').sfTextInput({
		text:'',
		maxlength:30,
		oncomplete: function (text) 
		{
	        if (text) {
	        	username = text;
	        	$('#password').sfTextInput('focus');
	        	$('#password').sfTextInput('setKeypadPos', 450, 170);
	        }
	        else {
	        	//error
	        }
	    }
	});

	$('#svecLabel_iz9h').sfLabel({
		text:'Usuario'
	});
	$('#svecLabel_k4wu').sfLabel({
		text:'Contraseña'
	});
	$('#svecKeyHelp_lc6n').sfKeyHelp({
		'return':'Volver'
	});
};

SceneSceneLogin.prototype.handleShow = function (data) {
	alert("SceneSceneLogin.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneLogin.prototype.handleHide = function () {
	alert("SceneSceneLogin.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneLogin.prototype.handleFocus = function () {
	alert("SceneSceneLogin.handleFocus()");
	// this function will be called when the scene manager focus this scene
	$('#username').sfTextInput('blur');
	$('#password').sfTextInput('blur');
	$('#username').sfTextInput('focus');
	$('#username').sfTextInput('setKeypadPos', 450, 170);
};

SceneSceneLogin.prototype.handleBlur = function () {
	alert("SceneSceneLogin.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneLogin.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneLogin.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued

	switch (keyCode) {

		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('SceneLogin');
			sf.scene.show(last_scene);
			sf.scene.focus(last_scene);
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			$('#username').sfTextInput('blur');
			$('#password').sfTextInput('blur');
			$('#username').sfTextInput('focus');
			$('#username').sfTextInput('setKeypadPos', 450, 170);
			break;
	}
};