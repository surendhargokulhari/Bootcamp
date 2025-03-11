const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a value:",(input)=>{
    const num = parseInt(input,10);
    if(isNaN(num)){
        console.log("please provide a valid number .");
    }
    else{
        const result =num % 2 === 0? "Even" : "Odd";
        console.log(result);
    }
    rl.close();
});

