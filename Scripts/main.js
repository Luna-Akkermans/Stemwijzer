// Start
startProcess.addEventListener("click", () => {
    StartScreen.classList.add('hide');
    VotingProcess.classList.remove('hide');
    CreateButton();
    initalizeQuestion(questionCounter);
})


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


let VotingProcessFunctionality = (Answer) => {
    //Check if the answer has a position, and has been answered before.
    if (answers.some(i => i.id === questionCounter)) {
        answers.splice(i.id, 1, createAnswerObject(Answer))
        questionCounter++;
        initalizeQuestion(questionCounter);
    }else {
        answers.push(createAnswerObject(Answer));
        questionCounter++;
        initalizeQuestion(questionCounter);
    
    }
}

btnMinusIndex.addEventListener("click", () => {
    questionCounter--;
    initalizeQuestion(questionCounter) 
});


// next logic to write.

// if a user goes backwards,

// show the previous choice of them by making the button blue.
// But also make sure if the user did not answer a certain question yet, that this does not happen.
// Same when you go forward.