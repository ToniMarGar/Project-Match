import api from "./config"

export const signup = async (dataSignUp) => {

    const { data } = await api.post('/auth/signup', dataSignUp)
    
    return data

}