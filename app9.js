const form9=document.getElementById("formulario9")
const textTareas=document.getElementById("textoTareas")
const agregar=document.getElementById("ad")
const padre=document.getElementById("listaPadre")

form9.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(textTareas.value)
    const texto=textTareas.value
    const lista=document.createElement("li")
    lista.textContent = texto
    padre.appendChild(lista)
    lista.append(crearbotoncito("❌","eliminar"))
    lista.append(crearbotoncito("✏️","editar"))
    textTareas.value = ""
})

function crearbotoncito(nombre,tipo){
    const boton = document.createElement("button")
    boton.textContent = nombre;
    boton.id=tipo;
    return boton
}

padre.addEventListener("click",(e)=>{
    if(e.target.id=="eliminar"){
        eliminar3(e.target.parentElement)
    } else if(e.target.id=="editar"){
        editar3(e.target.parentElement)
    }
})

function eliminar3(ident){
    if(confirm("estas segur@")){
        ident.remove();
    }
}

function editar3(ident){
    const nuevo = prompt("edita aqui", ident.firstChild.textContent)
    ident.firstChild.textContent = nuevo;
}
