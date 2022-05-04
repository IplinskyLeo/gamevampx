// fase 1 carlinhos r: 1
function btnResposta ( ) {
    var resposta = prompt("Escolha 1, 2 ou 3.");
    while (true) {
        if(resposta == 1) {
            alert ('Escolha errada, Game Over!');
            window.location.href = "../../../html/creditos.html";
            break; 
        }
        else if (resposta == 2) {
            alert ('Escolha errada, Game Over!');
            window.location.href = "../../../html/creditos.html";
            break;
        }
        else if (resposta == 3) {
            alert ('Por não mostrar preocupação passou despercebido. Tinha muita gente na entrada, os seguranças não conseguiram fazer nada a respeito.');
            window.location.href = "../../../html/personagens/junin/junin_3.html";
            break;
        }
        else {
            alert('Escolha errada. Digite 1, 2 ou 3.');
            break;
        }
        }
}