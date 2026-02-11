const $tareaText= document.getElementById("tarea-text");
const $btnAceptar = document.getElementById("");
const $formTareas = document.getElementById("form-tareas");
const $listTareas = document.getElementById("lista-tareas");

$formTareas.addEventListener("submit",(e)=>{
    e.preventDefault();
    const $textoR= document.getElementById("tarea-text");
    const text = $textoR.value;
    if(text){
        $listTareas.append(createElementoTarea(text));
        $textoR.value="";
    }
})

$listTareas.addEventListener("click",(e)=>{
    if(e.target.classList.contains("btn-eliminar")){
        eliminar(e.target.parentElement)
    }else if(e.target.classList.contains("btn-aceptar")){
        editarInline(e.target.parentElement)
    }
})

function createElementoTarea(tarea){
    const li=document.createElement("li")
    li.textContent = tarea;
    li.append(creaBoton("x", "btn-eliminar"), creaBoton("V", "btn-aceptar"))
    return li
}
function creaBoton(text, className) {
  const btn = document.createElement("span");
  btn.textContent = text;
  btn.className = className;
  return btn;
}

function eliminar (elemento){
    if(confirm("estas seguro?")){
        elemento.remove();
    }
}

function editarInline(li) {
    // evita doble edición
    if (li.classList.contains("editando")) return;

    li.classList.add("editando");

    const textoNodo = li.firstChild;
    const textoActual = textoNodo.textContent;

    const input = document.createElement("input");
    input.type = "text";
    input.value = textoActual;
    input.className = "input-editar";

    li.insertBefore(input, textoNodo);
    li.removeChild(textoNodo);

    input.focus();

    const guardar = () => {
        const nuevoTexto = input.value.trim() || textoActual;

        const nuevoTextoNodo = document.createTextNode(nuevoTexto);
        li.insertBefore(nuevoTextoNodo, input);
        li.removeChild(input);

        li.classList.remove("editando");
    };

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") guardar();
        if (e.key === "Escape") guardar();
    });

    input.addEventListener("blur", guardar);
}
// function guardarEdicion(li, nuevoTexto) {
//     if (!nuevoTexto.trim()) return;

//     li.innerHTML = "";
//     li.textContent = nuevoTexto;

//     // volver a poner botones
//     li.append(
//         creaBoton("x", "btn-eliminar"),
//         creaBoton("v", "btn-editar")
//     );
// }