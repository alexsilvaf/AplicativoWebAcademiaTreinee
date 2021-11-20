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

function mascaraDeCnpj(cnpj) {
    const textoAtual = cnpj.value;
    let textoAjustado = textoAtual.replace(/[a-z, A-Z, !-\/]/g, '');

    const parte1 = textoAjustado.slice(0, 2);
    const parte2 = textoAjustado.slice(2, 5);
    const parte3 = textoAjustado.slice(5, 8);
    const parte4 = textoAjustado.slice(8, 12);
    const parte5 = textoAjustado.slice(12, 14);

    if (textoAtual.length > 2)
        textoAjustado = `${parte1}.${parte2}`
    if (textoAtual.length > 5)
        textoAjustado = `${parte1}.${parte2}.${parte3}`
    if (textoAtual.length > 8)
        textoAjustado = `${parte1}.${parte2}.${parte3}/${parte4}`
    if (textoAtual.length > 12)
        textoAjustado = `${parte1}.${parte2}.${parte3}/${parte4}-${parte5}`

    cnpj.value = textoAjustado;
}

function mascaraDeCpf(cpf) {
    const textoAtual = cpf.value;
    let textoAjustado = textoAtual.replace(/[a-z, A-Z, !-\/]/g, '');

    const parte1 = textoAjustado.slice(0, 3);
    const parte2 = textoAjustado.slice(3, 6);
    const parte3 = textoAjustado.slice(6, 9);
    const parte4 = textoAjustado.slice(9, 11);

    if (textoAtual.length > 3)
        textoAjustado = `${parte1}.${parte2}`
    if (textoAtual.length > 6)
        textoAjustado = `${parte1}.${parte2}.${parte3}`
    if (textoAtual.length > 9)
        textoAjustado = `${parte1}.${parte2}.${parte3}-${parte4}`

    cpf.value = textoAjustado;
}

function filtraNumero(texto) {
    const conteudo = texto.value;
    let conteudoAjustado;

    conteudoAjustado = conteudo.replace(/[a-z, A-Z, !-\/]/g, '')
    texto.value = conteudoAjustado
}

function filtraLetra(texto) {
    const conteudo = texto.value;
    let conteudoAjustado;

    conteudoAjustado = conteudo.replace(/[0-9]/g, '')
    texto.value = conteudoAjustado
}