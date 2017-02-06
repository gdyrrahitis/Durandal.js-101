import * as system from "durandal/system";
import * as app from "durandal/app";
import * as viewLocator from "durandal/viewLocator";

class Bootstrap {
    public init() {
        system.debug(true);

        app.configurePlugins({
            router: true,
            dialog: true
        });

        app.start().then(() => {
            viewLocator.useConvention();
            app.setRoot("viewmodels/shell", "entrance", "applicationHost");
        });
    }
}

export = Bootstrap;