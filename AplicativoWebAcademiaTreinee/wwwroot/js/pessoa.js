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

let conteudo;
function soNumero(texto) {
    const conteudo = texto.value;
    let conteudoAjustado;

    conteudoAjustado = conteudo.replace(/[a-z, A-Z, !-/]/g, '')
    texto.value = conteudoAjustado
}