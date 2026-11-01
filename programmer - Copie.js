
const languageSelect = document.getElementById("language");
const exerciseList = document.getElementById("exercise-list");
const codeInput = document.getElementById("code-input");

const courses = {
  python: {
    name: "Python",
    symbols: ["(", ")", "[", "]", "{", "}", ":", "=", "_", "'", '"'],
    exercises: [
      {
        title: "Afficher un message",
        level: "Débutant",
        explanation: "La fonction print() permet d'afficher du texte ou une valeur dans la console Python.",
        symbol: "Les parenthèses () contiennent le message. Les guillemets indiquent qu'il s'agit d'un texte.",
        code: 'print("Bonjour le monde")'
      },
      {
        title: "Créer une variable",
        level: "Débutant",
        explanation: "Une variable permet de stocker une information. En Python, on utilise le signe égal pour lui attribuer une valeur.",
        symbol: "Le symbole = sert à affecter une valeur. Les guillemets entourent une chaîne de caractères.",
        code: 'nom = "Isaac"\nprint(nom)'
      },
      {
        title: "Les conditions",
        level: "Débutant",
        explanation: "Une condition if permet d'exécuter du code seulement lorsqu'une condition est vraie.",
        symbol: "Les deux-points : annoncent un bloc de code. L'indentation est obligatoire en Python.",
        code: 'age = 20\nif age >= 18:\n    print("Majeur")'
      },
      {
        title: "Les boucles",
        level: "Intermédiaire",
        explanation: "Une boucle for permet de répéter une instruction plusieurs fois.",
        symbol: "Les parenthèses de range() définissent le nombre de répétitions. Le deux-points introduit le bloc.",
        code: 'for i in range(5):\n    print(i)'
      },
      {
        title: "Créer une fonction",
        level: "Intermédiaire",
        explanation: "Une fonction regroupe des instructions réutilisables. Le mot-clé def permet de la déclarer.",
        symbol: "Les parenthèses accueillent les paramètres. Le deux-points commence le bloc de la fonction.",
        code: 'def saluer(nom):\n    print("Bonjour", nom)\n\nsaluer("Isaac")'
      }
    ]
  },

  javascript: {
    name: "JavaScript",
    symbols: ["(", ")", "{", "}", "[", "]", ";", "=", "=>", "."],
    exercises: [
      {
        title: "Afficher un message",
        level: "Débutant",
        explanation: "console.log() permet d'afficher une information dans la console du navigateur.",
        symbol: "Les parenthèses contiennent la valeur et le point-virgule termine l'instruction.",
        code: 'console.log("Bonjour le monde");'
      },
      {
        title: "Créer une variable",
        level: "Débutant",
        explanation: "const déclare une variable dont la référence ne sera pas réaffectée.",
        symbol: "Le signe = attribue une valeur. Les guillemets entourent le texte.",
        code: 'const nom = "Isaac";\nconsole.log(nom);'
      },
      {
        title: "Les conditions",
        level: "Débutant",
        explanation: "if permet d'exécuter des instructions lorsqu'une condition est vraie.",
        symbol: "Les accolades délimitent le bloc d'instructions.",
        code: 'const age = 20;\nif (age >= 18) {\n  console.log("Majeur");\n}'
      },
      {
        title: "Créer une fonction",
        level: "Intermédiaire",
        explanation: "Une fonction permet de réutiliser un ensemble d'instructions.",
        symbol: "Les parenthèses accueillent les paramètres et les accolades contiennent le code.",
        code: 'function saluer(nom) {\n  console.log("Bonjour " + nom);\n}'
      }
    ]
  },

  html: {
    name: "HTML",
    symbols: ["<", ">", "/", "=", '"', "'", "!"],
    exercises: [
      {
        title: "Créer un titre",
        level: "Débutant",
        explanation: "HTML utilise des balises pour structurer une page Web. h1 représente un titre principal.",
        symbol: "Les chevrons ouvrent et ferment une balise. La balise de fermeture possède un slash /.",
        code: '<h1>Bonjour le monde</h1>'
      },
      {
        title: "Créer un paragraphe",
        level: "Débutant",
        explanation: "La balise p permet d'afficher un paragraphe.",
        symbol: "Le texte se place entre la balise ouvrante et la balise fermante.",
        code: '<p>Bienvenue sur mon site</p>'
      },
      {
        title: "Créer un lien",
        level: "Débutant",
        explanation: "La balise a permet de créer un lien vers une autre page.",
        symbol: "L'attribut href indique l'adresse de destination. Les guillemets entourent cette adresse.",
        code: '<a href="https://example.com">Visiter le site</a>'
      }
    ]
  },

  css: {
    name: "CSS",
    symbols: ["{", "}", ":", ";", ".", "#", "(", ")", "%"],
    exercises: [
      {
        title: "Sélectionner un élément",
        level: "Débutant",
        explanation: "Un sélecteur CSS permet de choisir les éléments HTML à modifier.",
        symbol: "Le point . sélectionne une classe. Les accolades contiennent les propriétés.",
        code: '.titre {\n  color: blue;\n}'
      },
      {
        title: "Modifier la taille",
        level: "Débutant",
        explanation: "font-size permet de modifier la taille du texte.",
        symbol: "Le deux-points sépare la propriété de sa valeur. Le point-virgule termine la déclaration.",
        code: 'h1 {\n  font-size: 32px;\n}'
      },
      {
        title: "Modifier le fond",
        level: "Intermédiaire",
        explanation: "background-color permet de changer la couleur de fond d'un élément.",
        symbol: "La propriété et sa valeur sont séparées par deux-points et terminées par un point-virgule.",
        code: 'body {\n  background-color: #f5f7fc;\n}'
      }
    ]
  }
};

