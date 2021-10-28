/* global Module */

/* Magic Mirror
 * Module: MagicModule
 *
 * By Niklas Drössler, Simon Stauss.
 */

let NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
    start: function() {
        // Create a new route triggering the refresh
        const self = this;

        this.expressApp.post("/refresh", function (req, res) {
            // Trigger the animation on every module instance
            self.sendSocketNotification("refresh");

            // Respond with "Ok"
            res.send(200);
        });
    }
});