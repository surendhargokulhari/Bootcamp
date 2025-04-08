
const fs = require('fs');

fs.readFile('sample.txt', 'utf8' ,(err,data)=>{
  if(err){
    console.log('Error reading file:' ,err.message);
    return;
  }
  console.log('contents of sample.txt:\n');
  console.log(data);
})

