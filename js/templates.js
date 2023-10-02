export const cardsMassas = [{
    id: "massaTradicional",
    value: "tradicional",
    nome: "Massa Tradicional",
    descricao: "É a escolha mais normal para quem gosta de uma pizza crocante e fina.",
    nomeArquivoImagem: "massa-tradicional.png",
},
{
    id: "massaPan",
    value: "pan",
    nome: "Massa Pan",
    descricao: "Ó, essa massa é ótima pra quem gosta de uma pizza mais recheada e queijo todo derretido, de vera!",
    nomeArquivoImagem: "massa-pan.png",
},
{
    id: "massaIntegral",
    value: "integral",
    nome: "Massa Integral",
    descricao: "Essa é pra quem tá de olho na saúde. Para quem quer uma pizza mais saudável e cheia de fibras. Respeite!",
    nomeArquivoImagem: "massa-integral.png",
},
]

export function templateCardsMassas() {
    for (const conteudoMassa of cardsMassas) {
        const cardMassa = ` <li class="massa-card">
    <input type="radio" id="${conteudoMassa.id}" name="massa" value="${conteudoMassa.value}" required class="custom-radio">
    <label for="${conteudoMassa.id}">
        <div class="massa-content">
            <div class="img-massa">
                <img src="../assets/pizzas/${conteudoMassa.nomeArquivoImagem}" alt="${conteudoMassa.nome}">
            </div>
            <div class="text-massa">
                <p class="nome-massa">${conteudoMassa.nome}</p>
                <p class="descricao-massa">${conteudoMassa.descricao}</p>
            </div>
        </div>
    </label>
</li>`

        document.querySelector("#massa-container").innerHTML += cardMassa;
    }
}




export const cardsMolhos = [{
    id: "radioMolhoDeTomate",
    value: "tomate",
    nome: "Molho de Tomate",
    descricao: "É o coração das nossas pizzas, viu? O molho preferido dos nossos clientes lisos.",
    nomeArquivoImagem: "molho-tomate.png",
},
{
    id: "radioMolhoPesto",
    value: "pesto",
    nome: "Molho Pesto",
    descricao: "O molho pesto, mais chique e saboroso é perfeito para o pessoal estribado.",
    nomeArquivoImagem: "molho-pesto.png",
}
]

export function templateCardsMolhos() {
    for (const conteudoMolho of cardsMolhos) {
        const cardMolho = ` <li class="molho-card">
    <input type="radio" id="${conteudoMolho.id}" name="molho" value="${conteudoMolho.value}" required class="custom-radio">
    <label for="${conteudoMolho.id}">
        <div class="molho-content">
            <div class="img-molho">
                <img src="../assets/pizzas/${conteudoMolho.nomeArquivoImagem}" alt="${conteudoMolho.nome}">
            </div>
            <div class="text-molho">
                <p class="nome-molho">${conteudoMolho.nome}</p>
                <p class="descricao-molho">${conteudoMolho.descricao}</p>
            </div>
        </div>
    </label>
</li>`

        document.querySelector("#molho-container").innerHTML += cardMolho;
    }
}


export const cardsTipos = [{
    id: "checkboxNaoVegetariana",
    value: "naoVegetariana",
    nome: "Não Vegetariana",
    descricao: "Essa leva carne, queijo e outros ingredientes deliciosos. Só o Pitel!",
    nomeArquivoImagem: "nao-vegetariana.png",
},
{
    id: "checkboxVegetariana",
    value: "vegetariana",
    nome: "Vegetariana",
    descricao: "É para quem não come carne, cheia de vegetais frescos e queijo derretido. Uma delícia!",
    nomeArquivoImagem: "vegetariana.png",
}
]

export function templateCardsTipos() {
    for (const conteudoTipo of cardsTipos) {
        const cardTipo = ` <li class="tipo-card">
    <input type="checkbox" id="${conteudoTipo.id}" name="tipo" value="${conteudoTipo.value}" required class="custom-radio">
    <label for="${conteudoTipo.id}">
        <div class="tipo-content">
            <div class="img-tipo">
                <img src="../assets/pizzas/${conteudoTipo.nomeArquivoImagem}" alt="${conteudoTipo.nome}">
            </div>
            <div class="text-tipo">
                <p class="nome-tipo">${conteudoTipo.nome}</p>
                <p class="descricao-tipo">${conteudoTipo.descricao}</p>
            </div>
        </div>
    </label>
</li>`

        document.querySelector("#tipo-container").innerHTML += cardTipo;
    }
}


templateCardsMassas();
templateCardsMolhos();
templateCardsTipos();