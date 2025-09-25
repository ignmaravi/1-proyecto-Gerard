document.addEventListener("DOMContentLoaded", function () {
    const addNoteBtn = document.getElementById("addNoteBtn");
    const noteInput = document.getElementById("noteInput");
    const tablero = document.getElementById("tablero");

    function agregarNota() {
        const notaTexto = noteInput.value.trim();

        if (notaTexto !== "") {
            const nuevaNota = document.createElement("div");
            nuevaNota.textContent = notaTexto;
            nuevaNota.classList.add("nota");
            tablero.appendChild(nuevaNota);
            noteInput.value = "";
        }
    }

    addNoteBtn.addEventListener("click", agregarNota);

    noteInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            agregarNota();
        }
    });
});
