import * as app from "durandal/app";
import * as ko from "knockout";
import * as router from "plugins/router";

class Shell {
    public router = router;
    public activate () {
        this.router.map([
            { route: "", title: "Home", moduleId: "viewmodels/home", nav: true },
            { route: "property/binding", title: "Property binding", moduleId: "viewmodels/propertyBinding", nav: true }
        ]).buildNavigationModel();

        return this.router.activate();
    }
}

export = Shell;