import * as app from "durandal/app";
import * as ko from "knockout";

class Shell {
    public name = ko.observable();

    public sayHello = function () {
        console.log(`Hello ${this.name()}! Nice to meet you!`);
    }
}

export = Shell;