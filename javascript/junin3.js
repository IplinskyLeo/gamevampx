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
            alert ('Ele apenas estava desidratado, descansou um pouco e bebeu água e minutos depois já estava se divertindo novamente.');
            window.location.href = "../../../html/win.html";
            break;
        }
        }
}