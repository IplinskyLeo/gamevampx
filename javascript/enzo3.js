// fase 1 carlinhos r: 1
function btnResposta ( ) {
    var resposta = prompt("Escolha 1 ou 2");
    while (true) {
        if(resposta == 2) {
            alert('Eles se divertem a bessa no parque e tem uma memória incrível desse dia para sempre!');
            window.location.href = "/html/win.html";
            break; 
        }
        else if (resposta == 1) {
            alert ('Escolha errada, Game Over!');
            window.location.href = "/html/creditos.html";
            break;
        }
        else {
            alert('Escolha errada. Digite 1 ou 2.');
            break;
        }
        }
}