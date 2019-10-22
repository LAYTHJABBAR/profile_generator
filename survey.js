const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let arr = []

rl.question('What\'s your name? Nicknames are also acceptable :)? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

    arr.push(answer)
  
rl.question('What\'s an activity you like doing ?', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
    arr.push(answer)

rl.question('Which meal is your favourite ?', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
      
    arr.push(answer)

rl.question('What\'s your favourite thing to eat for that meal ?', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
              
    arr.push(answer)

rl.question('Which sport is your absolute favourite ?', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
          
    arr.push(answer)

rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
      
    arr.push(answer)
    
    rl.close();
   console.log(`\n your name is: ${arr[0]}`, `\n your activity is ${arr[1]}` ,`\n your fav-meal is ${arr[2]}` , `\n your favoruit to eat this meal${arr[3]}`, `\n your favoruit sport is${arr[4]}`, `\n your superpower is ${arr[5]}`)
});
});
});
});
});
});
