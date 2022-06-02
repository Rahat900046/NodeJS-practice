const fs= require('fs')


const testObj={
    name:'Rahat',
    email:'islamrahatul092@gmail.com',
    address:{
        city:'Rangpur',
        country:'Bangladesh'
    }
}

const data=JSON.stringify(testObj)
fs.writeFile('./test.json', data,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log('File write successfully');
    }
})