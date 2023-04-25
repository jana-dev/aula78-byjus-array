
let fruta = "Melancia"; //variável normal
let frutas = ["Maça", "laranja", "banana", "Pera", "tomate"]; // array
let idades = [4, 5, 10, 20];
console.log(idades);



//criando um array vazio para representar o carrinho de compras
let carrinho = [];

//criando uma função que permite que o usuário adicione um item ao carrinho
function adicionarItem(){
    let item = prompt("Digite o nome do item:");
    carrinho.push(item); //push adiciona valor ao array
    console.log(carrinho)
}

// criando uma função que permite que o usuário remova um item do carrinho
function removerItem(){
    let item = prompt("Digite o nome do item a ser removido:");
    let index = carrinho.indexOf(item); //encontra a posição do item a ser removido na qual voce digitou
    if(index > -1){ //verifica se o item foi encontrado, pois o primeiro item tem que ser de 0 em diante, - 1 não existe
        carrinho.splice(index,1); //splice é usado para remover, o index é a posição do item correta e o 1 é apenas para removar 1 item
    }
}

function exibirCarrinho(){
    let carrinhoUl = document.getElementById("carrinho");
    carrinhoUl.innerHTML = ""; //limpa a lista antes de adicionar novamente
    for(let i=0; i < carrinho.length; i++){
        let itemLi = document.createElement("li"); //cria um elemento li (linha de uma lista)
        itemLi.innerText = carrinho[i]; //para cada li criada, coloca o nome de cada item
        carrinhoUl.appendChild(itemLi); //adicionando o elemento li como filho do elemento pai ul
    }
}