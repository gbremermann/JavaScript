class Suscriptor {
  constructor(id, nombre, direccion, email) {
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.email = email;
  }
}

localStorage.setItem("suscriptores", JSON.stringify([]))

function aprobarSuscripcion() {
  const nombre = document.getElementById("nombre").value;
  const direccion = document.getElementById("direccion").value;
  const email = document.getElementById("email").value;

  const suscribidos = JSON.parse(localStorage.getItem("suscriptores"));
  const existeSuscriptor = suscribidos.find(
    (suscriptor) => suscriptor.email === email
  );

  if (!existeSuscriptor) {
    const unSuscriptor = new Suscriptor(
      suscribidos.length + 1,
      nombre,
      direccion,
      email
    );
    
    suscribidos.push(unSuscriptor);
    localStorage.setItem("suscriptores", JSON.stringify(suscribidos));
  }

  Swal.fire({
    position: 'center',
    icon: !existeSuscriptor ? 'success' : 'error',
    title: !existeSuscriptor ? 'Suscripción registrada exitosamente' : 'Error: Ya hay un suscriptor registrado con ese email',
  });
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  aprobarSuscripcion();
});