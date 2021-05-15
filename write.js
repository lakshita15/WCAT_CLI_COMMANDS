
// console.log("hi")

let cmds = process.argv.slice(2);
const fs = require("fs");

function wcat(cmds) {
    let options = cmds.filter(function(data, index) {
        return data.startsWith("-");
    });
    let files = cmds.filter(function(data, index) {
        return !data.startsWith("-");
    });
    if(files.length == 0) {
        console.log("Please specify a file name to read.");
        return;
    }

    for(i in files) {
        if(!fs.existsSync(files[i])) {
            console.log(files[i] + " does not exist");
            return;
        }
    }
if(options.includes("-w")) {
    if(options.length != 1 || files.length != 2 || cmds.indexOf("-w") != 1) {
        console.log("Command not found");
        return;
    }
    let data = fs.readFileSync(files[0], "utf-8");
    fs.writeFileSync(files[1], data);
    return;
}else if(options.includes("-a")) {
    if(options.length != 1 || files.length != 2 || cmds.indexOf("-a") != 1) {
        console.log("Command not found");
        return;
    }
    let file1 = fs.readFileSync(files[0], "utf-8");
    let file2 = fs.readFileSync(files[1], "utf-8");
    fs.writeFileSync(files[1], file2 + "\r\n" + file1);
    return;
}
wcat(cmds);
}