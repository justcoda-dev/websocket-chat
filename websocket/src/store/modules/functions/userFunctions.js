export const uniqueId = () =>
    (performance.now() + Math.random()).toString(36).replace(".", "");

export const findUser = (users, {name, password}) => {
    if(!users.length || !name) return
    return users.find(arrUser => name.toLowerCase() === arrUser.name.toLowerCase() && password === arrUser.password)
}
export const findUserById = (users, id) => users.find(arrUser => id === arrUser.data.userId)

export const usersWithoutClient = (users,  userId) => users.filter((user) => user.userId !== userId)

export function searchContactUser(contactUsers,string){
    const str = [...string]
    return contactUsers.filter((user) => {
        return str.every((latter) => {
            if([...user.name].includes(latter)){
                return user
            }
        })
    })
}
export function searchMessageInMessages(messages,string){
    const str = [...string]
    return messages.filter((message) => {
        return str.every((latter) => {
            if([...message.message].includes(latter)){
                return message
            }
        })
    })
}