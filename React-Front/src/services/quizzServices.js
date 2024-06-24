import api from "./config"

export const suggestedDestinations = async (body) => {
    const { data } = await api.post(`quizz/suggestedDestinations`, body)
    console.log(data)
    return data

}