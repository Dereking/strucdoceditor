import * as _ from 'lodash';
import EditorConfig from '../lib/EditorConfig';
import StructDocEditor from '../lib/StructDocEditor';
import './main.css';
import User1 from './user1.jpeg'; // 引入图片


function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('test');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = User1;

    element.appendChild(myIcon);




    return element;
}


document.body.appendChild(component());

function saveBtnClick(e: Event) {
    console.log(e);
    let dat = editor.saveDocument();
    console.log(dat);
}

const conf = new EditorConfig(400, 300);

const editor = new StructDocEditor('editor1', conf);

let saveBtn = document.getElementById("saveBtn");
saveBtn?.addEventListener("click", (e: Event) => saveBtnClick(e));