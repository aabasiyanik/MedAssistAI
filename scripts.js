const questions = [
    "What is your age/gender? Ex:'age/gender'",
    "What symptoms are you experiencing? Please describe them in detail.",
    "Do you have any pre-existing medical conditions or take any medications regularly?"
  ];
  
  let currentQuestionIndex = 0;
  let answers = [];
  
  function startQuestionnaire() {
    const getStartedButton = document.getElementById("get-started");
    getStartedButton.style.display = "none";
    const staticText = document.querySelector(".static-txt");
    staticText.style.display = "none";
    const dynamicTexts = document.querySelector(".dynamic-txts");
    dynamicTexts.style.display = "none";
  
    const questionContainer = document.getElementById("question-container");
    questionContainer.style.display = "block";
  
    showQuestion();
  }
  
  function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestionIndex];
  }
  
  function submitAnswer() {
    const answerInput = document.getElementById("answer-input");
    answers.push(answerInput.value);
    answerInput.value = "";
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      processAnswers();
    }
  }
  
  function processAnswers() {
    // Here, you can process the user's answers as needed
    console.log(answers);
  
    // Reset the questionnaire if you want to start over
    currentQuestionIndex = 0;
    answers = [];
    const questionContainer = document.getElementById("question-container");
    questionContainer.style.display = "none";
  }
  