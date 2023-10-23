function transformarTexto() {
    var inputTexto = document.getElementById("inputTexto").value;
    var checkBoxMaiusculas = document.getElementById("checkBoxMaiusculas");
    var checkBoxMinusculas = document.getElementById("checkBoxMinusculas");

    if (checkBoxMaiusculas.checked && checkBoxMinusculas.checked) {
        alert("Selecione apenas uma opção (maiúsculas ou minúsculas).");
        return;
    }

    if (checkBoxMaiusculas.checked) {
        inputTexto = inputTexto.toUpperCase();
    }

    if (checkBoxMinusculas.checked) {
        inputTexto = inputTexto.toLowerCase();
    }

    document.getElementById("inputTexto").value = inputTexto;
}
