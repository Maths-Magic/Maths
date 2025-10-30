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

function appendNumber(num) {
  document.getElementById("answer").value += num;
}

function clearInput() {
  document.getElementById("answer").value = "";
}

window.onload = function () {
  newQuestion();
  const pad = document.createElement("div");
  pad.id = "numPad";
  pad.style.marginTop = "20px";
  pad.style.display = "grid";
  pad.style.gridTemplateColumns = "repeat(3, 60px)";
  pad.style.justifyContent = "center";
  pad.style.gap = "10px";

  const buttons = ["1","2","3","4","5","6","7","8","9","0","C"];
  buttons.forEach(b => {
    const btn = document.createElement("button");
    btn.textContent = b;
    btn.onclick = b === "C" ? clearInput : () => appendNumber(b);
    pad.appendChild(btn);
  });
  document.getElementById("gameArea").appendChild(pad);
};
