
const courses = {
  "Bases": {
    icon: "🧠",
    description: "Comprendre la logique et les fondements de la programmation.",
    lessons: [
      {
        title: "Qu'est-ce que programmer ?",
        explanation: "Programmer consiste à donner des instructions à un ordinateur pour réaliser une tâche. Un programme est une suite d'instructions écrites dans un langage compréhensible par une machine, directement ou après traduction.",
        code: "Entrée → Traitement → Résultat",
        codeExplanation: "Un programme reçoit éventuellement des données, les traite puis produit un résultat.",
        keys: ["Entrée", "Flèches", "Retour", "Espace"],
        typing: "Entrée → Traitement → Résultat",
        question: "À quoi sert un programme informatique ?",
        options: ["À donner des instructions à un ordinateur", "À remplacer le clavier", "À éteindre Internet"],
        answer: 0
      },
      {
        title: "Les algorithmes",
        explanation: "Un algorithme est une suite d'étapes organisées pour résoudre un problème. Avant d'écrire du code, on peut décrire la solution en langage courant ou en pseudo-code.",
        code: "1. Lire un nombre\n2. Ajouter 10\n3. Afficher le résultat",
        codeExplanation: "Cet algorithme décrit trois étapes simples.",
        keys: ["Chiffres", "Entrée", "Retour"],
        typing: "Lire un nombre",
        question: "Qu'est-ce qu'un algorithme ?",
        options: ["Une suite d'étapes pour résoudre un problème", "Un type de clavier", "Un ordinateur"],
        answer: 0
      },
      {
        title: "Les variables",
        explanation: "Une variable est un espace nommé qui permet de stocker une valeur. Cette valeur peut être un nombre, du texte ou une autre donnée.",
        code: "age = 20\nnom = \"Alex\"",
        codeExplanation: "Ici, age contient un nombre et nom contient du texte. Le signe égal sert à affecter une valeur.",
        keys: ["=", "\"", "_"],
        typing: "age = 20",
        question: "À quoi sert une variable ?",
        options: ["À stocker une valeur", "À nettoyer l'écran", "À connecter le clavier"],
        answer: 0
      },
      {
        title: "Les conditions",
        explanation: "Une condition permet à un programme de prendre une décision. Le programme exécute une instruction si une expression est vraie, et peut choisir une autre action sinon.",
        code: "SI age >= 18\n    AFFICHER \"Adulte\"\nSINON\n    AFFICHER \"Mineur\"",
        codeExplanation: "Ce pseudo-code choisit un message en fonction de l'âge.",
        keys: [">", "=", ":", "\""],
        typing: "age >= 18",
        question: "À quoi sert une condition ?",
        options: ["À prendre une décision", "À créer une image", "À augmenter la mémoire"],
        answer: 0
      },
      {
        title: "Les boucles",
        explanation: "Une boucle permet de répéter des instructions. On peut répéter un nombre déterminé de fois ou tant qu'une condition reste vraie.",
        code: "POUR chaque nombre de 1 à 5\n    AFFICHER nombre",
        codeExplanation: "L'instruction AFFICHER est répétée pour les nombres de 1 à 5.",
        keys: ["1", "5", ":", "Entrée"],
        typing: "AFFICHER nombre",
        question: "À quoi sert une boucle ?",
        options: ["À répéter des instructions", "À supprimer les variables", "À changer la langue du clavier"],
        answer: 0
      },
      {
        title: "Les fonctions",
        explanation: "Une fonction est un bloc d'instructions réutilisable. Elle peut recevoir des paramètres et éventuellement renvoyer un résultat.",
        code: "fonction saluer(nom)\n    AFFICHER \"Bonjour \" + nom",
        codeExplanation: "La fonction saluer reçoit un paramètre nommé nom.",
        keys: ["(", ")", "+", "_"],
        typing: "saluer(nom)",
        question: "Quel est l'intérêt d'une fonction ?",
        options: ["Réutiliser un bloc de code", "Remplacer le processeur", "Supprimer tous les fichiers"],
        answer: 0
      },
      {
        title: "Les erreurs et le débogage",
        explanation: "Une erreur est un problème dans le programme. Le débogage consiste à rechercher, comprendre et corriger ces problèmes. Il faut apprendre à lire les messages d'erreur.",
        code: "print(\"Bonjour\")",
        codeExplanation: "Une parenthèse manquante ou un guillemet oublié peut provoquer une erreur de syntaxe.",
        keys: ["(", ")", "\"", "Retour"],
        typing: "print(\"Bonjour\")",
        question: "Que signifie déboguer ?",
        options: ["Chercher et corriger les erreurs", "Créer un clavier", "Installer un écran"],
        answer: 0
      }
    ]
  },

  "Python": {
    icon: "🐍",
    description: "Apprends Python depuis les premières instructions.",
    lessons: [
      {
        title: "Découvrir Python",
        explanation: "Python est un langage de programmation polyvalent, utilisé notamment pour l'automatisation, les applications, la science des données et l'intelligence artificielle.",
        code: "print(\"Bonjour le monde !\")",
        codeExplanation: "print() affiche un résultat à l'écran. Le texte est placé entre guillemets.",
        keys: ["(", ")", "\"", "!"],
        typing: "print(\"Bonjour le monde !\")",
        question: "Quelle instruction affiche un texte en Python ?",
        options: ["print()", "showText()", "displayCode()"],
        answer: 0
      },
      {
        title: "Les variables",
        explanation: "En Python, on crée une variable en lui donnant un nom et une valeur. Python détermine automatiquement le type de la valeur.",
        code: "nom = \"Amina\"\nage = 19",
        codeExplanation: "nom contient une chaîne de caractères et age contient un entier.",
        keys: ["=", "\"", "_"],
        typing: "age = 19",
        question: "Quel symbole sert à affecter une valeur ?",
        options: ["=", "==", "!="],
        answer: 0
      },
      {
        title: "Les types de données",
        explanation: "Les types de base comprennent int pour les entiers, float pour les nombres décimaux, str pour le texte et bool pour les valeurs True ou False.",
        code: "age = 19\nprix = 5.5\nnom = \"Paul\"\nactif = True",
        codeExplanation: "Chaque variable contient une valeur d'un type différent.",
        keys: ["=", ".", "\""],
        typing: "actif = True",
        question: "Quel type représente du texte en Python ?",
        options: ["str", "int", "bool"],
        answer: 0
      },
      {
        title: "Les conditions if et else",
        explanation: "if exécute un bloc si la condition est vraie. else permet de définir le bloc alternatif. En Python, les deux-points et l'indentation sont essentiels.",
        code: "age = 20\nif age >= 18:\n    print(\"Majeur\")\nelse:\n    print(\"Mineur\")",
        codeExplanation: "Le bloc après if est indenté. Le symbole : termine la ligne de condition.",
        keys: [":", ">", "=", "(", ")"],
        typing: "if age >= 18:",
        question: "Quel symbole termine la ligne if en Python ?",
        options: [":", ";", ","],
        answer: 0
      },
      {
        title: "Les boucles for",
        explanation: "Une boucle for parcourt les éléments d'une séquence. La fonction range() permet notamment de générer une suite de nombres.",
        code: "for i in range(5):\n    print(i)",
        codeExplanation: "Ce programme affiche les nombres de 0 à 4.",
        keys: ["_", "(", ")", ":"],
        typing: "for i in range(5):",
        question: "Quelle fonction est utilisée ici pour générer une suite de nombres ?",
        options: ["range()", "print()", "input()"],
        answer: 0
      },
      {
        title: "Les fonctions",
        explanation: "On définit une fonction avec def. Elle peut recevoir des paramètres et renvoyer une valeur avec return.",
        code: "def addition(a, b):\n    return a + b",
        codeExplanation: "Cette fonction reçoit deux paramètres et renvoie leur somme.",
        keys: ["_", "(", ")", ":"],
        typing: "def addition(a, b):",
        question: "Quel mot-clé définit une fonction en Python ?",
        options: ["def", "function", "func"],
        answer: 0
      }
    ]
  },

  "JavaScript": {
    icon: "🟨",
    description: "Apprends à créer des interactions et des applications web.",
    lessons: [
      {
        title: "Découvrir JavaScript",
        explanation: "JavaScript est un langage qui permet notamment de rendre les pages web interactives. Il peut aussi être utilisé côté serveur.",
        code: "console.log(\"Bonjour !\");",
        codeExplanation: "console.log() écrit une information dans la console.",
        keys: [".", "(", ")", "\"", ";"],
        typing: "console.log(\"Bonjour !\");",
        question: "Quel est le rôle principal de JavaScript dans une page web ?",
        options: ["Ajouter des interactions", "Remplacer HTML dans tous les cas", "Créer le clavier physique"],
        answer: 0
      },
      {
        title: "Les variables",
        explanation: "const déclare une liaison qui ne peut pas être réaffectée. let déclare une variable qui peut être réaffectée.",
        code: "const nom = \"Sara\";\nlet age = 20;",
        codeExplanation: "Les instructions se terminent souvent par un point-virgule, même si JavaScript peut parfois l'insérer automatiquement.",
        keys: ["=", "\"", ";"],
        typing: "let age = 20;",
        question: "Quel mot-clé permet de déclarer une variable réaffectable ?",
        options: ["let", "const", "fixed"],
        answer: 0
      },
      {
        title: "Les conditions",
        explanation: "if et else permettent de choisir quelles instructions exécuter selon une condition.",
        code: "if (age >= 18) {\n  console.log(\"Majeur\");\n} else {\n  console.log(\"Mineur\");\n}",
        codeExplanation: "Les accolades délimitent les blocs d'instructions.",
        keys: ["(", ")", "{", "}", ">"],
        typing: "if (age >= 18) {",
        question: "Quel symbole délimite le bloc après if ?",
        options: ["{ }", "[ ]", "< >"],
        answer: 0
      },
      {
        title: "Les boucles",
        explanation: "Une boucle for permet de répéter des instructions. Elle comprend généralement une initialisation, une condition et une mise à jour.",
        code: "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
        codeExplanation: "Cette boucle affiche les nombres de 0 à 4.",
        keys: ["(", ")", ";", "<", "++"],
        typing: "for (let i = 0; i < 5; i++) {",
        question: "Quel mot-clé commence cette boucle ?",
        options: ["for", "repeat", "loop"],
        answer: 0
      },
      {
        title: "Les fonctions",
        explanation: "Une fonction regroupe des instructions réutilisables. Elle peut recevoir des paramètres et retourner une valeur.",
        code: "function saluer(nom) {\n  return \"Bonjour \" + nom;\n}",
        codeExplanation: "function définit la fonction et return renvoie son résultat.",
        keys: ["(", ")", "{", "}", "\""],
        typing: "function saluer(nom) {",
        question: "Quel mot-clé définit une fonction classique ?",
        options: ["function", "def", "method"],
        answer: 0
      }
    ]
  },

  "Java": {
    icon: "☕",
    description: "Découvre les bases de Java et la programmation orientée objet.",
    lessons: [
      {
        title: "Découvrir Java",
        explanation: "Java est un langage généraliste fortement typé, souvent utilisé pour les applications d'entreprise et de nombreux logiciels.",
        code: "System.out.println(\"Bonjour\");",
        codeExplanation: "Cette instruction affiche un texte dans la console.",
        keys: [".", "(", ")", "\"", ";"],
        typing: "System.out.println(\"Bonjour\");",
        question: "Quel symbole termine généralement une instruction Java ?",
        options: [";", ":", ","],
        answer: 0
      },
      {
        title: "Les variables et les types",
        explanation: "Java est un langage statiquement typé. On indique le type d'une variable lors de sa déclaration.",
        code: "int age = 20;\nString nom = \"Sara\";",
        codeExplanation: "int représente un entier et String représente du texte.",
        keys: ["=", ";", "\""],
        typing: "int age = 20;",
        question: "Quel type représente un entier en Java ?",
        options: ["int", "String", "boolean"],
        answer: 0
      },
      {
        title: "Les conditions",
        explanation: "if et else permettent d'exécuter des blocs différents selon le résultat d'une expression booléenne.",
        code: "if (age >= 18) {\n    System.out.println(\"Majeur\");\n}",
        codeExplanation: "Les accolades entourent le bloc exécuté si la condition est vraie.",
        keys: ["(", ")", "{", "}", ">"],
        typing: "if (age >= 18) {",
        question: "Comment délimite-t-on un bloc en Java ?",
        options: ["Avec { }", "Avec [ ]", "Avec < >"],
        answer: 0
      },
      {
        title: "Les boucles",
        explanation: "Une boucle for répète des instructions selon une initialisation, une condition et une mise à jour.",
        code: "for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}",
        codeExplanation: "Cette boucle affiche les nombres de 0 à 4.",
        keys: ["(", ")", ";", "<", "++"],
        typing: "for (int i = 0; i < 5; i++) {",
        question: "Quel mot-clé permet de créer cette boucle ?",
        options: ["for", "repeat", "whiledo"],
        answer: 0
      },
      {
        title: "Les méthodes",
        explanation: "En Java, une méthode est un bloc de code associé à une classe ou à un objet. Elle peut recevoir des paramètres et renvoyer une valeur.",
        code: "static int addition(int a, int b) {\n    return a + b;\n}",
        codeExplanation: "Cette méthode renvoie un entier correspondant à la somme de deux paramètres.",
        keys: ["(", ")", "{", "}", ";"],
        typing: "return a + b;",
        question: "Quel mot-clé renvoie une valeur ?",
        options: ["return", "print", "send"],
        answer: 0
      }
    ]
  },

  "HTML": {
    icon: "🌐",
    description: "Apprends à structurer les pages web.",
    lessons: [
      {
        title: "Découvrir HTML",
        explanation: "HTML est un langage de balisage qui sert à structurer le contenu d'une page web : titres, paragraphes, images, liens et formulaires.",
        code: "<h1>Bonjour le monde</h1>",
        codeExplanation: "La balise h1 représente un titre principal.",
        keys: ["<", ">", "/"],
        typing: "<h1>Bonjour</h1>",
        question: "À quoi sert HTML ?",
        options: ["Structurer le contenu d'une page", "Gérer une base de données", "Remplacer le système d'exploitation"],
        answer: 0
      },
      {
        title: "Les paragraphes",
        explanation: "La balise p sert à représenter un paragraphe. Une balise ouvrante et une balise fermante encadrent généralement son contenu.",
        code: "<p>Mon premier paragraphe.</p>",
        codeExplanation: "La balise fermante contient une barre oblique.",
        keys: ["<", ">", "/"],
        typing: "<p>Bonjour</p>",
        question: "Quelle balise représente un paragraphe ?",
        options: ["p", "h1", "img"],
        answer: 0
      },
      {
        title: "Les liens",
        explanation: "La balise a crée un lien. L'attribut href indique la destination du lien.",
        code: "<a href=\"https://example.com\">Visiter</a>",
        codeExplanation: "Le texte entre les balises devient cliquable.",
        keys: ["<", ">", "/", "=", "\""],
        typing: "<a href=\"https://example.com\">",
        question: "Quel attribut indique la destination d'un lien ?",
        options: ["href", "src", "class"],
        answer: 0
      },
      {
        title: "Les images",
        explanation: "La balise img permet d'intégrer une image. L'attribut src indique son emplacement et alt fournit un texte alternatif.",
        code: "<img src=\"photo.jpg\" alt=\"Une photo\">",
        codeExplanation: "img est une balise vide : elle ne nécessite pas de balise fermante.",
        keys: ["<", ">", "=", "\""],
        typing: "<img src=\"photo.jpg\">",
        question: "Quel attribut indique le fichier image ?",
        options: ["src", "href", "title"],
        answer: 0
      }
    ]
  },

  "CSS": {
    icon: "🎨",
    description: "Apprends à mettre en forme les sites web.",
    lessons: [
      {
        title: "Découvrir CSS",
        explanation: "CSS permet de définir l'apparence des pages HTML : couleurs, tailles, espacements, alignements et mise en page.",
        code: "p {\n  color: blue;\n}",
        codeExplanation: "p est le sélecteur. color est une propriété et blue sa valeur.",
        keys: ["{", "}", ":", ";"],
        typing: "color: blue;",
        question: "À quoi sert CSS ?",
        options: ["À mettre en forme une page", "À stocker les données", "À remplacer le navigateur"],
        answer: 0
      },
      {
        title: "Les sélecteurs",
        explanation: "Un sélecteur permet de cibler les éléments HTML auxquels appliquer des règles CSS. Le point cible une classe et le dièse cible un identifiant.",
        code: ".titre {\n  color: red;\n}",
        codeExplanation: "Le point devant titre signifie qu'on cible une classe CSS.",
        keys: [".", "{", "}", ":"],
        typing: ".titre {",
        question: "Quel symbole cible une classe CSS ?",
        options: [".", "#", "@"],
        answer: 0
      },
      {
        title: "Les propriétés",
        explanation: "Une propriété définit ce que l'on veut modifier : color pour la couleur du texte, font-size pour la taille, background-color pour la couleur de fond.",
        code: "p {\n  font-size: 18px;\n  color: black;\n}",
        codeExplanation: "Chaque déclaration associe une propriété à une valeur.",
        keys: ["-", ":", ";", "{", "}"],
        typing: "font-size: 18px;",
        question: "Quelle propriété modifie la taille du texte ?",
        options: ["font-size", "background", "border"],
        answer: 0
      },
      {
        title: "La mise en page",
        explanation: "Flexbox permet d'organiser les éléments dans une direction. display: flex active ce mode de mise en page sur un conteneur.",
        code: ".conteneur {\n  display: flex;\n  gap: 10px;\n}",
        codeExplanation: "gap définit l'espace entre les éléments.",
        keys: [".", "{", "}", ":", ";"],
        typing: "display: flex;",
        question: "Quelle déclaration active Flexbox ?",
        options: ["display: flex;", "position: color;", "font: flex;"],
        answer: 0
      }
    ]
  },

  "C": {
    icon: "🔧",
    description: "Découvre les fondamentaux du langage C.",
    lessons: [
      {
        title: "Découvrir le langage C",
        explanation: "C est un langage de programmation généraliste souvent utilisé pour les systèmes, les logiciels performants et la programmation proche du matériel.",
        code: "#include <stdio.h>\nint main(void) {\n    printf(\"Bonjour\");\n    return 0;\n}",
        codeExplanation: "stdio.h fournit notamment la fonction printf. main est le point d'entrée du programme.",
        keys: ["#", "<", ">", "(", ")", "{", "}", ";"],
        typing: "printf(\"Bonjour\");",
        question: "Quelle fonction affiche du texte dans cet exemple ?",
        options: ["printf()", "print()", "echo()"],
        answer: 0
      },
      {
        title: "Les variables",
        explanation: "En C, une variable doit être déclarée avec un type. int représente un entier et char un caractère.",
        code: "int age = 20;\nchar lettre = 'A';",
        codeExplanation: "Le point-virgule termine chaque déclaration.",
        keys: ["=", ";", "'"],
        typing: "int age = 20;",
        question: "Quel type représente un entier en C ?",
        options: ["int", "char", "void"],
        answer: 0
      },
      {
        title: "Les conditions",
        explanation: "if permet de tester une condition. Des accolades délimitent le bloc d'instructions.",
        code: "if (age >= 18) {\n    printf(\"Majeur\");\n}",
        codeExplanation: "Le bloc est exécuté lorsque la condition est vraie.",
        keys: ["(", ")", "{", "}", ">"],
        typing: "if (age >= 18) {",
        question: "Quel mot-clé permet de tester une condition ?",
        options: ["if", "for", "int"],
        answer: 0
      },
      {
        title: "Les boucles",
        explanation: "La boucle for permet de répéter des instructions. Elle utilise une initialisation, une condition et une mise à jour.",
        code: "for (int i = 0; i < 5; i++) {\n    printf(\"%d\", i);\n}",
        codeExplanation: "Cette boucle parcourt les valeurs de 0 à 4.",
        keys: ["(", ")", ";", "<", "++"],
        typing: "for (int i = 0; i < 5; i++) {",
        question: "Quel mot-clé démarre cette boucle ?",
        options: ["for", "repeat", "loop"],
        answer: 0
      }
    ]
  },

  "C++": {
    icon: "⚙️",
    description: "Apprends les bases de C++ et la programmation orientée objet.",
    lessons: [
      {
        title: "Découvrir C++",
        explanation: "C++ est un langage polyvalent utilisé notamment dans les logiciels performants, les jeux vidéo et les systèmes.",
        code: "#include <iostream>\nint main() {\n    std::cout << \"Bonjour\";\n    return 0;\n}",
        codeExplanation: "iostream permet notamment d'utiliser std::cout pour afficher du texte.",
        keys: ["#", "<", ">", ":", "(", ")", "{", "}", ";"],
        typing: "std::cout << \"Bonjour\";",
        question: "Quel objet permet d'afficher du texte avec cet exemple ?",
        options: ["std::cout", "std::cin", "std::main"],
        answer: 0
      },
      {
        title: "Les variables",
        explanation: "C++ utilise des types comme int, double, char et bool pour déclarer les variables.",
        code: "int age = 20;\ndouble prix = 5.5;",
        codeExplanation: "int représente un entier et double un nombre à virgule flottante.",
        keys: ["=", ";", "."],
        typing: "double prix = 5.5;",
        question: "Quel type est utilisé pour un nombre décimal dans cet exemple ?",
        options: ["double", "int", "char"],
        answer: 0
      },
      {
        title: "Les conditions",
        explanation: "if et else permettent d'exécuter différents blocs selon une condition.",
        code: "if (age >= 18) {\n    std::cout << \"Majeur\";\n}",
        codeExplanation: "Les accolades délimitent le bloc conditionnel.",
        keys: ["(", ")", "{", "}", ">"],
        typing: "if (age >= 18) {",
        question: "Quel symbole encadre le bloc ?",
        options: ["{ }", "( )", "[ ]"],
        answer: 0
      },
      {
        title: "Les boucles",
        explanation: "La boucle for permet de répéter des instructions un nombre déterminé de fois ou jusqu'à ce qu'une condition ne soit plus vraie.",
        code: "for (int i = 0; i < 5; i++) {\n    std::cout << i;\n}",
        codeExplanation: "Cette boucle affiche les nombres de 0 à 4.",
        keys: ["(", ")", ";", "<", "++"],
        typing: "for (int i = 0; i < 5; i++) {",
        question: "Quel mot-clé commence cette boucle ?",
        options: ["for", "while", "class"],
        answer: 0
      }
    ]
  },

  "SQL": {
    icon: "🗄️",
    description: "Apprends à interroger et organiser des bases de données.",
    lessons: [
      {
        title: "Découvrir SQL",
        explanation: "SQL est un langage utilisé pour interroger et manipuler des bases de données relationnelles.",
        code: "SELECT * FROM utilisateurs;",
        codeExplanation: "Cette requête sélectionne toutes les colonnes de la table utilisateurs.",
        keys: ["*", ";", "_"],
        typing: "SELECT * FROM utilisateurs;",
        question: "À quoi sert SQL ?",
        options: ["À interroger des bases de données", "À dessiner des images", "À modifier le clavier"],
        answer: 0
      },
      {
        title: "Sélectionner des données",
        explanation: "SELECT permet de choisir les colonnes à récupérer dans une table. FROM indique la table concernée.",
        code: "SELECT nom, age\nFROM utilisateurs;",
        codeExplanation: "Cette requête récupère les colonnes nom et age.",
        keys: [",", ";", "_"],
        typing: "SELECT nom, age",
        question: "Quel mot-clé choisit les colonnes ?",
        options: ["SELECT", "DELETE", "UPDATE"],
        answer: 0
      },
      {
        title: "Filtrer avec WHERE",
        explanation: "WHERE permet de limiter les résultats aux lignes qui respectent une condition.",
        code: "SELECT *\nFROM utilisateurs\nWHERE age >= 18;",
        codeExplanation: "Cette requête récupère les utilisateurs dont l'âge est supérieur ou égal à 18.",
        keys: ["*", ";", "=", ">"],
        typing: "WHERE age >= 18;",
        question: "Quel mot-clé sert à filtrer les lignes ?",
        options: ["WHERE", "FROM", "TABLE"],
        answer: 0
      },
      {
        title: "Ajouter des données",
        explanation: "INSERT INTO permet d'ajouter une nouvelle ligne dans une table. VALUES indique les valeurs à insérer.",
        code: "INSERT INTO utilisateurs (nom)\nVALUES ('Amina');",
        codeExplanation: "Cette requête ajoute une ligne avec le nom Amina.",
        keys: ["(", ")", ",", "'", ";"],
        typing: "VALUES ('Amina');",
        question: "Quel mot-clé ajoute une nouvelle ligne ?",
        options: ["INSERT INTO", "SELECT", "DROP"],
        answer: 0
      }
    ]
  }
};

