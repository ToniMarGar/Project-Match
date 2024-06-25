import api from "./config"

export const getOneUser = async (id) => {

    const { data } = await api.get(`/user/${id}`, {
        headers: { authorization: localStorage.token}
    })

    return data

}