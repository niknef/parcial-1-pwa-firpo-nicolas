function fetchPersonaje(){
    fetch(`https://rickandmortyapi.com/api/character/?page=20&status=alive`)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        const personajes = data.results;
        console.log(personajes);
        const container = document.querySelector('#container');
        let html = '';
        personajes.forEach(personaje => {
        html += `
            <div class="col">
                <div class="card h-100">
                        <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
                    <div class="card-body">
                        <h5 class="card-title">${personaje.name}</h5>
                        <p class="card-text">${personaje.species}</p>
                    </div>
                </div>
            </div>
        </div>
        `
});
container.innerHTML = html;
        
    });
};

fetchPersonaje();