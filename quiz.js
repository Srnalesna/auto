/*******************************************************
 * quiz.js
 * - Vyberie 50 náhodných otázok z ALL_QUESTIONS.
 * - Zamieša poradie odpovedí.
 * - Zobrazí do stránky.
 * - Vyhodnotí test a ukáže, čo bolo správne/nesprávne.
 *
 * Predpokladá data.js s premennou ALL_QUESTIONS (obsah 286 otázok).
 *******************************************************/

// Počet otázok, ktoré sa majú vybrať
const NUM_QUESTIONS = 50;

// Odkazy na HTML prvky (index.html)
const quizContainer  = document.getElementById("quizContainer");
const startBtn       = document.getElementById("startBtn");
const submitBtn      = document.getElementById("submitBtn");
const scoreContainer = document.getElementById("scoreContainer");

// V tomto poli budú vybrané (náhodné) otázky pre aktuálny test
let selectedQuestions = [];

/**
 * Fisher-Yates shuffle - premiešanie poľa in place
 */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/**
 * Náhodne vyberieme N otázok z ALL_QUESTIONS (286).
 * 1) skopírujeme ALL_QUESTIONS -> shuffle
 * 2) vezmeme prvých N
 */
function getRandomQuestions(num) {
  let copy = [...ALL_QUESTIONS];
  shuffleArray(copy);
  return copy.slice(0, num);
}

/**
 * Zamiešanie poradia odpovedí v jednej otázke q
 * - zistíme text správnej odpovede
 * - premiešame q.options
 * - nájdeme nový index tej správnej
 */
function shuffleOptions(q) {
  // text správnej odpovede
  const correctText = q.options[q.answer];
  // kópia
  let newOpts = [...q.options];
  // premiešame
  shuffleArray(newOpts);
  // nový index pre correctText
  q.answer = newOpts.indexOf(correctText);
  q.options = newOpts;
}

/**
 * Vyrenderovanie vybraných otázok do quizContainer
 */
function renderQuestions(questions) {
  quizContainer.innerHTML = "";
  questions.forEach((q, index) => {
    // Najprv zamiešame poradie odpovedí
    shuffleOptions(q);

    // Vytvoríme obal pre otázku
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    // Nadpis: Otázka č. (index+1)
    const qTitle = document.createElement("h3");
    qTitle.textContent = (index + 1) + ". " + q.question;
    questionDiv.appendChild(qTitle);

    // Div pre možnosti
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    // Vygenerujeme 3 radio buttony
    q.options.forEach((text, optIndex) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "question_" + index; // aby boli prepojené
      radio.value = optIndex;          // hodnota = index
      label.appendChild(radio);
      label.appendChild(document.createTextNode(" " + text));
      optionsDiv.appendChild(label);
    });

    questionDiv.appendChild(optionsDiv);
    quizContainer.appendChild(questionDiv);
  });
}

/**
 * Vyhodnotenie testu
 * - zistí, ktoré radio sú zvolené
 * - porovná s q.answer
 */
function evaluateQuiz() {
  let score = 0;
  let questionDivs = quizContainer.getElementsByClassName("question");

  selectedQuestions.forEach((q, index) => {
    // K divu s indexom question
    const optionsDiv = questionDivs[index].querySelector(".options");
    const radios = optionsDiv.querySelectorAll("input[type='radio']");
    
    let userAnswer = null;
    radios.forEach(radio => {
      if (radio.checked) {
        userAnswer = parseInt(radio.value, 10);
      }
    });

    // Vytvoríme div pre zobrazenie výsledku
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");

    if (userAnswer === q.answer) {
      score++;
      resultDiv.textContent = "Správne!";
      resultDiv.classList.add("correct");
    } else {
      // zobrazíme aj správnu odpoveď
      const correctText = q.options[q.answer];
      resultDiv.textContent = `Nesprávne! Správna odpoveď: "${correctText}"`;
      resultDiv.classList.add("incorrect");
    }

    optionsDiv.appendChild(resultDiv);
  });

  // Zobrazíme skóre
  scoreContainer.textContent = `Získali ste ${score} bodov z ${selectedQuestions.length}.`;
}

/**
 * Po kliknutí na "Spustiť test"
 */
function startTest() {
  scoreContainer.textContent = "";
  // vyberieme 50 náhodných otázok
  selectedQuestions = getRandomQuestions(NUM_QUESTIONS);
  // vyrenderujeme
  renderQuestions(selectedQuestions);

  // Zobrazíme tlačidlo "Vyhodnotiť test"
  submitBtn.style.display = "inline-block";
}

/**
 * Napojíme tlačidlá
 */
startBtn.addEventListener("click", () => {
  startTest();
});

submitBtn.addEventListener("click", () => {
  evaluateQuiz();
});
