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