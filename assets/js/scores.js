document.addEventListener("DOMContentLoaded", function () {
    // grabs scores from local storage
    const storedScores = JSON.parse(localStorage.getItem("highScores")) || [];
  
    // displays scores
    const highScoresList = document.getElementById("highscores");
    storedScores.forEach((score) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${score.initials} - ${score.score}`;
      highScoresList.appendChild(listItem);
    });
  
    // event listener for clearing high scores
    document.getElementById("clear").addEventListener("click", function () {
      localStorage.removeItem("highScores");
      highScoresList.innerHTML = ""; // clears scores
    });
  });