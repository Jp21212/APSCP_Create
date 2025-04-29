// List storing my data 
// Hold all my questions, choices, and answers
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

// === Variables for score and tracking ===
let currentQuestionIndex = 0;
let score = 0;

// === Student-Developed Procedure ===
// This function shows a question and its answers.
// It uses sequencing (step-by-step), selection (checking right/wrong), and iteration (loop through answers).
// The parameter "questionObject" is used to control which question to show.
function showQuestion(questionObject) {
  // Show the question text
  document.getElementById('question').textContent = questionObject.question;

  // Clear out old buttons
  document.getElementById('answer-buttons').innerHTML = '';

  // === Code Segment 2: List being used ===
  // Loop through the answers in the list and make a button for each one
  questionObject.answers.forEach(answer => {
    let button = document.createElement('button');
    button.textContent = answer;

    // When clicked, check if answer selection is correct
    button.onclick = function () {
      if (answer === questionObject.correct) {
        score++;
        document.getElementById('result').textContent = "Correct!";
      } else {
        document.getElementById('result').textContent = "Wrong! The correct answer was: " + questionObject.correct;
      }

      document.getElementById('next-button').style.display = 'inline-block';
    };

    // Add button to the page
    document.getElementById('answer-buttons').appendChild(button);
  });
}

// Go to the next question or end the quiz 
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questionsList.length) {
    document.getElementById('result').textContent = "";
    document.getElementById('next-button').style.display = 'none';

    // Call my procedure and pass in a different question each time
    showQuestion(questionsList[currentQuestionIndex]);
  } else {
    endQuiz();
  }
}

// End the quiz and show the final score 
function endQuiz() {
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('result').style.display = 'none';
  document.getElementById('next-button').style.display = 'none';

  document.getElementById('end-container').style.display = 'block';
  document.getElementById('final-score').textContent =
    "You scored " + score + " out of " + questionsList.length + "!";
}

// Start the quiz 
document.getElementById('next-button').addEventListener('click', nextQuestion);

// Show the first question
showQuestion(questionsList[currentQuestionIndex]);