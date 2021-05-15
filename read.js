#!/usr/bin/env node

// console.log("hi")
let cmds = process.argv.slice(2);
const fs = require("fs");

function wcat(cmds){
    //read file by error handling
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


    //wcat -n filename 
    let numbering = 1;
    for(i in files) {
        if(!fs.existsSync(files[i])) {
            console.log(files[i] + " does not exist");
            return;
        }
    }
     // to remove the empty lines 
     for(i in files) {
        let data = fs.readFileSync(files[i],"utf-8");
        if(options.includes("-s")) {
            let lines = data.split("\r\n");
            
            for(j in lines) {
                if(lines[j] != "") {
                    //numbering of lines
                    if(options.includes("-n") || options.includes("-b")) {
                        console.log(numbering + ". " + lines[j]);
                        numbering += 1;
                    } else {
                        console.log(lines[j]);
                    }
                    
                }
            }
        }
         else if((options.includes("-n") && !options.includes("-b")) || (options.includes("-n") && options.includes("-b") && (options.indexOf("-n") < options.indexOf("-b")))) {
            let lines = data.split("\r\n");
            for(j in lines) {
               console.log(numbering + ". " + lines[j]);
               numbering++; 
            }
        } 
        else if(options.includes("-b")) {
            let lines = data.split("\r\n");
            for(j in lines) {
                if(lines[j] == "") {
                    console.log(lines[j]);
                } else {
                    console.log(numbering + ". " + lines[j]);
                    numbering += 1;
                }
            }
        }
        else {
            console.log(data);
        }
    }
}
wcat(cmds);