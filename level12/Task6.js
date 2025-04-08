const fs = require('fs');

const oldName = 'original.txt';
const newName = 'renamed.txt';

fs.rename(oldName,newName,(err) =>{
    if(err){
        console.log('Erro renamed file:' ,err.message);
        return;
    }
    console.log(`successfully renamed ${oldName} to ${newName}`);
});


