import { renderNameList } from "./createNameList.js";

export default function editNameList(liElement, currentName) {

    liElement.querySelectorAll("*").forEach((childElement) => childElement.remove());

    const inputEditElement = document.createElement("input");
    inputEditElement.type = "text";
    inputEditElement.classList.add("form-control", "form-control-sm");
    inputEditElement.setAttribute("value", currentName);

    const buttonChangeElement = document.createElement("button");
    buttonChangeElement.classList.add("btn", "btn-success", "btn-sm");
    buttonChangeElement.innerText = "Alterar";

    const confirmEdit = () => {
        const newValue = inputEditElement.value.trim();
        const nameToUse = newValue === "" ? currentName : newValue;

        renderNameList(liElement, nameToUse);
    };

    buttonChangeElement.addEventListener("click", (event) => {
        event.preventDefault();

        console.log("target:", event.target);
        console.log("currentTarget:", event.currentTarget);

        confirmEdit();
    });

    inputEditElement.addEventListener("keypress", (event) => {
        if (event.key !== "Enter") {
            return;
        }
        event.preventDefault();

        console.log("target:", event.target);
        console.log("currentTarget:", event.currentTarget);

        confirmEdit();
    });

    liElement.append(inputEditElement, buttonChangeElement);
    inputEditElement.focus();

}
