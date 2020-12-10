class Help {
    print() {
        let help = `COMANDS FOR THIS TERMINAL EMULATOR
__________________________________
pwd shows your current path
ls show folders and files in your path
cd change the directory
mkdir create a folder
echo display a line of text
cat display content of a file
rm remove directory
mv move directory or file (can rename it to)
clear clear the console`;
        console.log(help);
        return help;
    }
}

export { Help };
