
export default class StructDocElement {
    private id: string;
    private schemaUrl: string;

    public IsContainer: boolean = false;
    private children: Array<StructDocElement> = [];


    public constructor(id: string, schemaUrl: string) {
        this.id = id;
        this.schemaUrl = schemaUrl;
    }

    private getChildren(): Array<StructDocElement> {
        return this.children;
    }

    private addChild(child: StructDocElement): void {
        this.children.push(child);
    }

    private removeChild(child: StructDocElement): void {
        let index = this.children.indexOf(child);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    }

    private removeAllChildren(): void {
        this.children = [];
    }


    public render(): HTMLElement {
        let ele = document.createElement("div");
        ele.id = this.id;
        ele.className = "struct-doc-element";
        if (this.IsContainer) {
            for (let child of this.getChildren()) {
                ele.appendChild(child.render());
            }
        }
        return ele;
    }

    public AddDocElement(tp: string): StructDocElement {
        let ele = new StructDocElement("", "")
        return ele
    }
}