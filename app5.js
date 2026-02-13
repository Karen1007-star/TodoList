// const $text = document.getElementById("texto");
// const $botonG = document.getElementById("botonGuardar");
// const $mensaje = document.getElementById("mensaje");
// const $eliminar = document.getElementById("eliminar");

// $botonG.addEventListener("click",()=>{
//     // console.log($text.value)
//     if($text.value.trim()!=""){
//         localStorage.setItem("nombre de usuario", $text.value)
//         $mensaje.textContent = "Hola  " + $text.value
//         $text.value="";
//     }
// })
// const nombreGuardado = localStorage.getItem("nombre de usuario")
// if(nombreGuardado && nombreGuardado.trim() !== "") {
//     $mensaje.textContent = "Hola " + nombreGuardado;
// }

// $eliminar.addEventListener("click",()=>{
//     localStorage.removeItem("nombre de usuario")
//     $mensaje.textContent = "Mensaje Eliminado"
// })

const $mensajeColor = document.getElementById("mensajeColor")
const $guardar = document.getElementById("guardar")
const $eliminar = document.getElementById("eliminar")
const $color = document.getElementById("color")
const $visitas = document.getElementById("visitas")
const $recargar = document.getElementById("recargar")
const CLAVE_COLOR = "colorFavorito";


$guardar.addEventListener("click",()=>{
    const colorcito = $color.value.trim();
    
    if (colorcito !== "") {
        localStorage.setItem(CLAVE_COLOR, colorcito);
        $mensajeColor.textContent = "El color es: " + colorcito;
        $color.value = ""; // limpiar input
    } else {
        alert("Por favor ingresa un color");
    }
})

const colorGuardado = localStorage.getItem(CLAVE_COLOR);
if (colorGuardado && colorGuardado.trim() !== "") {
    $mensajeColor.textContent = "El color es: " + colorGuardado;
} else {
    $mensajeColor.textContent = "No hay color guardado";
}

$eliminar.addEventListener("click",()=>{
    const colorActual = localStorage.getItem(CLAVE_COLOR);
    localStorage.removeItem(CLAVE_COLOR)
    $mensajeColor.textContent = "Color " + colorActual + " eliminado"
})
const CLAVE_CONTADOR = "contadorVisitas";
let contador = parseInt(localStorage.getItem(CLAVE_CONTADOR)) || 0;
$visitas.textContent = "Has visitado la página " + contador + " veces";

$recargar.addEventListener("click",()=>{
    contador++;
    $visitas.textContent = "Has visitado la página " + contador + " veces";
    localStorage.setItem(CLAVE_CONTADOR, contador);
})

