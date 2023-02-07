const quote = document.getElementById("quote");
const adviceNum = document.getElementById("advice-num");
const dice = document.getElementById("dice");
const apiUrl = "https://api.adviceslip.com/advice";

window.onload = () => {
    getAdvice(apiUrl);
}

dice.addEventListener("click", () => {
    getAdvice(apiUrl);
})

function getAdvice(api) {
    fetch(api)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let adviceId = data.slip.id;
        let advice = data.slip.advice;
        adviceNum.innerHTML = adviceId;
        quote.innerHTML = `"${advice}"`
    });
}
