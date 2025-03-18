// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
    
    if (nombre === "" || !regex.test(nombre)) {
        alert("Por favor, ingrese un nombre válido (solo letras y espacios).");
        return;
    }
    
    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    
    listaAmigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo secreto: <strong>${amigoSorteado}</strong> 🎉</li>`;
    }