const STORAGE_KEY = "claviermaster-cours-progress-v1";

let progress = {};

try {
  progress = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
} catch (error) {
  progress = {};
}

let currentCourse = null;
let currentLesson = 0;
let quizAnswered = false;

const $ = id => document.getElementById(id);

// Dispositions courantes AZERTY français et QWERTY américain.
// Les légendes peuvent varier selon le modèle physique et les paramètres du système.
const keyboardLayouts = {
  AZERTY: [
    [
      { base: "²" }, { base: "&", shift: "1" }, { base: "é", shift: "2", altgr: "~" },
      { base: '"', shift: "3", altgr: "#" }, { base: "'", shift: "4", altgr: "{" },
      { base: "(", shift: "5", altgr: "[" }, { base: "-", shift: "6", altgr: "|" },
      { base: "è", shift: "7", altgr: "`" }, { base: "_", shift: "8", altgr: "\\" },
      { base: "ç", shift: "9", altgr: "^" }, { base: "à", shift: "0", altgr: "@" },
      { base: ")", shift: "°", altgr: "]" }, { base: "=", shift: "+", altgr: "}" },
      { special: "Retour", width: "wide" }
    ],
    [
      { special: "Tab" }, { base: "a" }, { base: "z" }, { base: "e" },
      { base: "r" }, { base: "t" }, { base: "y" }, { base: "u" },
      { base: "i" }, { base: "o" }, { base: "p" }, { base: "^", shift: "¨" },
      { base: "$", shift: "£" }
    ],
    [
      { special: "Caps" }, { base: "q" }, { base: "s" }, { base: "d" },
      { base: "f" }, { base: "g" }, { base: "h" }, { base: "j" },
      { base: "k" }, { base: "l" }, { base: "m" }, { base: "ù", shift: "%" },
      { base: "*", shift: "µ" }, { special: "Entrée", width: "wide" }
    ],
    [
      { special: "Shift", width: "wide" }, { base: "<", shift: ">" },
      { base: "w" }, { base: "x" }, { base: "c" }, { base: "v" },
      { base: "b" }, { base: "n" }, { base: ",", shift: "?" },
      { base: ";", shift: "." }, { base: ":", shift: "/" },
      { base: "!", shift: "§" }, { special: "Shift", width: "wide" }
    ],
    [
      { special: "Ctrl" }, { special: "Alt" }, { special: "AltGr" },
      { special: "Espace", width: "space" }, { special: "AltGr" },
      { special: "Flèches" }, { special: "Ctrl" }
    ]
  ],

  QWERTY: [
    [
      { base: "`", shift: "~" }, { base: "1", shift: "!" }, { base: "2", shift: "@" },
      { base: "3", shift: "#" }, { base: "4", shift: "$" }, { base: "5", shift: "%" },
      { base: "6", shift: "^" }, { base: "7", shift: "&" }, { base: "8", shift: "*" },
      { base: "9", shift: "(" }, { base: "0", shift: ")" }, { base: "-", shift: "_" },
      { base: "=", shift: "+" }, { special: "Retour", width: "wide" }
    ],
    [
      { special: "Tab" }, { base: "q" }, { base: "w" }, { base: "e" },
      { base: "r" }, { base: "t" }, { base: "y" }, { base: "u" },
      { base: "i" }, { base: "o" }, { base: "p" },
      { base: "[", shift: "{" }, { base: "]", shift: "}" }, { base: "\\", shift: "|" }
    ],
    [
      { special: "Caps" }, { base: "a" }, { base: "s" }, { base: "d" },
      { base: "f" }, { base: "g" }, { base: "h" }, { base: "j" },
      { base: "k" }, { base: "l" }, { base: ";", shift: ":" },
      { base: "'", shift: '"' }, { special: "Entrée", width: "wide" }
    ],
    [
      { special: "Shift", width: "wide" }, { base: "z" }, { base: "x" },
      { base: "c" }, { base: "v" }, { base: "b" }, { base: "n" },
      { base: "m" }, { base: ",", shift: "<" }, { base: ".", shift: ">" },
      { base: "/", shift: "?" }, { special: "Shift", width: "wide" }
    ],
    [
      { special: "Ctrl" }, { special: "Alt" }, { special: "AltGr" },
      { special: "Espace", width: "space" }, { special: "AltGr" },
      { special: "Flèches" }, { special: "Ctrl" }
    ]
  ]
};

