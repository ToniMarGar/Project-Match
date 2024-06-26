import api from "./config"

export const setNewQuizz = async (body) => {
    try {
        const token = localStorage.getItem("token")
    const response = await api.post(`quizz`,body, {headers: {
        authorization: token
}}) 
console.log(response)
    } catch(error){
        console.log(error)
    }

}