alert ("Hola, gracias por visitarnos. Te contamos que tenemos 20% de descuento en todos los productos durante el mes de ABRIL")

let finDescuento = new Date(2023, 4, 1);
let hoy = new Date();

const diferencia = finDescuento - hoy;

const milisegundosPorDia = 86400000;

alert("Apuráte, no te lo pierdas! Aún te quedan " + Math.round((diferencia/milisegundosPorDia)) + " días para disfrutar de nuestros descuentos"); 

class Producto{
    constructor (modelo, tamano , material, precio){ 
    this.modelo= modelo.toUpperCase();
    this.tamano= tamano;
    this.material= material;
    this.precio= parseInt(precio);
    }
}

let misProductos = [
    new Producto ("respaldo de sommier", "1 plaza", "chenille", 6000),
    new Producto ("respaldo de sommier", "2 plazas", "chenille", 9000),
    new Producto ("silla", "individual", "chenille", 7000),
    new Producto ("mesa", "1.20", "paraiso", 26000),
    new Producto ("sillon roma", "1 cuerpo", "chenille", 15000),
    new Producto ("sillon roma", "2 cuerpo", "chenille", 25000),
    new Producto ("sillon roma", "3 cuerpo", "chenille", 35000),
    new Producto ("sillon paris", "1 cuerpo", "chenille", 13000),
    new Producto ("sillon paris", "2 cuerpo", "chenille", 23000),
    new Producto ("sillon paris", "3 cuerpo", "chenille", 33000),
]

console.log ("Los productos que actualmente comercializamos son: " , misProductos);


 let nombreBuscado = prompt("¿Qué productos quieres buscar?");


let productosHallados = misProductos.filter(
  (unProducto) => unProducto.modelo.includes(nombreBuscado.toUpperCase())
);
if (productosHallados.length>=1 && nombreBuscado!=""){ 
alert("Si! Tenemos  " +productosHallados.length +" modelo de " + nombreBuscado + " esperandote en nuestro catálogo de productos.");
}
else{
alert ("Lo sentimos, no vendemos ese producto. Te invitamos a que veas nuestros productos en el catálogo.")
}























