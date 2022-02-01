export const ws = new WebSocket("ws://localhost:4000");
const createWsRequest = (topic, payload) => JSON.stringify({topic, payload});

export const api = {
    addMessage: (userId, message, toUser) => createWsRequest("addMessage", {userId, message, toUser}),
    editMessage: (messageId, message) => createWsRequest("editMessage", {messageId, message}),
    userStartTyping: (userId, toUser) => createWsRequest("userStartTyping", {userId, toUser}),
    userEndTyping: (userId, toUser) => createWsRequest("userEndTyping", {userId, toUser}),
};

