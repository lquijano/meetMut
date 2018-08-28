var questions = [
  {
    q: "1. Have you ever owned a pet?",
    answers: {
      a: "Yes",
      b: "No"
    },
    name: "owned",
  },
  {
    q: "2. Do you ever skip a meal?",
    answers: {
      a: "Yes",
      b: "No"
    },
    name: "skip"
  },
  {
    q: "3. Does it bother you to have lint on your clothes?",
    answers: {
      a: "Yes",
      b: "No"
    },
    name: "lint"
  },
  {
    q:
      "4. On a scale from 1 to 5 (5 being very affectionate) how affectionate are you?",
    answers: {
      a: "1",
      b: "2",
      c: "3",
      d: "4",
      e: "5"
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
      c: "Verbally tell your pet that it’s not okay and attempt to train it"
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
    q: "9. Does your property have a yard?",
    answers: {
      a: "Yes",
      b: "No"
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
    div = $('<div>');
    paragraph = $('<p>');
    paragraph.text(question_text);
    div.append(paragraph);
    console.log(div);
    $('#questionsList').append(paragraph);

// loops through the object within the object (answers), then adds the answers to the buttons, then appends it to the ID
    for (letter in questions[index].answers){
        var choices = questions[index].answers[letter];
        var createChoices = $('<input class= "button" type="radio" name="'+ questions[index].name + '" id="'+ choices +'"><label></label>');

        createChoices.text(choices);
        $('#questionsList').append(createChoices);
    }
    // var counter = 1;
    // for (var key =0; key<answers.length; key++) {
    //   counter++;
    // }
}
});

//give each answer a value and store the answers in a variable. At the end of the quiz have all the values added up.
//create a function 
