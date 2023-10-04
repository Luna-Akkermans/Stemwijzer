const startProcess = document.getElementById("startProcess");
const StartScreen = document.getElementById("StartScreen");
const VotingProcess = document.getElementById("VotingProcess");
const btnContainer = document.getElementById("btnContainer");

const QuestionTitle = document.getElementById("QuestionTitle");
const QuestionDescription = document.getElementById("QuestionDescription");



var answers = [];
var questionCounter = 0;
var importantance = [];

var showParties;
const bigParties = 18;

// Init question
// var counter = 0; 
// subjects.forEach(function (item, index) {
//     console.log(item, index);
//     counter++;
//   });

//   console.log(counter);
let initalizeQuestion = (i) => {
    console.log(i);
    QuestionTitle.innerText = subjects[i].title;
    QuestionDescription.innerText = subjects[i].statement;
};




startProcess.addEventListener("click", () => {
    console.log('test')
    StartScreen.classList.add('hide');
    VotingProcess.classList.remove('hide');
    CreateButton();
    initalizeQuestion(questionCounter)
    // Add functionality for user to go back
    if(StartScreen.classList.contains('hide')){
        StartScreen.classList.remove('hide');
        StartScreen.classList.add('hide'); 
    }; 
    })



// Create button functionality.
let CreateButton = () => {
    buttonInformation.forEach((element, index) => {
        let button = document.createElement('button');
        button.innerText = buttonInformation[index].text;
        button.setAttribute("selection", buttonInformation[index].attr);
        button.classList.add(...buttonClass);
        button.setAttribute('user-input', buttonInformation[index].attr);
        button.addEventListener("click", (e) => {
            console.log(e.target.getAttribute('user-input'))
            userInput = e.target.getAttribute("user-input");
            switch (userInput){
                case 'pro' :
                    questionCounter++;
                    initalizeQuestion(questionCounter);
                    break;
                    //Add functianolity for counting the votes
                case 'none' :
                    questionCounter++;
                    initalizeQuestion(questionCounter);
                    break;
                     //Add functianolity for counting the votes
                case 'contra' :
                    questionCounter++;
                    initalizeQuestion(questionCounter);
                    break;
                     //Add functianolity for counting the votes
            }




            //Add functianolity for showing the user the questions.
        })
        btnContainer.appendChild(button);
    })
    console.log(buttonClass)
}



// Return button functionality.
