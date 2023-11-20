//funcion para redireccionar a la pagina principal
function redirectToMain(){
    window.location.href = '../index.html';
}


// Obtenenemos el historial del localStorage
const historial = JSON.parse(localStorage.getItem('historial')) || [];
const container = document.querySelector('#historial-container');

// Generamos las cards en la página de historial
historial.forEach(personaje => {
    const card = document.createElement('div');
    card.className = 'col';
    card.innerHTML = `
        <div class="card h-100 mx-auto border border-success" style="max-width: 18rem;">
            <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
            <div class="card-body">
                <h5 class="card-title">${personaje.name}</h5>
                <p class="card-text">${personaje.species}</p>
            </div>
        </div>
    `;
    container.appendChild(card);
});