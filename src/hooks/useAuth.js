import { useContext } from "react"
import AuthContext from "../providers/AuthContext"

export const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
}