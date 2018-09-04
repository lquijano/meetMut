var scoreArr = [];

// var answerVal = ["Cat", "Dog", "Gold Fish"];

var questions = [
  {
    q: "1. Which of these pets have you owned before?",
    answers: [
      {text:"Cat", score:2},
      {text:"Dog", score:3},
      {text:"Gold Fish", score:1},
      {text:"None of the above", score:0}
    ],
    name: "owned",
  },
  {
    q: "2. How often do you skip a meal?",
    answers: [
      {text:"Once a week", score:3},
      {text:"Twice a week", score:2},
      {text:"Three times a week", score:1},
      {text:"Four or more times a week", score:0}
    ],
    name: "skip"
  },
  {
    q: "3. What is your noise tolerance for barking? (4 being most tolerant)",
    answers: [
      {text: "1", score:0},
      {text: "2", score:1},
      {text: "3", score:2},
      {text: "4", score:3}
    ],
    name: "lint"
  },
  {
    q:
      "4. On a scale from 1 to 4 (4 being very affectionate) how affectionate are you?",
    answers: [
      {text: "1", score:0},
      {text: "2", score:1},
      {text: "3", score:2},
      {text: "4", score:3}
    ],
    name: "affectionate"
  },
  {
    q: "5. Pick your most ideal weekend activity:",
    answers: [
      {text: "Hiking", score:3},
      {text: "Staying home and watching Netflix", score:2},
      {text: "Brunch & mimosas", score:1},
      {text: "Bar hopping", score:0}
    ],
    name: "weekend"
  },
  {
    q: "6. Which one best describes your disposable income each month?",
    answers: [
      {text: "$0-100", score:0},
      {text: "$100-200", score:1},
      {text: "$200-300", score:2},
      {text: "I live in San Francisco", score:3}
    ],
    name: "disposable"
  },
  {
    q:
      "7. If you woke up and your pet urinated all over your bed sheets what would you do?",
    answers: [
      {text: "Just clean it and not do anything else", score:2},
      {text: "Hit your pet", score:0},
      {text: "Verbally tell your pet that it’s not okay and attempt to train it", score:3},
      {text: "Give your pet up for adoption", score:1}
    ],
    name: "urinate"
  },
  {
    q: "8. How many hours a day will the pet be alone at the house?",
    answers: [
      {text: "0-3 hours", score:3},
      {text: "3-6 hours", score:2},
      {text: "6-8 hours", score:1},
      {text: "8+ hours", score:0}
    ],
    name: "alone"
  },
  {
    q: "9. Which of these does your property have?",
    answers: [
      {text: "Front yard only", score:1},
      {text: "Backyard only", score:2},
      {text: "Front yard and backyard", score:3},
      {text: "None", score:0}
    ],
    name: "yard"
  },
  {
    q: "10. How often do you lose your belongings?",
    answers: [
      {text: "Often", score:0},
      {text: "Sometimes", score:1},
      {text: "Not very often", score:2},
      {text: "Almost never", score:3}
    ],
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
        var choices = questions[index].answers[letter].text;
        var createChoices = $('<input class="button" type="radio" name="'+ questions[index].name + '" id="'+ choices +'"' + 'data-score="' + questions[index].answers[letter].score +'" ><label>'+ choices +'</label>');
        // <input class="button" type="radio" name="affectionate" id="3" data-score="9">

        createChoices.text(choices);
        $('#questionsList').append(createChoices);
    }
  }
});


// $("input[type='radio']").click(function() {
//   var text = $( this ).text();
//   answerArr.push(text);
//   console.log(answerArr);
//   });


$(document).on("click", ".button", function(event) {
  console.log('test');
  event.preventDefault();
  var score = $( this ).data("score");
  scoreArr.push(score);
  console.log(score);
});



//capture the values of each click event. Push those answers into an array. Make a get request to a url where I'll a res.json of that array.

//give each answer a value and store the answers in a variable. At the end of the quiz have all the values added up.
//create a function

//one id for each answer. Select the id and loop through the id's children until we find where exaxtly the clikc took place in the child element
