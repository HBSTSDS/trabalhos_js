let competidores = ["Daniel","Rafael", " Manoel"];

function positions(lista) {
    let daniel = competidores.indexOf("Daniel")
    if (daniel != 0) {
        lista[daniel] = lista[daniel - 1]
        lista[daniel - 1] = "Daniel"
        return lista;
    }
    else {
        return `Daniel foi o vencedor!!`
    }


}


console.log(positions(competidores));