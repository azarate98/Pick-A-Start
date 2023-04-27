const char = document.getElementById('charmander')
const squir = document.getElementById('squirtel')
const bulb = document.getElementById('bulbasaur')
let picked = false;

function  handlePokemonClicked(event){
    if(picked){
        return
    }
    const pokemon = event.target
    const imgA = pokemon.dataset.imgA
    const imgB = pokemon.dataset.imgB
    const name = pokemon.dataset.name

   
    pokemon.src = imgB
    setTimeout(function(){

        const response = confirm("Would you like to choose "+name+"?")
        if(!response){
            pokemon.src = imgA
        } else{
            alert("Congratulations on your new partner "+name+"!")
            picked = true
        }
    }, 250)
}

char.addEventListener('click', handlePokemonClicked)

squir.addEventListener('click', handlePokemonClicked)

bulb.addEventListener('click', handlePokemonClicked)