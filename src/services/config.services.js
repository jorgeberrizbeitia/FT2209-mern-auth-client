import axios from "axios"

// todas las variables ENV en react deben empezar por REACT_APP_...
// EN REACT (o cualquier Frontend) en .env no se guardá informacion privada. EL FE SIEMPRE ES EXPUESTO
const service = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
})

// en todas las llamadas de este servicio, vamos a buscar el Token e incluirlo.

export default service