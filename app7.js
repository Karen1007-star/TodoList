
const formulario7=document.getElementById("formulario7")
const textoTareas = document.getElementById("textosTareas")
const listaPadre = document.getElementById("listaPadre1")
const añadir = document.getElementById("añadir")
const eliminar = document.getElementById("eliminar")
const editar = document.getElementById("editar")


formulario7.addEventListener("submit",(e)=>{
    e.preventDefault();
    const lista = document.createElement("li")
    lista.textContent = textoTareas.value;
    listaPadre.appendChild(lista)
    lista.append(crearBoton("❌","eliminar"))
    lista.append(crearBoton("✏️","editar"))
})

listaPadre.addEventListener("click",(e)=>{
    if(e.target.classList.contains("eliminar")){
        eliminar2(e.target.parentElement)
    }else if(e.target.classList.contains){
        editar2(e.target.parentElement)
    }
})

function crearBoton(nombre, tipo){
    const boton = document.createElement("button")
    boton.textContent = nombre
    boton.classList=tipo
    return boton
}

function eliminar2(identidad){
    if(confirm("estas seguro?")){
        identidad.remove()
    }
}

function editar2(identidad){
    const nuevo = prompt("edita aqui")
    identidad.firstChild.textContent = nuevo
}