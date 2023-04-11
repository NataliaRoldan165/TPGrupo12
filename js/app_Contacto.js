const Contacto_Enviar = document.getElementById("enviar");
const Contacto_Borrar = document.getElementById("borrar");
const Formulario_Contacto = document.getElementById("Formulario");   // estoy capturando los formularios de a uno, podri hacerlo por bloque como lo hice con los botones

const Correo_Electronico_Ingresado = document.getElementById("email");
const Nombre_Ingresado = document.getElementById("nombre");
const Apellido_Ingresado = document.getElementById("apellido");
const Telefono_Ingresado = document.getElementById("telefono");
const Texto_Ingresado = document.getElementById("mensaje");

Contacto_Enviar.addEventListener("click",Envio_de_Informacion_de_Contacto);

Contacto_Borrar.addEventListener("click",function() { Formulario_Contacto.reset(); } );

function Envio_de_Informacion_de_Contacto()
    {
        //aca hay que escribir codigo que utilice la informacion cargada por el usuario (nombre, email, comentario) 
        //hay que definirlo

        //console.log("Se presionó el boton enviar");
        console.log("Datos cargados por el usuario");
        console.log(Nombre_Ingresado.value);
        console.log(Apellido_Ingresado.value);
        console.log(Correo_Electronico_Ingresado.value);
        console.log(Telefono_Ingresado.value);
        console.log(Texto_Ingresado.value);
    }