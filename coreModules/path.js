// console.log(__dirname);
// console.log(process.cwd());

const path = require('path');
const mod = require('./module/mod');

// const base = path.basename(__filename);
// const ext = path.extname(__filename);
// const parse = path.parse(__filename);
// console.log(parse);


const {readFile } = require('fs');

readFile(path.join(__dirname,'module','mod.js'), 'utf8',(err,data)=>{
    console.log(data);
})