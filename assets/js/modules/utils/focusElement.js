export { focusElement };

function focusElement(element) {
    element.setAttribute("contentEditable", true);
    element.addEventListener("load", function () {
        console.log("ejecutando focus");
        element.focus();
    });
}
