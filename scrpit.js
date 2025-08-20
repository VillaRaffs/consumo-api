const pageInput = document.getElementById("pageInput")
const searchBtn = document.getElementById("searchBtn")
const resultDiv = document.getElementById("results")

async function fetchCharacters(page){
    resultDiv.innerHTML = "<p>Carregando...</p>"

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const data = await response.json()
        //console.log(data)

        if(data.error){
            resultDiv.innerHTML = "<p>Página inválida! Tente outra. (1/42)</p>"
         return
        }

        resultDiv.innerHTML = ""
        data.results.forEach(character =>{
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
            <img src="${character.image}" alt="${character.image}">
            <h3>${character.name}</h3>
            <p><Strong>Status:</strong>${character.status}</p>
            <p><Strong>Espécie:</strong>${character.species}</p>
           `
            resultDiv.appendChild(card)
        })
    } catch (error) {
        //console.log("deu ruim")   
        resultDiv.innerHTML = "<p> Erro ao buscar personagens</p>"  
    }
}

searchBtn.addEventListener("click", () => {
    const page = pageInput.ariaValueMax.value.trim()
    if(page){
        fetchCharacters(page)
    }else{
        resultDiv.innerHTML = "<p> Digte o número da página</p>"
    }
})

fetchCharacters(1)