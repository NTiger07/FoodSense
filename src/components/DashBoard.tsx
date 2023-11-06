import { useSelector } from "react-redux";

const DashBoard = (props: any) => {
  const {userData} = props
  

  return (
    <div>Welcome {userData?.firstname} {userData?.lastname}</div>
  )
}

export default DashBoard