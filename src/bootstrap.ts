import * as system from "durandal/system";
import * as app from "durandal/app";
import * as viewLocator from "durandal/viewLocator";

(() => {
    system.debug(true);

    // app.configurePlugins({
    //     dialog: true
    // });

    app.start().then(() => {
        viewLocator.useConvention();
        app.setRoot("viewmodels/shell", "entrance", "applicationHost");
    });
})();