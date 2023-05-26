class Suscriptor{
  constructor(id, nombre, direccion, email){
      this.id= id;
      this.nombre=nombre;
      this.direccion=direccion;
      this.email=email;
  }
}

let suscribidos = [];

function aprobarSuscripcion(info){

const nombre= document.getElementById("nombre").value;
const direccion= document.getElementById("direccion").value;
const email= document.getElementById("email").value;


const unaOcupacion = suscribidos.find((e) => e.id.toString() === suscribidos);
const unSuscriptor = new Suscriptor(
  suscribidos.length+1, 
  nombre, 
  direccion, 
  email
  );

  suscribidos.push(unSuscriptor);
  console.log("Que elementos poseee mi array de participantes", suscribidos )
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  aprobarSuscripcion(e.target);
});
