import * as app from "durandal/app";
import * as ko from "knockout";

class PropertyBinding {
    private hasClicked = ko.observable();

    public title = "Property binding";
    public name = ko.observable();
    public greeting = ko.observable(); 

    public sayHello () {
        this.hasClicked(true);
        this.greeting(`Hello ${this.name()}! Nice to meet you!`);
    }

    public shouldShowGreeting(): boolean {
        let shouldShow = this.hasClicked() && (typeof this.name() !== "undefined");
        return shouldShow;
    }
}

export = PropertyBinding;