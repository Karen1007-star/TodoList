$textoTareas = document.querySelector(".texto-tareas");
$padreLista = document.querySelector(".padre-lista");
$eliminar = document.querySelector(".eliminar");
$editar = document.querySelector(".editar");
$añadir = document.querySelector(".añadir");
document.addEventListener("DOMContentLoaded", cargarLocal);

$añadir.addEventListener("click",(e)=>{
    e.preventDefault();
    const lista = document.createElement("li");
    lista.textContent = $textoTareas.value; // primer hijo
    $padreLista.appendChild(lista)
    lista.appendChild(crearBotones("❌","eliminar"))
    lista.appendChild(crearBotones("✏️","editar"))
    $textoTareas.value="";
    guardarLocal();
})

    function eliminar(identidad){
        if(confirm("estas seguro?")){
            identidad.remove();
            guardarLocal();
        }
    }
    function editar (identidad){
        const tarea = prompt("edita aqui:", identidad.firstChild.textContent)
        identidad.firstChild.textContent = tarea;
        guardarLocal();
    }

$padreLista.addEventListener("click",(e)=>{
    if(e.target.classList.contains("eliminar")){
        eliminar(e.target.parentElement);
    }else if(e.target.classList.contains("editar")){
        editar(e.target.parentElement)
    }
})

function crearBotones (nombre,tipo){
    const boton = document.createElement("button");
    boton.textContent = nombre;
    boton.className = tipo;
    return boton;
}

function guardarLocal (){
    const tareas = [];
    document.querySelectorAll(".padre-lista li").forEach(li => {
        tareas.push(li.firstChild.textContent.trim());
    });
    localStorage.setItem("tareas", JSON.stringify(tareas));
}
function cargarLocal() {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.forEach(tarea => {
        const lista = document.createElement("li");
        lista.textContent = tarea;

        lista.appendChild(crearBotones("❌","eliminar"));
        lista.appendChild(crearBotones("✏️","editar"));

        $padreLista.appendChild(lista);
    });
}