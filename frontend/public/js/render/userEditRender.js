import saveButtonClickHandler from "../listeners/saveButtonClickHandler.js";

export default function userEditRender(liElement) {

    liElement.querySelectorAll("*").forEach((childElement) => childElement.remove());

    const infoElement = document.createElement("div");
    infoElement.classList.add("d-flex", "flex-column", "gap-1", "flex-grow-1", "me-2");

    const nameInputElement = document.createElement("input");
    nameInputElement.type = "text";
    nameInputElement.classList.add("form-control", "form-control-sm", "user-name-input");
    nameInputElement.value = liElement.userName;

    const emailInputElement = document.createElement("input");
    emailInputElement.type = "email";
    emailInputElement.classList.add("form-control", "form-control-sm", "user-email-input");
    emailInputElement.value = liElement.userEmail;

    infoElement.append(nameInputElement, emailInputElement);

    const buttonSaveElement = document.createElement("button");
    buttonSaveElement.classList.add("btn", "btn-success", "btn-sm");
    buttonSaveElement.innerText = "Salvar";
    buttonSaveElement.addEventListener("click", saveButtonClickHandler);

    liElement.append(infoElement, buttonSaveElement);

    nameInputElement.focus();

}