let currentLanguage = "python";
let currentExercise = 0;
let startedAt = null;
let finished = false;

const savedProgress = JSON.parse(
  localStorage.getItem("cm-code-progress") || "{}"
);

function getCurrentCourse() {
  return courses[currentLanguage];
}

function getCurrentExercise() {
  return getCurrentCourse().exercises[currentExercise];
}

function getProgressKey() {
  return `${currentLanguage}-${currentExercise}`;
}

function renderExerciseList() {
  exerciseList.innerHTML = "";

  getCurrentCourse().exercises.forEach((exercise, index) => {
    const button = document.createElement("button");
    button.className = "exercise-item";

    if (index === currentExercise) {
      button.classList.add("active");
    }

    const title = document.createElement("strong");
    title.textContent = `${index + 1}. ${exercise.title}`;

    const status = document.createElement("span");
    status.textContent = savedProgress[`${currentLanguage}-${index}`]
      ? "✓ Terminé"
      : exercise.level;

    button.append(title, status);

    button.addEventListener("click", () => {
      currentExercise = index;
      renderCurrentExercise();
    });

    exerciseList.appendChild(button);
  });
}

function renderSymbols() {
  const container = document.getElementById("symbols");
  container.innerHTML = "";

  getCurrentCourse().symbols.forEach(symbol => {
    const item = document.createElement("span");
    item.className = "symbol";
    item.textContent = symbol;
    item.title = `Symbole : ${symbol}`;
    container.appendChild(item);
  });
}

function renderCode() {
  const target = getCurrentExercise().code;
  const typed = codeInput.value;
  const container = document.getElementById("code-target");

  container.innerHTML = "";

  for (let i = 0; i < target.length; i++) {
    const span = document.createElement("span");
    span.textContent = target[i];

    if (i < typed.length) {
      span.className = typed[i] === target[i]
        ? "correct"
        : "wrong";
    } else if (i === typed.length) {
      span.className = "current";
    }

    container.appendChild(span);
  }
}

function updateDashboard() {
  const allExercises = Object.values(courses)
    .flatMap((course, languageIndex) =>
      course.exercises.map((exercise, index) => ({
        key: `${Object.keys(courses)[languageIndex]}-${index}`
      }))
    );

  const completed = allExercises.filter(
    exercise => savedProgress[exercise.key]
  ).length;

  const scores = Object.values(savedProgress)
    .filter(value => value && typeof value.accuracy === "number")
    .map(value => value.accuracy);

  const average = scores.length
    ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
    : 0;

  document.getElementById("completed").textContent =
    `${completed} / ${allExercises.length}`;

  document.getElementById("average").textContent =
    `${average}%`;
}

