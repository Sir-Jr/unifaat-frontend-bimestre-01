export default function createUserListItem(user) {

    const liElement = document.createElement("li");
    liElement.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    liElement.dataset.userId = user.id;

    const infoElement = document.createElement("div");
    infoElement.classList.add("d-flex", "flex-column");

    const nameElement = document.createElement("span");
    nameElement.innerText = user.name;

    const emailElement = document.createElement("small");
    emailElement.classList.add("text-muted");
    emailElement.innerText = user.email;

    infoElement.append(nameElement, emailElement);
    liElement.append(infoElement);

    const buttonDeleteElement = document.createElement("button");
    buttonDeleteElement.classList.add("btn", "btn-danger", "btn-sm");
    buttonDeleteElement.innerText = "Excluir";
    buttonDeleteElement.addEventListener("click", (event) => {
        event.preventDefault();

        event.currentTarget.parentElement.remove();
    });
    liElement.append(buttonDeleteElement);

    return liElement;

}
