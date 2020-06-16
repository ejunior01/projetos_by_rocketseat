/*IMPORTANDO DADOS DE ESTADOS DIRETO DA API DO IBGE*/

function populateUFs() {

    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        .then( res => res.json())
        .then( states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateUFs()

/*IMPORTANDO DADOS DE CIDADES DIRETO DA API DO IBGE*/


function getCities(event) {

    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex

    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios?orderBy=nome`
    
    citySelect.innerHTML ="<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json())
    .then( cities => {
        for (const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false

    })
}

/*VERIFICANDO AS MUDANÇAS QUE OCORREM NO SELECT ESTADOS, PARA POPULAR AS CIDADES*/

document
    .querySelector("select[name=uf]")
    .addEventListener("change",getCities)


/*ADICIONAR CLASS AOS ITENS SELECINADOS*/

/*GUARDANDO OS LI EM MEMÓRIA*/
const itemsToCollect = document.querySelectorAll(".items-grid li")

/*ADICIONANDO UM OUVIDOR DE EVENTOS PARA CADA ITEM DO LI*/
for ( const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

/*ADICIONAR CLASS AOS ITENS SELECINADOS*/
function handleSelectedItem(event) {
    const itemLi = event.target

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id


    // Verificar se existem itens selecionados, se sim
    // pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId // isso será true ou false
        return itemFound
    })

    // se já estiver selecionado,
    // tirar da selecão
    if(alreadySelected >= 0) {
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        })

        selectedItems = filteredItems

    }
    else {
        // se não tiver selecionado
        // adicionar á seleção
        selectedItems.push(itemId)

    }

    collectedItems.value = selectedItems

}