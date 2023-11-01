import { useEffect } from "react"
import RegisterContainer from "../../components/Auth/RegisterContainer"
import { useNavigate } from "react-router-dom"

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
        <RegisterContainer />
    )
}

export default Login