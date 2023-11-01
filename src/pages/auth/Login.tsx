import { useNavigate } from "react-router-dom"
import LoginContainer from "../../components/Auth/LoginContainer"
import { useEffect } from "react"

const Login = () => {
    const navigate = useNavigate()
    
    const userDataLocal = localStorage.getItem('persist:foodsense')
    const userDataLocalJSON = JSON.parse(userDataLocal)


    useEffect(() => {
        if (userDataLocalJSON.email) {
            navigate("/dashboard")
        }
    }, [])
    
    return (
        <LoginContainer />
    )
}

export default Login