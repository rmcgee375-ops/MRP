const answers = {
  q1: "B",
  q2: "C",
  q3: "B",
  q4: "D",
  q5: "B"
};

document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  let total = Object.keys(answers).length;

  for (let question in answers) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === answers[question]) {
      score++;
    }
  }

  document.getElementById("result").textContent =
    `You scored ${score} out of ${total}.`;
});

