alert('SceneTrailer.js loaded');

alert('SceneSceneLogin.js loaded');

var done = false;
var player;
var divVideo = $('#youtubePlayer');
function onYouTubeIframeAPIReady(id) {
	$("#youtubePlayer").html('');
	 player=null;
	 player = new YT.Player('youtubePlayer', {
	 height: '100%',
	 width: '100%',
	 videoId: id,
	 playerVars: { autohide: 1, disablekb:1, enablejsapi:1, rel:0, iv_load_policy:3, showinfo:0,controls:0, autoplay:1},
	 events: {
		 'onReady': onPlayerReady, 
		 'onStateChange': onPlayerStateChange
	 }
	 });
}
function onPlayerReady(evt) {
	 player.setVolume(volumeVideo);
	 player.setPlaybackQuality('default');
}
function onPlayerStateChange(){
	 var state = player.getPlayerState();
	 switch(state){
		 case 0:
		 //stopVideo(); 
		 break;
	 }
}




function SceneTrailer() {

};

SceneTrailer.prototype.initialize = function () {
	alert("SceneTrailer.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	//onYouTubeIframeAPIReady(trailer_id);
	$('#svecKeyHelp_f78m').sfKeyHelp({
		'play':'Play',
		'pause':'Pause',
		'stop':'Stop',
		'return':'Return'
	});
};

var video=false;
SceneTrailer.prototype.handleShow = function (data) {
	alert("SceneTrailer.handleShow()");
	// this function will be called when the scene manager show this scene
	if(!video){
		onYouTubeIframeAPIReady(trailer_id);
		video=true;
	}else{
		playVideo();
	}
	setTimeout(function(){$('#svecKeyHelp_f78m').fadeOut(2000);},5000);
	
};

SceneTrailer.prototype.handleHide = function () {
	alert("SceneTrailer.handleHide()");
	// this function will be called when the scene manager hide this scene
	 pauseVideo();
};

SceneTrailer.prototype.handleFocus = function () {
	alert("SceneTrailer.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneTrailer.prototype.handleBlur = function () {
	alert("SceneTrailer.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneTrailer.prototype.handleKeyDown = function (keyCode) {
	alert("SceneTrailer.handleKeyDown(" + keyCode + ")");
	$('#svecKeyHelp_f78m').show();
	setTimeout(function(){$('#svecKeyHelp_f78m').fadeOut(2000);},5000);
	// TODO : write an key event handler when this scene get focued
	switch(keyCode)
	 {
	 case sf.key.RETURN:
	 case sf.key.PANEL_RETURN:
		 alert("RETURN");
		 event.preventDefault();
		sf.scene.hide('Trailer');
		sf.scene.show('Scene2');
		sf.scene.focus('Scene2');
		 break;
	 case sf.key.LEFT:
		 alert("LEFT");
		 break;
	 case sf.key.RIGHT:
		 alert("RIGHT");
		 break;
	 case sf.key.UP:
		 alert("UP");
		 break;
	 case sf.key.DOWN:
		 alert("DOWN");
		 break;
	 case sf.key.PLAY:
		 playVideo();
		 break;
	 case sf.key.ENTER:
		 alert("ENTER");
		 if(isPlayingVideo){
			 pauseVideo();
		 }else{
			 playVideo();
		 }
		 break;
	 case sf.key.PAUSE:
		 pauseVideo();
		 break;
	 case sf.key.STOP:
		 stopVideo();
		 break;
	 default:
		 alert("Unhandled key");
	 break;
	 }
	
};
var isPlayingVideo = true;
var volumeVideo = 100;
var isFullScreen = true;
 
function stopVideo() {
	 player.stopVideo();
	 isPlayingVideo = false;
}
function pauseVideo() {
	 player.pauseVideo();
	 isPlayingVideo = false;
}
function playVideo() {
	 player.playVideo();
	 isPlayingVideo = true;
}
function setFullScreen(){
	player.setSize(1280, 720);
}
function setNormalScreen(){
	player.setSize(640, 360);
}
function setVolume(volumeVal){
	player.setVolume(volumeVal);
}