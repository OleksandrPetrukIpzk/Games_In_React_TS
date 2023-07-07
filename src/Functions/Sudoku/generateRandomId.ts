export const generateRandomId = () => {
    return Math.ceil(Math.random() * (1000 - 100 + 1) + 100)
}