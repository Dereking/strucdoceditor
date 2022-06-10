
import StructDocElement from "./StructDocElement";

export default class StructDoc {
    public id: string;
    public name: string;
    public description: string;
    public version: string;
    public author: string;
    public license: string;
    public copyright: string;
    public created: string;
    public modified: string;
    public tags: string[];
    public dependencies: string[];
    public elements: Array<StructDocElement> = [];

    public constructor(id: string) {
        this.id = id;
        this.name = "";
        this.description = "";
        this.version = "";
        this.author = "";
        this.license = "";
        this.copyright = "";
        this.created = "";
        this.modified = "";
        this.tags = [];
        this.dependencies = [];

    }
}

export { StructDoc };
