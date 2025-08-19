const pageInput = document.getElementById("pageInput")
const searchBtn = document.getElementById("searchBtn")
const resultDiv = document.getElementById("results")

async function fetchCharacters(page){
    resultDiv.innerHTML = "<p>Carregando...</p>"

    try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        
    }
}