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

    // Targets the span class in html, displays it as text and uses id from the data
    adviceNumberSpan.textContent = `ADVICE #${id}`;

    // selects the css class '.advice-generator__quote' from html 
    // targets the content of the html element and ensures its content is displayed as text
    // assigns advice data to it (therefore the content will be that of the data stored in 'advice')
    adviceQuote.textContent = advice;
};

// function renders a new piece of advice on the page

const generateNewAdvice = async () => {

    // assigns the function fetchNewAdvice to variable named 'data'
    const data = await fetchNewAdvice();

    // Accesses the dictinary named 'slip' in the data returned from the API 
    // and assigns it to 'advice'
    const advice = data.slip;

    // Calls on the function that renders the data on the page for the user
    renderAdvice(advice);
};

// Listens for events (clicks, loads, reszising of the page etc)
// Structure example: window.addEventListener(event, listener, options);
// DOMContentLoaded ensures that the Javascript will execute once the HTML document has loaded completely

window.addEventListener('DOMContentLoaded', () => {
    
    // Event listener is put on the adviceButton objcet which references the button on html
    // It listens/waits to be 'clicked' 
    // If it is 'clicked' it will generateNewAdvice (run this function)
    adviceButton.addEventListener('click', generateNewAdvice);
});