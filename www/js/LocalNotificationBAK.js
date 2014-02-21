cordova.define("cordova/plugin/js/LocalNotification", function(require, exports, module) {      

var exec = require("cordova/exec");
var LocalNotification = function () {};

LocalNotification.prototype.add = function(options) {
            var defaults = {
                date : new Date(),
                message : '',
                ticker : '',
                repeatDaily : false,
                id : ""
            };
        if (options.date) {
                options.date = (options.date.getMonth()) + "/" + (options.date.getDate()) + "/"
                        + (options.date.getFullYear()) + "/" + (options.date.getHours()) + "/"
                        + (options.date.getMinutes());
            }

            for ( var key in defaults) {
                if (typeof options[key] !== "undefined")
                    defaults[key] = options[key];
            }

            cordova.exec(null, null, "LocalNotification", "add",  new Array(defaults));
};

LocalNotification.prototype.cancel = function(notificationId) {
    cordova.exec(null, null, 'LocalNotification', 'cancel', new Array({
        id : notificationId
    }));
};

LocalNotification.prototype.cancelAll = function() {
    cordova.exec(null, null, 'LocalNotification', 'cancelAll', new Array());
};


var LocalNotification = new LocalNotification();
module.exports = LocalNotification;