(function () {
    'use strict'

    // Buscar os campos que precisam de validação
    var forms = document.querySelectorAll('.needs-validation')

    // Se não corresponder aos critérios, informará o erro e evitará o envio.
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

function MascaraCNPJ() {
    var cnpj = document.getElementById('validationCustomCnpj')
    var txtCnpj = cnpj.value

    if (txtCnpj.length == 2) {
        cnpj.value = txtCnpj + "."
    }
    if (txtCnpj.length == 6) {
        cnpj.value = txtCnpj + "."
    }
    if (txtCnpj.length == 10) {
        cnpj.value = txtCnpj + "/"
    }
    if (txtCnpj.length == 15) {
        cnpj.value = txtCnpj + "-"
    }
}

function MascaraCEP() {
    var cep = document.getElementById('validationCustomCep')
    txtCep = cep.value
    if (txtCep.length == 5) {
        cep.value = txtCep + "-"
    }
}