import { getName } from "i18n-iso-countries";
import { Country } from "../models/Country";

class Countries {
    public title: string = "Countries";
    public countries: Country[] = [
            new Country(getName("de", "en"), "de"),
            new Country(getName("gb", "en"), "gb"),
            new Country(getName("es", "en"), "es"),
            new Country(getName("fr", "en"), "fr")
        ];
}

export = Countries;