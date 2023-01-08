//Install chalk package - Not working despite multiple tries!
//console.log(chalk.blue('Hello World!'));
//console.log(chalk.red("aayush"))

//Install the readline-sync package!
var readlineSync = require("readline-sync");

var userName = readlineSync.question("Whats your name?");

//Welcome
console.log(
  'Welcome to the ultimate "The Office" quiz, ',
  userName.toUpperCase()
);
console.log("---------------");
console.log(
  'Answer the below questions and test your knowledge on "The Office"!'
);

//Questions
var questions = [
  {
    question: 'In S2E5 "Halloween," what is Jims costume?',
    answer: "Three punch hole Jim",
  },
  {
    question:
      'In the episode named "The Farm," Dwights family gathers for a funeral meeting. Whose funeral was it?',
    answer: "Aunt Shirley",
  },
  {
    question:
      'In season 9 episode "Vandalism," Pams warehouse mural is defaced. Name the person who did it.',
    answer: "Frank",
  },
  {
    question:
      "Can you guess the name of Jims new company for which Darryl was interviewing?",
    answer: "Athlead",
  },
  {
    question: 'Name the person who shaves their head in S9E10 "Lice"?',
    answer: "Meredith",
  },
];

//Function
var score = 0;
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score++;
  } else {
    console.log("Wrong!");
  }
}
//quiz('who am I?', 'Isha') - Test to see if the function is running!

//for loop
for (var i = 0; i < questions.length; i++) {
  var current = questions[i];
  quiz(current.question, current.answer);
  console.log("Correct answer is:", current.answer);
  console.log("------------");
}
console.log("Yay! Your final score is:", score);
if (score < 3) {
  console.log('Looks like you need to do a rerun of "The Office"!');
} else {
  console.log('Hey! You have spent multiple hours watching "The Office"!');
}
console.log("------------");
console.log(
  "Thank you for playing the quiz! Come back again for the next one!"
);
