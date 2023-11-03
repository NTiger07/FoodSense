const DashBoard = (props: any) => {
  const {userData} = props
  console.log(userData)

  return (
    <div>Welcome {userData?.firstname} {userData?.lastname}</div>
  )
}

export default DashBoard