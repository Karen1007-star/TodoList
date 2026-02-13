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
    listaPadre.appendChild(listaNueva)    
})
formulario1.addEventListener("submit",(e)=>{
    e.preventDefault();
    const valor = texto1.value;
    const listaNueva = document.createElement("li")
    listaNueva.textContent = valor;
    listaPadre.appendChild(listaNueva)    
})



