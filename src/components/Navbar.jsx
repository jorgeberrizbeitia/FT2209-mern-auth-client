import {useContext} from 'react'
import { Link } from 'react-router-dom'
import {AuthContext} from "../context/auth.context"

function Navbar() {

  const { authenticaUser, isLoggedIn, setUser, setIsLoggedIn } = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    // despues de borrar el token, volvemos a invocar la funcion de validarlo
    authenticaUser()
    // setUser(null)
    // setIsLoggedIn(false)
  }



  return (
    <div id="navbar">
      
        {isLoggedIn === true ? (
          <div>
            <Link to="/">Home</Link>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </div>
        ) : (
          <div>
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </div>
        )
      }
        

    </div>
  )
}

export default Navbar