function normalizeKey(value) {
  return String(value)
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace("retour", "backspace");
}

function renderVirtualKeyboard(lesson) {
  const layoutName = $("layout").value;
  const keyboard = $("virtual-keyboard");
  const requestedKeys = lesson.keys.map(normalizeKey);
  const rows = keyboardLayouts[layoutName] || keyboardLayouts.AZERTY;

  $("keyboard-layout-name").textContent = layoutName;
  keyboard.innerHTML = "";

  let needsShift = false;
  let needsAltGr = false;
  const combinations = [];

  rows.forEach(row => {
    const rowElement = document.createElement("div");
    rowElement.className = "keyboard-row";

    row.forEach(keyData => {
      const keyElement = document.createElement("div");
      keyElement.className = "virtual-key";

      if (keyData.width) {
        keyElement.classList.add(`key-${keyData.width}`);
      }

      if (keyData.special) {
        const specialName = normalizeKey(keyData.special);
        const isRequested = requestedKeys.includes(specialName) ||
          (keyData.special === "Retour" && requestedKeys.includes("retour"));

        keyElement.classList.add("special-key");
        keyElement.dataset.special = keyData.special;

        if (isRequested) {
          keyElement.classList.add("important-key");
        }

        keyElement.textContent = keyData.special;
      } else {
        keyElement.dataset.base = keyData.base || "";
        keyElement.dataset.shift = keyData.shift || "";
        keyElement.dataset.altgr = keyData.altgr || "";

        const labels = [
          keyData.base,
          keyData.shift,
          keyData.altgr
        ].filter(Boolean);

        const matched = labels.some(label =>
          requestedKeys.includes(normalizeKey(label))
        );

        if (matched) {
          keyElement.classList.add("important-key");
        }

        if (
          keyData.shift &&
          requestedKeys.includes(normalizeKey(keyData.shift))
        ) {
          needsShift = true;
          combinations.push(
            `${keyData.shift} : Shift + ${keyData.base}`
          );
        }

        if (
          keyData.altgr &&
          requestedKeys.includes(normalizeKey(keyData.altgr))
        ) {
          needsAltGr = true;
          combinations.push(
            `${keyData.altgr} : AltGr + ${keyData.base}`
          );
        }

        const small = document.createElement("small");
        small.textContent = [
          keyData.shift,
          keyData.altgr
        ].filter(Boolean).join(" · ");

        const main = document.createElement("span");
        main.textContent = keyData.base;

        keyElement.append(small, main);
      }

      rowElement.appendChild(keyElement);
    });

    keyboard.appendChild(rowElement);
  });

  keyboard.querySelectorAll(".special-key").forEach(keyElement => {
    const label = keyElement.textContent;

    if (label === "Shift" && needsShift) {
      keyElement.classList.add("modifier-key");
    }

    if (label === "AltGr" && needsAltGr) {
      keyElement.classList.add("modifier-key");
    }
  });

  const specialTips = [];

  if (needsShift) {
    specialTips.push("utilise la touche Shift (Maj)");
  }

  if (needsAltGr) {
    specialTips.push("utilise la touche AltGr");
  }

  const tipParts = [];

  if (combinations.length) {
    tipParts.push(combinations.join(" ; "));
  }

  if (specialTips.length) {
    tipParts.push("Astuce : " + specialTips.join(" et ") + ".");
  }

  if (!tipParts.length) {
    tipParts.push(
      "Les touches utiles pour cette leçon sont mises en évidence. Les positions peuvent varier selon le modèle physique de ton clavier."
    );
  }

  $("keyboard-tip").textContent = tipParts.join(" — ");

  // Réapplique les touches éventuellement maintenues après le rendu.
  applyActiveVirtualKeys();
}

