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
}

function editar1(identidad){
    const nuevito = prompt("edita aqui", identidad.firstChild.textContent)
    identidad.firstChild.textContent = nuevito;
}