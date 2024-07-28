const API_LINK = "https://api.adviceslip.com/advice";
const adviceNumberSpan = document.querySelector('.advice-generator__advice-number')
const adviceQuote = document.querySelector('.advice-generator__quote')
const adviceButton = document.querySelector('button.advice-generator__btn')

const fetchNewAdvice = async () => {
    const response = await fetch(API_LINK);
    const advice = await response.json();
    return advice
};

const renderAdvice = (adviceObj) => {
    const {id, advice} = adviceObj;
};

const generateNewAdvice = async () => {
    const data = await fetchNewAdvice()
    const advice = data.slip;

    //Render
    renderAdvice(advice)
}

window.addEventListener('DOMContentLoaded', () => {
    adviceButton.addEventListener('click', generateNewAdvice)
})