document.addEventListener("DOMContentLoaded", function () {
    const addNoteBtn = document.getElementById("addNoteBtn");
    const noteInput = document.getElementById("noteInput");
    const tablero = document.getElementById("tablero");

    function mostrarNota(texto) {
        const nuevaNota = document.createElement("div");
        nuevaNota.textContent = texto;
        nuevaNota.classList.add("nota");
        tablero.appendChild(nuevaNota);
    }

    function cargarNotas() {
        const notasGuardadas = localStorage.getItem("notas");
        if (notasGuardadas) {
            const notasArray = JSON.parse(notasGuardadas);
            notasArray.forEach(mostrarNota);
        }
    }

    function guardarNotas() {
        const notas = [];
        tablero.querySelectorAll(".nota").forEach(notaDiv => {
            notas.push(notaDiv.textContent);
        });
        localStorage.setItem("notas", JSON.stringify(notas));
    }

    function agregarNota() {
        const notaTexto = noteInput.value.trim();

        if (notaTexto !== "") {
            mostrarNota(notaTexto);
            noteInput.value = "";
            guardarNotas();
        }
    }

    addNoteBtn.addEventListener("click", agregarNota);

    noteInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            agregarNota();
        }
    });

    cargarNotas();
});
