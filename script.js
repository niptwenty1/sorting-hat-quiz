const questions = [{
        text: "1. What do you like to do most?",
        a: "Go on adventures and explore new places",
        b: "Read books and solve puzzles"
    },
    {
        text: "2. If you saw someone being bullied, what would you do?",
        a: "Stand up for them right away",
        b: "Think of a clever way to help them"
    },
    {
        text: "3. What would you rather be known for?",
        a: "Being brave",
        b: "Being smart"
    },
    {
        text: "4. Which animal do you like more?",
        a: "Lion",
        b: "Eagle"
    },
    {
        text: "5. Your teacher gives you a tricky question. What do you do?",
        a: "Try my best, even if it’s hard",
        b: "Think carefully and use logic to solve it"
    }
];

let current = 0;
let scoreA = 0;
let scoreB = 0;

const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");

function showQuestion() {
    const q = questions[current];
    quizDiv.innerHTML = `
    <div class="question">
      <h2>${q.text}</h2>
      <button class="btn-a" onclick="choose('A')">${q.a}</button>
      <button class="btn-b" onclick="choose('B')">${q.b}</button>
    </div>
  `;
}

function choose(answer) {
    if (answer === 'A') scoreA++;
    else scoreB++;

    current++;
    if (current < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizDiv.innerHTML = '';
    if (scoreA > scoreB) {
        resultDiv.innerHTML = `
      <div class="gryffindor">You are in <strong>GRYFFINDOR</strong>! Brave and bold!</div>
      <img src="gryffindor.jpeg" class="house-image" alt="Gryffindor"/>
    `;
    } else {
        resultDiv.innerHTML = `
      <div class="ravenclaw">You are in <strong>RAVENCLAW</strong>! Wise and clever!</div>
      <img src="ravenclaw.jpeg" class="house-image" alt="Ravenclaw"/>
    `;
    }
}

showQuestion();