// Touches physiques actuellement maintenues.
const activePhysicalKeys = new Set();

function installVirtualKeyboardLiveStyle() {
  if (document.getElementById("virtual-keyboard-live-style")) return;

  const style = document.createElement("style");
  style.id = "virtual-keyboard-live-style";
  style.textContent = `
    .virtual-key.pressed-key {
      transform: translateY(3px);
      border-bottom-width: 1px !important;
      background: #b7f7d2 !important;
      color: #11633b !important;
      border-color: #2eaa70 !important;
      box-shadow: 0 0 0 3px rgba(46, 170, 112, .18);
    }
  `;
  document.head.appendChild(style);
}

function normalizePhysicalKey(key) {
  const aliases = {
    " ": "espace",
    "backspace": "retour",
    "enter": "entrée",
    "shift": "shift",
    "altgraph": "altgr",
    "control": "ctrl",
    "escape": "echap",
    "arrowleft": "flèche gauche",
    "arrowright": "flèche droite",
    "arrowup": "flèche haut",
    "arrowdown": "flèche bas"
  };

  const normalized = String(key).toLowerCase();
  return aliases[normalized] || normalized;
}

function physicalKeyMatchesElement(key, element) {
  const normalizedKey = normalizePhysicalKey(key);

  if (element.dataset.special) {
    return normalizePhysicalKey(element.dataset.special) === normalizedKey;
  }

  return [
    element.dataset.base,
    element.dataset.shift,
    element.dataset.altgr
  ]
    .filter(Boolean)
    .some(label => normalizePhysicalKey(label) === normalizedKey);
}

