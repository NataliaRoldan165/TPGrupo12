// JavaScript Document
const formPedido = document.getElementById("form-pedido");
const pedidoModal = document.getElementById("pedidoModal");
let modalInstance = null;

if (pedidoModal) {
    pedidoModal.addEventListener("show.bs.modal", event => {

        modalInstance = bootstrap.Modal.getInstance(pedidoModal);

        const producto = event.relatedTarget.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
        const precio = event.relatedTarget.previousElementSibling.previousElementSibling.innerText;
        const inputProducto = pedidoModal.querySelector("#producto")
        const inputPrecio = pedidoModal.querySelector("#precio_unitario")

        document.getElementById("cantidad").value = 1;
        inputProducto.value = producto;
        inputPrecio.value = parseInt(precio.replace('$', '').replace('.-', ''));
        calcularTotal()
    })


    pedidoModal.addEventListener("hide.bs.modal", () => {

        formPedido.reset()
        btnDatosPersonales.disabled = true;
        btnDatosPersonales.classList.add("opacity-25");
        btnDomicilioEntrega.disabled = true;
        btnDomicilioEntrega.classList.add("opacity-25");
        fieldset1.classList.remove("d-none")
        fieldset2.classList.add("d-none")
        fieldset3.classList.add("d-none")
        fieldset4.classList.add("d-none")

    })

}


const formBtns = document.getElementById("form-pedido").getElementsByClassName("btn");
const arrFormBtns = Array.from(formBtns);
arrFormBtns.push(document.getElementById("ant4"));

const fieldset1 = document.getElementById("producto-pedido");
const fieldset2 = document.getElementById("datos-personales");
const fieldset3 = document.getElementById("domicilio-entrega");
const fieldset4 = document.getElementById("resumen-pedido");

const producto = document.getElementById("producto");
const cantidad = document.getElementById("cantidad");
const precio_unitario = document.getElementById("precio_unitario");
const precio_total = document.getElementById("precio_total");

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("telefono");

const calle = document.getElementById("calle");
const altura = document.getElementById("altura");
const piso = document.getElementById("piso");
const localidad = document.getElementById("localidad");


arrFormBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        switch (e.target.getAttribute("id")) {
            case "sig1":
                fieldset1.classList.toggle("d-none");
                fieldset2.classList.toggle("d-none");
                break;
            case "sig2":
                fieldset2.classList.toggle("d-none");
                fieldset3.classList.toggle("d-none");
                break;

            case "sig3":
                fieldset3.classList.toggle("d-none");
                fieldset4.classList.toggle("d-none");
                verPedidoPreview()
                break;

            case "ant4":
                fieldset3.classList.toggle("d-none");
                fieldset4.classList.toggle("d-none");
                break;

            case "ant3":
                fieldset2.classList.toggle("d-none");
                fieldset3.classList.toggle("d-none");
                break;

            case "ant2":
                fieldset1.classList.toggle("d-none");
                fieldset2.classList.toggle("d-none");
                break;

            default:
                break;
        }

    });
});


function calcularTotal() {

    precio_total.value = parseInt(precio_unitario.value) * parseInt(cantidad.value);

}

document.getElementById("cantidad").addEventListener("change", () => {
    calcularTotal();
});

const contenidoPedido = document.getElementById("contenido-pedido");

