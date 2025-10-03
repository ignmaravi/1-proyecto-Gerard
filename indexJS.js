document.addEventListener("DOMContentLoaded", function () {
    const addNoteBtn = document.getElementById("addNoteBtn");
    const noteInput = document.getElementById("noteInput");
    const tablero = document.getElementById("tablero");

    function mostrarNota(texto) {
        const nuevaNota = document.createElement("div");
        nuevaNota.classList.add("nota");

        
        const spanTexto = document.createElement("span");
        spanTexto.textContent = texto;

        
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "X";
        btnBorrar.classList.add("btn-borrar");

        

        const btnEditar = document.createElement("button");
            btnEditar.textContent = "E";
            btnEditar.classList.add("btn-editar");
            btnEditar.addEventListener("click", function () {
                modificarNota(spanTexto);
        });

        btnBorrar.addEventListener("click", function () {
            borrarNota(nuevaNota);
        });

        nuevaNota.appendChild(spanTexto);
        nuevaNota.appendChild(btnBorrar);
        nuevaNota.appendChild(btnEditar);
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

    function modificarNota(spanTexto) {
        const nuevoTexto = prompt("Edita tu nota:", spanTexto.textContent);
        if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
            spanTexto.textContent = nuevoTexto.trim();
            guardarNotas(); 
    }
}

    function agregarNota() {
        const notaTexto = noteInput.value.trim();

        if (notaTexto !== "") {
            mostrarNota(notaTexto);
            noteInput.value = "";
            guardarNotas();
        }
    }

    function borrarNota(notaDiv) {
        notaDiv.remove();      
        guardarNotas();        
    }   


    addNoteBtn.addEventListener("click", agregarNota);

    noteInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            agregarNota();
        }
    });

    cargarNotas();
});
