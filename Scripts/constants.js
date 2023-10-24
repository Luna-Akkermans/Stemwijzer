const startProcess = document.getElementById("startProcess");
const StartScreen = document.getElementById("StartScreen");
const VotingProcess = document.getElementById("VotingProcess");
const btnContainer = document.getElementById("btnContainer");
const btnMinusIndex = document.getElementById("ReturnButton");
const btnPlusIndex = document.getElementById("btnPlusIndex");
const partiesResult = document.getElementById("resultContainer");
const checkboxContainerWrapper = document.getElementById("checkboxContainerWrapper");
const QuestionTitle = document.getElementById("QuestionTitle");
const QuestionDescription = document.getElementById("QuestionDescription");
const QuestionIndex = document.getElementById("QuestionIndex");
const questionInformationDiv = document.getElementById("questionInformationDiv");
const resultTitle = document.getElementById("resultHeader");
const informationResult = document.getElementById("resultSpan");
const ResultBTNContainer = document.getElementById("btnResultContainer");






const buttonClass = ["w3-button", "w3-black", "w3-hover-blue"];

const buttonInformation = [
    {
        text: 'Eens',
        attr: 'pro',
    },
    {
        text: 'Geen van beide',
        attr: 'ambivalent',
    },
    {
        text: 'Oneens',
        attr: 'contra',
    }
];


