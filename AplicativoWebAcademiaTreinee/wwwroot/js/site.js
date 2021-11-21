/*
 * ARQUIVO UTILITÁRIO.
 * AS FUNÇÕES DENTRO DE CADA CAMPO ESTÃO ORDENADAS EM ORDEM ALFABÉTICA
 * 
 * está na seguinte ordem:
 * MÁSCARAS DE FORMATAÇÃO
 * FILTROS (número, letras) | Exemplos: filtroNumero / filtroLetra
 * 
 * LINKS DE REFERÊNCIA PARA JS:
 * https://pt.stackoverflow.com/questions/170/qual-a-forma-correta-de-se-fazer-uma-substitui%C3%A7%C3%A3o-regular-em-javascript-para-tod
 * https://www.alura.com.br/artigos/criando-uma-mascara-de-telefone-com-javascript
 * https://web.fe.up.pt/~ee96100/projecto/Tabela%20ascii.htm
 */

//MÁSCARAS DE FORMATAÇÃO

function mascaraDeCep(cep) { //Insere uma máscara de CEP no texto informado do tipo XXXXX-XX
    const textoAtual = cep.value;
    let textoAjustado = textoAtual.replace(/[a-z, A-Z, !-\/]/g, '');

    const parte1 = textoAjustado.slice(0, 5);
    const parte2 = textoAjustado.slice(5, 8);

    if (textoAtual.length > 5)
        textoAjustado = `${parte1}-${parte2}`

    console.log(textoAtual.length)
    cep.value = textoAjustado;
}

function mascaraDeCnpj(cnpj) { //Insere uma máscara de CNPJ no texto informado do tipo XX.XXX.XXX/XXXX-XX
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

function mascaraDeCpf(cpf) { //Insere uma máscara de CPF no texto informado do tipo XXX.XXX.XXX-XX
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

/*Insere uma máscara de formatação para:
 * Telefone fixo: (XX) XXXX-XXXX
 * Telefone móvel: (XX) X XXXX-XXXX
 */
function mascaraDeTelefone(telefone) {
    const textoAtual = telefone.value;
    let textoAjustado = textoAtual.replace(/[a-z, A-Z, !-/]/g, '');
    const isCelular = textoAjustado.length == 11;

    if (!isCelular) {
        const parte1 = textoAjustado.slice(0, 2);
        const parte2 = textoAjustado.slice(2, 6);
        const parte3 = textoAjustado.slice(6, 10);

        if (textoAtual.length > 0)
            textoAjustado = `(${parte1})`
        if (textoAtual.length > 2)
            textoAjustado = `(${parte1}) ${parte2}`
        if (textoAtual.length > 6)
            textoAjustado = `(${parte1}) ${parte2}-${parte3}`
    } else {
        const parte1 = textoAjustado.slice(0, 2);
        const parte2 = textoAjustado.slice(2, 3);
        const parte3 = textoAjustado.slice(3, 7);
        const parte4 = textoAjustado.slice(7, 11);
        textoAjustado = `(${parte1}) ${parte2} ${parte3}-${parte4}`
    }

    telefone.value = textoAjustado;
}

//FILTROS

function filtroCaractere(texto) { //Impede o usuário de colocar números de 0 a 9.
    const conteudo = texto.value;
    let conteudoAjustado;

    conteudoAjustado = conteudo.replace(/[0-9]/g, '')
    texto.value = conteudoAjustado
}

function filtroNumero(texto) { //Impede o usuário de colocar caracteres. Recolhe apenas os números inseridos
    const conteudo = texto.value;
    let conteudoAjustado;

    conteudoAjustado = conteudo.replace(/[a-z, A-Z, !-\/]/g, '')
    texto.value = conteudoAjustado
}

//FORMULÁRIO

(function () { //Formulário
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