$textTarea = document.querySelector(".textoTarea")
$btnAdd = document.querySelector(".btn-add")
$listTarea = document.querySelector(".listaPadre-tareas")
// $textTarea = document.querySelector("#textoTarea")

$btnAdd.addEventListener("click",(e)=>{
    e.preventDefault();
        if ($textTarea.value === "") return;
            const li = document.createElement("li");
            li.textContent = $textTarea.value;
            $listTarea.appendChild(li);
            li.appendChild(crearBotones("e","edit"))
            li.appendChild(crearBotones("x", "eliminar"))
            $textTarea.value = "";
                    
})

$listTarea.addEventListener("click", (e)=>{
    if(e.target.classList.contains("eliminar")){
        borrar(e.target.parentElement)
    }else if(e.target.classList.contains("edit")){
        editar(e.target.parentElement)
    }
})

// editar
function editar (identidad){
    const nuevaTarea = prompt("edita aqui:", identidad.firstChild.textContent)
    if(nuevaTarea!=null && nuevaTarea.trim() !== ""){
        identidad.firstChild.textContent=nuevaTarea;
    }
}

// borrar
function borrar (identidad){
    if(confirm("estas segur@?")){
        identidad.remove();
    }
}

//crear botones
function crearBotones(text,nombreClase){
    const boton = document.createElement("button");
    boton.textContent = text;
    boton.className=nombreClase;
    return boton
}