import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { setUser } from "../../redux/userSlice.js"

const RegisterContainer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const userCredentials = {
    email,
    firstName: firstname,
    lastName: lastname,
    password
  }

  const registerUser = () => {
    if (password == confirmPassword) {
      axios
        .post("http://localhost:3000/auth/register", userCredentials)
        .then((res) => {
          dispatch(setUser(res.data))
          navigate("/dashboard")
        })
        .catch((err) => {
          console.error(err)
        })
    }
    else {
      toast.error("Passwords don't match")
    }

  }


  return (
    <div className="auth_container min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 rounded-xl mx-auto shadow-lg overflow-hidden">


          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-[#2b2a29e5]">
            <h1 className="text-white text-3xl mb-3 font-bold">Welcome</h1>
            <div>
              <p className="text-white font-semibold">
                With FoodSense, you can effortlessly keep track of your food items,
                monitor their shelf life, to ensure nothing goes to waste.
                But that's not all – we take it a step further. Our app provides insightful visualizations,
                allowing you to see the bigger picture.
                Witness the positive change you're making and get inspired to do even more.
              </p>
            </div>
          </div>



          <div className="bg-light-black w-full lg:w-1/2 py-16 px-8">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It’s free and only takes a minute
            </p>
            <div>
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="First name" className="text-light-black outline-none border-none rounded-[16px] py-[.5rem] px-[.6rem]" onChange={(e) => setFirstname(e.target.value)} />
                <input type="text" placeholder="Last name" className="text-light-black outline-none border-none rounded-[16px] py-[.5rem] px-[.6rem]" onChange={(e) => setLastname(e.target.value)} />
              </div>
              <div className="mt-5">
                <input type="email" placeholder="Email" className="text-light-black outline-none border-none rounded-[16px] py-[.5rem] px-[.6rem] w-full" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Password" className="text-light-black outline-none border-none rounded-[16px] py-[.5rem] px-[.6rem] w-full" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Confirm Password" className="text-light-black outline-none border-none rounded-[16px] py-[.5rem] px-[.6rem] w-full" onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              {password == confirmPassword ? <></> : (<span className="ml-[15px] text-primary-red">Passwords don't match</span>)}
              <div className="mt-5">
                <button
                  type="submit"
                  onClick={registerUser}
                  className="cursor-pointer w-full h-12 bg-white text-black rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
                >
                  Register Now
                </button>
              </div>
              <div className="text-sm text-center mt-4">
                Already have an account? <a href="/auth/login" className="text-white font-semibold hover:underline">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterContainer