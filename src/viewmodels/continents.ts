import { Continent } from "../models/Continent";

class Continents {
    public title: string = "Continents";

    public continents: Continent[] = [
        new Continent("Europe"),
        new Continent("Asia"),
        new Continent("Africa"),
        new Continent("Antartica"),
        new Continent("Oceania"),
        new Continent("North America"),
        new Continent("South America")
    ];
}

export = Continents;