import * as app from "durandal/app";
import * as ko from "knockout";
import { getName } from "i18n-iso-countries";

class PropertyBinding {
    private flagpediaUrlTemplate: string = "http://flagpedia.net/data/flags/normal/$P0.png";
    private hasClicked = ko.observable();

    public title = "Property binding";
    public code = ko.observable();
    public flagUrl = ko.observable();

    public get name() {
        let code: any = this.code();
        if (!code || (code && code.length < 2)) {
            return "";
        }

        let country = getName(<any>code, "en");
        return country;
    }

    public showCountryFlag() {
        this.hasClicked(true);

        let url = this.flagpediaUrlTemplate.replace("$P0", this.code().toString());
        this.flagUrl(url);
    }

    public shouldShowFlag(): boolean {
        let shouldShow = this.hasClicked() && (typeof this.code() !== "undefined");
        return shouldShow;
    }
}

export = PropertyBinding;