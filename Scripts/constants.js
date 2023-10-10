const startProcess = document.getElementById("startProcess");
const StartScreen = document.getElementById("StartScreen");
const VotingProcess = document.getElementById("VotingProcess");
const btnContainer = document.getElementById("btnContainer");
const btnMinusIndex = document.getElementById("ReturnButton");


const QuestionTitle = document.getElementById("QuestionTitle");
const QuestionDescription = document.getElementById("QuestionDescription");
const QuestionIndex = document.getElementById("QuestionIndex");

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


