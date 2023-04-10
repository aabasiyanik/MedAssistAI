function toggleInput() {
    var inputContainer = document.getElementById("input-container");
    var getStartedButton = document.getElementById("get-started");
    var staticText = document.querySelector(".static-txt");
    var dynamicTexts = document.querySelector(".dynamic-txts");
  
    if (inputContainer.style.display === "none") {
      inputContainer.style.display = "block";
      getStartedButton.style.display = "none";
      staticText.style.display = "none";
      dynamicTexts.style.display = "none";
    } else {
      inputContainer.style.display = "none";
      getStartedButton.style.display = "block";
      staticText.style.display = "block";
      dynamicTexts.style.display = "block";
    }
  }
  
  function submitText() {
    var userInput = document.getElementById("user-input").value;
    console.log(userInput); // Replace this line with code to process the submitted text
  }
  