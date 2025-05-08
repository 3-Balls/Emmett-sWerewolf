const createGameBtn = document.getElementById("create-game-btn");
const createGameSection = document.getElementById("create-game-section");
const lobbySection = document.getElementById("lobby-section");
const joinGameBtn = document.getElementById("join-game-btn");
const startGameBtn = document.getElementById("start-game-btn");
const playerNameInput = document.getElementById("player-name");
const playersList = document.getElementById("players-list");
const gameSection = document.getElementById("game-section");
const gameInfo = document.getElementById("game-info");
const voteSection = document.getElementById("vote-section");

let players = [];
let gameStarted = false;

createGameBtn.addEventListener("click", () => {
  createGameSection.classList.add("hidden");
  lobbySection.classList.remove("hidden");
});

joinGameBtn.addEventListener("click", () => {
  const playerName = playerNameInput.value.trim();
  if (playerName && players.length < 10) {
    players.push(playerName);
    updatePlayersList();
    playerNameInput.value = "";
  }
});

startGameBtn.addEventListener("click", () => {
  if (players.length >= 5) {
    gameStarted = true;
    startGame();
  } else {
    alert("You need at least 5 players to start the game.");
  }
});

function updatePlayersList() {
  playersList.innerHTML = players.map(player => `<li>${player}</li>`).join('');
}

function startGame() {
  lobbySection.classList.add("hidden");
  gameSection.classList.remove("hidden");

  // Assign roles (basic version, we will randomly assign roles)
  const roles = ["Werewolf", "Werewolf", "Villager", "Villager", "Villager", "Seer", "Doctor"];
  const shuffledRoles = shuffle(roles);

  // Map players to roles
  const playerRoles = {};
  players.forEach((player, index) => {
    playerRoles[player] = shuffledRoles[index];
  });

  gameInfo.innerHTML = "It's Night Phase. Werewolves, please choose a victim.";
  // Add logic for Night Phase, Voting, and Day Phase in a real game.
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
