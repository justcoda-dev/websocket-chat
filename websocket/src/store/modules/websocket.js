import {api} from "../../../../websocket_server/client";
import {database} from "../../../../websocket_server/database/api";
import {contactUserChat} from "../modules/functions/wsFunctions"
import {searchMessageInMessages} from "../modules/functions/userFunctions"

const MUTATION_TYPE = {
    ADD_MESSAGE: "ADD_MESSAGE",
    UPDATE_MESSAGES: "UPDATE_MESSAGES",
    MESSAGES: "MESSAGES",
    CONNECTION: "CONNECTION",
    USER_SENDING_TO: "USER_SENDING_TO",
    USER: "USER",
    USER_TYPING_STATUS: "USER_TYPING_STATUS",
    SEARCHED_MESSAGES: "SEARCHED_MESSAGES"
}

export const websocket = {
    actions: {
        connect({commit}) {
            const ws = new WebSocket("ws://localhost:4000");
            ws.addEventListener("open", async () => {
                console.log("open")
                const messages = await database.getAllMessages()
                commit(MUTATION_TYPE.MESSAGES, messages)
                commit(MUTATION_TYPE.CONNECTION, ws, true)
            })
            ws.addEventListener("close", () => {
                console.log('close')
                commit(MUTATION_TYPE.CONNECTION, false)
            })
            ws.addEventListener("message", ({data}) => {
                console.log('message')
                const {topic} = JSON.parse(data)
                if (topic === "messages") {
                    const {payload} = JSON.parse(data)
                    commit(MUTATION_TYPE.MESSAGES, payload)
                } else if (topic === "userStartTyping" || topic === "userEndTyping") {
                    console.log(topic)
                    const status = {
                        "userStartTyping": true,
                        "userEndTyping": false
                    }
                    commit(MUTATION_TYPE.USER_TYPING_STATUS, status[topic])
                }
            })
        },
        sendMessage({state}, {userId, message, toUser}) {
            state.websocket.send(api.addMessage(userId, message, toUser))
        },
        startTyping({state}, {userId, toUser}) {
            state.websocket.send(api.userStartTyping(userId, toUser))
        },
        endTyping({state}, {userId, toUser}) {
            state.websocket.send(api.userEndTyping(userId, toUser))
        },
        chooseContactToSend({commit}, user) {
            commit(MUTATION_TYPE.USER_SENDING_TO, user)
        },
        setWsUserFromStorage({commit}, user) {
            commit(MUTATION_TYPE.USER, user)
        },
        searchAtContactUserMessages({commit, state}, message) {
            const searchedMessages = searchMessageInMessages(state.messages, message);
            commit(MUTATION_TYPE.SEARCHED_MESSAGES, searchedMessages)
        },
    },
    mutations: {
        [MUTATION_TYPE.SEARCHED_MESSAGES](state, searchedMessages) {
            state.searchedMessages = searchedMessages;
        },
        [MUTATION_TYPE.USER_TYPING_STATUS](state, status) {
            state.typingStatus = status
        },
        [MUTATION_TYPE.USER](state, user) {
            state.wsUser = user
        },
        [MUTATION_TYPE.USER_SENDING_TO](state, user) {
            state.contactUserSendingTo = user
        },

        [MUTATION_TYPE.MESSAGES](state, payload) {
            state.messages = payload
        },
        [MUTATION_TYPE.CONNECTION](state, ws, status) {
            state.wsIsConnected = status
            state.websocket = ws
        },
    },
    state: {
        typingStatus: false,
        wsUser: {},
        contactUserSendingTo: {},
        messages: [],
        wsIsConnected: false,
        websocket: null,
        searchedMessages: [],
    },
    //треба запрос на конкретного юзер робити по ид з яким я переписуюсь і по його повідомленням сортірувати які мені
    getters: {
        wsConnectionStatus: state => state.wsIsConnected,
        sortedMessages: state => {
            const copy = [...state.messages];
            copy.sort((a, b) => a.createdAt = b.createdAt)
            return contactUserChat(state.contactUserSendingTo, copy, state.wsUser)
        },
        contactUserSendingTo: state => state.contactUserSendingTo,
        typingStatus: state => state.typingStatus,
        searchedMessages: state => {
            const copy = [...state.searchedMessages];
            copy.sort((a, b) => a.createdAt = b.createdAt)
            return contactUserChat(state.contactUserSendingTo, copy, state.wsUser)
        }
    },
}