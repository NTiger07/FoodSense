import EducationContainer from '../../components/EducationContainer'


const Education = (props: any) => {
  const { userData } = props
  
  return (
    <div className="h-[100%] flex flex-row w-[100vw]">
      <div className="w-[0%]">
        {/* <SideBar /> */}
      </div>
      <div className="w-[95%]">
        <EducationContainer />
      </div>
    </div>
  )
}

export default Education