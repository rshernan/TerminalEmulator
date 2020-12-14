const themes = require("../themes/themes.json");
class ChangeTheme {
    constructor() {}

    execute(command) {
        let root = document.documentElement;
        let theme = command.split(" ")[1];
        switch (theme) {
            case "dark":
                root.style.setProperty("--color-text", themes.dark.text);
                root.style.setProperty(
                    "--color-background",
                    themes.dark.background
                );
                root.style.setProperty("--color-path", themes.dark.path);
                break;
            case "light":
                root.style.setProperty("--color-text", themes.light.text);
                root.style.setProperty(
                    "--color-background",
                    themes.light.background
                );
                root.style.setProperty("--color-path", themes.light.path);
                break;
            case "matrix":
                root.style.setProperty("--color-text", themes.matrix.text);
                root.style.setProperty(
                    "--color-background",
                    themes.matrix.background
                );
                root.style.setProperty("--color-path", themes.matrix.path);
                break;
            case "retrowave":
                root.style.setProperty("--color-text", themes.retrowave.text);
                root.style.setProperty(
                    "--color-background",
                    themes.retrowave.background
                );
                root.style.setProperty("--color-path", themes.retrowave.path);
                break;
            default:
                console.log("invalid parameter");
        }
    }
}

export { ChangeTheme };
