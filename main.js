let secPassed = 0;
let words = ["Телекоммуникация", "Радио", "Телефон", "Газопровод", "Аэродром", "Жаворонок", "Печатная машина", "День рождения", "Аэроплан", "Дуэль", "Ежевика"];
let score = 0;
let needType = words.length;
let isCountTime = true;
let question = false;
words = shuffle(words);
document.querySelector(".title").textContent = words[0];

function newText() {
    if (score !== needType) {
        score++;
        words = shuffle(words);
        document.querySelector(".title").textContent = words[0];
        document.querySelector(".speed-type-input").value = ``;
        console.log(words);
        words.splice(0, 1);
    } else {
        isCountTime = false;
        document.querySelector(".title").textContent = `Начать заново?`;
        question = true;
        document.querySelector(".speed-type-input").value = ``;
    };
};

document.querySelector(".speed-type-input").addEventListener("input", (event) => {
    let textInput = event.target.value.trim();
    if (textInput.trim().toLowerCase() !== "да") {
        let need = document.querySelector(".title").textContent;
        if (textInput === need) {
            newText();
        };
    } else if (textInput.trim().toLowerCase() === "да" && question === true) {
        location.reload();
    };
    
});


setInterval(() => {
    if (isCountTime === true) {
        secPassed++;
        document.querySelector(".time-score").textContent = `${secPassed}s`;
    };
}, 1000);








function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
