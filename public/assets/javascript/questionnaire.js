var questions = [
  {
    q: "1. Which of these pets have you owned before?",
    answers: {
      a: "Cat",
      b: "Dog",
      c: "Gold Fish",
      d: "None of the above"
    },
    name: "owned",
  },
  {
    q: "2. How often do you skip a meal?",
    answers: {
      a: "Once a week",
      b: "Twice a week",
      c: "Three times a week",
      d: "Four or more times a week"
    },
    name: "skip"
  },
  {
    q: "3. What is your noise tolerance for barking? (4 being most tolerant)",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4"
    },
    name: "lint"
  },
  {
    q:
      "4. On a scale from 1 to 4 (4 being very affectionate) how affectionate are you?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4"
    },
    name: "affectionate"
  },
  {
    q: "5. Pick your most ideal weekend activity:",
    answers: {
      a: "Hiking",
      b: "Staying home and watching Netflix",
      c: "Brunch & mimosas",
      d: "Bar hopping"
    },
    name: "weekend"
  },
  {
    q: "6. Which one best describes your disposable income each month?",
    answers: {
      a: "$0-100",
      b: "$100-200",
      c: "$200-300",
      d: "I live in San Francisco"
    },
    name: "disposable"
  },
  {
    q:
      "7. If you woke up and your pet urinated all over your bed sheets what would you do?",
    answers: {
      a: "Just clean it and not do anything else",
      b: "Hit your pet",
      c: "Verbally tell your pet that it’s not okay and attempt to train it",
      d: "Give your pet up for adoption"
    },
    name: "urinate"
  },
  {
    q: "8. How many hours a day will the pet be alone at the house?",
    answers: {
      a: "0-3 hours",
      b: "3-6 hours",
      c: "6-8 hours",
      d: "8+ hours"
    },
    name: "alone"
  },
  {
    q: "9. Which of these does your property have?",
    answers: {
      a: "Front yard only",
      b: "Backyard only",
      c: "Front yard and backyard",
      d: "None"
    },
    name: "yard"
  },
  {
    q: "10. How often do you lose your belongings?",
    answers: {
      a: "Often",
      b: "Sometimes",
      c: "Not very often",
      d: "Almost never"
    },
    name: "belongings"
  }
];

$(document).ready(function(){
  var div, question_text, paragraph;
for (var index in questions){
    question_text = questions[index].q;
    div = $(`<div id="quest${index}">`);
    paragraph = $('<p>');
    paragraph.text(question_text);
    div.append(paragraph);
    console.log(div);
    $('#questionsList').append(paragraph);
    $('#questionsList').append(div);

// loops through the object within the object (answers), then adds the answers to the buttons, then appends it to the ID
    for (letter in questions[index].answers){
        var choices = questions[index].answers[letter];
        var createChoices = $('<input class= "button" type="radio" value="' + index + '" name="'+ questions[index].name + '" id="'+ choices +'">');
        // var createChoices = $(`<input class= "button" type="radio" name="${questions[index].name}" id="${choices}">`);

        createChoices.text(choices);
        $(`#quest${index}`).append(createChoices);
    }
    // var counter = 1;
    // for (var key =0; key<answers.length; key++) {
    //   counter++;
    // }
}
});


/// once they click submit || finish all questions, iterate over radio button and assign values to vars, add them up (make sure they are numbers not strings) and make a post request to the api endpoint making sure to include score that you want to check in an object

//once data come back use jQuery and the data object to poprulate screen/modal



//give each answer a value and store the answers in a variable. At the end of the quiz have all the values added up.
//create a function
