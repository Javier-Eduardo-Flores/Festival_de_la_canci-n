ScrollReveal().reveal(".header-images");
ScrollReveal().reveal(".header-text" ,{dalay:500});
ScrollReveal().reveal(".button" ,{dalay:500});
ScrollReveal().reveal(".main-content" ,{dalay:500});
ScrollReveal().reveal(".content" ,{dalay:500});
ScrollReveal().reveal(".form-content" ,{dalay:500});

const numeroCanciones = document.querySelector("#select-canciones");
const tipoParticipante = document.getElementsByName("tipo-participante");
const divGrupal = document.querySelector(".grupal");
const camposGrupal = divGrupal.querySelectorAll("input, select");
const numeroIntegrantes = document.querySelector(".cantidad-integrantes");

numeroCanciones.addEventListener("change", () => {
    removerCanciones();
    crearCanciones(numeroCanciones.value);
});

numeroIntegrantes.addEventListener("change",()=>{
    removerIntegrantes();
    crearIntegrante(numeroIntegrantes.value);
})


//Funcion para la creacion de Canciones
//crea canciones y las agrega al div con la clase canciones
//recibe por parametro el numero de canciones a crear
const crearCanciones = (numCanciones) => {
    const cancionesContainer = document.querySelector(".canciones");

    for (let i = 1; i <= numCanciones; i++) {
        const newCancion = document.createElement("div");
        newCancion.classList.add("cancion");
        newCancion.innerHTML = `
            <h3>Canción <span class="numero-Cancion">${i}</span></h3>
            <input type="text" name="nombre-de-la-canción-${i}" placeholder="Nombre de la canción" required>
            <textarea name="Instrumentos-a-utilizar-cancion-${i}" placeholder="Instrumentos a utilizar" required></textarea>
            <textarea name="descripcion-de-la-cancion-${i}" placeholder="Breve descripción de la canción" required></textarea>
        `;
        cancionesContainer.appendChild(newCancion);
    };
};
//Funcion para remover canciones
//Remueve todas las canciones del div con la clase canciones
const removerCanciones = () => {
    const cancionesContainer = document.querySelector(".canciones");
    cancionesContainer.innerHTML = ''; 
};



function handleTipoParticipanteChange() {
    if (tipoParticipante[1].checked) {
        divGrupal.style.display = "flex"; 
        habilitarCampos(camposGrupal);
    } else {
        divGrupal.style.display = "none"; 
        deshabilitarCampos(camposGrupal); 
    }
}


function habilitarCampos(campos) {
    campos.forEach(campo => {
        campo.removeAttribute("disabled");
        campo.required = true; 
    });
}


function deshabilitarCampos(campos) {
    campos.forEach(campo => {
        campo.setAttribute("disabled", "true");
        campo.required = false; 
    });
}


for (let i = 0; i < tipoParticipante.length; i++) {
    tipoParticipante[i].addEventListener("change", handleTipoParticipanteChange);
}


handleTipoParticipanteChange();


//Funcion para la creacion de integrantes
//crea integrantes y los agrega al div con la clase integrantes
//recibe por parametro el numero de integrantes a crear
const crearIntegrante = (numIntegrantes)=>{
    const integrantesContainer = document.querySelector(".integrantes");

    for (let i = 1; i <= numIntegrantes; i++) {
        const newintegrante = document.createElement("div");
        newintegrante.classList.add("integrante");
        newintegrante.innerHTML = `
        <h3>integrante <span class="numero-integrante">${i}</span></h3>
        <input type="text" name="nombre-del-integrante-${i}" placeholder="Nombre del integrante" required>
        <input type="text" name="especialidad-del-integrante=${i}" placeholder="Especialidad del integrante">
        `;
        integrantesContainer.appendChild(newintegrante);
    };
}

//Funcion para remover integrantes
//Remueve todos los integrantes del div con la clase integrantes
const removerIntegrantes = () => {
    const integrantesContainer = document.querySelector(".integrantes");
    integrantesContainer.innerHTML = ''; 
};




