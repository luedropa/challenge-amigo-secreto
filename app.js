// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let elementos = [];
let amigo;
let listaAmigos = document.querySelector("#listaAmigos");
let resultado = document.querySelector("#resultado");

function agregarAmigo(){
    amigo = document.querySelector("#amigo").value;
    if(amigo==""){
        alert("Por favor, inserte un nombre");
    }else {
        if(amigos.includes(amigo)){
            alert("el nombre ya esta en la lista")
        }
        else{
            amigos.push(amigo);
            limpiarCaja();
        }
    }

    agregarALaLista();
    añadirTexto();
    añadirElementoALaLista();
    resultado.innerHTML="";
    
}


function limpiarCaja(){
    document.querySelector("#amigo").value="";
}

function agregarALaLista(){
    
    elementos.push(document.createElement("li"));  
}

function añadirTexto(){
    for(let i=0; i<elementos.length; i++){
        elementos[i].textContent = amigos[i];
        
    }
}
function añadirElementoALaLista(){
    for(let i=0; i<amigos.length; i++){
        listaAmigos.appendChild(elementos[i]);
    }  
}

function sortearAmigo(){
    
    if(amigos.length==0){
        alert("la lista de amigos esta vacia");
    }else{
        let indice = Math.floor(Math.random()*amigos.length);
        resultado.innerHTML = amigos[indice];
        listaAmigos.innerHTML = "";
        amigos = [];
        
    }
}

