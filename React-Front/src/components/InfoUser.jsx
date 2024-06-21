import { useState } from "react"
import { getOneUser } from "../service/user"

const InfoUser = () => {
    const [id, setId] = useState()
    const [user,setUser] = useState("")

    const handleGetOneUser = async () => { 
        const data = await getOneUser(id)
       console.log(data)
    setUser(data.username)

    }


  return (
    <div>
          <input type="number" onChange={(e) => {setId(e.target.value)}} />
          <button onClick={(e) => { e.preventDefault(); handleGetOneUser() }}>Ver infor de usuario</button>
          { user.length > 0 ? <p> { user}</p>: <p>No hay usuario</p>}
    </div>
  )
}

export default InfoUser
