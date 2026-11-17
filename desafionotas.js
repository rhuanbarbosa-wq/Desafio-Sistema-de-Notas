function calcularMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    return media;
}

function verificarAprovacao(media) {
    if (media >= 7) {
        return 'Aprovado';
    } else {
        return 'Reprovado';
    }
}
function mostrarResultado(nome, media, situacao, maiorNota) {
    console.log(`Aluno: ${nome}`);
    console.log(`Média: ${media}`);
    console.log(`Situação: ${situacao}`);
    console.log(`Maior Nota: ${maiorNota}`);
}

function calcularMaiorNota(nota1, nota2) {
    if (nota1 > nota2) {
        return nota1;
    } else {
        return nota2;
    }
}

let nome = 'Arthur';
let nota1 = 10;
let nota2 = 7;

let media = calcularMedia(nota1, nota2);
let situacao = verificarAprovacao(media);
let maiorNota = calcularMaiorNota(nota1, nota2);

mostrarResultado(nome, media, situacao, maiorNota);
