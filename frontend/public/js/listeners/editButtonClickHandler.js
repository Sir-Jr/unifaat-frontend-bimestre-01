import userEditRender from "../render/userEditRender.js";

export default function editButtonClickHandler(event) {
    event.preventDefault();

    const liElement = event.currentTarget.closest("li");

    userEditRender(liElement);
}
