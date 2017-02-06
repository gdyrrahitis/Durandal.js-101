define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    var Shell = (function () {
        function Shell() {
            this.name = ko.observable();
            this.sayHello = function () {
                console.log("Hello " + this.name() + "! Nice to meet you!");
            };
        }
        return Shell;
    }());
    return Shell;
});
//# sourceMappingURL=shell.js.map