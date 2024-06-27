import api from "./config"

/* export const getOneUser = async (id) => {

    const { data } = await api.get(`/user/${id}`, {
        headers: { authorization: localStorage.token}
    })

    return data

} */

    export const getOneUser = async () => {

    const { data } = await api.get(`/user/actualUser`, {
        headers: { authorization: localStorage.token}
    })

    //console.log(data);
    return data

} 
