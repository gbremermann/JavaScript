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

// const getData = async () => {
 
//   const fetchedData = await fetch("../public/data.json");
//   console.log("fetch", fetchedData)
//   const dataJSON = await fetchedData.json();
//   console.log("dataJSON", dataJSON)

//   return dataJSON;
// }

const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
    if (misProductos.length == 10) {
      resolve("promesa cumplida ");
    } else {
      reject("promesa rechazada");
    }
  });
};
//PROMESA CUMPLIDA
eventoFuturo(true)
  .then((response) => {})
  .catch((error) => {});

let product = [
  {
    modelo: "respaldo de sommier",
    tamano: "1 plaza",
    material: "chenille",
    precio: 6000,
  },
  {
    modelo: "respaldo de sommier",
    tamano: "2 plazas",
    material: "chenille",
    precio: 9000,
  },
  { modelo: "silla", tamano: "individual", material: "chenille", precio: 7000 },
  { modelo: "mesa", tamano: "1.20", material: "paraiso", precio: 26000 },
  {
    modelo: "sillon roma",
    tamano: "1 cuerpo",
    material: "chenille",
    precio: 15000,
  },
  {
    modelo: "sillon roma",
    tamano: "2 cuerpos",
    material: "chenille",
    precio: 25000,
  },
  {
    modelo: "sillon roma",
    tamano: "3 cuerpos",
    material: "chenille",
    precio: 35000,
  },
  {
    modelo: "sillon paris",
    tamano: "1 cuerpo",
    material: "chenille",
    precio: 13000,
  },
  {
    modelo: "sillon paris",
    tamano: "2 cuerpos",
    material: "chenille",
    precio: 23000,
  },
  {
    modelo: "sillon paris",
    tamano: "3 cuerpos",
    material: "chenille",
    precio: 33000,
  },
];

const formulario = document.querySelector("#formu");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");

const filtrar = () => {
  const texto = formulario.value.toLowerCase();


for (let producto of product){
    let modelo = producto.modelo.toLocaleLowerCase();
    if (modelo.indexOf(texto)  !==-1){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tenemos el producto que buscas',

      })
    }
    }
  };
boton.addEventListener("click", filtrar);


// let response;
// getData().then(resp => console.log(resp));

// console.log(response)





//a continuacion traigo los productos desde el archivo .json

function cargarP(){
  fetch('./public/data.json')
    .then (respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta))
  }
  
cargarP();

// a continuacion le agrego 2 productos al ARRAY product, pero en realidad quisiera agregarselos al array que traje del archivo data.json

const recuperadas = localStorage.getItem("product");
const convertido = JSON.parse(recuperadas);

convertido.push({
  modelo: "poltrona",
  tamano: "individual",
  material: "cuero",
  precio: 10500,
});

convertido.push({
  modelo: "silla matera",
  tamano: "doble",
  material: "cuero",
  precio: 17500,
})


localStorage.setItem("articulo Nuevo", JSON.stringify(convertido));
console.log(convertido);