function verPedidoPreview() {

    contenidoPedido.textContent = "";

    let pedidoWrapper = document.createElement("div");

    let separadorProducto = document.createElement("hr");
    let tituloProducto = document.createElement("p");
    tituloProducto.classList.add("fw-medium");
    tituloProducto.classList.add("mb-0");
    tituloProducto.innerText = "Producto Solicitado";
    let parrafoProducto = document.createElement("p");
    let dato1 = document.createElement("div");
    dato1.innerText = `Plato: ${producto.value}`;
    let dato2 = document.createElement("div");
    dato2.innerText = `Cantidad: ${cantidad.value}`;
    let dato3 = document.createElement("div");
    dato3.innerText = `Precio Unitario: $${precio_unitario.value}.-`;
    let dato4 = document.createElement("div");
    dato4.innerText = `Precio Total: $${precio_total.value}.-`;
    parrafoProducto.appendChild(dato1);
    parrafoProducto.appendChild(dato2);
    parrafoProducto.appendChild(dato3);
    parrafoProducto.appendChild(dato4);
    parrafoProducto.appendChild(separadorProducto);

    let separadorDatosPersonales = document.createElement("hr");
    let tituloDatosPersonales = document.createElement("p");
    tituloDatosPersonales.classList.add("fw-medium");
    tituloDatosPersonales.classList.add("mb-0");
    tituloDatosPersonales.innerText = "Datos Personales";
    let parrafoDatosPersonales = document.createElement("p");
    let dato5 = document.createElement("div");
    dato5.innerText = `Nombrey Apellido: ${nombre.value} ${apellido.value}`;
    let dato6 = document.createElement("div");
    dato6.innerText = `Teléfono: ${telefono.value}`;
    parrafoDatosPersonales.appendChild(dato5);
    parrafoDatosPersonales.appendChild(dato6);
    parrafoDatosPersonales.appendChild(separadorDatosPersonales);

    let tituloDomicilioDeEntrega = document.createElement("p");
    tituloDomicilioDeEntrega.classList.add("fw-medium");
    tituloDomicilioDeEntrega.classList.add("mb-0");
    tituloDomicilioDeEntrega.innerText = "Domicilio de Entrega";
    let parrafoDomicilioDeEntrega = document.createElement("p");
    let dato7 = document.createElement("div");
    dato7.innerText = `Dirección: ${calle.value} ${altura.value}${!piso.value ? "," : ""} ${piso.value ? piso.value : ""}${piso.value ? "," : ""} ${localidad.value}`;
    parrafoDomicilioDeEntrega.appendChild(dato7);

    pedidoWrapper.appendChild(tituloProducto);
    pedidoWrapper.appendChild(parrafoProducto);
    pedidoWrapper.classList.add("mb-3");
    pedidoWrapper.appendChild(tituloDatosPersonales);
    pedidoWrapper.appendChild(parrafoDatosPersonales);
    pedidoWrapper.classList.add("mb-3")
    pedidoWrapper.appendChild(tituloDomicilioDeEntrega);
    pedidoWrapper.appendChild(parrafoDomicilioDeEntrega);

    contenidoPedido.appendChild(pedidoWrapper);

}

const btnFinalizarPedido = document.getElementById("sig4");

btnFinalizarPedido.addEventListener("click", function () {
    let pdf = new jsPDF("p", "cm", "a4");
    let pedidoPDF = document.querySelector("#contenido-pedido");
    pdf.fromHTML(pedidoPDF);
    pdf.save("Pedido.pdf");
    modalInstance.hide();
});


const inputsDatosPersonales = document.getElementById("datos-personales").getElementsByClassName("required");
const arrInputsDatosPersonales = Array.from(inputsDatosPersonales);
const btnDatosPersonales = document.getElementById("sig2");
btnDatosPersonales.disabled = true;
btnDatosPersonales.classList.add("opacity-25");
validarInputs(arrInputsDatosPersonales, btnDatosPersonales);

const inputsDomicilioEntrega = document.getElementById("domicilio-entrega").getElementsByClassName("required");
const arrInputsDomicilioEntrega = Array.from(inputsDomicilioEntrega);
const btnDomicilioEntrega = document.getElementById("sig3");
btnDomicilioEntrega.disabled = true;
btnDomicilioEntrega.classList.add("opacity-25");
validarInputs(arrInputsDomicilioEntrega, btnDomicilioEntrega);

function validarInputs(arrInputs, btn) {
    for (let i = 0; i < arrInputs.length; i++) {
        arrInputs[i].addEventListener('input', () => {
            let values = [];
            arrInputs.forEach(v => values.push(v.value));
            btn.disabled = values.includes('');
            if (!btn.disabled) {
                btn.classList.remove("opacity-25")
            }
        })
    }
}
