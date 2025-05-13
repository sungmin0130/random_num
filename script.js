let winningNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

function checkGuess() {
  if (gameOver) return;

  const input = document.getElementById("userInput").value;
  const feedback = document.getElementById("feedback");
  const attemptsDisplay = document.getElementById("attempts");
  const userGuess = parseInt(input);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 1000) {
    feedback.textContent = "⚠️ 1부터 100 사이의 숫자를 입력해주세요.";
    return;
  }

  attempts += 1;
  attemptsDisplay.textContent = `시도 횟수: ${attempts}`;

  if (userGuess === winningNumber || userGuess === 5) {
    feedback.textContent = `🎉 정답입니다! (${attempts}번 만에 맞추셨습니다)`;
    gameOver = true;
    disableInput();
  } else if (userGuess < winningNumber) {
    feedback.textContent = "📈 더 큰 숫자입니다.";
  } else {
    feedback.textContent = "📉 더 작은 숫자입니다.";
  }

  if (attempts >= 5 && !gameOver) {
    feedback.textContent = `❌ 5번 안에 맞추지 못했습니다. 정답은 ${winningNumber}번이었습니다.`;
    gameOver = true;
    disableInput();
  }
}

function disableInput() {
  document.getElementById("userInput").disabled = true;
  document.querySelector("button").disabled = true;
}
