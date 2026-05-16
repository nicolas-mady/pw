let valor = "ufam";
valor = '20';

function somar(a: any, b: any): any {
    return a + b;
}

console.log(somar(5, 10));
console.log(somar("5", "10"));

let corFavorita: 'vermelho' | 'azul' | 'verde' | 'marrom';
corFavorita = 'azul';
corFavorita = 'verde';
