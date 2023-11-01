import { useEffect, useState } from "react"

type userDataType = {
  email: string,
  firstname: string,
  lastname: string,
  id: string
}

const DashBoard = () => {
  const userDataLocal = localStorage.getItem('persist:foodsense')
  const userDataLocalJSON = JSON.parse(userDataLocal)
  const [userData, setUserData] = useState<userDataType>()

  useEffect(() => {
    getUser()
  },[])

  const getUser = () => {
    setUserData(userDataLocalJSON)
  }

  return (
    <div>Welcome {userData?.firstname} {userData?.lastname}</div>
  )
}

export default DashBoard