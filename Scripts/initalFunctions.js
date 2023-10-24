// Function to initialize the question based on the index
const initalizeQuestion = (i) => {
  // Set question title, description, and index
  QuestionTitle.innerText = subjects[i].title;
  QuestionDescription.innerText = subjects[i].statement;
  QuestionIndex.innerText = `${i + 1} / ${subjects.length}`;

  // Calculate and set the progress bar percentage
  const percentage = (questionCounter / subjects.length) * 100;
  console.log(percentage, questionCounter + 1)
  progressBar.style.width = percentage + "%";
};

// Function to create voting buttons
const CreateButtons = () => {
  buttonInformation.forEach((element, index) => {
    const { text, attr } = buttonInformation[index];
    // Create a button element
    const btn = document.createElement('button');
    btn.innerText = text;
    btn.setAttribute('user-input', attr);
    btn.classList.add(...buttonClass);
    btn.addEventListener('click', handleButtonClick);
    btnContainer.appendChild(btn);
  });
};

// Function to handle button clicks
const handleButtonClick = (e) => {
  const userInput = e.target.getAttribute('user-input');
  VotingProcessFunctionality(userInput);
};

// Function to create end options (checkboxes)
const CreateCheckboxes = () => {
  subjects.forEach((subject, index) => {
    // Create a div around each checkbox
    const checkboxDiv = document.createElement('p');
    checkboxDiv.style.display = 'inline-block';
    checkboxDiv.classList.add('w3-check-item', 'w3-margin', 'w3-border-bottom', 'padding-bottom-m');

    // Create checkboxes
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = index;
    checkbox.name = 'importance';
    checkbox.classList.add('w3-check', 'w3-margin-right');

    // Create labels for checkboxes
    const label = document.createElement('label');
    label.htmlFor = index;
    label.textContent = subject.title;

    // Append the checkbox and label to the checkboxDiv
    checkboxDiv.appendChild(checkbox);
    checkboxDiv.appendChild(label);

    // Append the checkboxDiv to the container
    checkboxContainerWrapper.appendChild(checkboxDiv);
  });
};

// Function to create a list of parties
const createPartyList = (partyArray) => {
  partyList.innerHTML = ""; // Clear the list
  for (const partyMatch of partyArray) {
    // Create list items for parties
    const listItem = document.createElement("li");
    listItem.textContent = partyMatch.partyname;
    partyList.appendChild(listItem);
  }

  // Append the party list to the checkbox container
  checkboxContainerWrapper.appendChild(partyList);
}
