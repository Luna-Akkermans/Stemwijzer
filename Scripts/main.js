// Event listener to start the voting process
startProcess.addEventListener("click", () => {
    StartScreen.classList.add('hide');
    VotingProcess.classList.remove('hide');
    CreateButtons(); // Create buttons for voting
    initalizeQuestion(questionCounter); // Initialize the first question
})

// Function to create an answer object based on the selected answer
const createAnswerObject = (Answer) => {
    const matchingParties = subjects[questionCounter].parties.filter(party => party.position === Answer);
    const partyNames = matchingParties.map(party => party.name);

    return {
        id: questionCounter,
        parties: partyNames,
        position: Answer,
        importance: null
    };
};

// Function to handle button presses during the voting process
let VotingProcessFunctionality = (Answer) => {
    if (answers.length + 1 !== subjects.length) {        
        if (answers.some(i => i.id === questionCounter)) {
            answers.splice(questionCounter, 1, createAnswerObject(Answer));
            SelectedButton(previousSelectedButton);
            questionCounter++;
            initalizeQuestion(questionCounter);
        } else {
            answers.push(createAnswerObject(Answer));
            questionCounter++;
            initalizeQuestion(questionCounter);
        }
    } else {
        progressBar.style.width = 100 + "%";
        showCheckboxes(); // Call a function that handles the vote calculation
    }
}

// Function to handle the selected button style
let SelectedButton = (boolean) => {
    if (previousSelectedButton) {
        previousSelectedButton.classList.add('w3-black');
        previousSelectedButton.classList.remove('w3-blue');
    }
}

// Backward functionality button click event
btnMinusIndex.addEventListener("click", () => {
    questionCounter--;
    SelectedButton(previousSelectedButton);
    initalizeQuestion(questionCounter);
    let allButtons = document.querySelectorAll(`button[user-input]`);
    Array.from(allButtons).forEach(ele => {
        if (ele.getAttribute("user-input") == answers[questionCounter].position) {
            ele.classList.add('w3-blue');
            ele.classList.remove('w3-black');
            previousSelectedButton = ele;
        }
    });
});

// Forward functionality button click event
btnPlusIndex.addEventListener("click", (e) => {
    userInput = e.target.getAttribute("user-input");
    answers.push(createAnswerObject(userInput));
    questionCounter++;
    initalizeQuestion(questionCounter);
})

// Function to handle checkbox selection
const handleCheckboxSelection = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxArray.length = 0; // Clear the array before pushing new values to avoid duplicates.
    checkboxes.forEach((checkbox) => {
        checkboxArray.push(Number(checkbox.id));
    });
}

// Function to change the importance flag in the answers
const ImportanceChanger = (answers, checkboxArray) => {
    checkboxArray.forEach((index) => {
        if (answers.some(i => i.id === index)) {
            answers[index].importance = true;
        }
    })
}

// Show checkboxes for party selection and hide other elements
let showCheckboxes = () => {
    partiesResult.classList.remove('hide');
    btnContainer.style.display = "none"; // Hide button container
    questionInformationDiv.style.display = "none"; // Hide question information
    btnPlusIndex.style.display = "none"; // Hide the forward button
    ReturnButton.classList.add('hide');
    CreateCheckboxes(); // Create the checkboxes for party selection
}

// Function to count how many times a party occurs in the answers' parties
const countPartyOccurrences = (answers) => {
    const partyMatches = [];
    for (const answer of answers) {
        if (Array.isArray(answer.parties)) {
            const importanceMultiplier = answer.importance === true ? 2 : 1;
            for (const party of answer.parties) {
                const existingParty = partyMatches.find((item) => item.partyname === party);
                const partyInfo = parties.find((p) => p.name === party);
                if (existingParty) {
                    existingParty.match += importanceMultiplier;
                    if (partyInfo) {
                        existingParty.size = partyInfo.size;
                    }
                } else {
                    partyMatches.push({
                        partyname: party,
                        match: importanceMultiplier,
                        size: partyInfo ? partyInfo.size : 0,
                    });
                }
            }
        }
    }
    return partyMatches;
}

// Event listener for displaying results
var partyCounts;
const partyList = document.createElement("ul");
partyList.classList.add('w3-ul')


resultShow.addEventListener('click', () => {
    handleCheckboxSelection();
    resultTitle.innerText = "Resultaat!"
    informationResult.innerText = "Om alleen grote partijen te laten zien druk op de rechter knop."
    ResultBTNContainer.classList.add('hide');
    //Remove the checkboxes.
    while (checkboxContainerWrapper.firstChild) {
        checkboxContainerWrapper.removeChild(checkboxContainerWrapper.firstChild);
    }

    //Create new checkbox
    const checkbox = document.createElement("input");
    // Set the type to "checkbox"
    checkbox.type = "checkbox";
    checkbox.id = 'partySize'
    checkbox.classList.add('w3-check');
    informationResult.appendChild(checkbox)

    //Print result
    ImportanceChanger(answers, checkboxArray);
    let partyCounts = countPartyOccurrences(answers);
    partyCounts.sort((a, b) => b.match - a.match);

    createPartyList(partyCounts);

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            // Checkbox is checked - show only big parties
            const bigParties = partyCounts.filter(partyCounts => partyCounts.size > 0);
            createPartyList(bigParties);
        } else {
            // Checkbox is unchecked - show all parties
            createPartyList(partyCounts);
        }
    });
});