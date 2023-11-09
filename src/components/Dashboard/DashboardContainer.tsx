const DashboardContainer = (props: any) => {
  const { userData } = props


  return (
    <div className="flex flex-col items-center">
      <div className="bg-primary w-[85%] p-[1rem] mt-[2rem] rounded-lg shadow-xl">
        Welcome {userData?.firstname} {userData?.lastname}
      </div>
    </div>
  )
}

export default DashboardContainer