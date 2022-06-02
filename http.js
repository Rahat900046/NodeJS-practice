// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.end('<h1>Hello NodeJS.Yor are my Love</h1>')
// })
// server.listen(3000, () => {
//     console.log('Server Is Running pn PORT 3000');
// })



const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.end('<h1>Hello Node JS.You  are Beauty</h1>')
})
server.listen(3024,()=>{
    console.log('Server is Running ON PORT 3024');
})