function applyActiveVirtualKeys() {
  const keyboard = $("virtual-keyboard");
  if (!keyboard) return;

  const keys = keyboard.querySelectorAll(".virtual-key");

  keys.forEach(element => {
    element.classList.remove("pressed-key");

    for (const physicalKey of activePhysicalKeys) {
      if (physicalKeyMatchesElement(physicalKey, element)) {
        element.classList.add("pressed-key");
        break;
      }
    }
  });
}

function handlePhysicalKeyDown(event) {
  // Ne bloque pas les raccourcis clavier du navigateur ou de l'ordinateur.
  activePhysicalKeys.add(event.key);
  applyActiveVirtualKeys();
}

function handlePhysicalKeyUp(event) {
  activePhysicalKeys.delete(event.key);
  applyActiveVirtualKeys();
}

function clearPhysicalKeys() {
  activePhysicalKeys.clear();
  applyActiveVirtualKeys();
}

installVirtualKeyboardLiveStyle();

document.addEventListener("keydown", handlePhysicalKeyDown);
document.addEventListener("keyup", handlePhysicalKeyUp);
window.addEventListener("blur", clearPhysicalKeys);

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  updateProgress();
}

function updateProgress() {
  $("completed-count").textContent =
    Object.values(progress).filter(Boolean).length;

  document.querySelectorAll(".lesson-link").forEach(button => {
    const key = `${currentCourse}-${button.dataset.index}`;

    button.classList.toggle(
      "done",
      Boolean(progress[key])
    );
  });
}

