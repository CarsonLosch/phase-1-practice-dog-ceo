console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded")
    getDogPics()
    getDogBreed()
    
    const dogBreedList = document.querySelector('#dog-breeds')
    dogBreedList.addEventListener('click', event => {
        if (event.target.tagName === "LI") {
            event.target.style.color = "pink"
        }
    })

    let dogSelect = document.getElementById('breed-dropdown')
    dogSelect.addEventListener('change', event => {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(data => {
            let dogBreedArry = Object.keys(data.message)
            let filteredArray = dogBreedArry.filter(breed => {
                return breed.startsWith(event.target.value)
            })
            dogBreedList.innerHTML = ""
            
            filteredArray.forEach(breed => {
                dogBreedList.innerHTML += 
                `
                <li>${breed}</li>
                `
            })
        })

    } )
})

function getDogPics() {
    let dogList = document.querySelector('#dog-image-container')
    fetch(`${imgUrl}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.message.forEach(dog => {
            dogList.innerHTML += 
            `
            <ul>
                <img src="${dog}">
            </ul>
            `
        })
    })
};

function getDogBreed() {
    const dogBreedList = document.querySelector('#dog-breeds')
    fetch(`${breedUrl}`)
    .then(response => response.json())
    .then(data => {
        let dogBreedArry = Object.keys(data.message)
        console.log(dogBreedArry)
        dogBreedArry.forEach(breed => {
            dogBreedList.innerHTML += 
            `
            <li>${breed}</li>
            `
        })
    })
}
