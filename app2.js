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