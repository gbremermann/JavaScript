class Producto {
  constructor(modelo, tamano, material, precio) {
    this.modelo = modelo.toUpperCase();
    this.tamano = tamano;
    this.material = material;
    this.precio = parseInt(precio);
  }
}

let misProductos = [
  new Producto("respaldo de sommier", "1 plaza", "chenille", 6000),
  new Producto("respaldo de sommier", "2 plazas", "chenille", 9000),
  new Producto("silla", "individual", "chenille", 7000),
  new Producto("mesa", "1.20", "paraiso", 26000),
  new Producto("sillon roma", "1 cuerpo", "chenille", 15000),
  new Producto("sillon roma", "2 cuerpo", "chenille", 25000),
  new Producto("sillon roma", "3 cuerpo", "chenille", 35000),
  new Producto("sillon paris", "1 cuerpo", "chenille", 13000),
  new Producto("sillon paris", "2 cuerpo", "chenille", 23000),
  new Producto("sillon paris", "3 cuerpo", "chenille", 33000),
];

let subtitulo = document.getElementById("subti");
subti.innerHTML = "<strong> SOFA INDIVIDUAL </strong>";

let tamano = document.getElementsByClassName("tamano");
console.log("Los tamaños de sofa disponibles son", tamano);

const enJSON = JSON.stringify(misProductos);

localStorage.setItem("miArray", enJSON);

let misArt = localStorage.getItem("miArray");
console.log(misArt);

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

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  });

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "recurso",
    body: "agregado ",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "recurso actualizado",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
    if (misProductos.length==10) {
      resolve("promesa cumplida ");
    } else {
      reject("promesa rechazada");
    }
  });
};

eventoFuturo(true)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
