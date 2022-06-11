import util from './utils/str';
import  * as Style from "./editor.scss"
export default class StructDocElement {
    private id: string;
    private parentId: string ;
    private schemaUrl: string;

    public IsContainer: boolean = false;
    private children: Array<StructDocElement> = [];


    public constructor(id: string,parentId:string, schemaUrl: string) {
        this.id = id ? id : util.uuid();
        this.parentId = parentId;
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

    private generateHtmlElement(id:string, type: string, parentId :string): HTMLElement {

        let that = this

        let ele = document.createElement(type);
        ele.id = id

        ele.innerHTML="ddd"
        let parent = document.getElementById(parentId)
        if (parent ==null){
            throw new Error("can not find parent element by id:" + parentId)
        }

        ele.addEventListener("click", function(e: Event)  {
        })

        ele.addEventListener("dblclick", function(e: Event) {})

        ele.addEventListener("mouseover", function(e: Event)  {
            this.classList.add("hover")})
        ele.addEventListener("mouseout", function(e: Event) {
            this.classList.remove("hover")})

        ele.addEventListener("mousedown", function(e: Event)  {})
        ele.addEventListener("mouseup", function(e: Event)  {})

        ele.addEventListener("mousemove",function (e: Event) {
        })

        ele.addEventListener("keydown", function(e: Event)  {})
        ele.addEventListener("keyup", function(e: Event)  {})
        ele.addEventListener("keypress",function (e: Event)  {})
        ele.addEventListener("focus", function(e: Event)  {})
        ele.addEventListener("blur",function (e: Event)  {})
        ele.addEventListener("change", function(e: Event)  {})
        ele.addEventListener("input", function(e: Event) {}) 



        parent.appendChild(ele);

        return ele
    }

    public AddDocElement(type: string): StructDocElement {
        let ret = new StructDocElement("",this.parentId, "")
        this.addChild(ret);
 
       this.generateHtmlElement( ret.id, type,   this.parentId)

        return ret
    }
}