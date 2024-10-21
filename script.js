function gravarDados() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('endereco', endereco);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);

    alert('Dados gravados com sucesso!');
}

function exibirDados() {
    const nome = localStorage.getItem('nome');
    const endereco = localStorage.getItem('endereco');
    const email = localStorage.getItem('email');
    const telefone = localStorage.getItem('telefone');

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <p>Nome: ${nome}</p>
        <p>Endereço: ${endereco}</p>
        <p>Email: ${email}</p>
        <p>Telefone: ${telefone}</p>
    `;
}