import { userUpdateApi } from "../api/userUpdateApi.js";
import listUserRender from "../render/listUserRender.js";

export default async function saveButtonClickHandler(event) {
    event.preventDefault();

    const liElement = event.currentTarget.closest("li");

    const nameInputElement = liElement.querySelector(".user-name-input");
    const emailInputElement = liElement.querySelector(".user-email-input");

    const name = nameInputElement.value.trim();
    const email = emailInputElement.value.trim();

    if (name === "" || email === "") {
        return;
    }

    await userUpdateApi(liElement.userId, { name, email });

    await listUserRender();
}
