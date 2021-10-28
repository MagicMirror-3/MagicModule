/* global Module */

/* Magic Mirror
 * Module: MagicModule
 *
 * By Niklas Drössler, Simon Stauss.
 */

var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
    start: function() {
        // Create a new route triggering the refresh
        const self = this;
        console.log("Creating refresh route...");
        // this.expressApp.post("/refresh", function (req, res) {
        //     self.sendSocketNotification("refresh", req);
        //     res.statusCode = 200;
        //     res.send("POST request to MagicModule");
        // });
        console.log("Refresh route created!");
    },

    socketNotificationReceived: function (notification, payload) {
        console.log("Notification received: " + notification + ", " + payload);
    }
});