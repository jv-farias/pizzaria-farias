
export const onEvent = (id, event, fn) => { //Aqui definimos que essa função aceita três parâmetros id, event e fn (function)
    const el = document.getElementById(id); // A função tenta encontrar algum elemento HTML pelo o seu id específico d.g.E.byId
    if (el) { // Se 'el" tiver um id válido, o código abaixo será executado
        el.addEventListener(event, fn, false); // Com o elemento válido, a função addEventListener irá ser usada para adicionar um ouvinte de evento ao elemento. O evento será especificado pelo event e a função pelo fn 
    }
};

export const showElement = (id) => { // Aqui definimos que essa função showElement em que irá mostrar o elemento HTML irá aceitar apenas um parâmetro, que é o id de um elemento HTML
    const el = document.getElementById(id); // Ela irá procurar no HTML algum elemento pelo o seu id
    if (el) { // Se encontrar o elemento pelo seu id e ele for válido irá executar o bloco abaixo
        el.classList.remove('hidden'); // Quando o elemento for encontrado, no CSS irá ser removido a class "hidden" em que, provavelmente estará com um display: none, para não ser exibido no momento
    }
};

export const hideElement = (id) => {  // Aqui definimos que essa função hideElement em que irá esconder o elemento HTML irá aceitar apenas um parâmetro, que é o id de um elemento HTML
    const el = document.getElementById(id); // Ela irá procurar no HTML algum elemento pelo o seu id
    if (el) {  // Se encontrar o elemento pelo seu id e ele for válido irá executar o bloco abaixo
        el.classList.add('hidden'); // Quando o elemento for encontrado, no CSS irá ser adicionado a class "hidden" em que, provavelmente estará com um display: none, para não ser exibido no momento
    }
};

let beforeScreen = 'screenMaker'; // é inicializada uma variável do tipo let, chamada beforeScreen em que irá receber um "screenMaker"
export const setScreen = (id) => { // função chamada setScreen em que aceita um único parâmetro id, que é o id do elemento HTML
    hideElement(beforeScreen); // vai retornar a função hideElement, em que vimos acima, no qual irá procurar por um id no html, caso encontre irá adicionar uma classe hidden, que provavelmente irá está com um display none np css
    showElement(id)  // vai retornar a função showElement, em que vimos acima, no qual irá procurar por um id no html, caso encontre irá remover uma classe hidden, que provavelmente irá está com um display none np css
    beforeScreen = id; // no final, a funcao irá atualizar a variável beforeScreen com o novo id
};

export const getProperty = (id, prop) => { // define uma função chamada getProperty, em que aceita dois parâmetros. ID e o prop, que é uma string representando o nome da propriedade
    const el = document.getElementById(id); // tenta encontrar um elemento HTML com base no id especificado
    if (el) { // se el que irá receber um id de um elemento html, for válido, o código abaixo será executadpo
        return el[prop] // ma maneira de acessar dinamicamente uma propriedade de um objeto JavaScript, onde prop é uma string que contém o nome da propriedade.
    } // Exemplo, function getProperty("meuElemento", "textContent") -> ela encontraria o elemento com o id meuElemento e retornaria o valor da propriedade textContent.
};

export const setImageURL = (id, src) => { //funcao que irá receber dois parâmetros, id e src
    const el = document.getElementById(id); // ira tentar encontrar um id valido no html
    const url = `../assets/pizzas/${src}` // variável url é criada para encontrar o endereço da imagem
    if (el) {
        el.setAttribute('src', url); // Se o elemento com o ID especificado foi encontrado na página, esta linha atualiza o atributo "src" desse elemento com a URL construída na variável url
    }
};
