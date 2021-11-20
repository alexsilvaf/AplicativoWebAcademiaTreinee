/*
 * ARQUIVO UTILITÁRIO.
 * AS FUNÇÕES DENTRO DE CADA CAMPO ESTÃO ORDENADAS EM ORDEM ALFABÉTICA
 * 
 * está na seguinte ordem:
 * MÁSCARAS DE FORMATAÇÃO
 * FILTROS (número, letras) | Exemplos: filtroNumero / filtroLetra
 */

//MÁSCARAS DE FORMATAÇÃO

function mascaraDeCep(cep) {
    const textoAtual = cep.value;
    let textoAjustado = textoAtual.replace(/[a-z, A-Z, !-\/]/g, '');

    const parte1 = textoAjustado.slice(0, 5);
    const parte2 = textoAjustado.slice(5, 8);

    if (textoAtual.length > 5)
        textoAjustado = `${parte1}-${parte2}`

    cep.value = textoAjustado;
}

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

function mascaraDeTelefone(telefone) {
    const textoAtual = telefone.value;
    let textoAjustado = textoAtual.replace(/[a-z, A-Z, !-/]/g, '');
    const isCelular = textoAjustado.length === 11;

    if (isCelular) {
        const parte1 = textoAjustado.slice(0, 2);
        const parte2 = textoAjustado.slice(2, 7);
        const parte3 = textoAjustado.slice(7, 11);
        textoAjustado = `(${parte1}) ${parte2}-${parte3}`
    } else {
        const parte1 = textoAjustado.slice(0, 2);
        const parte2 = textoAjustado.slice(2, 6);
        const parte3 = textoAjustado.slice(6, 10);
        textoAjustado = `(${parte1}) ${parte2}-${parte3}`
    }

    telefone.value = textoAjustado;
}

//FILTROS

function filtroNumero(texto) {
    const conteudo = texto.value;
    let conteudoAjustado;

    conteudoAjustado = conteudo.replace(/[a-z, A-Z, !-\/]/g, '')
    texto.value = conteudoAjustado
}

function filtroCaractere(texto) {
    const conteudo = texto.value;
    let conteudoAjustado;

    conteudoAjustado = conteudo.replace(/[0-9]/g, '')
    texto.value = conteudoAjustado
}