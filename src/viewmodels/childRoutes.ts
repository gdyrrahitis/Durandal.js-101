import * as durandalRouter from "plugins/router";

class ChildRoutes {
    public title: string = "Child routes";
    public router: DurandalRootRouter = this.getRouter();

    private getRouter(): DurandalRootRouter {
        return durandalRouter.createChildRouter()
            .makeRelative({
                fromParent: true
            })
            .map([
                {
                    route: [""],
                    moduleId: "viewmodels/defaultScreen",
                    nav: false
                },
                {
                    route: ["continents"],
                    moduleId: "viewmodels/continents",
                    title: "Continents", nav: true
                },
                {
                    route: ["countries"],
                    moduleId: "viewmodels/countries",
                    title: "Countries", nav: true
                }
            ])
            .buildNavigationModel();
    }
}

export = ChildRoutes;