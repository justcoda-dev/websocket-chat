import {createHttpClient} from "./request.js";

const http = createHttpClient({
    baseURL: "http://localhost:3000",
});

export const database = {
    getAllMessages: (params) => http.get("/messages", params),
    getMessagesByUserId: (userId, params) =>
        http.get(`/users/${userId}/messages`, params),
    addMessage: (userId, message, toUser) => http.post(`/users/${userId}/messages`, {message, toUser}),
    editMessage: (messageId, message) =>
        http.patch(`/messages/${messageId}`, message),
    removeMessage: (messageId) => http.delete(`/messages/${messageId}`),

    getUserBy: (params) => http.get(`/users`, params),
    getAllUsers: (params) => http.get(`/users`, params),
    addUser: (user) => http.post("/users", user),
    editUser: (userId, user) => http.patch(`/users/${userId}`, user),
    removeUser: (userId) => http.delete(`/users/${userId}`),
};