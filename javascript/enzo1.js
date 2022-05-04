// fase 1 carlinhos r: 1
function btnResposta ( ) {
    var resposta = prompt("Escolha 1 ou 2");
    while (true) {
        if(resposta == 1) {
            window.location.href = "../../../html/personagens/enzo/enzo_2.html";
            break; 
        }
        else if (resposta == 2) {
            alert ('Escolha errada, Game Over!');
            window.location.href = "../../../html/creditos.html";
            break;
        }
        else {
            alert('Escolha errada. Digite 1 ou 2.');
            break;
        }
        }
}