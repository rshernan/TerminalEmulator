class ChangeColor {
    constructor() {}

    execute(command) {
        console.log(command);
        let root = document.documentElement;
        let variable = command.split(" ")[1];
        let color = command.split(" ")[2];
        console.log(variable);
        console.log(color);
        if (this.validColour(color)) {
            switch (variable) {
                case "text":
                    root.style.setProperty("--color-text", color);
                    break;
                case "path":
                    root.style.setProperty("--color-path", color);
                    break;
                case "background":
                    root.style.setProperty("--color-background", color);
                    break;
                default:
                    console.log("invalid parameter");
            }
        } else {
            console.log("invalid color");
        }
    }

    validColour(stringToTest) {
        //Alter the following conditions according to your need.
        if (stringToTest === "") {
            return false;
        }
        if (stringToTest === "inherit") {
            return false;
        }
        if (stringToTest === "transparent") {
            return false;
        }

        var image = document.createElement("img");
        image.style.color = "rgb(0, 0, 0)";
        image.style.color = stringToTest;
        if (image.style.color !== "rgb(0, 0, 0)") {
            return true;
        }
        image.style.color = "rgb(255, 255, 255)";
        image.style.color = stringToTest;
        return image.style.color !== "rgb(255, 255, 255)";
    }

    man() {
        return `
NAME
    color
SYNOPSIS
    color [text, path, background] hexcode || cssStringColor
DESCRIPTION
    change color to the color writed for the specified part of the terminal writed.
        `;
    }
}

export { ChangeColor };
