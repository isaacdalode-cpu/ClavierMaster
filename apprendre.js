const layoutSelect = document.getElementById("layout-select");
const keyboard = document.getElementById("virtual-keyboard");
const lessonList = document.getElementById("lesson-list");
const exerciseInput = document.getElementById("exercise-input");

const layouts = {
  AZERTY: [
    "²&é\"'(-è_çà)=",
    "azertyuiop^$",
    "qsdfghjklmù",
    "<wxcvbn,;:!"
  ],
  QWERTY: [
    "`1234567890-=",
    "qwertyuiop[]",
    "asdfghjkl;'",
    "\\zxcvbnm,./"
  ]
};

const lessons = [
  {
    title: "Découverte du clavier",
    description: "Découvre les différentes zones de ton clavier et apprends à reconnaître les touches.",
    instruction: "Observe le clavier virtuel puis reproduis les premières touches.",
    azerty: "azerty",
    qwerty: "qwerty"
  },
  {
    title: "La rangée centrale",
    description: "La rangée centrale est la position de départ pour tes doigts.",
    instruction: "Garde tes doigts près de leur position de repos et reproduis la séquence.",
    azerty: "qsdf jklm qsdf jklm",
    qwerty: "asdf jkl; asdf jkl;"
  },
  {
    title: "Les autres rangées",
    description: "Apprends à atteindre les touches situées au-dessus et en dessous de la rangée centrale.",
    instruction: "Reproduis les combinaisons sans regarder tes mains.",
    azerty: "azerty wxcvbn",
    qwerty: "qwerty zxcvbn"
  },
  {
    title: "Les chiffres et symboles",
    description: "Entraîne-toi avec les chiffres et les caractères utilisés tous les jours.",
    instruction: "Reproduis les chiffres et symboles affichés.",
    azerty: "1234567890",
    qwerty: "1234567890"
  },
  {
    title: "Les majuscules et phrases",
    description: "Apprends à utiliser la touche Maj et entraîne-toi à écrire des phrases.",
    instruction: "Respecte les majuscules, les espaces et la ponctuation.",
    azerty: "Bonjour le monde !",
    qwerty: "Hello world!"
  },
  {
    title: "Évaluation finale",
    description: "Mets en pratique les compétences apprises dans les leçons précédentes.",
    instruction: "Reproduis cette phrase avec le plus de précision possible.",
    azerty: "La pratique permet de maîtriser le clavier rapidement.",
    qwerty: "Practice helps you master the keyboard."
  }
];

let currentLayout = localStorage.getItem("cm-layout") || "AZERTY";
let currentLesson = 0;

let completedLessons = JSON.parse(
  localStorage.getItem("cm-completed") || "[]"
);

let exerciseCompleted = false;

layoutSelect.value = currentLayout;

function getExercise() {
  return currentLayout === "AZERTY"
    ? lessons[currentLesson].azerty
    : lessons[currentLesson].qwerty;
}

function updateProgress() {
  const count = completedLessons.length;
  const percent = Math.round((count / lessons.length) * 100);

  document.getElementById("completed-count").textContent =
    `${count} / ${lessons.length}`;

  document.getElementById("progress-percent").textContent =
    `${percent}%`;
}

function renderLessons() {
  lessonList.innerHTML = "";

  lessons.forEach((lesson, index) => {
    const button = document.createElement("button");
    button.className = "lesson-item";

    if (index === currentLesson) {
      button.classList.add("active");
    }

    const title = document.createElement("strong");
    title.textContent = `${index + 1}. ${lesson.title}`;

    const status = document.createElement("span");
    status.textContent = completedLessons.includes(index)
      ? "✓ Leçon terminée"
      : "Leçon à apprendre";

    button.append(title, status);

    button.addEventListener("click", () => {
      currentLesson = index;
      renderCurrentLesson();
    });

    lessonList.appendChild(button);
  });

  updateProgress();
}

function renderCurrentLesson() {
  const lesson = lessons[currentLesson];

  document.getElementById("lesson-title").textContent =
    lesson.title;

  document.getElementById("lesson-number").textContent =
    `Leçon ${currentLesson + 1} / ${lessons.length}`;

  document.getElementById("lesson-description").textContent =
    lesson.description;

  document.getElementById("lesson-instruction").textContent =
    lesson.instruction;

  exerciseInput.value = "";
  exerciseInput.disabled = false;

  exerciseCompleted = false;

  document.getElementById("next-lesson").disabled = true;

  document.getElementById("accuracy").textContent =
    "Précision : 100%";

  document.getElementById("character-count").textContent =
    "0 caractère";

  document.getElementById("exercise-feedback").textContent =
    "Prends ton temps et concentre-toi sur la précision.";

  renderTarget();
  renderKeyboard();
  renderLessons();
}

