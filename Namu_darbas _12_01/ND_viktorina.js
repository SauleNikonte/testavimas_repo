let quiz = document.getElementById("viktorina");

let finish = document.getElementById("finish");

let result = document.getElementById("result");

let score = document.getElementById("score");

function finish() {}

let score = 0;

for (let i = 1; i <= 5; i++) {

let answer = document.querySelector("q1" + i + "C");

let correct = document.querySelector("correct");

let wrong = document.querySelector("wrong");
              
if (answer && answer.value == correct.innerText[0]) {

score++;

correct.style.display = "block";

wrong.style.display = "none";
} 
else {
correct.style.display = "block";
wrong.style.display = "block";

wrong.innerText = "Jūsų atsakymas: " + (answer ? answer.value : "Nepasirinkta");
}
}
score.innerText = score;

quiz.style.display = "none";

result.style.display = "block";
} 