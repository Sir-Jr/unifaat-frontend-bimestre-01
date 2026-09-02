import userRender from "./userRender.js";
import { userListApi } from "../api/userListApi.js";

let currentPage = 1;

export default async function listUserRender(page = currentPage) {

    const sectionListElement = document.querySelector("#list-container");

    sectionListElement.innerHTML = "";

    const ulElement = document.createElement("ul");
    ulElement.classList.add("list-group");

    sectionListElement.append(ulElement);

    const { page: pageResponse, next, total, data: users } = await userListApi({ page });

    currentPage = pageResponse;

    users.forEach((user) => {
        const liElement = userRender(user);

        ulElement.append(liElement);
    });

    const paginationElement = document.createElement("div");
    paginationElement.classList.add("d-flex", "justify-content-between", "align-items-center", "mt-3");

    const buttonPrevElement = document.createElement("button");
    buttonPrevElement.classList.add("btn", "btn-outline-primary", "btn-sm");
    buttonPrevElement.innerText = "Anterior";
    buttonPrevElement.disabled = pageResponse <= 1;
    buttonPrevElement.addEventListener("click", () => listUserRender(pageResponse - 1));

    const pageTextElement = document.createElement("span");
    pageTextElement.innerText = `Página ${pageResponse} — ${total} usuário(s)`;

    const buttonNextElement = document.createElement("button");
    buttonNextElement.classList.add("btn", "btn-outline-primary", "btn-sm");
    buttonNextElement.innerText = "Próxima";
    buttonNextElement.disabled = !next;
    buttonNextElement.addEventListener("click", () => listUserRender(next));

    paginationElement.append(buttonPrevElement, pageTextElement, buttonNextElement);
    sectionListElement.append(paginationElement);

}
