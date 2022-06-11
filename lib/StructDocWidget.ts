import StructDocElement from "./StructDocElement";


export default class StructDocWidget extends StructDocElement {
    //private id: string;
    private css: string;
    private template: string;

    public constructor(id: string, css: string, template: string,parentId :string) {
        super(id, parentId, "");
        //this.id = id;
        this.css = css;
        this.template = template;
    }

    public loadFromUrl(widgetUrl: string): void {

    }
}