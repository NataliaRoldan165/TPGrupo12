const Contacto_Enviar = document.getElementById("enviar");
const Contacto_Borrar = document.getElementById("borrar");
const Formulario_Contacto = document.getElementById("Formulario"); // estoy capturando los formularios de a uno, podri hacerlo por bloque como lo hice con los botones

const Correo_Electronico_Ingresado = document.getElementById("email");
const Nombre_Ingresado = document.getElementById("nombre");
const Apellido_Ingresado = document.getElementById("apellido");
const Telefono_Ingresado = document.getElementById("telefono");
const Texto_Ingresado = document.getElementById("mensaje");

Contacto_Enviar.addEventListener("click", Envio_de_Informacion_de_Contacto);

Contacto_Borrar.addEventListener("click", function () {
    Formulario_Contacto.reset();
});

function Envio_de_Informacion_de_Contacto() {
    //aca hay que escribir codigo que utilice la informacion cargada por el usuario (nombre, email, comentario) 
    //hay que definirlo

    //console.log("Se presionó el boton enviar");
    console.log("Datos cargados por el usuario");
    console.log(Nombre_Ingresado.value);
    console.log(Apellido_Ingresado.value);
    console.log(Correo_Electronico_Ingresado.value);
    console.log(Telefono_Ingresado.value);
    console.log(Texto_Ingresado.value);
};
/***************************************** */
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
const borrar = document.getElementById("borrar");
const enviar = document.getElementById("enviar");
const formulario = document.getElementById("formContacto");
const formContacto = document.getElementById("form-contacto"); //Modal
const formModal = document.getElementById("formModal");
const btnConfirmaModal = document.getElementById("confirmaModal");
let modalInstance = null;

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("hago enviar");
    console.log(nombre.value);

});


if (formModal) {
    formModal.addEventListener("show.bs.modal", event => {

        modalInstance = bootstrap.Modal.getInstance(formModal);


        const inputNombre = formModal.querySelector("#nombre")
        const inputApellido = formModal.querySelector("#apellido")
        const inputEmail = formModal.querySelector("#email")
        const inputTelefono = formModal.querySelector("#telefono")
        const inputComentario = formModal.querySelector("#comentario")

        //completo los inputs con los datos del formulario de contacto
        inputNombre.value = nombre.value;
        inputApellido.value = apellido.value;
        inputEmail.value = email.value;
        inputTelefono.value = telefono.value;
        inputComentario.value = mensaje.value;
    })
};

btnConfirmaModal.addEventListener("click", function () {
    modalInstance.hide();
    formulario.reset();

});


/*Valida(f){
    let correcto=true;
    if (nombre.value==''){
        correcto=false;
    };
    if (apellido.value==''){
        correcto=false;
    };
    if (email.value==''){
        correcto=false;
    };
    if (telefono.value==''){
        correcto=false;
    };
    if (mensaje.value==''){
        correcto=false;
    };
    if(!correcto){
        alert('Complete todos los campos');
        };
    return correcto;
};*/


const inputsContacto = document.getElementById("Formulario").getElementsByClassName("required");
const arrInputsContacto = Array.from(inputsContacto);
Contacto_Enviar.disabled = true;
Contacto_Enviar.classList.add("disabled");
Contacto_Enviar.classList.add("opacity-25");
validarInputs(arrInputsContacto, Contacto_Enviar);

function validarInputs(arrInputs, btn) {
    for (let i = 0; i < arrInputs.length; i++) {
        arrInputs[i].addEventListener('input', () => {
            let values = [];
            arrInputs.forEach(v => values.push(v.value));
            btn.disabled = values.includes('');
            if (!btn.disabled) {
				btn.classList.remove("disabled")
                btn.classList.remove("opacity-25")
            }
        })
    }
}
