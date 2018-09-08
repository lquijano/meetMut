var scoreArr = [];
var totalScore = 0;
// Activate submit button
$("#submitButton").on("click", function(event) {
  event.preventDefault();
  var q1 = $("#question1").val();
  var q2 = $("#question2").val();
  var q3 = $("#question3").val();
  var q4 = $("#question4").val();
  var q5 = $("#question5").val();
  var q6 = $("#question6").val();
  var q7 = $("#question7").val();
  var q8 = $("#question8").val();
  var q9 = $("#question9").val();
  var q10 = $("#question10").val();

  scoreArr.push(q1);
  scoreArr.push(q2);
  scoreArr.push(q3);
  scoreArr.push(q4);
  scoreArr.push(q5);
  scoreArr.push(q6);
  scoreArr.push(q7);
  scoreArr.push(q8);
  scoreArr.push(q9);
  scoreArr.push(q10);

  function sum(input) {
    for (var i = 0; i < input.length; i++) {
      if (isNaN(input[i])) {
        continue;
      }
      totalScore += Number(input[i]);
    }
    return totalScore;

    // totalScore = (scoreArr[i]);
    // console.log(totalScore);
  }
  console.log(sum(scoreArr));
});
