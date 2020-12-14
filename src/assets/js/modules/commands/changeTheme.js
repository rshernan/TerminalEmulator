const themes = require("../themes/themes.json");
class ChangeTheme {
    constructor() {
        this.theme='dark';
        if(localStorage.getItem('theme')){
            let themeJSON= localStorage.getItem('theme');
            this.theme=JSON.parse(themeJSON);
        }else{
            this.saveTheme();
        }
        this.setTheme(this.theme);
    }

    execute(command) {
        
        let theme = command.split(" ")[1];
        this.setTheme(theme);
    }

    setTheme(theme){
        let root = document.documentElement;
        switch (theme) {
            case "dark":
                this.theme="dark";
                root.style.setProperty("--color-text", themes.dark.text);
                root.style.setProperty(
                    "--color-background",
                    themes.dark.background
                );
                root.style.setProperty("--color-path", themes.dark.path);
                break;
            case "light":
                this.theme="light";
                root.style.setProperty("--color-text", themes.light.text);
                root.style.setProperty(
                    "--color-background",
                    themes.light.background
                );
                root.style.setProperty("--color-path", themes.light.path);
                break;
            case "matrix":
                this.theme="matrix";
                root.style.setProperty("--color-text", themes.matrix.text);
                root.style.setProperty(
                    "--color-background",
                    themes.matrix.background
                );
                root.style.setProperty("--color-path", themes.matrix.path);
                break;
            case "retrowave":
                this.theme="retrowave";
                root.style.setProperty("--color-text", themes.retrowave.text);
                root.style.setProperty(
                    "--color-background",
                    themes.retrowave.background
                );
                root.style.setProperty("--color-path", themes.retrowave.path);
                break;
            case "pink":
                this.theme="pink";
                root.style.setProperty("--color-text", themes.pink.text);
                root.style.setProperty(
                    "--color-background",
                    themes.pink.background
                );
                root.style.setProperty("--color-path", themes.pink.path);
                break;
            case "inovate":
                this.theme="inovate";
                root.style.setProperty("--color-text", themes.inovate.text);
                root.style.setProperty(
                    "--color-background",
                    themes.inovate.background
                );
                root.style.setProperty("--color-path", themes.inovate.path);
                break;
            case "peace":
                this.theme="peace";
                root.style.setProperty("--color-text", themes.peace.text);
                root.style.setProperty(
                    "--color-background",
                    themes.peace.background
                );
                root.style.setProperty("--color-path", themes.peace.path);
                break;
            default:
                console.log("invalid parameter");
        }
        this.saveTheme();
    }

    saveTheme(){
        let themeJSON= JSON.stringify(this.theme);
        localStorage.setItem('theme', themeJSON);
    }
}
let theme=new ChangeTheme();
export { theme };
