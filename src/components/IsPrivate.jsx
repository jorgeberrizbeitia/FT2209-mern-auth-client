// componente envoltorio que verifique si el usuario esta logeado o no
// y renderize el componente interno acorde

import {useContext} from 'react'
import {AuthContext} from "../context/auth.context"
// import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"

function IsPrivate(props) {

  // const navigate = useNavigate()

  const { isLoggedIn } = useContext(AuthContext)

  if (isLoggedIn === true) {
    // si isLoggedIn es true, renderiza props.children
    return props.children
  } else {
    // si no, redirecciona
    // navigate("/login")
    return <Navigate to="/login"/>
    // utilizamos Navigate similar al navigate() en este tipo de situaciones cuando tenemos que renderizar algo
  }

    
}

export default IsPrivate