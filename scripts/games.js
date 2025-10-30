let num1, num2;
function newQuestion() {
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  document.getElementById("question").textContent = `${num1} + ${num2} = ?`;
  document.getElementById("answer").value = "";
  document.getElementById("result").textContent = "";
}
function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const correct = num1 + num2;
  document.getElementById("result").textContent =
    userAnswer === correct ? "✅ Correct!" : `❌ Try again. (${correct})`;
  setTimeout(newQuestion, 2000);
}
window.onload = newQuestion;