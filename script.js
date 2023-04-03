/**
 * script.js - Script de la page
 */

/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: ["1967", "1974", "1962", "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: ["Zelda", "Ganon", "Tom", "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: ["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"],
    correctAnswerIndex: 2,
  },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

/*************************/
/* Contenu du DOM chargé */
/*************************/

let questionCounter = 0;
let resultCounter = 0;

document.addEventListener("DOMContentLoaded", () => {
  createQuestion();
});

function createQuestion() {
  // verify if there's no more question
  if (questionCounter === questions.length) {

    // if there's no more question display thank you message
    document.querySelector("#question").innerHTML =
      " Merci d'avoir répondu. :)";
    document.querySelector("#answers").innerHTML = "";
    
    // if not display question and answer
  } else {
    let p = document.querySelector("#question");
    p.innerHTML = `${questions[questionCounter].question}`;
    let ul = document.querySelector("#answers");
    createAnswers(ul);
  }

  function createAnswers(ul) {
    // Clear unordered list
    ul.innerHTML = "";

    // Display all possible answer for a question
    questions[questionCounter].answers.forEach(function (element, index) {
      let li = document.createElement("li");
      li.innerText = element;
      li.classList.add("answer");
      ul.appendChild(li);
      li.addEventListener("click", function () {
        answerClicked(index, questions[questionCounter].correctAnswerIndex);
      });
    });
  }

  function answerClicked(index, correctAnswerIndex) {
    // Increment the questionCounter by 1
    ++questionCounter;

    // If answer is corrrect increment the resultCounter by 1
    if (index === correctAnswerIndex) {
      ++resultCounter;
      let span = document.querySelector("#score");
      span.innerText = resultCounter;
    }

    createQuestion();
  }
}
