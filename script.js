function showScene(text, choices) {
  document.getElementById("scene").innerHTML = `<p>${text}</p>`;

  let btns = "";
  choices.forEach(choice => {
    btns += `<button onclick="${choice.action}">${choice.label}</button>`;
  });

  document.getElementById("choices").innerHTML = btns;
}

// --- SCENES ---

function startGame() {
  showScene(
    "Lilykins wakes up hungry on Christmas morning. She spots a small piece of bread on the snowy sidewalk...",
    [
      { label: "Pick up the bread", action: "scene2()" }
    ]
  );
}

function scene2() {
  showScene(
    "Just as Lilykins grabs the bread, Mary the pigeon arrives and asks, 'Lilykins… my babies are hungry. Can you share?'",
    [
      { label: "Share the bread", action: "goodEnding()" },
      { label: "Keep the bread", action: "lessonEnding()" }
    ]
  );
}

function goodEnding() {
  showScene(
    "Lilykins shares the bread. That night, Santa sees her kindness and sends a swirl of golden magic!",
    [
      { label: "See what happens next", action: "princessEnding()" }
    ]
  );
}

function princessEnding() {
  showScene(
    "In the morning, Lilykins wakes up as the Princess of the Cleveland Mouse Kingdom! Her kindness was rewarded.",
    [
      { label: "Play Again", action: "startGame()" }
    ]
  );
}

function lessonEnding() {
  showScene(
    "Lilykins keeps the bread… but feels lonely. She realizes kindness feels better than hunger.",
    [
      { label: "Try again", action: "startGame()" }
    ]
  );
}

// Start game
startGame();
