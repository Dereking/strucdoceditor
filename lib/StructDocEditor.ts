
import "./editor.scss";
import EditorConfig from "./EditorConfig";
import { StructDoc } from "./StructDoc";
import StructDocElement from "./StructDocElement";


export default class StructDocEditor {

    private id: string;
    public conf: EditorConfig;
    private htmlEle: HTMLElement;

    private doc: StructDoc;

    constructor(id: string, conf: EditorConfig | null | undefined) {
        this.id = id;
        this.conf = conf ? conf : new EditorConfig(400, 300);

        //
        let ele = this.mount()
        if (ele == null)
            throw new Error("can not find element by id:" + id)

        this.htmlEle = ele

        // 初始化文档
        this.doc = new StructDoc("root", this.id, "");
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    private mount(): HTMLElement|null {
        // 初始化编辑器
        let ele = document.getElementById(this.id)

        // this.ele?.className = ""
        if (ele == null)
            return null
        ele.innerHTML = "this is a test editor"
        ele.classList.add('editor');

        let that =this
        ele.addEventListener("click", (e: Event) => {
                console.log("editor click", e,that)
                this.doc.AddDocElement("p")
        })
        return ele
    } 
    public saveDocument(): string {

        // 保存文档
        let data = JSON.stringify(this.doc)
        return data
    }


    public loadDocument(jsonData: string): void {
        // 加载文档

        //  this.doc = await axios.get<StructDoc>(url);

        this.doc = JSON.parse(jsonData)
        console.log("loading doc", jsonData, this.doc)

    }

    public AddDocElement(type: string): StructDocElement {
        return this.doc.AddDocElement(type)
    }
}