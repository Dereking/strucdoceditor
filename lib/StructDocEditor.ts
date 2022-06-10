
import "./editor.scss";
import EditorConfig from "./EditorConfig";
import { StructDoc } from "./StructDoc";
import StructDocElement from "./StructDocElement";


export default class StructDocEditor {

    private id: string;
    public conf: EditorConfig;
    private ele: HTMLElement | null = null;

    private doc: StructDoc = new StructDoc("root");

    constructor(id: string, conf: EditorConfig | null | undefined) {
        this.id = id;
        this.conf = conf ? conf : new EditorConfig(400, 300);
        this.init()
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    private init(): void {
        // 初始化编辑器
        this.ele = document.getElementById(this.id)

        // this.ele?.className = ""
        if (this.ele == null)
            return
        this.ele.innerHTML = "this is a test editor"
        this.ele.classList.add('editor');

        this.ele.addEventListener("click", this.editorClick);
    }

    private editorClick(e: Event): void {
        this.doc.AddDocElement()
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

    public AddDocElement(tp: string): StructDocElement {
        return this.doc.AddDocElement(tp)
    }
}