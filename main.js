function fetchPersonaje(){
    fetch(`https://rickandmortyapi.com/api/character/?page=20&status=alive`)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        
    });
};

fetchPersonaje();