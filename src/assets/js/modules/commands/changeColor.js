class ChangeColor {
    constructor() {}

    execute(command) {
        console.log(command);
        let root = document.documentElement;
        let variable = command.split(" ")[1];
        let color = command.split(" ")[2];
        console.log(variable);
        console.log(color);
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
        }
    }
}

export { ChangeColor };
