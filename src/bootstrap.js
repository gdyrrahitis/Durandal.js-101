define(["require", "exports", "durandal/system", "durandal/app", "durandal/viewLocator"], function (require, exports, system, app, viewLocator) {
    "use strict";
    (function () {
        system.debug(true);
        // app.configurePlugins({
        //     dialog: true
        // });
        app.start().then(function () {
            viewLocator.useConvention();
            app.setRoot("viewmodels/shell", "entrance", "applicationHost");
        });
    })();
});
//# sourceMappingURL=bootstrap.js.map