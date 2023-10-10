
//Show questions, I = index of data.js.
let initalizeQuestion = (i) => {
    QuestionTitle.innerText = subjects[i].title;
    QuestionDescription.innerText = subjects[i].statement;
    QuestionIndex.innerText = `${i + 1} / ${subjects.length}`;
};


//Create voting buttons
let CreateButton = () => {
    //Check information to add to the buttons by going through constants.js, buttonInformaiton
    buttonInformation.forEach((element, index) => {
        let btn = document.createElement('button');
        btn.innerText = buttonInformation[index].text;

        //adding Attribute so I can target the buttons later.
        btn.setAttribute('user-input', buttonInformation[index].attr);
        btn.classList.add(...buttonClass);
        btn.addEventListener('click', (e) => {
            userInput = e.target.getAttribute("user-input");
            VotingProcessFunctionality(userInput);
        })
        btnContainer.appendChild(btn);
    })
}


