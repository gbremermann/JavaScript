let nombre = prompt("Ingrese su nombre")
alert("Hola " + nombre + " te contamos que tenemos descuentos en sillones de 1, 2 y 3 cuerpos")
let respuesta = prompt("¿Que tamaño estabas buscando? Indique en numero, la cantidad de cuerpos que necesita su sillon")
if (respuesta != "1" && respuesta != "2" && respuesta != 3) {
    alert("Lo sentimos, no tenemos descuentos en esa medida!")
}
else if (respuesta == 1 || respuesta == 2 || respuesta == 3) {
    alert("Este modelo tiene 20% de descuento. Para sillones de 1 CUERPO indique el codigo (INDIVIDUAL), para sillones de 2 cuerpos indique (DOBLE) o para sillones de 3 CUERPOS (TRIPLE)")
    let entrada = prompt("Ingresar codigo de descuento (en letras mayusculas)");    
    while (entrada != "INDIVIDUAL" && entrada != "DOBLE" && entrada != "TRIPLE") {
        alert("El codigo de descuento " + entrada + " no es valido");
        entrada = prompt("Ingrese su codigo correctamente, verifique escribirlo en letras mayusculas");
        alert ("Usted accedio al codigo de descuento, el mismo se vera reflejado al terminar la compra.")
    }
}

