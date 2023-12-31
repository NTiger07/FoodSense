import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { setUser } from "../../redux/userSlice.js"

const LoginContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [visible, setVisible] = useState(false)

    const userCredentials = {
        username, password
    }

    const authenticateUser = () => {
        if (username !== "" && password !== "") {
            axios
                .post(`${import.meta.env.VITE_LOCAL_URL}auth/login`, userCredentials)
                .then((res) => {
                    dispatch(setUser({ user: res.data }))
                    navigate("/dashboard")
                })
                .catch((err) => {
                    if (err.response.status == 404){
                        toast.error("User not found, check the Email and Password and try again")
                    } else{
                        console.error(err)
                        toast.error("Error Logging in")
                    }
                })
        }

    }


    return (
        <div className="auth_container flex justify-center items-center min-h-screen overflow-y-hidden w-[100vw]">
            <div className="bg-light-black rounded-lg p-8 shadow w-[30%] h-[60vh] overflow-y-hidden">
                <h1 className="text-3xl text-center mb-6">Login</h1>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full h-12 outline-none border-none border-white bg-white rounded-full px-4 text-black"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-[3rem] flex justify-between flex-row items-center w-full h-12 px-[1rem] rounded-full text-black bg-white">
                    <input
                        type={visible ? "text" : "password"}
                        placeholder="Password"
                        className="outline-none border-none px-4 w-[80%] h-[90%] bg-white"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <img src={`/icons/eye${visible ? "" : "-off"}-line.svg`} className="w-[7%] cursor-pointer" alt="" onClick={() => setVisible(!visible)} />
                </div>
                {/* <div className="flex justify-between text-sm mb-4">
                    <label className="flex items-center text-white">
                        <input type="checkbox" className="mr-2" />
                        Remember Me
                    </label>
                    <a href="#" className="text-white hover:underline">Forgot Password</a>
                </div> */}
                <button
                    onClick={authenticateUser}
                    className="w-full h-12 bg-white text-black rounded-full font-semibold hover:bg-opacity-90 transition duration-300 cursor-pointer"
                >
                    Login
                </button>
                <div className="text-sm text-center mt-4">
                    Don't have an account? <a href="/auth/register" className="text-white font-semibold hover:underline">Register</a>
                </div>
            </div>
        </div>
    )
}

export default LoginContainer