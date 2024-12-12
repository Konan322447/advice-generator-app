const idNum = document.getElementById('advice-id');
const advice = document.getElementById('advice-text');

const changeAdvice = document.getElementById('toggleAdvice'); 

const loadAdvice = async () => {
    try {
        const adviceapi = await fetch('https://api.adviceslip.com/advice');

        const response = await adviceapi.json();

        idNum.textContent = `${response.slip.id}`;
        advice.textContent = `${response.slip.advice}`;
        
    } catch (err) {
        console.error(err);
        
    }
}

document.addEventListener(`DOMContentLoaded`, loadAdvice());

changeAdvice.addEventListener('click', ()=>{
    loadAdvice();

});

if (document.innerwidth <= 768) {
    document.querySelector('#divider').setAttribute('src', 'images/pattern-divider-mobile.svg')
}