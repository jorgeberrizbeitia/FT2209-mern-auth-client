import { createContext, useState } from "react"
import { verifyService } from "../services/auth.services"

const AuthContext = createContext()

function AuthWrapper(props) {

  // .todos los estados y funciones globales
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ user, setUser ] = useState(null)

  const authenticaUser = async () => {
    // ejecutar para validar el token del usuario y actualizar los estados
    try {
      
      const response = await verifyService()
      console.log(response)
      // a partir de este punto, el Token está validado en FE
      setIsLoggedIn(true)
      setUser(response.data)

    } catch (error) {
      console.log(error)
      setIsLoggedIn(false)
      setUser(null)
    }

  }

  const passedContext = {
    isLoggedIn,
    user,
    authenticaUser
  }

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthWrapper
}