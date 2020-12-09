class Pwd {
  showCurrentPath(currentPath) {
    this.currentPath = currentPath;
    return this.currentPath;
  }
}

function manPwd() {
  return `
  PWD(1)                    BSD General Commands Manual                   PWD(1)

  NAME
      pwd -- return working directory name

  SYNOPSIS
      pwd [-L | -P]

  DESCRIPTION
      The pwd utility writes the absolute pathname of the current working
      directory to the standard output.

      Some shells may provide a builtin pwd command which is similar or identi-
      cal to this utility.  Consult the builtin(1) manual page.

      The options are as follows:

      -L      Display the logical current working directory.

      -P      Display the physical current working directory (all symbolic
              links resolved).

      If no options are specified, the -L option is assumed.`;
}

export { Pwd, manPwd }