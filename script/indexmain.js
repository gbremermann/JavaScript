class Producto {
  constructor(modelo, tamano, material, precio) {
    this.modelo = modelo.toLocaleLowerCase();
    this.tamano = tamano;
    this.material = material;
    this.precio = parseInt(precio);
  }
}

let misProductos = [
  new Producto("respaldo de sommier", "1 plaza", "chenille", 6000),
  new Producto("silla", "individual", "chenille", 7000),
  new Producto("mesa", "1.20", "paraiso", 26000),
  new Producto("sillon roma", "3 cuerpo", "chenille", 35000),
  new Producto("sillon paris", "1 cuerpo", "chenille", 13000),
  new Producto("sillon paris", "2 cuerpo", "chenille", 23000),
];

let subtitulo = document.getElementById("subti");
subti.innerHTML = "<strong> SOFA INDIVIDUAL </strong>";

    setTimeout(()=>{
        Swal.fire({
            title: 'Durante el mes de Junio 20% de DESCUENTO',

            icon: 'warning',
            showButton: true,
            confirmButtonColor: '#3085d6',
            ButtonColor: '#d33',
            confirmButtonText: '¿Queres recibir el beneficio?'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Ingresa tus datos en la seccion REGISTRARSE y accede a ellos',
                'Gracias por visitarnos!',
                'success'
              )
              }
})

    },4000);



// A continuacion traigo los productos desde el archivo .json
const cargarP = async () => {
  try {
    const respuesta = await fetch('./public/data.json');
    const respuestaJSON = await respuesta.json();
    return respuestaJSON;

  } catch (err) {
    throw ("Error al Obtener la data del archivo data.json")
  }
}

let productosDelJSON;

cargarP().then(JSONProductsArray => {
  localStorage.setItem("products", JSON.stringify(JSONProductsArray)); // GUARDO EN EL LOCAL STORAGE LOS PRODUCTOS TRAIDOS DEL JSON

  const productosDelLocalStorage = JSON.parse(localStorage.getItem("products")); // RECUPERO LOS PRODUCTOS DEL LOCAL STORAGE

  // AGREGO DOS PRODUCTOS NUEVOS Y ACTUALIZO LOS PRODUCTOS EN LOCAL STORAGE
  productosDelLocalStorage.push({
    modelo: "poltrona",
    tamano: "individual",
    material: "cuero",
    precio: 10500,
  });

  productosDelLocalStorage.push({
    modelo: "silla matera",
    tamano: "doble",
    material: "cuero",
    precio: 17500,
  });

  localStorage.setItem("products", JSON.stringify(productosDelLocalStorage));
  productosDelJSON = productosDelLocalStorage; // LOS PRODUCTOS DEL LOCAL STORAGE SON RECUPERADOS DEL ARCHIVO JSON

}).catch(err => console.log(err));


// BUSCO DESDE EL ARRAY DE PRODUCTOS DEL JSON, EL PRODUCTO INGRESADO POR EL USUARIO 
const formulario = document.getElementById("formulario");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});

const filtrar = () => {
  let producto_encontrado = false;
  const texto = document.getElementById("formu").value;

  for (let producto of productosDelJSON){
    let modelo = producto.modelo.toLowerCase();
      if (modelo.indexOf(texto) !== -1) {
        producto_encontrado = true;
        break;
      }
  }

  Swal.fire({
    position: 'center',
    icon: producto_encontrado ?  'success' : 'error',
    title: producto_encontrado ? 'Tenemos el producto que buscas, proximamente estara cargado al catalogo digital' : 'No comercializamos el producto que buscas',
  });
};

boton.addEventListener("click", filtrar);


