import * as app from "durandal/app";
import * as ko from "knockout";
import { getName } from "i18n-iso-countries";

import { Country } from "../models/Country";

class CollectionBinding {
    private _countries: Country[] = [];
    public title = "Collection binding";
    public countries = ko.observable();

    constructor() {
        this._countries = [
            new Country(getName("us", "en"), "us"),
            new Country(getName("gb", "en"), "gb"),
            new Country(getName("es", "en"), "es"),
            new Country(getName("fr", "en"), "fr")
        ];
        this.countries(this._countries);
    }
}

export = CollectionBinding;