function renderCourses() {
  $("course-list").innerHTML = "";

  Object.entries(courses).forEach(([name, course]) => {
    const card = document.createElement("article");
    card.className = "course-card";

    const icon = document.createElement("div");
    icon.className = "course-icon";
    icon.textContent = course.icon;

    const title = document.createElement("h3");
    title.textContent = name;

    const description = document.createElement("p");
    description.textContent = course.description;

    const count = document.createElement("p");
    count.textContent =
      `${course.lessons.length} leçons disponibles`;

    const button = document.createElement("button");
    button.textContent = "Commencer la formation";

    button.addEventListener("click", () => {
      selectCourse(name);
    });

    card.append(icon, title, description, count, button);
    $("course-list").appendChild(card);
  });
}

function selectCourse(name) {
  currentCourse = name;
  currentLesson = 0;

  $("course-label").textContent =
    `FORMATION ${name.toUpperCase()}`;

  renderLessonList();
  renderLesson();

  $("learning-area").scrollIntoView({
    behavior: "smooth"
  });
}

function renderLessonList() {
  $("lesson-list").innerHTML = "";

  courses[currentCourse].lessons.forEach((lesson, index) => {
    const button = document.createElement("button");

    button.className = "lesson-link";
    button.textContent = `${index + 1}. ${lesson.title}`;
    button.dataset.index = index;

    if (index === currentLesson) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      currentLesson = index;
      renderLessonList();
      renderLesson();
    });

    $("lesson-list").appendChild(button);
  });

  updateProgress();
}

