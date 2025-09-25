document.addEventListener("DOMContentLoaded", () => {
    const addNoteBtn = document.getElementById("addNoteBtn");
    const noteInput = document.getElementById("noteInput");
    const tablero = document.getElementById("tablero");

    // Cargar notas desde localStorage
    const notas = JSON.parse(localStorage.getItem("notas") || "[]");
    notas.forEach(texto => {
        const nota = document.createElement("div");
        nota.textContent = texto;
        nota.classList.add("nota");
        tablero.appendChild(nota);
    });

    function guardarNotas() {
        const textos = Array.from(tablero.children).map(div => div.textContent);
        localStorage.setItem("notas", JSON.stringify(textos));
    }

    function agregarNota() {
        const texto = noteInput.value.trim();
        if (!texto) return;

        const nota = document.createElement("div");
        nota.textContent = texto;
        nota.classList.add("nota");
        tablero.appendChild(nota);

        noteInput.value = "";
        guardarNotas();
    }

    addNoteBtn.addEventListener("click", agregarNota);
    noteInput.addEventListener("keydown", e => {
        if (e.key === "Enter") agregarNota();
    });
});
