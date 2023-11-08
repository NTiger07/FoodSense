const DashboardContainer = (props: any) => {
  const {userData} = props
  

  return (
    <div>Welcome {userData?.firstname} {userData?.lastname}</div>
  )
}

export default DashboardContainer