const acervo = document.querySelector('.acervo');

const qtnsLivros = parseInt(prompt('Quantos livros existem cadastrados?'));

for (let i = 0; i < qtnsLivros; i++) {
    acervo.innerHTML += `<div class="livro">
    <img src="/" alt="Imagem do livro">
    <h1>Nome do livro</h1>
    <p>Pequena Descrição sobre oque se trata o livro</p>
</div>`
}