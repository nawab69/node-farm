const fs = require('fs');


//////////////////////////////// Synchronous - Blocking ///////////////////////////////////

/*
const fileIn = fs.readFileSync('./txt/input.txt','utf-8');
console.log(fileIn);
const fileOut = `This is all about avocado : ${fileIn} \nCreated at : ${Date.now()}`
fs.writeFileSync('./txt/output.txt',fileOut);
console.log('File written successfully');
*/

//////////////////////////////// Asynchronous - Non-Blocking //////////////////////////////////

fs.readFile('./txt/start.txt','utf-8',(err,data1) => {
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2) => {
        if(err) return console.log('something went wrong ');
        fs.readFile('./txt/append.txt','utf-8',(err,data3) => {
            fs.writeFile('./txt/finall.txt',`${data2} ${data3}`,'utf-8',err => {
                console.log('file has been written Successfully');
            })
        })
    })
});
console.log('Files are processing...........');

//////////////////////////////// End Asynchronous //////////////////////////////////

