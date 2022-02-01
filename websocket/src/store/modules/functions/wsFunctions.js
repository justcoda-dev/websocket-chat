export function contactUserChat(contactUser, messages, user) {
    if (!messages) return []
    return messages.reduce((acc, message) => {
        const contactId = contactUser.userId;
        const personId = user.userId;
        if (personId === message.userId && contactId === message.toUser) {
            acc.push(message)
        }
        if (contactId === message.userId && personId === message.toUser) {
            acc.push(message)
        }
        return acc
    }, [])
}