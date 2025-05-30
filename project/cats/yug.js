document.querySelector('.btn').addEventListener('click',(e)=>{
    e.preventDefault()

    fetch('https://api.thecatapi.com/v1/images/search')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        const imageUrl = data[0].url
        document.querySelector('.container').innerHTML = `<img src="${imageUrl}" alt="Random Cat"></img>`
    })
    .catch((error)=>{
        console.error(error)
    })
})