console.log("conectado")

const textTareas = document.getElementById("textTareas")
const añadir=document.getElementById("añadir")
const listaPadre=document.getElementById("listaPadre")

añadir.addEventListener("click",()=>{
    const valor = textTareas.value
    // console.log(textTareas.value)
    const tarea=document.createElement("li")
    tarea.textContent=valor
    listaPadre.appendChild(tarea)
    tarea.append(crearbotoncito10("❌","eliminar"))
    tarea.append(crearbotoncito10("✏️","editar"))
    textTareas.value=""
})

function crearbotoncito10(name,tipo){
    const boton = document.createElement("button")
    boton.textContent=name;
    boton.id=tipo;
    return boton
}

listaPadre.addEventListener("click",(e)=>{
    if(e.target.id=="eliminar"){
        eliminar(e.target.parentElement)
    }else if(e.target.id=="editar"){
        editar(e.target.parentElement)
    }
})

function eliminar(identidad){
    if(confirm("estas segur@? ")){
        identidad.remove()
    }
}

function editar(identidad){
    const nuevo = prompt("edita aqui", identidad.firstChild.textContent)
    identidad.firstChild.textContent = nuevo;
    
}