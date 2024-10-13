const form = document.getElementById('form-atividade');
const imgAprovado = '<img src ="./images/aprovado.png" alt="Emoji celebrando"/>' ;
const imgReprovado = '<img src ="./images/reprovado.png" alt="Emoji triste"/>' ;
const Atividade = [];
const Notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota minima'));

let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adcionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (Atividade.includes(inputNomeAtividade.value)) {
        alert(`A Atividade ${inputNomeAtividade.value} já foi inserida!`)
    }
    else {
    Atividade.push(inputNomeAtividade.value);
    Notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >=notaMinima ? imgAprovado : imgReprovado}</td>`
    linha += '</tr>'

    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value ='';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ?spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i =0; i < Notas.length; i++){
        somaDasNotas += Notas[i];
    }

    const media = somaDasNotas / Notas.length;

    console.log(somaDasNotas);
    console.log(media)

    return somaDasNotas / Notas.length
}