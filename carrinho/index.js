let item = [{
    nome: "item",
    valor: "valor"
},
{
    nome: "uva",
    valor: "44,99",
},
{
    nome: "vinho canção",
    valor: "17,98",
},
{
    nome: "água de coco",
    valor: "8,99",
},
{
    nome: "mamão",
    valor: "9,98",
},
{
    nome: "água tônica",
    valor: "17,98",
},
{
    nome: "total",
    valor: "99,98"
}
]

let body = document.querySelector("body");
let mae = document.createElement("main");
let cabeca = document.createElement("header");
let topo = document.createElement("h1");
let seqtion = document.createElement("section");
let ul = document.createElement("ul");
ul.classList.add('list-itens');
let botao = document.createElement("button");


function integrada(){
    for(let i = 0; i < item.length; i++){
        let element = document.createElement("li");
        element.classList.add("li");
        let nome = document.createElement("p");
        let valor = document.createElement("p");
        nome.innerText = item[i].nome;
        valor.innerText = item[i].valor;
        element.appendChild(nome);
        element.appendChild(valor);






        ul.append(element);
        
    }

}
integrada();
function createElementeItens(obejeto){
  
  
}
// function soma(a){
//     let resposta
//     for(let i = 0; i <= item.length; i++){
//         resposta = i + a;
//     }
// }

mae.classList.add("container") ;
cabeca.classList.add("container-logo")  ;
topo.innerText = "Virtual Market";
seqtion.classList.add("container-list");  
botao.classList.add("finalizador");
botao.innerText = "finalizar compra" 
body.appendChild(mae);
mae.append(cabeca, seqtion, botao);
cabeca.appendChild(topo);
seqtion.appendChild(ul)
