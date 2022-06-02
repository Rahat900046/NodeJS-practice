// const fs = require('fs')
// const http = require('http')
// const server = http.createServer((req, res) => {
//     fs.readFile('./index.html', (err, data) => {
//         res.write(data)
//         res.end()
//     })
// })

// server.listen(8080, () => console.log('Server Is Running'))


const fs=require('fs')
const http=require('http')
const server =http.createServer((req,res)=>{
    fs.readFile('./index.html',(err,data)=>{
        res.write(data)
        res.end()
    })
})
server.listen(3024, ()=> console.log('Server Is Running Running'))