function renderLesson() {
  const lesson =
    courses[currentCourse].lessons[currentLesson];

  quizAnswered = false;

  $("lesson-title").textContent = lesson.title;

  $("lesson-subtitle").textContent =
    `Leçon ${currentLesson + 1} sur ${courses[currentCourse].lessons.length}`;

  $("lesson-level").textContent = "Débutant";
  $("explanation").textContent = lesson.explanation;
  $("example-code").textContent = lesson.code;
  $("code-explanation").textContent = lesson.codeExplanation;

  $("keyboard-explanation").textContent =
    `Disposition actuelle : ${$("layout").value}. Les touches et symboles à travailler pour cette leçon sont présentés ci-dessous. Leur emplacement peut varier selon le clavier et la configuration du système.`;

  $("key-list").innerHTML = "";

  lesson.keys.forEach(key => {
    const span = document.createElement("span");

    span.className = "key-item";
    span.textContent = key;

    $("key-list").appendChild(span);
  });

  renderVirtualKeyboard(lesson);

  $("typing-target").textContent = lesson.typing;
  $("typing-input").value = "";
  $("typing-accuracy").textContent = "100 %";
  $("typing-errors").textContent = "0";
  $("typing-feedback").textContent = "";
  $("quiz-feedback").textContent = "";

  renderQuiz(lesson);
  updateProgress();
}

