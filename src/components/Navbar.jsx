import {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import {AuthContext} from "../context/auth.context"

function Navbar() {

  const { authenticaUser, isLoggedIn, setUser, setIsLoggedIn } = useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    // despues de borrar el token, volvemos a invocar la funcion de validarlo
    authenticaUser()
    // setUser(null)
    // setIsLoggedIn(false)
    // opcionalmente podemos agrega la redireccion pero authenticaUser tambien se encarga de eso
  }

  const asignClassName = (navInfo) => {
    console.log(navInfo.isActive)
    if (navInfo.isActive === true) {
      return "nav-active"
    } else {
      return "nav-inactive"
    }
  }

  const activeStyle = {
    backgroundColor: "blueviolet"
  }

  const inactiveStyle = {
    backgroundColor: "lightpink"
  }

  const assignStyle = (navInfo) => {
    if (navInfo.isActive === true) {
      return activeStyle
    } else {
      return inactiveStyle
    }
  }

  // NavLink nos permite agregar como valor a className, id, styles, incluso innerText de etiquetas. Una funcion que verifica la locacion actual del usuario

  return (
    <div id="navbar">
      
        {isLoggedIn === true ? (
          <div>
            <NavLink to="/">
              <button style={assignStyle}>Home</button>
            </NavLink>
            <NavLink to="/profile" className={asignClassName}>
              <button>Perfíl</button>
            </NavLink>
            <span className='nav-inactive'>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </span>
          </div>
        ) : (
          <div>
            <NavLink to="/" className={asignClassName}>
              <button>Home</button>
            </NavLink>
            <NavLink to="/signup" className={asignClassName}>
              <button>Signup</button>
            </NavLink>
            <NavLink to="/login" className={asignClassName}>
              <button>Login</button>
            </NavLink>
          </div>
        )
      }
        

    </div>
  )
}

export default Navbar