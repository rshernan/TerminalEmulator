import { ls } from "../commands/ls.js";
import { Mkdir } from "../commands/mkdir.js";
import { Pwd } from "../commands/pwd.js";
import { cd } from "../commands/cd.js";
import { Echo } from "../commands/echo.js";
import { cat } from "../commands/cat.js";
import { Rm } from "../commands/rm.js";
import { clear } from "../commands/clear.js";
import { Help } from "../commands/help.js";
import { Mv } from "../commands/mv.js";
import { changeBackgroundImage } from "../commands/changeBackgroundImage.js";

class Man {
    executeCommand(writedLine) {
        if (writedLine.split(" ").length > 1) {
            switch (this.getCommand(writedLine)) {
                case "ls":
                    let lscommand = new ls();
                    return lscommand.man();
                case "echo":
                    let echo = new Echo();
                    return echo.man();
                    break;
                case "pwd":
                    let pwd = new Pwd();
                    return pwd.man();
                    break;
                case "cd":
                    let cdcommand = new cd();
                    return cdcommand.man();
                    break;
                case "mkdir":
                    let mkdir = new Mkdir();
                    return mkdir.man();
                    break;
                case "cat":
                    let catcommand = new cat();
                    return catcommand.man();
                    break;
                case "rm":
                    let rm = new Rm();
                    return rm.man();
                    break;
                case "mv":
                    let commandMv = new Mv();
                    return commandMv.man();
                    break;
                case "clear":
                    let clearcommand = new clear();
                    return clearcommand.man();
                    break;
                case "help":
                    let helpCommand = new Help();
                    return helpCommand.man();
                    break;
                case "man":
                    return this.man();
                    break;
                case "JS":
                    //let Js = new JS();
                    break;
                case "image":
                    return changeBackgroundImage.man();
                    break;
                default:
                    return "command not found";
            }
        } else {
            console.log("command error");
        }
    }

    getCommand(writedLine) {
        return writedLine.split(" ")[1];
    }

    man() {
        return `
NAME
       man - an interface to the system reference manuals

SYNOPSIS
       man [man options]

DESCRIPTION
       man  is the system's manual pager.  Each page argument given to man is normally the name of a program, utility or function.  The manual page associated with each of these arguments is then found and displayed.  A section, if
       provided, will direct man to look only in that section of the manual.  The default action is to search in all of the available sections following a pre-defined order (see DEFAULTS), and to show only  the  first  page  found,
       even if page exists in several sections.

       The table below shows the section numbers of the manual followed by the types of pages they contain.

       1   Executable programs or shell commands
       2   System calls (functions provided by the kernel)
       3   Library calls (functions within program libraries)
       4   Special files (usually found in /dev)
       5   File formats and conventions, e.g. /etc/passwd
       6   Games
       7   Miscellaneous (including macro packages and conventions), e.g. man(7), groff(7)
       8   System administration commands (usually only for root)
       9   Kernel routines [Non standard]

       A manual page consists of several sections.

       Conventional section names include NAME, SYNOPSIS, CONFIGURATION, DESCRIPTION, OPTIONS, EXIT STATUS, RETURN VALUE, ERRORS, ENVIRONMENT, FILES, VERSIONS, CONFORMING TO, NOTES, BUGS, EXAMPLE, AUTHORS, and SEE ALSO.

       Exact rendering may vary depending on the output device.  For instance, man will usually not be able to render italics when running in a terminal, and will typically use underlined or coloured text instead.

       The  command  or  function  illustration  is a pattern that should match all possible invocations.  In some cases it is advisable to illustrate several exclusive invocations as is shown in the SYNOPSIS section of this manual
       page.
        `;
    }
}

export { Man };
