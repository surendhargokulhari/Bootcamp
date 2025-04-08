const fs = require('fs');

fs.appendFile('input.txt','hii i became mern stack developer' ,(err)=>{
    if(err){
        console.log("Erro this file:", err.message);
        return;
    }
    console.log("file create successfully.")
})