const path = require('path') 
const myCurrentpath = __filename

let pathObj= {
    dir:'usr/local',
    name:'testFile',
    ext:'.js'
}

console.log(path.format(pathObj));
console.log(path.join('user','local','rahat','testfile.js'));
console.log(path.resolve(__dirname,'scripts','testfile.js'));
console.log(myCurrentpath);