window.onload = function() {
	var startButton=document.getElementById('secondChildDiv3');
  
};

/**
 * Runs news application.
 * When Go button is clicked, the parent Demo application is
 * launched to display the Error at station.
 * @param {String} title: title of the application
 * @private
 */
function launchApp(title) {
	if (typeof(Storage) !== "undefined") {
	    // Code for localStorage/sessionStorage.
		localStorage.setItem("clickFromWidget", "true");
	}
    var app = window.tizen.application.getCurrentApplication();
    var appId = app.appInfo.id.substring(0, (app.appInfo.id.lastIndexOf('.')) );
    var appControl = new window.tizen.ApplicationControl(title, null, null, null, null, null);
    window.tizen.application.launchAppControl(appControl, appId,
        function() {
            console.log("launch application control succeed");
        },
        function(e) {
            console.log("launch application control failed. reason: " + e.message);
        },
        null);
  }