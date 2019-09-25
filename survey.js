const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const obj = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  obj.name = answer;
  console.log("Thanks! ", answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    obj.hobby = answer;
    console.log(obj);
    console.log(answer + " sounds like blast!");
    rl.question("What do you listen to while doing that? ", (answer) => {
      obj.music = answer;
      console.log("Thanks for your input!");
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        obj.meal = answer;
        console.log("Great!");
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          obj.food = answer;
          console.log("Yum!");
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            obj.sport = answer;
            console.log("Awesome!");
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              obj.superpower = answer;
              console.log(`\n ${obj.name} loves litening to ${obj.music} while ${obj.hobby}, devouring ${obj.food} for ${obj.meal}, prefers ${obj.sport} over any other sport, and is amazing at ${obj.superpower}!`)
              rl.close();
            });
          });
        });
      });
    });
  });
});


