import api from "./config"

export const setOneDestination = async (body) => {
    const { data } = await api.post(`/destination`, body)

    return data

}