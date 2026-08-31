import apiClient from "./apiClient.js";

export async function listUsers({ page = 1, limit = 10 } = {}) {
    const { data } = await apiClient.get("/users", {
        params: { page, limit }
    });

    return data;
}
