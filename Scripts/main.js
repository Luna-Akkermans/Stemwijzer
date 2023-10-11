// Start
startProcess.addEventListener("click", () => {
    StartScreen.classList.add('hide');
    VotingProcess.classList.remove('hide');
    CreateButton();
    initalizeQuestion(questionCounter);
})

//Create objects to store answers in. 
let createAnswerObject = (Answer) => {
    let TempAnswerObj = {
        id: questionCounter,
        parties: [],
        position: null
    }
    TempAnswerObj.position = Answer;
    for (i = 0; i < subjects[questionCounter].parties.length; i++) {
        if (subjects[questionCounter].parties[i].position == Answer) {
            TempAnswerObj.parties.push(subjects[questionCounter].parties[i].name)
        }
    }
    return TempAnswerObj;
}

//Handles the process of button presses
let VotingProcessFunctionality = (Answer) => {
    //Check if the answer has a position, and has been answered before.
    if(answers.length+1 !== subjects.length){
        if (answers.some(i => i.id === questionCounter)) {
            answers.splice(questionCounter, 1, createAnswerObject(Answer))
            SelectedButton(previousSelectedButton)
            questionCounter++;
            initalizeQuestion(questionCounter);
        }else {
            answers.push(createAnswerObject(Answer));
            questionCounter++;
            initalizeQuestion(questionCounter);
        }
    }else{
        //Functionality for last / result
      
    }

}

let SelectedButton = (boolean) => {
    if (previousSelectedButton) {
        previousSelectedButton.classList.add('w3-black')
        previousSelectedButton.classList.remove('w3-blue'); 
    }
}

//Backwards functionality
btnMinusIndex.addEventListener("click", () => {
    SelectedButton(previousSelectedButton)
    questionCounter--;
    initalizeQuestion(questionCounter) 
    let allButtons = document.querySelectorAll(`[user-input]`);
    Array.from(allButtons).forEach((ele, index) => {
        if(ele.getAttribute("user-input") == answers[questionCounter].position){
            ele.classList.add('w3-blue')
            ele.classList.remove('w3-black')
            previousSelectedButton = ele;
        }
    });
});

