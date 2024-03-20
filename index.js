document.querySelector(".dice-container").addEventListener("click", displayAdvice);

function displayAdvice() {
    fetch(`https://api.adviceslip.com/advice`)
    .then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
        const id = data.slip.id;
        const advice = data.slip.advice
        console.log(id);
        document.querySelector(".slip_id").innerHTML = id;
        document.querySelector(".advice").innerHTML = advice;
    })
    .catch(err => {
        console.error('There was a problem with the fetch operation:', err);
    });
}

  