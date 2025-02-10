const textSamples = [
    "Practice makes perfect",
    "Typing fast improves productivity",
    "Speed and accuracy are important",
    "Keep practicing to get better",
    "DEVELOPER MEHAR SAB",
    "Quick lazy fox",
    "Jumping over the dog"
];

let sampleText = "";
let startTime;

function startTyping() {
    sampleText = textSamples[Math.floor(Math.random() * textSamples.length)];
    let displayText = document.getElementById("displayText");
    displayText.innerHTML = "";
    
    sampleText.split("").forEach(char => {
        let span = document.createElement("span");
        span.textContent = char;
        displayText.appendChild(span);
    });

    document.getElementById("userInput").value = "";
    startTime = new Date();
}

document.getElementById("userInput").addEventListener("input", function() {
    let typedText = this.value;
    let displayText = document.getElementById("displayText");
    let spans = displayText.querySelectorAll("span");

    for (let i = 0; i < spans.length; i++) {
        if (typedText[i] === undefined) {
            spans[i].classList.remove("correct", "incorrect");
        } else if (typedText[i] === sampleText[i]) {
            spans[i].classList.add("correct");
            spans[i].classList.remove("incorrect");
        } else {
            spans[i].classList.add("incorrect");
            spans[i].classList.remove("correct");
        }
    }

    if (typedText === sampleText) {
        let endTime = new Date();
        let timeTaken = (endTime - startTime) / 1000;
        let speed = Math.round((sampleText.length / 5) / (timeTaken / 60));
        document.getElementById("result").textContent = `Your typing speed: ${speed} WPM`;
    }
});

