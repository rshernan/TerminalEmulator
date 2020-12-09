import { addSpan } from "./modules/renders/console_render.js";
import {dataStrc} from "./modules/controllers/data.js";
import "../css/style.css";

let div = document.querySelector(".writed__input");

window.addEventListener("load", function () {
    div.focus();
});

document.addEventListener("keydown", addSpan, false);

console.log(dataStrc.data);
dataStrc.createFolder('adios');
dataStrc.openFolderInPath('adios');
dataStrc.createDocument('suh', 'blabla');
dataStrc.createDocument('si', 'blabla');
dataStrc.createDocument('si', 'blablabla');
dataStrc.addContentToDocument('suh', 'hola');
dataStrc.renameDocumentOrFolder('si', 'ho');

