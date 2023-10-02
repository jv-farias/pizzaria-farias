import {
    onEvent,
    showElement,
    setScreen
} from './codeOrg.js';
import {
    escolherMassa,
    escolherMolho,
    escolherTipo
} from './escolhas.js';

import {
    templateCardsMassas,
    templateCardsMolhos,
    templateCardsTipos
} from './templates.js'

//Quando as 3 opções estiver marcada o botão create irá aparecer
onEvent("massaTradicional", "click", function () {
    showElement("finalizarPedido");
});
onEvent("massaPan", "click", function () {
    showElement("finalizarPedido");
});
onEvent("massaIntegral", "click", function () {
    showElement("finalizarPedido");
});
//Quando o botão create for clicado vai para prox tela 
//mostrando o resultado da pizza baseado nas opções escolhidas
onEvent("finalizarPedido", "click", function () {
    setScreen("screenPizza");
    escolherMassa();
    escolherMolho();
    escolherTipo();
});

onEvent("buttonBack", "click", function () {
    setScreen("screenMaker");
});