function updateStats() {
  const target = getCurrentExercise().code;
  const typed = codeInput.value;

  let correct = 0;
  let errors = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === target[i]) {
      correct++;
    } else {
      errors++;
    }
  }

  const accuracy = typed.length
    ? Math.round((correct / typed.length) * 100)
    : 100;

  const elapsed = startedAt
    ? Math.max((Date.now() - startedAt) / 60000, 1 / 60)
    : 0;

  const speed = elapsed
    ? Math.round(typed.length / elapsed)
    : 0;

  document.getElementById("accuracy").textContent =
    `Précision : ${accuracy}%`;

  document.getElementById("speed").textContent =
    `Vitesse : ${speed} CPM`;

  document.getElementById("errors").textContent =
    `Erreurs : ${errors}`;

  return { accuracy, errors };
}

function renderCurrentExercise() {
  const course = getCurrentCourse();
  const exercise = getCurrentExercise();

  codeInput.value = "";
  codeInput.disabled = false;
  codeInput.maxLength = exercise.code.length;

  startedAt = null;
  finished = false;

  document.getElementById("language-label").textContent =
    course.name.toUpperCase();

  document.getElementById("code-language").textContent =
    course.name;

  document.getElementById("lesson-title").textContent =
    exercise.title;

  document.getElementById("difficulty").textContent =
    exercise.level;

  document.getElementById("level-name").textContent =
    exercise.level;

  document.getElementById("exercise-number").textContent =
    `Exercice ${currentExercise + 1}`;

  document.getElementById("explanation-text").textContent =
    exercise.explanation;

  document.getElementById("symbol-explanation").textContent =
    exercise.symbol;

  document.getElementById("feedback").textContent =
    "Prends ton temps. La précision est plus importante que la vitesse.";

  document.getElementById("next").disabled = true;

  updateStats();
  renderCode();
  renderSymbols();
  renderExerciseList();
  updateDashboard();
}

function completeExercise() {
  if (finished) return;

  finished = true;
  codeInput.disabled = true;

  const stats = updateStats();

  savedProgress[getProgressKey()] = {
    accuracy: stats.accuracy,
    completedAt: new Date().toISOString()
  };

  localStorage.setItem(
    "cm-code-progress",
    JSON.stringify(savedProgress)
  );

  document.getElementById("feedback").textContent =
    `Bravo ! Exercice terminé avec ${stats.accuracy}% de précision.`;

  const nextButton = document.getElementById("next");

  nextButton.disabled = false;
  nextButton.textContent =
    currentExercise === getCurrentCourse().exercises.length - 1
      ? "Choisir un autre langage"
      : "Exercice suivant →";

  renderExerciseList();
  updateDashboard();
}

codeInput.addEventListener("input", () => {
  if (finished) return;

  if (codeInput.value.length > 0 && !startedAt) {
    startedAt = Date.now();
  }

  const stats = updateStats();

  document.getElementById("feedback").textContent =
    stats.errors > 0
      ? "Attention : certaines touches ne correspondent pas au code attendu."
      : "Excellent, tu reproduis correctement le code.";

  renderCode();

  if (codeInput.value === getCurrentExercise().code) {
    completeExercise();
  }
});

languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  currentExercise = 0;
  renderCurrentExercise();
});

document.getElementById("reset").addEventListener("click", () => {
  codeInput.value = "";
  codeInput.disabled = false;
  codeInput.focus();

  startedAt = null;
  finished = false;

  document.getElementById("next").disabled = true;
  document.getElementById("next").textContent = "Exercice suivant →";

  renderCurrentExercise();
});

document.getElementById("next").addEventListener("click", () => {
  if (!finished) return;

  if (currentExercise < getCurrentCourse().exercises.length - 1) {
    currentExercise++;
    renderCurrentExercise();
  } else {
    alert("Bravo ! Tu as terminé les exercices de ce langage. Tu peux en choisir un autre.");
  }
});

renderCurrentExercise();
