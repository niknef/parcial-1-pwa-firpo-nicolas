async function fetchPersonaje(){
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=20&status=alive`);
    const data = await response.json();
    console.log(data);
    const personajes = data.results;
    console.log(personajes);
    const container = document.querySelector('#container');
    let html = '';
    personajes.forEach(personaje => {
        html += `
            <div class="col">
                <div class="card h-100 mx-auto" style="max-width: 18rem;">
                    <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
                    <div class="card-body">
                        <h5 class="card-title">${personaje.name}</h5>
                        <p class="card-text">${personaje.species}</p>
                        <button type="button" class="btn btn-info">Más info</button>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
};

fetchPersonaje();

