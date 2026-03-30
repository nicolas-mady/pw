const botoes = document.querySelectorAll('button');
const lake = document.querySelector('#lake');

botoes.forEach(botao => {
    // desloca a imagem para a direita e reseta depois de 3 cliques
    let clickCount = 0;
    botao.addEventListener('click', () => {
        clickCount++;
        lake.style.transform = 'translateX(' + (clickCount * 100) + 'px)';
        if (clickCount === 3) {
            lake.style.transform = 'translateX(0)';
            clickCount = 0;
        }
    });
});

// const botoes = document.getElementsByTagName('button');


// for (let i = 0; i < botoes.length; i++) {
//     const botao = botoes[i];
//     botao.onclick = function(e) {
//         alert(`Você clicou no botão: ${botao.textContent}`);
//     };
// }

const alignButtons = document.querySelectorAll('.align');
const alignText = document.querySelector('#align-text');

alignButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mapping = {
            'esquerda': 'left',
            'centro': 'center',
            'justificado': 'justify',
            'direita': 'right'
        };
        const textAlign = mapping[button.textContent.toLowerCase()];
        alignText.style.textAlign = textAlign;
    });
});