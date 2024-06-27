import api from "./config"

export const readUsername = async (id) => { // en parentesis ID o username¿?
    const { data } = await api.get(`user/${id}`, {headers:{ authorization: localStorage.token}})
    console.log(data)
    return data
}

export const getAllQuizz = async () => {
    const { data } = await api.get(`quizz/`, {headers:{ authorization: localStorage.token}})
    console.log(data)
    return data
}