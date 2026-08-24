import editNameList from "./editNameList.js";

export function renderNameList(liElement, name) {

    liElement.querySelectorAll("*").forEach((childElement) => childElement.remove());

    const spanNameElement = document.createElement("span");
    spanNameElement.classList.add("item-name");
    spanNameElement.innerText = name;

    const buttonDeleteElement = document.createElement("button");
    buttonDeleteElement.classList.add("btn", "btn-danger", "btn-sm");
    buttonDeleteElement.innerText = "Excluir";
    buttonDeleteElement.addEventListener("click", (event) => {
        event.preventDefault();

        console.log("target:", event.target);
        console.log("currentTarget:", event.currentTarget);

        event.currentTarget.parentElement.remove();
    });

    liElement.append(spanNameElement, buttonDeleteElement);

}

export default function createNameList(name) {

    const liElement = document.createElement("li");
    liElement.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    renderNameList(liElement, name);

    liElement.addEventListener("click", (event) => {
        console.log("target:", event.target);
        console.log("currentTarget:", event.currentTarget);

        const spanNameElement = event.currentTarget.querySelector(".item-name");

        if (event.target !== spanNameElement) {
            return;
        }

        editNameList(liElement, spanNameElement.innerText);
    });

    return liElement;

}
