const añadirNota = document.getElementById('addNoteBtn');
const contenedorNotas = document.getElementById('notesContainer');

añadirNota.addEventListener('click', () => {
    const nuevaNota = prompt('Escribe tu nota:');

    if(nuevaNota === "" || nuevaNota === null) {
        alert("Escribe algo!");
    } 
    
});