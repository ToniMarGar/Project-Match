import api from "./config"

export const readUsername = async (id) => { // en parentesis ID o username¿?
    const { data } = await api.get(`user/${id}`, body)
    console.log(data)
    return data
}
