//alert('alert - Programando js em arquivo separado');

/*var nome = 'Edcarlo Lima';
var idade = 30;
var tempo = 10;*/
//alert('Bem-vindo');
//alert(nome+' tem '+idade+' somando + tempo = ');
//alert(idade+tempo);

// f12 ou botão direito do mouse inspecionar
//console.log('Exibindo no console '+nome+' tem '+idade);

// substituição de caracteres em string
/*var texto = 'O melhor país é o Japão.';
console.log(texto.replace('Japão','Brasil'));*/
// Transformando tudo em maiúsculo
//console.log(texto.toUpperCase());
// Transformando tudo em minúsculo
//console.log(texto.toLowerCase());
// Multiplicando
//console.log('Multiplicando idade x tempo ');
//console.log(30*10);

/* Dicionário do Array */
//let frutas = ['maçã','pêra','laranja','goiaba','melancia','uva'];
// listando todas
//console.log(frutas);
// exibindo somente uma
//console.log(frutas[0]);
// adicionando uma fruta na lista
/*frutas.push('morango');
console.log(frutas);*/
// removendo o último item da lista
/*frutas.pop();
console.log(frutas);*/
// quantidade de itens na lista
//console.log(frutas.length);
// listando na ordem inversa
//console.log(frutas.reverse());
// exibindo a lista como string
//console.log(frutas.toString());
// exibindo a lista como string defininso o separador
//console.log(frutas.join(' | '));
// objeto json
/*let objFruta = {nome:'Cajá',cor:'verde'};
console.log(objFruta);*/
// exibindo somente uma atributo do objeto
//console.log(objFruta.cor);
// lista ou coleção de objetos
/*let colecao = [{nome:'Cajá',cor:'verde'},{nome:'Manga',cor:'amarela'},{nome:'Acerola',cor:'vermelha'}];
console.log(colecao);*/
// exibindo somente um objeto da lista
//console.log(colecao[0]);
// exibindo um atributo do objeto na coleção
//console.log(colecao[0].nome);

/* Condicionais */

/*let idadeFixa = 18;
if (idadeFixa >= 18) {
    alert('Maior de idade');
} else {
    alert('Menor de idade');
}*/

/* Recebendo a idade do usuário */

/*let idade = prompt('Qual a sua idade?');
if (idade >= 18) {
    alert('Maior de idade');
} else {
    alert('Menor de idade');
}*/

/* Laços de repetições */

/*
let contar = 0;
while (contar < 5) {
    console.log(contar);
    contar++;
}

for (let numeros = 1; numeros <= 5; numeros++) {
    console.log(numeros);
}*/


/* Datas */
/*
let dataHoje = new Date();
alert(dataHoje);
// exibindo o mês
console.log(dataHoje.getMonth()+1);
// exibindo os minutos da hora
console.log(dataHoje.getMinutes());
// exibindo a hora
console.log(dataHoje.getHours());
// exibindo o dia
console.log(dataHoje.getDate());
// exibindo o ano
console.log(dataHoje.getFullYear());*/

/* Funções */
/*
function somar(numero1,numero2) {
    return numero1 + numero2;
}
function substituir(frase,encontrar,substituir) {
    return frase.replace(encontrar,substituir);
}
let idade = prompt('Qual a sua idade');
function validarIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}
// exibindo o resultado
console.log(somar(7,3));
console.log(substituir('PHP é top','PHP','JavaScript'));
console.log(validarIdade(idade));
*/

/* Alterando elementos no HTML */
/*
function funcaoBotao() {
    alert('Alterar o h1');
    document.getElementById('titulo').innerText ='Você alterou o Título em h1';
    document.getElementById('subtitulo').innerHTML ="<p>Você criou um parágrafo</p>";
}

function funcaoElemento(elemento) {
    elemento.innerHTML = "<strong>Negrito</strong>";
}

function redirecionar(elemento) {
    elemento.href = 'https://www.w3schools.com/js/js_examples.asp';
    elemento.click();
}

function abrirPagina() {
    window.open('https://www.w3schools.com/jquery/default.asp');
}*/


/* Mouse Over e Mouse Out */
function trocar(elemento) {
    elemento.innerHTML = "<strong>O mouse passou aqui (mouse over)</strong>"
}
function voltar(elemento) {
    elemento.innerHTML = "<strong>O mouse saiu daqui (mouse out)</strong>"
}