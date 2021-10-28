/* global Module */

/* Magic Mirror
 * Module: MagicModule
 *
 * By Niklas Drössler, Simon Stauss.
 */

const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
    start: function() {
        // Create a new route triggering the refresh
        const self = this;
        this.expressApp.post("/refresh", function (req, res) {
            self.sendSocketNotification("refresh", req);
            res.statusCode = 200
            res.send()
        })
    }
})