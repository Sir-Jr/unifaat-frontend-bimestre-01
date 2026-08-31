import createUserListItem from "./createUserListItem.js";
import { listUsers } from "./userService.js";

export default async function initList(ulElement) {

    const { data: users } = await listUsers();

    users.forEach((user) => {
        const liElement = createUserListItem(user);

        ulElement.append(liElement);
    });

}
