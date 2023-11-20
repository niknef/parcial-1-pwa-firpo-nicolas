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
                    <div class="card h-100 mx-auto border border-success" style="max-width: 18rem;">
                        <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
                        <div class="card-body">
                            <h5 class="card-title">${personaje.name}</h5>
                            <p class="card-text">${personaje.species}</p>
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#personajeModal" onclick="openModal('${personaje.name}', '${personaje.image}', '${personaje.species}', '${personaje.status}', '${personaje.gender}', '${personaje.url}', '${personaje.id}')">Más info</button>
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

function openModal(name, image, species, status, gender, url, id) {
    const modalTitle = document.querySelector('#exampleModalLabel');
    modalTitle.textContent = `ID= #${id}`;

    const modalContent = document.querySelector('.modal-body');
    modalContent.innerHTML = `
        <div class="text-center"> 
        <img src="${image}" class="modal-image w-50 mb-2 mx-auto rounded-3" alt="${name}">
        <h5 class="fw-bold">${name}</h5>
        </div>
        <p><span class="fw-semibold">Especie:</span> ${species}</p>
        <p><span class="fw-semibold">Estado:</span>  ${status}</p>
        <p><span class="fw-semibold">Genero:</span>  ${gender}</p>
        <p><span class="fw-semibold">URL:</span>  <a class="text-primary fst-italic "href="${url}" target="_blank">${url}</a></p>
    `;

    const personaje = { name, image, species, status, gender, url, id };
    const historial = JSON.parse(localStorage.getItem('historial')) || [];
    historial.push(personaje);
    localStorage.setItem('historial', JSON.stringify(historial));
    console.log(`Personaje ${name} guardado en el historial.`);
}

function redirectToHistorial() {
    window.location.href = './html/historial.html';
}


fetchPersonaje();
