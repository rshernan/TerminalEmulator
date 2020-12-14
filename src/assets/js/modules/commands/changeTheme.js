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
        let themesNames=Object.keys(themes);
        if(themesNames.includes(theme)){
            this.theme=theme;
            root.style.setProperty("--color-text", themes[theme].text);
            root.style.setProperty(
                "--color-background",
                themes[theme].background
            );
            root.style.setProperty("--color-path", themes[theme].path);
        }else{
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
