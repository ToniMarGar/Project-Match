import api from "./config"

export const suggestedDestinations = async (body) => {
    const { data } = await api.post(`quizz/suggestedDestinations`, body, {
        headers: { authorization: localStorage.token}
    })
    return data
}