Entrega Final curso JavaScript
Comision: #39505
Alumno: Guillermo Bremermann



Mediante el boton Registrarse, se accede a la pagina html de suscripciones , y  mediante evento con el boton Enviar, se realiza la suscripcion de los usuarios. Mediante el Swal se verifica si el usuario pudo ser Suscripto o no. Siendo la repeticion de correo electronico la razon para no permitirlo. Y se realiza la carga de los mismos al array de suscriptores en el Local Storage.



Se cargan los archivos en el archivo .json. 
Desde alli, se recuperan (mediante el uso de promesas , async y await)y se guardan en el LocalStorage.
Luego los recupero de Local, para cargarle dos articulos nuevos y actualizo el local Storage.
Esto a la vez, se guardan en la variable product, para que luego el los usuarios del sitio, puedan verificar si contamos con el producto que busca (lo cual responderemos mediante en Swal)


Se arreglaron los enlaces y se borraron los console.log.
Se corrige el cierre de div pendiente en el index.html.