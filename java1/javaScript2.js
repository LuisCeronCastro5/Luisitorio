var contenedor = document.getElementById("contenido");
contendedor.innerText ="Este mensaje viene de javaScript2.js"; ;
function mostrarMensaje(){
    alert("Hola, Javascript es divertido");
}

function leerValor(){
    const Input= document.getElementById("unInput").value;
    const valor=Input.value;
    alert("El valor es: " + valor);
}