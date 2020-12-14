const totalOpacity = 1;
class ChangeBackgroundImage {
    execute(command) {
        let image = command.split(" ")[1];
        let opacity = command.split(" ")[2];
        let root = document.documentElement;
        let numberOpacity = 0;
        console.log(command);
        if (image === "none") {
            root.style.setProperty("--image", image);
        } else {
            console.log("not none");
            if (image != "same") {
                console.log("not same");
                root.style.setProperty("--image", `url(${image})`);
            }
        }

        if (!isNaN(opacity) && opacity.indexOf(".") != -1) {
            let numberOpacity = parseFloat(opacity);
            if (numberOpacity > 1 || numberOpacity < 0) {
                root.style.setProperty("--opacity", 0);
            } else {
                if (image === "none") {
                    root.style.setProperty("--opacity", numberOpacity);
                } else {
                    root.style.setProperty("--opacity", 1 - numberOpacity);
                }
            }
        } else {
            if (image === "none") {
                if (opacity === "0") {
                    root.style.setProperty("--opacity", 0);
                } else {
                    root.style.setProperty("--opacity", 1);
                }
            } else {
                console.log(opacity);
                if (opacity === "0") {
                    root.style.setProperty("--opacity", 1);
                } else {
                    root.style.setProperty("--opacity", 0);
                }
            }
        }
    }

    man() {
        return `
NAME
    image
SYNOPSIS
    image [url, none, same] [opacity]
DESCRIPTION
    change the background image to the url image and put that opacity to the image, default opacity 1

    if put none as url the image disapear and alter the opacity of the background color

    if put same as url the image remains eaqual and alter only the opacity of the image
    `;
    }
}
let changeBackgroundImage = new ChangeBackgroundImage();
export { changeBackgroundImage };