function renderQuiz(lesson) {
  $("quiz-question").textContent = lesson.question;
  $("quiz-options").innerHTML = "";

  lesson.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.className = "quiz-option";
    button.textContent = option;

    button.addEventListener("click", () => {
      if (quizAnswered) return;

      quizAnswered = true;

      if (index === lesson.answer) {
        $("quiz-feedback").textContent =
          "Bonne réponse ! Tu as compris cette notion.";

        $("quiz-feedback").style.color = "#168451";
      } else {
        $("quiz-feedback").textContent =
          "Pas encore. Relis la leçon et réessaie lors de ta prochaine révision.";

        $("quiz-feedback").style.color = "#b45309";
      }

      button.style.borderColor =
        index === lesson.answer ? "#168451" : "#c87936";
    });

    $("quiz-options").appendChild(button);
  });
}

function updateTypingStats() {
  const target = $("typing-target").textContent;
  const value = $("typing-input").value;

  let correct = 0;

  for (let i = 0; i < value.length; i++) {
    if (value[i] === target[i]) {
      correct++;
    }
  }

  const accuracy = value.length
    ? Math.round((correct / value.length) * 100)
    : 100;

  $("typing-accuracy").textContent = `${accuracy} %`;
  $("typing-errors").textContent = value.length - correct;

  // Retour immédiat sur la saisie, caractère par caractère.
  const feedback = $("typing-feedback");

  if (value.length === 0) {
    feedback.textContent = "";
  } else if (value === target) {
    feedback.textContent = "Parfait ! Tu as reproduit exactement le modèle.";
    feedback.style.color = "#168451";
  } else if (target.startsWith(value)) {
    feedback.textContent =
      `Correct jusqu'ici : ${value.length} caractère(s) sur ${target.length}.`;
    feedback.style.color = "#168451";
  } else {
    let errorPosition = 0;

    while (
      errorPosition < value.length &&
      errorPosition < target.length &&
      value[errorPosition] === target[errorPosition]
    ) {
      errorPosition++;
    }

    feedback.textContent =
      `Erreur au caractère ${errorPosition + 1}. Compare ta saisie avec le modèle.`;
    feedback.style.color = "#b45309";
  }
}

$("typing-input").addEventListener(
  "input",
  updateTypingStats
);

$("check-typing").addEventListener("click", () => {
  const target = $("typing-target").textContent;
  const value = $("typing-input").value;

  if (value === target) {
    $("typing-feedback").textContent =
      "Excellent ! Le code est reproduit correctement.";

    $("typing-feedback").style.color = "#168451";
  } else {
    $("typing-feedback").textContent =
      "Il reste des différences. Vérifie les caractères, les espaces et les symboles.";

    $("typing-feedback").style.color = "#b45309";
  }
});

$("complete-lesson").addEventListener("click", () => {
  if (!currentCourse) return;

  const key = `${currentCourse}-${currentLesson}`;

  progress[key] = true;

  saveProgress();
  renderLessonList();

  $("typing-feedback").textContent =
    "Leçon marquée comme terminée. Tu peux continuer !";

  $("typing-feedback").style.color = "#168451";
});

$("next-lesson").addEventListener("click", () => {
  if (!currentCourse) {
    alert("Choisis d'abord une formation.");
    return;
  }

  const total = courses[currentCourse].lessons.length;

  if (currentLesson < total - 1) {
    currentLesson++;

    renderLessonList();
    renderLesson();
  } else {
    $("typing-feedback").textContent =
      "Tu es arrivé à la dernière leçon de cette formation. Choisis une autre formation pour continuer.";
  }
});

$("layout").addEventListener("change", () => {
  if (currentCourse) {
    renderLesson();
  }
});

renderCourses();
updateProgress();
