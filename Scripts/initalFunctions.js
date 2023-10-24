//Show questions, I = index of data.js.
const initalizeQuestion = (i) => {
  QuestionTitle.innerText = subjects[i].title;
  QuestionDescription.innerText = subjects[i].statement;
  QuestionIndex.innerText = `${i + 1} / ${subjects.length}`;

};


//Create voting buttons
const CreateButtons = () => {
  buttonInformation.forEach((element, index) => {
    const { text, attr } = buttonInformation[index];
    const btn = document.createElement('button');
    btn.innerText = text;
    btn.setAttribute('user-input', attr);
    btn.classList.add(...buttonClass);
    btn.addEventListener('click', handleButtonClick);
    btnContainer.appendChild(btn);
  });
};

//Handle button presses
const handleButtonClick = (e) => {
  const userInput = e.target.getAttribute('user-input');
  VotingProcessFunctionality(userInput);
};


// Create end options
const CreateCheckboxes = () => {
  subjects.forEach((subject, index) => {
    //Create a div around each checkbox
    const checkboxDiv = document.createElement('p');
    checkboxDiv.style.display = 'inline-block'
    checkboxDiv.classList.add('w3-check-item', 'w3-margin', 'w3-border-bottom', 'padding-bottom-m')

    //Create checkboxes
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = index;
    checkbox.name = 'importance'
    checkbox.classList.add('w3-check', 'w3-margin-right');


    //Create labels
    const label = document.createElement('label');
    label.htmlFor = index;
    label.textContent = subject.title;

    // Append the checkbox and label to the checkboxDiv
    checkboxDiv.appendChild(checkbox);
    checkboxDiv.appendChild(label);

    // Append the checkboxDiv to container
    checkboxContainerWrapper.appendChild(checkboxDiv);
  });
};


const createPartyList = (partyArray) => {
  

  
  
  partyList.innerHTML = ""; // Clear the list
  for (const partyMatch of partyArray) {
      const listItem = document.createElement("li");
      listItem.textContent = partyMatch.partyname;
      partyList.appendChild(listItem);
  }

  checkboxContainerWrapper.appendChild(partyList);
}