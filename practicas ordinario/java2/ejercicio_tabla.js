arreglo = [
    {
        id: 1,
        nombre: "Juan",
        apellido: "Ruiz",
        correo: "juan.ruiz@example.com",
        telefono: "123-456-7890",
        comentario: "Este es un comentario."
    },
    {
        id: 2,
        nombre: "Ana",
        apellido: "Gomez",
        correo: "ana.gomez@example.com",
        telefono: "234-567-8901",
        comentario: "Comentario de Ana."
    },
    {
        id: 3,
        nombre: "Luis",
        apellido: "Martinez",
        correo: "luis.martinez@example.com",
        telefono: "345-678-9012",
        comentario: "Comentario de Luis."
    },
    {
        id: 4,
        nombre: "Maria",
        apellido: "Lopez",
        correo: "maria.lopez@example.com",
        telefono: "456-789-0123",
        comentario: "Comentario de Maria."
    },
    {
        id: 5,
        nombre: "Carlos",
        apellido: "Hernandez",
        correo: "carlos.hernandez@example.com",
        telefono: "567-890-1234",
        comentario: "Comentario de Carlos."
    },
    {
        id: 6,
        nombre: "Sofia",
        apellido: "Perez",
        correo: "sofia.perez@example.com",
        telefono: "678-901-2345",
        comentario: "Comentario de Sofia."
    },
    {
        id: 7,
        nombre: "Diego",
        apellido: "Ramirez",
        correo: "diego.ramirez@example.com",
        telefono: "789-012-3456",
        comentario: "Comentario de Diego."
    },
    {
        id: 8,
        nombre: "Laura",
        apellido: "Torres",
        correo: "laura.torres@example.com",
        telefono: "890-123-4567",
        comentario: "Comentario de Laura."
    },
    {
        id: 9,
        nombre: "Jorge",
        apellido: "Vargas",
        correo: "jorge.vargas@example.com",
        telefono: "901-234-5678",
        comentario: "Comentario de Jorge."
    },
    {
        id: 10,
        nombre: "Elena",
        apellido: "Castro",
        correo: "elena.castro@example.com",
        telefono: "012-345-6789",
        comentario: "Comentario de Elena."
    }
];

tabla=document.querySelector("#tabla");

function crearTabla(params) {
    var cadena = "<table>";
    cadena=cadena+"<thead>";
    cadena=cadena+"<tr>";
    cadena=cadena+"<th>Id</th>";
    cadena=cadena+"<th>Nombre</th>";
    cadena=cadena+"<th>Apellido</th>";
    cadena=cadena+"<th>Correo</th>";
    cadena=cadena+"<th>Telefono</th>";
    cadena=cadena+"<th>Comentario</th>";
    cadena=cadena+"</tr>";
    cadena=cadena+"</thead>";
    cadena=cadena+"<tbody>";
    for (let i = 0; i < arreglo.length; i++) {
        cadena=cadena+"<tr>";
        cadena=cadena+"<td>"+arreglo[i].id+"</td>";
        cadena=cadena+"<td>"+arreglo[i].nombre+"</td>";
        cadena=cadena+"<td>"+arreglo[i].apellido+"</td>";
        cadena=cadena+"<td>"+arreglo[i].correo+"</td>";
        cadena=cadena+"<td>"+arreglo[i].telefono+"</td>";
        cadena=cadena+"<td>"+arreglo[i].comentario+"</td>";
        cadena=cadena+"</tr>";
    }
    cadena=cadena+"</tbody>";
    cadena=cadena+"</table>";
    tabla.innerHTML=cadena;
}

crearTabla();

function agregarFila() {
    
    const id = document.querySelector("#id").value;
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const correo = document.querySelector("#correo").value;
    const telefono = document.querySelector("#telefono").value;
    const comentario = document.querySelector("#comentario").value;

    if (id && nombre && apellido && correo && telefono && comentario) {
        body = tabla.querySelector("tbody");
        const newRow = body.insertRow();
        newRow.innerHTML = `
        <td>${id}</td>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${correo}</td>
        <td>${telefono}</td>
        <td>${comentario}</td>
        `;
        document.getElementById("formulario").reset();

    } else {
        alert("Por favor llene todos los campos");
    }

}


crearTabla();


//ns quien seas pero preguntale a claude, ese wey sabe cosas