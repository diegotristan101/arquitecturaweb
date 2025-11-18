document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("formulario");
    const usuario = document.getElementById("Usuario");
    const password = document.getElementById("contraseña");

    if (usuario) usuario.value = "diegotristan1001@gmail.com";
    if (password) password.value = "123456";

    const radio = 45;
    const PI = 3.1416;

    function calcularArea(r) {
        return PI * r * r;
    }

    const resultado = calcularArea(radio);
    console.log("El area del circulo es: " + resultado);

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            validarFormulario();
        });
    }
});

function validarFormulario() {
    alert("Formulario enviado");
}
