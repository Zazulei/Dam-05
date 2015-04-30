var API = 'http://api.themoviedb.org/3';
var api_key = 'fffcfc6228ea5f968c308ea249b5a9eb';
var session_id = '';
var base_url = 'http://image.tmdb.org/t/p/';
var movie_id = '';
var trailer_id='';
var id='';
var last_scene='';
var _username='';

function onStart () {
	// TODO : Add your Initilize code here
	// NOTE : In order to start your app, call "sf.start()" at the end of this function!!
	
	sf.scene.show('Scene1');
	sf.scene.focus('Scene1');
}
function onDestroy () {
	//stop your XHR or Ajax operation and put codes to distroy your application here
	
}

alert("init.js loaded.");

/*
 * Keynav - jQuery Keyboard Navigation plugin
 *
 * Copyright (c) 2013 Nick Ostrovsky
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.firedev.com/jquery.keynav
 *
 * Version:  0.1
 *
 */

;(function($, window, document, undefined) {

	$.fn.keynav = function(checkNav) {
		var elements = this;
		var matrix;
		var x;
		var y;
		var current = this.filter('.selected');
		var keyNavigationDisabled=false;
		if (current.length == 0) current = this.first();

		current.addClass('selected');

		function update() {
			var i=0;
			var row = Array();
			var j = -1;
			var oldtop = false;
			var m=Array();

			elements.each(function(){
				if (!oldtop) oldtop = this.offsetTop;
				newtop=this.offsetTop;
				if (newtop != oldtop) {
					oldtop=newtop;
					m[i]=row;
					row = Array();
					i++;
					j=0;
					row[j]=this;
				} else {
					j++;
					row[j]=this;
				}
			});
			m[i]=row;
			matrix = m;
			coordinates=findCurrent();
			x=coordinates[0];
			y=coordinates[1];
			return matrix;
		}

		function findCurrent() {
			i=0; j=0; found = false;
			try {
				for (i=0; i<matrix.length; i++) {
					row=matrix[i];
					for (j=0; j<row.length; j++) {
						if (current[0] == row[j]) {
							throw([i,j]);
						}

					}
				}
			}
			catch (arr)
			{
				found = [i,j]
			}
			return(found);
		}

		function setCurrent(i,j) {
			if (i<0) i=(matrix.length-1);
			if (i>=matrix.length) i=0;
			//if (j<0) j=(matrix[i].length-1);
			//if (j>=matrix[i].length) j=0;
			current.removeClass('selected');
			current = $("#img-"+i+"-"+j);
			current.addClass('selected');
			x=i;
			y=j;
		}

		$(window).bind("resize", function(event) {
			update();
		});

		$(document).ready(function() {
			update();
		});

	    var bIsMoving = false;
		var iIndexs = [0, 0, 0, 0];
	    var iRow = 0;
	    
		function moveToLeft(_iX, _iY) {
			bIsMoving = true;
		  $(  ".cont-row-" + _iX  ).animate({
			  left: "-190px"
			  }, 250, function() {		  
				  $(".cont-row-"+_iX).css( "left", "7px" );
				  $("#img-"+_iX+"-"+(_iY-5)).css( "display", "none" );
				  $("#img-"+_iX+"-"+_iY).css( "display", "block" );
				  bIsMoving = false;
			  } );
		}
		
		function moveToRight(_iX, _iY) {
			bIsMoving = true;
		  $(  ".cont-row-" + _iX  ).animate({
			  left: "+190px"
		  	  }, 250, function() {		  
				  $(".cont-row-"+_iX).css( "left", "7px" );
				  $("#img-"+_iX+"-"+_iY).css( "display", "block" );
				  $("#img-"+_iX+"-"+ (_iY+5)).css( "display", "none" );
				  bIsMoving = false;
		  } );
		}
		
		function openRow(_iRow) {
			//if( $("#row-"+ _iRow).css( "display" ) == "block" ) return;
		
			$("#row-"+ _iRow).css( "display", "block" );
			$("#row-"+ _iRow +"-title").css( "display", "block" );
			
			 $(  "#row-"+ _iRow  ).animate({
				  height: "288px"
			  	  }, 250 );
			 
			 $(  "#row-"+ _iRow +"-title"  ).animate({
				  "margin-bottom": "20px"
			  	  }, 250 );
			 
			 $(  "#row-"+ _iRow +"-title img"  ).animate({
				 "height": "50px"	 
			  	  }, 250 );
		}
		
		function closeRow(_iRow) {
			//if( $("#row-"+ _iRow).css( "display" ) == "none" ) return;
			
			 $(  "#row-"+ _iRow  ).animate({
				  height: "0px"
			  	  }, 250 );
			 
			 $(  "#row-"+ _iRow +"-title"  ).animate({
				  "margin-bottom": "0px"
			  	  }, 250 );
			 
			 $(  "#row-"+ _iRow +"-title img"  ).animate({
				  "height": "0px"
			  	  }, 250, function(){
					 	$("#row-"+ _iRow).css( "display", "none" );
						$("#row-"+ _iRow +"-title").css( "display", "none" );
				 } );
		}
		
		function rowManager() {
			if( x == 0 ) {
				if( $("#row-"+ 0).css( "display" ) == "none" ){
					openRow(0);
				} 

			} else if ( x == 1 ) {
				if( $("#row-"+ 1).css( "display" ) == "none" ){
					openRow(1);
				} else {
					closeRow(0);
					alert("SE CIERRA EL 1");
				}
				 
			} else if ( x == 2 ) {
				if( $("#row-"+ 2).css( "display" ) == "none" ){
					openRow(2);
				} else {
					closeRow(1);
					alert("SE CIERRA EL 2");
				}
				
			} else if ( x == 3 ) {

				if( $("#row-"+ 2).css( "display" ) == "block" ){
					closeRow(2);
				}
			}
			alert(x + " UNA DE CASO");
		}

		SceneScene1.prototype.handleKeyDown = function (keyCode) {
			alert("SceneScene1.handleKeyDown(" + keyCode + ")");
			if(bIsMoving) return;
			

			alert("ANTES KEY " + keyCode + " " + x + " - " + y);
		
			// TODO : write an key event handler when this scene get focued
			switch (keyCode) {
				case sf.key.LEFT:
					if( y == 0 ) break;
					//$("#img-"+row+"-"+y).removeClass('selected');
					setCurrent(x, y-1);
					//$("#img-"+row+"-"+y).addClass('selected');
					
					//alert($("#img-"+x+"-"+y).css("display"));
					
					if( $("#img-"+x+"-"+y).css("display") == "none" ) {
						moveToRight(x, y);
					}

					break;
				case sf.key.RIGHT:
					if( y == 15 ) break;
			
					setCurrent(x,y+1);
					
					if( $("#img-"+x+"-"+y).css("display") == "none" ) {
						moveToLeft(x, y);
					}
					
					//$("#row-"+ x +"-arrow-r").css( "display", y == 15 ? "none" : "block" );


					/*alert(y + " RIGG "  + matrix[i].length);
					alert(y + " RIGG "  + matrix.length);*/
					break;
				case sf.key.UP:
					iIndexs[x]=y;
					
					var aux = x-1;
					if( aux < 0 ) aux = 0;
					y = iIndexs[aux];
			
					setCurrent(aux,y);
				
	
					rowManager();
					
					
					//$(".imgs-0").css( "display", "block" );
					break;
				case sf.key.DOWN:
					iIndexs[x]=y;
					
					var aux = x+1;
					if( aux == 4  ) aux = 3;
					
					y = iIndexs[aux];
					
					setCurrent(aux,y);
					//$("#img-"+1+"-"+0).addClass('selected');
		
					alert(x + " DOWN");

					rowManager();
					
					/*if(ptr != 0)
						$(".imgs-0").css( "display", "none" );
					ptr++;*/
					break;
				case sf.key.ENTER:
					movie_id = current.attr('href');
					sf.scene.hide('Scene1');
					sf.scene.show('Scene2');
					sf.scene.focus('Scene2');
					break;
				case sf.key.TOOLS:
					if(session_id==''){
						last_scene='Scene1';
						event.preventDefault();
						sf.scene.hide('Scene1');
						sf.scene.show('SceneLogin');
						sf.scene.focus('SceneLogin');
					}else{
						session_id='';
						localStorage.setItem('session_id', '');
						sf.scene.hide('Scene1');
						sf.scene.show('Scene1');
						sf.scene.focus('Scene1');
					}
				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
			

			$("#row-"+ x +"-arrow-l").css( "opacity", y == 0 ? 0 : 1 );
			$("#row-"+ x +"-arrow-r").css( "opacity", y == 15 ? 0 : 1 );

			alert("DESPUES KEY " + keyCode + " " + x + " - " + y);
		};

		SceneScene2.prototype.handleKeyDown = function (keyCode) {
			alert("SceneScene2.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focued
			switch (keyCode) {
				case sf.key.RETURN:
					event.preventDefault();
					movie_id = '';
					sf.scene.hide('Scene2');
					sf.scene.show('Scene1');
					sf.scene.focus('Scene1');
					trailer_id='';
					video=false;
					$("#youtubePlayer").remove();
					$("#trailerContent").append('<div id="youtubePlayer"></div>');
					break;
				case sf.key.N1:
					puntuar(1*2);
					break;
				case sf.key.N2:
					puntuar(2*2);
					break;
				case sf.key.N3:
					puntuar(3*2);
					break;
				case sf.key.N4:
					puntuar(4*2);
					break;
				case sf.key.N5:
					puntuar(5*2);
					break;
				case sf.key.RED:
					if(hay_trailer){
						event.preventDefault();
						sf.scene.hide('Scene2');
						sf.scene.show('Trailer');
						sf.scene.focus('Trailer');
					}
					break;	
				case sf.key.GREEN:
					addFavoritos();
					break;
				case sf.key.TOOLS:
					if(session_id==''){
						last_scene='Scene2';
						event.preventDefault();
						sf.scene.hide('Scene2');
						sf.scene.show('SceneLogin');
						sf.scene.focus('SceneLogin');
					}else{
						session_id='';
						localStorage.setItem('session_id', '');
						sf.scene.hide('Scene2');
						sf.scene.show('Scene2');
						sf.scene.focus('Scene2');
					}
					break;
				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};


		return this;
	}

})(jQuery, window, document);