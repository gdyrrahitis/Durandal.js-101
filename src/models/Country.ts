export class Country {
    private flagpediaUrlTemplate: string = "http://flagpedia.net/data/flags/normal/$P0.png";
    
    constructor(public name: string, public code: string) { }

    public getFlag(code: string) {
        let url = this.flagpediaUrlTemplate.replace("$P0", code.toString());
        return url;
    }
}