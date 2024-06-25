import api from "./config"

export const setOneResult = async (body) => {
    const { data } = await api.post(`/result`, body)

    return data

}