document.getElementById('getJoke').addEventListener('click', (e) => {
    e.preventDefault();

    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => { 
            return response.json()
        })
        .then((jokeData) => {
            document.getElementById('display-joke').innerText = jokeData.value;
        })
        .catch((error) => { 
            console.log('Error fetching joke:', error);
        });
});
