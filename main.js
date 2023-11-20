const API_URL = 'https://rickandmortyapi.com/api/character/?page=20&status=alive';

async function fetchPersonaje(){
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
        }
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
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#personajeModal" onclick="openModal('${personaje.name}', '${personaje.species}')">Más info</button>
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
};

function openModal(name, species) {
    const modalTitle = document.querySelector('#exampleModalLabel');
    modalTitle.textContent = name;

    const modalContent = document.querySelector('.modal-body');
    modalContent.innerHTML = `
        <p>Especie: ${species}</p>
        
    `;
}

fetchPersonaje();
