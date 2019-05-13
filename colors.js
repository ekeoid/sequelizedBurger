let PORT = 8080;

console.log("App listening on:", "\x1b[1m\x1b[36m" + "http://localhost:" + "\x1b[1m\x1b[33m" + PORT + "\x1b[0m");

const colors = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",
    fg: {
        Black: "\x1b[30m",
        Red: "\x1b[31m",
        Green: "\x1b[32m",
        Yellow: "\x1b[33m",
        Blue: "\x1b[34m",
        Magenta: "\x1b[35m",
        Cyan: "\x1b[36m",
        White: "\x1b[37m",
        Crimson: "\x1b[38m"
    },
    bg: {
        Black: "\x1b[40m",
        Red: "\x1b[41m",
        Green: "\x1b[42m",
        Yellow: "\x1b[43m",
        Blue: "\x1b[44m",
        Magenta: "\x1b[45m",
        Cyan: "\x1b[46m",
        White: "\x1b[47m",
        Crimson: "\x1b[48m"
    }
};

/*
Reset: "\x1b[0m"
Bright: "\x1b[1m"
Dim: "\x1b[2m"
Underscore: "\x1b[4m"
Blink: "\x1b[5m"
Reverse: "\x1b[7m"
Hidden: "\x1b[8m"

FgBlack: "\x1b[30m"
FgRed: "\x1b[31m"
FgGreen: "\x1b[32m"
FgYellow: "\x1b[33m"
FgBlue: "\x1b[34m"
FgMagenta: "\x1b[35m"
FgCyan: "\x1b[36m"
FgWhite: "\x1b[37m"

BgBlack: "\x1b[40m"
BgRed: "\x1b[41m"
BgGreen: "\x1b[42m"
BgYellow: "\x1b[43m"
BgBlue: "\x1b[44m"
BgMagenta: "\x1b[45m"
BgCyan: "\x1b[46m"
BgWhite: "\x1b[47m"
*/