function renderTarget() {
  const target = getExercise();
  const typed = exerciseInput.value;

  const container = document.getElementById("exercise-target");
  container.innerHTML = "";

  for (let i = 0; i < target.length; i++) {
    const span = document.createElement("span");

    span.textContent = target[i];

    if (i < typed.length) {
      if (typed[i] === target[i]) {
        span.className = "correct";
      } else {
        span.className = "wrong";
      }
    } else if (i === typed.length) {
      span.className = "current";
    }

    container.appendChild(span);
  }

  if (typed.length === target.length && target.length > 0) {
    completeExercise();
  }
}

function renderKeyboard() {
  keyboard.innerHTML = "";

  document.getElementById("keyboard-layout").textContent =
    currentLayout;

  const rows = layouts[currentLayout];

  rows.forEach((row, rowIndex) => {
    const rowElement = document.createElement("div");
    rowElement.className = "key-row";

    [...row].forEach((character, index) => {
      const key = document.createElement("div");

      key.className = `key finger-${getFinger(index, rowIndex)}`;
      key.textContent = character;

      rowElement.appendChild(key);
    });

    keyboard.appendChild(rowElement);
  });

  const spaceRow = document.createElement("div");
  spaceRow.className = "key-row";

  const spaceKey = document.createElement("div");
  spaceKey.className = "key space-key";
  spaceKey.textContent = "ESPACE";

  spaceRow.appendChild(spaceKey);
  keyboard.appendChild(spaceRow);

  highlightNextKey();
}

function getFinger(index, rowIndex) {
  const position = index % 10;

  if (position === 0 || position === 9) return 1;
  if (position === 1 || position === 8) return 2;
  if (position === 2 || position === 7) return 3;
  if (position === 3 || position === 4 ||
      position === 5 || position === 6) return 4;

  return 5;
}

function highlightNextKey() {
  document.querySelectorAll(".key").forEach(key => {
    key.classList.remove("active");
  });

  const target = getExercise();
  const nextCharacter = target[exerciseInput.value.length];

  if (!nextCharacter) return;

  const keys = [...document.querySelectorAll(".key")];

  const expected = nextCharacter === " "
    ? "ESPACE"
    : nextCharacter.toLowerCase();

  const nextKey = keys.find(key =>
    key.textContent.toLowerCase() === expected
  );

  if (nextKey) {
    nextKey.classList.add("active");
  }
}

function updateExercise() {
  const target = getExercise();
  const typed = exerciseInput.value;

  let correct = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === target[i]) {
      correct++;
    }
  }

  const accuracy = typed.length
    ? Math.round((correct / typed.length) * 100)
    : 100;

  document.getElementById("accuracy").textContent =
    `Précision : ${accuracy}%`;

  document.getElementById("character-count").textContent =
    `${typed.length} caractère(s)`;

  if (typed.length > target.length) {
    document.getElementById("exercise-feedback").textContent =
      "Tu as dépassé la longueur du texte. Recommence l'exercice.";
  } else if (accuracy < 100) {
    document.getElementById("exercise-feedback").textContent =
      "Certaines touches sont incorrectes. Vérifie ta frappe.";
  } else {
    document.getElementById("exercise-feedback").textContent =
      "Excellent ! Continue avec précision.";
  }

  renderTarget();
  highlightNextKey();
}

function completeExercise() {
  if (exerciseCompleted) return;

  exerciseCompleted = true;
  exerciseInput.disabled = true;

  if (!completedLessons.includes(currentLesson)) {
    completedLessons.push(currentLesson);

    localStorage.setItem(
      "cm-completed",
      JSON.stringify(completedLessons)
    );
  }

  document.getElementById("exercise-feedback").textContent =
    "Bravo ! Tu as terminé cette leçon avec 100% de précision.";

  document.getElementById("next-lesson").disabled =
    currentLesson === lessons.length - 1;

  renderLessons();
}

exerciseInput.addEventListener("input", updateExercise);

document.getElementById("reset-exercise")
  .addEventListener("click", () => {
    exerciseInput.value = "";
    exerciseInput.disabled = false;
    exerciseCompleted = false;

    document.getElementById("next-lesson").disabled = true;

    updateExercise();
    exerciseInput.focus();
  });

document.getElementById("next-lesson")
  .addEventListener("click", () => {
    if (currentLesson < lessons.length - 1) {
      currentLesson++;
      renderCurrentLesson();
    }
  });

layoutSelect.addEventListener("change", () => {
  currentLayout = layoutSelect.value;

  localStorage.setItem("cm-layout", currentLayout);

  renderCurrentLesson();
});

renderCurrentLesson();