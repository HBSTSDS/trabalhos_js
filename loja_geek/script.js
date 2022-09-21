let listFigure = [{
    imagem: "./assets/img/actions/animewoman.jpg",
    nome: "animewoman",
    valor: "R$ 200,00",
        
    },
    {
    imagem: "./assets/img/actions/dragonballpersonagem.jpg",
    nome: "Goku",
    valor:"R$ 100,00",
    },
    { 
    imagem: "./assets/img/actions/starwarspersonagem.jpg",
    nome: "baby yoda",
    valor:"R$ 500,00",
    },];
let listPainting = [{
    imagem: "./assets/img/painting/clock.jpg",
    nome: "relogio",
    valor:  "R$ 50,00",
    },
    {
    imagem: "./assets/img/painting/gamepad.jpg",
    nome: "controle de ps4",
    valor:"R$ 300,00",
                        
    },
    {
    imagem: "./assets/img/painting/personagem.jpg",
    nome: "c3po",
    valor:"R$ 200,00",
                            
    },];
let ul = document.querySelector(".ul");
function createActionItem(){
    for(let i = 0; i < listFigure.length; i++){
        let cartao = criarCartao(listFigure[i]) 
        ul.appendChild(cartao);
        // let element = document.createElement("li");
        // element.innerText = listPainting[i] //use o template string para acessar o elemento da lista
        // ul.appendChild(element) // insira a li dentro da lista
        // return listPainting[i]
          }
}
    createActionItem()    
let ul2 = document.querySelector(".ul2");
function createPaintingItem(){
    for(let i = 0; i < listPainting.length; i++){
        let cartao = criarCartao(listPainting[i])
        ul2.appendChild(cartao);


//         let element = document.createElement("li");
//             element.innerText = listFigure[i] //use o template string para acessar o elemento da lista
//             ul.appendChild(element) // insira a li dentro da lista
//         return listFigure[i]
}
}
function criarCartao(obejeto) {
    let element = document.createElement("li");
    let img = document.createElement("img");
    let nome = document.createElement("p");
    let valor = document.createElement("p");
    nome.innerText = obejeto.nome;
    valor.innerText = obejeto.valor;
    img.src = obejeto.imagem;
    element.appendChild(img);
    element.appendChild(nome);
    element.appendChild(valor);
    return element;
    
}
createPaintingItem()
        