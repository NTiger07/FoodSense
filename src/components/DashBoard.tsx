const DashBoard = () => {
  const userData = JSON.parse(localStorage.getItem('persist:foodsense'))

  return (
    <div>Welcome {userData.firstname} {userData.lastname}</div>
  )
}

export default DashBoard