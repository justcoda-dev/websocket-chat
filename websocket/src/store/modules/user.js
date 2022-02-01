import {uniqueId, findUser, usersWithoutClient} from "./functions/userFunctions";
import {database} from "../../../../websocket_server/database/api";
import {searchContactUser} from "./functions/userFunctions";

const MUTATION_TYPE = {
    REGISTRATION: "REGISTRATION",
    LOGIN: "LOGIN",
    CONTACT_USERS: "CONTACT_USERS",
    SET_USER_FROM_STORAGE: "SET_USER_FROM_STORAGE",
    USERS_AFTER_SEARCH: "USERS_AFTER_SEARCH"
}
export const user = {
    actions: {
        async login({commit}, user) {
            const allUsers = await database.getAllUsers()
            const userIsRegistered = findUser(allUsers, user)
            if (userIsRegistered) {
                localStorage.setItem("user", JSON.stringify(userIsRegistered))
                commit(MUTATION_TYPE.LOGIN, userIsRegistered)
            }
        },

        async registration({commit}, user) {
            const allUsers = await database.getAllUsers()
            const userIsRegistered = findUser(allUsers, user)
            if (userIsRegistered) {
                commit(MUTATION_TYPE.LOGIN, userIsRegistered)
                localStorage.setItem("user", JSON.stringify(userIsRegistered))
            } else {
                const userCopy = {...user};
                userCopy.userId = uniqueId()
                userCopy.icon = "https://s14.stc.yc.kpcdn.net/share/i/12/12189520/wr-960.webp"
                delete userCopy.type
                const newUser = await database.addUser(userCopy)
                commit(MUTATION_TYPE.REGISTRATION, newUser)
                localStorage.setItem("user", JSON.stringify(newUser))
            }
        },

        setUserFromLocalStorage({commit}, user) {
            commit(MUTATION_TYPE.SET_USER_FROM_STORAGE, user)
        },
        async searchContactUsers({commit}, {string, userId}) {
            const allUsers = await database.getAllUsers()
            const contacts = usersWithoutClient(allUsers, userId)
            if (!string) {
                commit(MUTATION_TYPE.USERS_AFTER_SEARCH, contacts)
            } else {
                const users = searchContactUser(contacts, string)
                commit(MUTATION_TYPE.USERS_AFTER_SEARCH, users)
            }
        }
    },
    mutations: {
        [MUTATION_TYPE.USERS_AFTER_SEARCH](state, searchedUsers) {
            state.contactUsersSearched = searchedUsers
        },
        [MUTATION_TYPE.SET_USER_FROM_STORAGE](state, user) {
            state.user = user
        },

        [MUTATION_TYPE.CONTACT_USERS](state, contacts) {
            state.contactUsersList = contacts
        },
        [MUTATION_TYPE.REGISTRATION](state, user) {
            state.user = user
            state.loginFailed = false
        },
        [MUTATION_TYPE.LOGIN](state, user) {
            state.user = user
            state.registered = true
        },
    },
    state: {
        auth: false,
        loginFailed: null,
        user: {},
        contactUsersList: [],
        contactUsersSearched: [],
    },
    getters: {
        userId: state => state.user.userId,
        registered: state => state.registered,
        loginFailed: state => state.loginFailed,
        contactUsersList: state => state.contactUsersList,
        contactUsersSearchedList: state => state.contactUsersSearched
    },
}