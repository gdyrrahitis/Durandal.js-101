import * as app from "durandal/app";
import * as ko from "knockout";
import { getName } from "i18n-iso-countries";

class CollectionBinding {
    private flagpediaUrlTemplate: string = "http://flagpedia.net/data/flags/normal/$P0.png";
    private _countries = [];
    public title = "Collection binding";
    public countries = ko.observable();

    constructor() {
        this._countries = [
            { name: getName("us", "en"), code: "us" },
            { name: getName("gb", "en"), code: "gb" },
            { name: getName("es", "en"), code: "es" },
            { name: getName("fr", "en"), code: "fr" }
        ];
        this.countries(this._countries);
    }

    public getFlag(code: string) {
        let url = this.flagpediaUrlTemplate.replace("$P0", code.toString());
        return url;
    }
}

export = CollectionBinding;