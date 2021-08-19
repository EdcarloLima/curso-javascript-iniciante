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

let idadeFixa = 18;
if (idadeFixa >= 18) {
    alert('Maior de idade');
} else {
    alert('Menor de idade');
}

/* Recebendo a idade do usuário */

let idade = prompt('Qual a sua idade?');
if (idade >= 18) {
    alert('Maior de idade');
} else {
    alert('Menor de idade');
}

/* Laços de repetições */

let contar = 0;
while (contar < 5) {
    console.log(contar);
    contar++;
}

for (let numeros = 1; numeros <= 5; numeros++) {
    console.log(numeros);
}