class Producto{
    constructor (modelo, tamano , material, precio){ 
    this.modelo= modelo.toUpperCase();
    this.tamano= tamano;
    this.material= material;
    this.precio= parseInt(precio);
    }
}

let misProductos = [
    new Producto ("respaldo de sommier", "1 plaza", "chenille",6000),
    new Producto ("respaldo de sommier", "2 plazas", "chenille",9000),
    new Producto ("silla", "individual", "chenille",7000),
    new Producto ("mesa", "1.20", "paraiso",26000),
    new Producto ("sillon roma", "1 cuerpo", "chenille",15000),
    new Producto ("sillon roma", "2 cuerpo", "chenille",25000),
    new Producto ("sillon roma", "3 cuerpo", "chenille",35000),
    new Producto ("sillon paris", "1 cuerpo", "chenille",13000),
    new Producto ("sillon paris", "2 cuerpo", "chenille",23000),
    new Producto ("sillon paris", "3 cuerpo", "chenille",33000),
]


let subtitulo = document.getElementById("subti");
subti.innerHTML = "<strong> SOFA INDIVIDUAL </strong>";


let tamano= document.getElementsByClassName("tamano")
console.log("Los tamaños de sofa disponibles son", tamano)


const enJSON= JSON.stringify(misProductos);

localStorage.setItem("miArray", enJSON);

let misArt= localStorage.getItem("miArray");
console.log(misArt)























