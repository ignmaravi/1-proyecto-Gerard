// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
    const addNoteBtn = document.getElementById("addNoteBtn");
    const noteInput = document.getElementById("noteInput");
    const tablero = document.getElementById("tablero");

    addNoteBtn.addEventListener("click", function () {
        const notaTexto = noteInput.value.trim();

        if (notaTexto !== "") {
            const nuevaNota = document.createElement("div");
            nuevaNota.textContent = notaTexto;
            nuevaNota.classList.add("nota"); // Para estilos si deseas
            tablero.appendChild(nuevaNota);
            noteInput.value = ""; // Limpia el input
        }
    });
});
