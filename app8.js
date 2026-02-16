console.log("conectado")
const formulario8=document.getElementById("formulario8")
const textActivi = document.getElementById("textoActividades")
const agregar=document.getElementById("agregar")
const ulLista=document.getElementById("ListaFormulario8")
const eliminar = document.getElementById("eliminar")
const editar = document.getElementById("editar")

formulario8.addEventListener("submit",(e)=>{
    e.preventDefault();
    valorTexto=textActivi.value;
    const lista = document.createElement("li")
    lista.textContent = valorTexto;
    ulLista.appendChild(lista)
    lista.append(creaButon("❌","eliminar"))
    lista.append(creaButon("✏️","editar"))
    textActivi.value="";

    guardarDatos()
})

ulLista.addEventListener("click",(e)=>{
    if(e.target.id=="eliminar"){
        eliminar1(e.target.parentElement)
    }else if(e.target.id=="editar"){
        editar1(e.target.parentElement)
    }
})

function creaButon(nombre,tipo){
    const boton1= document.createElement("button")
    boton1.textContent=nombre;
    boton1.id = tipo
    return boton1
}

function eliminar1(identidad){
    if(confirm("estas seguro?")){
        identidad.remove();
    }
    guardarDatos()
}

function editar1(identidad){
    const nuevito = prompt("edita aqui", identidad.firstChild.textContent)
    identidad.firstChild.textContent = nuevito;
    guardarDatos()
}

function guardarDatos(){
    const tareas = []
    ulLista.querySelectorAll("li").forEach((lista)=>{
        tareas.push(lista.firstChild.textContent)
    })
    localStorage.setItem("misActividades",JSON.stringify(tareas))
}

function cargarLisitita(){
    const datos = JSON.parse(localStorage.getItem("misActividades"))
    if(datos){
        datos.forEach((tareitas)=>{
            const li=document.createElement("li")
            li.textContent = tareitas;
            li.append(creaButon("❌","eliminar"))
            li.append(creaButon("✏️","editar"))
            ulLista.appendChild(li)
        })
    }
}

cargarLisitita();