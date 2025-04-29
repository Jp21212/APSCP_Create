//Quiz Questions List
const questionsList = [
  { question: "In a website browser bar, what does WWW stand for?", answers: ["Wishing Wealth Website", "World Wide Web", "Water Wave West", "Wellbeing Worldly Wise"], correct: "World Wide Web" },
  { question: "What is the capital of Florida?", answers: ["Miami", "Tallahassee", "Key West", "Jacksonville"], correct: "Tallahassee" },
  { question: "What is the capital of New York?", answers: ["Manhattan", "Bronx", "Long Island", "Albany"], correct: "Albany" },
  { question: "The original Amazon company sold what?", answers: ["Books", "Movies", "Phones and iPads", "Sport items"], correct: "Books" },
  { question: "In what year was the internet opened to the public?", answers: ["1987", "1993", "1980", "1989"], correct: "1993" },
  { question: "What is the heaviest organ in the human body?", answers: ["Brain", "Heart", "Lungs", "Skin"], correct: "Skin" },
  { question: "When is National Ice Cream Month?", answers: ["July", "June", "August", "May"], correct: "July" },
  { question: "Who is Walt Disney's favorite princess?", answers: ["Snow White", "Ariel", "Cinderella", "Jasmine"], correct: "Cinderella" },
  { question: "Who won the first season of American Idol?", answers: ["Mac Miller", "Kelly Clarkson", "Snoop Dogg", "Taylor Swift"], correct: "Kelly Clarkson" },
  { question: "What is the largest mammal in the world?", answers: ["Blue Whale", "Great White Shark", "Python", "Monkey"], correct: "Blue Whale" },
  { question: "What is the main ingredient in a sushi dish?", answers: ["Crab", "Avocado", "Seaweed", "Rice"], correct: "Rice" },
  { question: "How many wives did King Henry VIII have?", answers: ["5", "9", "6", "2"], correct: "6" },
  { question: "Who is the Greek God of War, and son of Zeus and Hera?", answers: ["Ares", "Hades", "Apollo", "Hermes"], correct: "Ares" },
  { question: "What is the chemical symbol of Mercury?", answers: ["Au", "Hg", "Ag", "Mo"], correct: "Hg" },
  { question: "What is the official animal of Scotland?", answers: ["Cow", "Horse", "Pig", "Unicorn"], correct: "Unicorn" },
  { question: "What mountain range is the longest in the world?", answers: ["The Rockies", "Alps", "K2", "Andes"], correct: "Andes" },
  { question: "In which year did the Titanic sink?", answers: ["1910", "1911", "1912", "1913"], correct: "1912" },
  { question: "What is the name of Mickey Mouse's dog?", answers: ["Pluto", "Scout", "Minnie", "Goofy"], correct: "Pluto" },
  { question: "What year was the very first model of the iPhone made?", answers: ["2007", "2006", "2005", "2004"], correct: "2007" },
  { question: "What programming language is often used for developing Android applications?", answers: ["Python", "Java", "HTML", "PHP"], correct: "Java" }
];

let currentQuestionIndex = 0;
let score = 0;

//Load a Question
function loadQuestion() {
  clearAnswers(); // Remove old answer buttons

  let currentQuestion = questionsList[currentQuestionIndex];
  document.getElementById('question').textContent = currentQuestion.question;

  let answerButtons = document.getElementById('answer-buttons');

  currentQuestion.answers.forEach(answer => {
    let button = document.createElement('button');
    button.textContent = answer;

    button.onclick = function () {
      chooseAnswer(answer);
    };

    answerButtons.appendChild(button);
  });
}

//Clear old answers
function clearAnswers() {
  document.getElementById('answer-buttons').innerHTML = '';
}

// Answer Check 
function chooseAnswer(selectedAnswer) {
  let correctAnswer = questionsList[currentQuestionIndex].correct;
  let resultElement = document.getElementById('result');

  if (selectedAnswer === correctAnswer) {
    score += 1;
    resultElement.textContent = "Correct!";
  } else {
    resultElement.textContent = "Wrong! The correct answer was: " + correctAnswer;
  }

  document.getElementById('next-button').style.display = 'inline-block';
}

//Load next question or finish
function nextQuestion() {
  currentQuestionIndex += 1;

  if (currentQuestionIndex < questionsList.length) {
    document.getElementById('result').textContent = '';
    document.getElementById('next-button').style.display = 'none';
    loadQuestion();
  } else {
    endGame();
  }
}

//End the Quiz 
function endGame() {
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('result').style.display = 'none';
  document.getElementById('next-button').style.display = 'none';

  let endContainer = document.getElementById('end-container');
  endContainer.style.display = 'block';

  document.getElementById('final-score').textContent =
    "You scored " + score + " out of " + questionsList.length + "!";
}

//Start the Quiz 
document.getElementById('next-button').addEventListener('click', nextQuestion);
loadQuestion();