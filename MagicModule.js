/* global Module */

/* Magic Mirror
 * Module: MagicModule
 *
 * By Niklas Drössler, Simon Stauss.
 */

Module.register("MagicModule", {
    defaults: {
        fadeDuration: 1000
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
        console.log("MagicModule started! Trying to hide me...");

        // Fade module out
        this.hide(this.config.fadeDuration);

        console.log("Sending socket notification to helper");
        this.sendSocketNotification("Hallo Helper ich bins", {});
    },

    socketNotificationReceived: function (notification, payload) {
        console.log("Notification received: " + notification + ", " + payload);

        // Start showing module and refresh the page after the fade
        this.show(this.config.fadeDuration, location.reload);
    }
});