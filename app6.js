const formulario1= document.querySelector(".formulario1")
const texto1 = document.getElementById("texto1")
const agregar = document.getElementById("agregar")
const listaPadre=document.querySelector(".listaPadre")
const eliminar = document.querySelector(".eliminar")
const editar = document.querySelector(".editar")

formulario1.addEventListener("submit",(e)=>{
    e.preventDefault();
    const valor = texto1.value;
    const listaNueva = document.createElement("li")
    listaNueva.textContent = valor;
    listaNueva.appendChild(crearBotonesNuevos("❌","eliminar"))    
    listaNueva.appendChild(crearBotonesNuevos("✏️","editar"))
    listaPadre.appendChild(listaNueva)
    texto1.value=""    
})

listaPadre.addEventListener("click",(e)=>{
    if(e.target.classList.contains("eliminar")){
        eliminar1(e.target.parentElement)
    }else if(e.target.classList.contains("editar")){
        editar1(e.target.parentElement)
    }
})

function eliminar1 (identidad){
    if(confirm("estas seguro?")){
        identidad.remove();
    }
}

function editar1 (identidad){
    const nuevo = prompt("EScribe la edicion");
    identidad.firstChild.textContent=nuevo;
}

function crearBotonesNuevos(nombre, tipo){
    const boton = document.createElement("button")
    boton.textContent = nombre;
    boton.classList = tipo;
    return boton
}



