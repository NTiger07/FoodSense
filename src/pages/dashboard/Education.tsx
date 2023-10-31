import EducationContainer from '../../components/EducationContainer'
import SideBar from '../../components/SideBar'

const Education = () => {
  return (
    <div className="h-[100%] flex flex-row w-[100vw]">
      <div className="w-[5%]">
        <SideBar />
      </div>
      <div className="w-[95%]">
        <EducationContainer />
      </div>
    </div>
  )
}

export default Education