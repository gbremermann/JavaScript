// function saludar (){
//     alert ("Muchas gracias por visitarnos, disfrute nuestros descuentos");
// }
// saludar();

// let nombre = prompt("Ingrese su nombre");
// alert("Hola " + nombre + " te contamos que tenemos descuentos en sillones de 1, 2 y 3 cuerpos");
// let respuesta = prompt("¿Que tamaño estabas buscando? Indique en numero, la cantidad de cuerpos que necesita su sillon");
// if (respuesta != "1" && respuesta != "2" && respuesta != 3) {
//     alert("Lo sentimos, no tenemos descuentos en esa medida!");
// }
// else if (respuesta == 1 || respuesta == 2 || respuesta == 3) {
//     alert("Este modelo tiene 20% de descuento. Para sillones de 1 CUERPO indique el codigo (INDIVIDUAL), para sillones de 2 cuerpos indique (DOBLE) o para sillones de 3 CUERPOS (TRIPLE)");
//     let entrada = prompt("Ingresar codigo de descuento (en letras mayusculas)");    
//     while (entrada != "INDIVIDUAL" && entrada != "DOBLE" && entrada != "TRIPLE") {
//         alert("El codigo de descuento " + entrada + " no es valido");
//         entrada = prompt("Ingrese su codigo correctamente, verifique escribirlo en letras mayusculas");
//     }
//     alert ("Su codigo fue aprobado, el descuento se vera reflejado al final de la compra");
// }

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























