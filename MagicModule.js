/* global Module */

/* Magic Mirror
 * Module: MagicModule
 *
 * By Niklas Drössler, Simon Stauss.
 */

Module.register("MagicModule", {
    defaults: {
        fadeDuration: 2500
    },

    requiresVersion: "2.17.0",

    getDom: function () {
        let wrapper = document.createElement("div");
        wrapper.className = "overlay";
        return wrapper;
    },

    getStyles: function () {
        return [
            "MagicModule.css"
        ];
    },

    start: function () {
        this.sendSocketNotification("Establish connection to helper");
    },

    socketNotificationReceived: function (notification, payload) {
        Log.log("Socket notification received: " + notification + ", " + payload);

        if (notification === "refresh") {
            // Start showing module and refresh the page after the fade
            this.show(this.config.fadeDuration, function () {
                location.reload();
            });
            console.log("Showing MagicModule again and then refreshing.");
        }
    },

    notificationReceived: function (notification, payload, sender) {
        if (!sender && notification === "DOM_OBJECTS_CREATED") {
            console.log("DOMs created! Now starting the hide animation...");

            // Fade module out
            this.hide(this.config.fadeDuration);

            console.log("Hiding started!");
        }
    }
});