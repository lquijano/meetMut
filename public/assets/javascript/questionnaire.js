var scoreArr = [5, 4];
var userScore = {
  totalScore: []
};
// var answerVal = ["Cat", "Dog", "Gold Fish"];

var questions = [
  {
    q: "1. Which of these pets have you owned before?",
    answers: [
      { a_option: "Cat", score: 2 },
      { a_option: "Dog", score: 3 },
      { a_option: "Gold Fish", score: 1 },
      { a_option: "None of the above", score: 0 }
    ],
    name: "owned",
  },
  {
    q: "2. How often do you skip a meal?",
    answers: [
      { a_option: "Once a week", score: 3 },
      { a_option: "Twice a week", score: 2 },
      { a_option: "Three times a week", score: 1 },
      { a_option: "Four or more times a week", score: 0 }
    ],
    name: "skip"
  },
  {
    q: "3. What is your noise tolerance for barking? (4 being most tolerant)",
    answers: [
      { a_option: "1", score: 0 },
      { a_option: "2", score: 1 },
      { a_option: "3", score: 2 },
      { a_option: "4", score: 3 }
    ],
    name: "lint"
  },
  {
    q:
      "4. On a scale from 1 to 4 (4 being very affectionate) how affectionate are you?",
    answers: [
      { a_option: "1", score: 0 },
      { a_option: "2", score: 1 },
      { a_option: "3", score: 2 },
      { a_option: "4", score: 3 }
    ],
    name: "affectionate"
  },
  {
    q: "5. Pick your most ideal weekend activity:",
    answers: [
      { a_option: "Hiking", score: 3 },
      { a_option: "Staying home and watching Netflix", score: 2 },
      { a_option: "Brunch & mimosas", score: 1 },
      { a_option: "Bar hopping", score: 0 }
    ],
    name: "weekend"
  },
  {
    q: "6. Which one best describes your disposable income each month?",
    answers: [
      { a_option: "$0-100", score: 0 },
      { a_option: "$100-200", score: 1 },
      { a_option: "$200-300", score: 2 },
      { a_option: "I live in San Francisco", score: 3 }
    ],
    name: "disposable"
  },
  {
    q:
      "7. If you woke up and your pet urinated all over your bed sheets what would you do?",
    answers: [
      { a_option: "Just clean it and not do anything else", score: 2 },
      { a_option: "Hit your pet", score: 0 },
      { a_option: "Verbally tell your pet that it’s not okay and attempt to train it", score: 3 },
      { a_option: "Give your pet up for adoption", score: 1 }
    ],
    name: "urinate"
  },
  {
    q: "8. How many hours a day will the pet be alone at the house?",
    answers: [
      { a_option: "0-3 hours", score: 3 },
      { a_option: "3-6 hours", score: 2 },
      { a_option: "6-8 hours", score: 1 },
      { a_option: "8+ hours", score: 0 }
    ],
    name: "alone"
  },
  {
    q: "9. Which of these does your property have?",
    answers: [
      { a_option: "Front yard only", score: 1 },
      { a_option: "Backyard only", score: 2 },
      { a_option: "Front yard and backyard", score: 3 },
      { a_option: "None", score: 0 }
    ],
    name: "yard"
  },
  {
    q: "10. How often do you lose your belongings?",
    answers: [
      { a_option: "Often", score: 0 },
      { a_option: "Sometimes", score: 1 },
      { a_option: "Not very often", score: 2 },
      { a_option: "Almost never", score: 3 }
    ],
    name: "belongings"
  }
];

//questionsList div - main div

//div with questions only
//div with answers that will have a class that when clicked will make a border

//a "next" or "submit" button

$(document).ready(function () {
  var q_div, q_text, q_append, a_div, a_text, a_shown, thisScore;

  for (var key in questions) {
    q_text = questions[key].q;
    q_div = $('<div>');
    q_div.text(q_text);
    q_append = $('#questionsList').append(q_div);
    $('#card').append(q_append);

    //create a new div inside this portion of the for loop where we can put the questions/answers to include a class to it to stylize it.  #answerList on #questionsList 

    // loops through the object within the object (answers), then adds the answers to the answerList div
    for (var options in questions[key].answers) {
      a_text = questions[key].answers[options].a_option;
      a_div = $(`<div class="answers" name="${questions[key].name}" id="${a_text}" data-score="${questions[key].answers[options].score}">`);
      a_div.text(a_text);
      a_shown = $("#answersList").append(a_div);
      $('#card').append(a_shown);

      //answers will glow when hovered over
      $(".answers").hover(function () {
        $(this).toggleClass("red");

      });
      //click event here to pick an answer
      $(".answers").on("click", function () {
        $(this).addClass("selected");
      });

      //click event here to trigger the next question
      $("#sub-but").on("click", function () {

      });

    };
  };
});


// $("input[type='radio']").click(function() {
//   var text = $( this ).text();
//   answerArr.push(text);
//   console.log(answerArr);
//   });


$(document).on("click", "#sub-but", function (event) {
  console.log('test');
  event.preventDefault();
  var score = $(this).data("score");
  userScore.totalScore.push(score);
  // $.each($("input[name='question-2']:checked"), function() {
  //   if ($(this).val() === questions[2].correctAnswer) {
  //     game.correct++;
  //   }
  //   else {
  //     game.incorrect++;
  //   }
  // });

  //do this for each questions and it'll give us our total.  obj = userScore.  The property will be 'score' total.  Once we have the 'score' do a post requestion $.post route, obj, function data - 
  $.post("/api/animals", userScore, function (res) {
    console.log(res);
    console.log(userScore.totalScore);

  });
});



//capture the values of each click event. Push those answers into an array. Make a get request to a url where I'll a res.json of that array.

//give each answer a value and store the answers in a variable. At the end of the quiz have all the values added up.
//create a function

//one id for each answer. Select the id and loop through the id's children until we find where exaxtly the clikc took place in the child element
