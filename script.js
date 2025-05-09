let winningNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
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

  if (userGuess === winningNumber) {
    feedback.textContent = `🎊 정답입니다! ${attempts}번 만에 맞추셨어요!`;
  } else if (userGuess < winningNumber) {
    feedback.textContent = "📈 더 큰 숫자입니다.";
  } else {
    feedback.textContent = "📉 더 작은 숫자입니다.";
  }
}
