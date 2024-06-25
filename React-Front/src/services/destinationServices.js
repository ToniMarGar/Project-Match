import api from "./config"

export const getAllDestinations = async (body) => {
    const { data } = await api.get(`destination/`,{
        headers: { authorization: localStorage.token}
    })

    return data

}