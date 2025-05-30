//promesa_async.js
const datos=[
    {id:1, title:"Adolescencia", year:2025},
    {id:2, title:"Godless", year:2017},
    {id:3, title:"Gambito de dama", year:2024},
];
//modo sincrono
function getDatos (){
    return datos;
}

//moso sincrono con funcion flecha
const getDatos = () => {
    return datos;
}

//simulacion de un modo de ejecucion asincrono
const getDatos = ()=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            return(datos);
        }
        , 2000);
    });
}

console.log(getDatos());

//obtiene datos

