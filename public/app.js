
const names = [
    "Ana Martins",
    "Carlos Souza",
    "Fernanda Lima",
    "João Oliveira",
    "Mariana Costa",
    "Pedro Almeida",
    "Camila Rocha",
    "Lucas Fernandes",
    "Beatriz Gomes",
    "Jefferson github"
];


// Obter os elementos 
const sectionListElement = document.getElementById("list-container");
const inputListAddElement = document.getElementById("list-add");
const buttonListAddElementList = document.getElementsByClassName("btn");

const buttonListAddElement = buttonListAddElementList[0];


// Criar um ELEMENTO ul - elemento que engloba uma lista 
const ulElement = document.createElement("ul");
// Adicionar uma classe - JEITO NÃO RECOMENDADO
ulElement.setAttribute("class", "list-names");
// AQUI O ELEMENTO JÁ EXISTE, JÁ ESTÁ REFERENCIADO EM UMA CONSTANTE.
// PORÉM NÃO FOI INSERIDO NA ÁVORE DOM


//iNSERIR ENO NÓ DO CONTAINER PRINCIPAL DA ÁRVORE DOM
sectionListElement.append(ulElement);


names.forEach((name) => {
    // Criar o elemento li, item de uma lista
    const liElement = document.createElement("li");

    // Adicionar um conteúdo texto no elemento li
    liElement.innerText = name;

    // Criar o botao excluir
    const buttonDeleteElement = document.createElement("button");
    buttonDeleteElement.innerText = "Excluir";
    buttonDeleteElement.addEventListener("click", (event) => {
        // Obter o elemento que acionou a ação (botão que foi clicado)
        const currentTargetElement = event.currentTarget;

        // Queremos obter o li, seu parent (pai)
        const liParentElement = currentTargetElement.parentElement;

        // Remove apenas este li
        liParentElement.remove();
    });

    // Adicionar o botão de excluir no li
    liElement.append(" ", buttonDeleteElement);

    // Adicionar na árvore DOM, no nosso ul principal
    ulElement.append(liElement);
});



buttonListAddElement.addEventListener("click", (event) => {
    event.preventDefault();

    const inputValue = inputListAddElement.value.trim();

    if (inputValue === "") {
        return;
    }

    // Criar o elemento li, item de uma lista
    const liElement = document.createElement("li");

    // Criar o botao excluir
    const buttonDeleteElement = document.createElement("button");
    buttonDeleteElement.innerText = "Excluir";
    buttonDeleteElement.addEventListener("click", (event) => {
        // Obter o elemento que acionou a ação (botão que foi clicado)
        const currentTargetElement = event.currentTarget;

        // Queremos obter o li, seu parent (pai)
        const liParentElement = currentTargetElement.parentElement;

        // Remove apenas este li
        liParentElement.remove();
    });

    // Adicionar o conteúdo texto e o botão de excluir no li
    liElement.append(inputValue, " ", buttonDeleteElement);

    // Adicionar na árvore DOM, no nosso ul principal
    ulElement.append(liElement);

    // Limpar o input depois de adicionar
    inputListAddElement.value = "";
});


