/* global Module */

/* Magic Mirror
 * Module: MagicModule
 *
 * By Niklas Drössler, Simon Stauss.
 */

let Node_helper = require("node_helper");

module.exports = Node_helper.create({
    start: function() {
        // Create a new route triggering the refresh
        const self = this;

        this.expressApp.post("/refresh", function (req, res) {
            self.sendSocketNotification("refresh");
            res.send(200);
        });

    }
});