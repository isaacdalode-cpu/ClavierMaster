
/* =====================================
   CLAVIERMASTER - TEST DE FRAPPE
===================================== */

// Textes d'entraînement
const passages = [
  "Apprendre à taper rapidement demande de la pratique. Un bon développeur maîtrise son clavier et utilise les raccourcis pour travailler efficacement. La précision est aussi importante que la vitesse. Entraîne-toi chaque jour pour améliorer tes compétences.",

  "La programmation permet de résoudre des problèmes avec un ordinateur. Pour devenir développeur, il faut apprendre à réfléchir, comprendre les instructions et écrire du code. La maîtrise du clavier permet de travailler plus rapidement et avec davantage de confort.",

  "Un ordinateur est un outil indispensable dans le monde moderne. Les étudiants utilisent les technologies pour apprendre, communiquer et développer leurs compétences. Savoir utiliser correctement son clavier est une étape importante pour progresser en informatique."
];

// Éléments HTML
const textDisplay = document.getElementById("text-to-type");
const input = document.getElementById("typing-input");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const accuracyDisplay = document.getElementById("accuracy");
const restartButton = document.getElementById("restart");

// Configuration
const TEST_DURATION = 60;

let currentText = "";
let timeLeft = TEST_DURATION;
let started = false;
let finished = false;
let interval = null;

/* =====================================
   CHOISIR UN TEXTE
===================================== */

function choosePassage() {
  const index = Math.floor(Math.random() * passages.length);
  return passages[index];
}

/* =====================================
   INITIALISER LE TEST
===================================== */

function startTest() {
  clearInterval(interval);

  currentText = choosePassage();

  timeLeft = TEST_DURATION;
  started = false;
  finished = false;

  input.value = "";
  input.disabled = false;
  input.maxLength = currentText.length;

  textDisplay.textContent = currentText;

  timerDisplay.textContent = `${TEST_DURATION} secondes`;
  scoreDisplay.textContent = "0 MPM";
  accuracyDisplay.textContent = "Précision : 100%";

  restartButton.textContent = "Recommencer";

  input.focus();
}

/* =====================================
   CALCULER LES STATISTIQUES
===================================== */

function updateStats() {
  const typed = input.value;

  let correct = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === currentText[i]) {
      correct++;
    }
  }

  // Temps réellement écoulé
  const elapsed = TEST_DURATION - timeLeft;

  // Éviter une division par zéro
  const minutes = Math.max(elapsed, 1) / 60;

  // Un mot standard correspond à 5 caractères
  const wpm = Math.round((correct / 5) / minutes);

  // Calcul de la précision
  const accuracy = typed.length > 0
    ? Math.round((correct / typed.length) * 100)
    : 100;

  scoreDisplay.textContent = `${wpm} MPM`;
  accuracyDisplay.textContent = `Précision : ${accuracy}%`;

  return {
    wpm,
    accuracy,
    correct,
    total: typed.length
  };
}

/* =====================================
   TERMINER LE TEST
===================================== */

function finishTest() {
  clearInterval(interval);

  finished = true;
  input.disabled = true;

  const results = updateStats();

  timerDisplay.textContent = "Terminé !";

  restartButton.textContent = "Faire un nouveau test";

  // Message de résultat
  const resultMessage = document.createElement("p");

  resultMessage.className = "test-result";
  resultMessage.textContent =
    `Résultat : ${results.wpm} MPM avec ${results.accuracy}% de précision.`;

  const oldMessage = document.querySelector(".test-result");

  if (oldMessage) {
    oldMessage.remove();
  }

  input.insertAdjacentElement("afterend", resultMessage);
}

/* =====================================
   DÉMARRER LE CHRONOMÈTRE
===================================== */

function startTimer() {
  if (started || finished) return;

  started = true;

  interval = setInterval(() => {
    timeLeft--;

    timerDisplay.textContent = `${timeLeft} secondes`;

    updateStats();

    if (timeLeft <= 0) {
      finishTest();
    }
  }, 1000);
}

/* =====================================
   SURVEILLER LA FRAPPE
===================================== */

input.addEventListener("input", () => {
  if (finished) return;

  if (!started && input.value.length > 0) {
    startTimer();
  }

  updateStats();

  // Arrêter si le texte est entièrement saisi
  if (input.value === currentText) {
    finishTest();
  }
});

/* =====================================
   BOUTON RECOMMENCER
===================================== */

restartButton.addEventListener("click", () => {
  const oldMessage = document.querySelector(".test-result");

  if (oldMessage) {
    oldMessage.remove();
  }

  startTest();
});

/* =====================================
   INITIALISATION
===================================== */

startTest();
