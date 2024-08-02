const menuHamburguer = document.querySelector('.menu-burguer');
const menuHamburguerInvertido = document.querySelector('.button-menu-burguer-invertido');

const poltronas = document.querySelectorAll('.home-produto.poltrona');
const mesas = document.querySelectorAll('.home-produto.mesa');

function menuBurguer (){
    menuHamburguer.style.display = 'flex';
    console.log('oi')
}

function exitMenuBurguer() {
    menuHamburguer.style.display = 'none';
}

let filtroAtivo = null;

function filtrarProdutos(tipo) {
    const produtos = document.querySelectorAll('.home-produto');
    const filtros = document.querySelectorAll('.home-filtro-texto');

    if (filtroAtivo === tipo) {
        // Desativar o filtro se o mesmo filtro for clicado novamente
        produtos.forEach(produto => {
            produto.style.display = 'block';
        });
        filtros.forEach(filtro => {
            filtro.classList.remove('filtro-selecionado');
        });
        filtroAtivo = null;
    } else {
        // Ativar o filtro selecionado
        produtos.forEach(produto => {
            if (produto.classList.contains(tipo)) {
                produto.style.display = 'block';
            } else {
                produto.style.display = 'none';
            }
        });
        filtros.forEach(filtro => {
            if (filtro.getAttribute('onclick') === `filtrarProdutos('${tipo}')`) {
                filtro.classList.add('filtro-selecionado');
            } else {
                filtro.classList.remove('filtro-selecionado');
            }
        });
        filtroAtivo = tipo;
    }
}

function exibirTodosProdutos() {
    const produtos = document.querySelectorAll('.home-produto');
    produtos.forEach(produto => {
        produto.style.display = 'block';
    });
}

// Função para inicializar todos os produtos visíveis
exibirTodosProdutos();
