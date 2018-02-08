(function () {
	window.addEventListener("tizenhwkey", function (ev) {
		var activePopup = null,
			page = null,
			pageid = "";

		if (ev.keyName === "back") {
			activePopup = document.querySelector(".ui-popup-active");
			page = document.getElementsByClassName("ui-page-active")[0];
			pageid = page ? page.id : "";

			if (pageid === "main" && !activePopup) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	});
}());

function getMachineData(data) {
    document.getElementById("secondContent").innerHTML=data;
    postNotification(data);
}

function postNotification(data) {
    var notification,
        notificationDict;

    try {
        // Sets notification dictionary.
        notificationDict = {
            content: data,
            actions:{vibration: true},
            iconPath: "../icon.png",
        };
        // Creates notification object.
        notification = new tizen.StatusNotification("SIMPLE", "Demo", notificationDict);

        // Posts notification.
        tizen.notification.post(notification);
    } catch (err) {
        console.log(err.name + ": " + err.message);
    }
    navigator.vibrate([1000, 500, 1000]);
}





