/* global Module */

/* Magic Mirror
 * Module: MagicModule
 *
 * By Niklas Drössler, Simon Stauss.
 */

Module.register("MagicModule", {
    defaults: {
        fadeInDuration: 2000,
        fadeOutDuration: 4000
    },

    requiresVersion: "2.17.0",

    getDom: function () {
        // Create a div with the overlay class to span the entire page as an overlay
        let wrapper = document.createElement("div");
        wrapper.className = "overlay";
        return wrapper;
    },

    getStyles: function () {
        // Return the needed css file
        return [
            "MagicModule.css"
        ];
    },

    start: function () {
        // Establish a connection to the node_helper
        // This is necessary in order for the refresh system to work
        this.sendSocketNotification("Establish connection to helper");
    },

    socketNotificationReceived: function (notification, payload) {
        if (notification === "refresh") {
            // Start showing module and refresh the page after the fade
            this.show(this.config.fadeInDuration, function () {
                location.reload();
            });
        }
    },

    notificationReceived: function (notification, payload, sender) {
        if (!sender && notification === "DOM_OBJECTS_CREATED") {
            // Fade module out once every dom is created
            this.hide(this.config.fadeOutDuration);
        }
    }
});