// Link to access the API
const API_LINK = "https://api.adviceslip.com/advice";
// span class from html selected and assigned to variable adviceNumberSpan
const adviceNumberSpan = document.querySelector('.advice-generator__advice-number');
// <q> class from html selected and assigned to variable adviceQuote
const adviceQuote = document.querySelector('.advice-generator__quote');
// button element and class from html selected and assigned to variable adviceButton
const adviceButton = document.querySelector('button.advice-generator__btn');

// function that useses fetch to retrieve data from the API_LINK
// uses async to return a promise and await to pause exucution until the promise has been resolved (fulfilled or rejected)
const fetchNewAdvice = async () => {
    // fetches data from API, assigns it to response variable and awaits until promise is resolved
    const response = await fetch(API_LINK);
    // converts data into json and waits until this is resolved and stored in the variable 'advice'
    const advice = await response.json();
    // data stored in 'advice' is returned
    return advice;
};

// function extracts data from the keys' values in the dictionary
// and renders the data on the page for the user

// takes adviceObj as a paramenter
// adviceObj is undefined until the values of the keys 'id' and 'advice' are stored in it

const renderAdvice = (adviceObj) => {
    
    // 'advice' and 'id' are from a dictionary in the converted json data (from the API)
    const {id, advice} = adviceObj;
    
    // Renders the data from the API on the page

    // Targets the span on html, displays it as text and uses id from data
    adviceNumberSpan.textContent = `ADVICE #${id}`;
    // assigns advice from API data to the text content of 'advice_generator__quote' on html
    adviceQuote.textContent = advice;
};

// function renders a new piece of advice on the page
const generateNewAdvice = async () => {
    // assigns data (advice) from fetchNewAdvice 
    const data = await fetchNewAdvice();
    const advice = data.slip;

    //Render
    renderAdvice(advice);
};

window.addEventListener('DOMContentLoaded', () => {
    adviceButton.addEventListener('click', generateNewAdvice);
});