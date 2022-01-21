const pokedex = document.getElementById('pokedex');
	
	const fetchPokemon = () => {
	    const promises = [];
	    for (let i = 1; i <= 150; i++) {
	        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
			
	        promises.push(fetch(url).then((res) => res.json() ));
			
	    }
	    Promise.all(promises).then((results) => {
	        const pokemon = results.map((result) => ({
	            name: result.name,
	            image: result.sprites['front_default'],
	            type: result.types.map((type) => type.type.name).join(', '),
	            id: result.id,
				abilities: result.abilities.map((abilities) => abilities.ability.name).join(', ')
	        }));
	        displayPokemon(pokemon);
	    });
	};
	
	const displayPokemon = (pokemon) => {
	    console.log(pokemon);
	    const pokemonHTMLString = pokemon
	        .map(
	            (pokeman) => `

  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
	<li class="card">
	<img class="card-image" src="${pokeman.image}"/>
	
</li>
    </div>
    <div class="flip-card-back">
	<img class="card-image" src="${pokeman.image}"/>
	<h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
	<p class="card-subtitle">Type: ${pokeman.type}</p>
    <p class="card-subtitle">Ability: ${pokeman.abilities}</p>
    </div>
  </div>
</div>
	       
	    `
	        )
	        .join('');
	    pokedex.innerHTML = pokemonHTMLString;
	};
	
	fetchPokemon();
	
	function changeColor(){
		const changeBody = document.body.style.background="#43aa8b";
		
	}
	function onClick (btnOff) {
		const clickButton = document.querySelector('[data-function="onClick"]');
		clickButton.addEventListener("click", changeColor);
		if(btnOff == clickButton){
			 document.querySelector('[data-function="onClick"]').textContent="Off";
		}
		btnOff(clickButton);
	};
	
	onClick ();
	


	