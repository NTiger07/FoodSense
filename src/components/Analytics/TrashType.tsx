import axios from "axios"
import { useState } from "react"

const TrashType = (props: any) => {
  const { userData } = props
  const [response, setResponse] = useState({})

  const getType = () => {
    axios.get(`${import.meta.env.VITE_LOCAL_URL}trash/type/${userData.id}`)
      .then((res) => {
        setResponse(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className="IMPACT w-[30%] rounded-lg shadow-lg bg-[#37474F] h-[100%]" onClick={getType}>Trash Type</div>
  )
}

export default TrashType