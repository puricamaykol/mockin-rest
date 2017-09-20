let jsonfile = require('jsonfile');
let normalizedPath = require("path").join(__dirname, "resources");

let dir =  normalizedPath+'/'+'moredata';


let file = dir+'/moredata.json';

let fs = require('fs');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

fs.writeFile(file, "//", err => {
    if(err) {
        return console.log(err, "fs.writeFile");
    }

    let obj = [
		{"id": 1, "title":"Post 1","content": "some text"},
		{"id": 2, "title":"Post 2","content": "some text"}
	];
 
	jsonfile.writeFile(file, obj, err => {
	  console.error(err, "jsonfile.writeFile")
	})
});

