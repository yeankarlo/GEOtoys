$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		//Brújula
		var watchID = null;
		$('#bInc').tap(function(){
			watchID = navigator.compass.watchHeading(function(heading){
				$('#bRes').text(heading.magneticHeading);
			}, function(compassError){
					alert('Compass error: ' + compassError.code);
			}, { frequency: 500 });
		});
		$('#bDtn').tap(function(){
			navigator.compass.clearWatch(watchID);
			watchID = null;
			$('#bRes').text(0.000);
		});
				
	}, false);
});