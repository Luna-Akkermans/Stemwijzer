const startProcess = document.getElementById("startProcess");
const StartScreen = document.getElementById("StartScreen");
const VotingProcess = document.getElementById("VotingProcess");
const btnContainer = document.getElementById("btnContainer");
const btnMinusIndex = document.getElementById("ReturnButton");


const QuestionTitle = document.getElementById("QuestionTitle");
const QuestionDescription = document.getElementById("QuestionDescription");
const QuestionIndex = document.getElementById("QuestionIndex");


var answers = [];
var questionCounter = 0;
var importantance = [];

var showParties;
const bigParties = 18;


//Start process
startProcess.addEventListener("click", () => {
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




//Load questions parameters is index of question of array.
let initalizeQuestion = (i) => {
    QuestionTitle.innerText = subjects[i].title;
    QuestionDescription.innerText = subjects[i].statement;
    QuestionIndex.innerText = `${i + 1} / ${subjects.length}`;
};

//Previous question / return functionality.
btnMinusIndex.addEventListener("click", () => {
    if(questionCounter === 0){
        alert('Je gaat nu terug naar het start scherm, je antwoorden zijn niet opgeslagen.')
        //delete all info in answer array.
    }else{  //Else, if it's not 0 go back 1 question but if user input does not change don't push / change information in answers. 

        //Button selection logic when returning
        let selectedButton = document.querySelector(`[user-input=${answers[questionCounter -1].position}]`);
        selectedButton.classList.remove('w3-black')
        selectedButton.classList.add('w3-blue')

        //Go back
        questionCounter--;
        initalizeQuestion(questionCounter)
    }
    questionCounter
});

console.log(answers)
//Store answers.
 let VoteCounting = (Answer) => {
        let TempAnswerObj = {
            parties: [],
            position: null
        }

        TempAnswerObj.position = Answer
        //Check if user had already answered the question
        for(i = 0; i < subjects[questionCounter].parties.length; i++){
            if(subjects[questionCounter].parties[i].position == Answer){
                console.log(Answer)
                TempAnswerObj.parties.push(subjects[questionCounter].parties[i].name)
            }
        }
        answers.push(TempAnswerObj);
        questionCounter++;
        initalizeQuestion(questionCounter);
        

    }

// Create button functionality.
let CreateButton = () => {
    buttonInformation.forEach((element, index) => {
        let button = document.createElement('button');
        button.innerText = buttonInformation[index].text;
        button.setAttribute("selection", buttonInformation[index].attr);
        button.classList.add(...buttonClass);
        button.setAttribute('user-input', buttonInformation[index].attr);
        button.addEventListener("click", (e) => {
            userInput = e.target.getAttribute("user-input");
            VoteCounting(userInput);            
        })
        btnContainer.appendChild(button);
    })
}





// Voting system.
