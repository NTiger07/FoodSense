import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { clearUser, setSidebar } from "../../redux/userSlice"
import { useDispatch, useSelector } from "react-redux"


const SideBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isSidebarExpanded, setIsSideBarExpanded] = useState(false)

    const logoutUser = () => {
        dispatch(clearUser())
        navigate("/auth/login")
    }
    const sidebar = useSelector(state => state.sidebar);
    console.log(sidebar)
    
    return (
        <div className={`relative bg-whitesmoke-200 transition-all h-[100vh] w-[100%] flex flex-col shadow-xl pt-[30%] pb-[5rem] ${isSidebarExpanded ? "w-[15rem] top-0 absolute z-20 h-[100vh]" : ""}`} onMouseEnter={() => setIsSideBarExpanded(true)} onMouseLeave={() => setIsSideBarExpanded(false)}>
            <div className="w-full h-[30%] flex justify-center mb-[6rem] cursor-pointer" onClick={() => setIsSideBarExpanded(!isSidebarExpanded)}>
                <div className={`flex flex-row items-center cursor-pointer w-[70%] gap-2 ${isSidebarExpanded ? "" : "w-full justify-center"}`} onClick={() => navigate("/dashboard")}>
                    <img src="/icons/foodsense-circle.svg" alt="" />
                    <span className={`w-[11rem] text-left ${isSidebarExpanded ? "text-[1.2rem] font-semibold" : "hidden"}`}><img src="/images/FoodSense-logos_black.png" className="w-[5rem]" alt="" /></span>
                </div>
            </div>
            <div className={`h-[70%] flex flex-col w-full items-center justify-center gap-[3rem] text-[#000000] ${isSidebarExpanded ? "px-[15px]" : ""}`}>
                <div className={`${sidebar == "dashboard" && isSidebarExpanded ? "bg-[#00B07426] rounded-lg" : ""} relative py-[.4rem] flex flex-row items-center cursor-pointer w-full gap-2 ${isSidebarExpanded ? "justify-center" : "w-full justify-center"}`} onClick={() => {navigate("/dashboard"); dispatch(setSidebar("dashboard"))}}>
                    {sidebar == "dashboard" && !isSidebarExpanded ? <div className="absolute bg-[#00B074] h-full w-[4px] left-0"></div> : null}
                    <img src="/icons/home-google.svg" className="w-[1.8rem]" alt="" />
                    <span className={`w-fit text-left ${isSidebarExpanded ? "text-[1.2rem] font-semibold" : "hidden"}`}>Dashboard</span>
                </div>
                <div className={`${sidebar == "inventory" && isSidebarExpanded ? "bg-[#00B07426] rounded-lg" : ""} relative py-[.4rem] flex flex-row items-center cursor-pointer w-full gap-2 ${isSidebarExpanded ? "justify-center" : "w-full justify-center"}`} onClick={() => {navigate("/inventory"); dispatch(setSidebar("inventory"))}}>
                    {sidebar == "inventory" && !isSidebarExpanded ? <div className="absolute bg-[#00B074] h-full w-[4px] left-0"></div> : null}
                    <img src="/icons/inventory-google.svg" className="w-[1.8rem]" alt="" />
                    <span className={`w-fit text-left ${isSidebarExpanded ? "text-[1.2rem] font-semibold" : "hidden"}`}>Inventory</span>
                </div>
                <div className={`${sidebar == "assistant" && isSidebarExpanded ? "bg-[#00B07426] rounded-lg" : ""} relative py-[.4rem] flex flex-row items-center cursor-pointer w-full gap-2 ${isSidebarExpanded ? "justify-center" : "w-full justify-center"}`} onClick={() => {navigate("/assistant"); dispatch(setSidebar("assistant"))}}>
                    {sidebar == "assistant" && !isSidebarExpanded ? <div className="absolute bg-[#00B074] h-full w-[4px] left-0"></div> : null}
                    <img src="/icons/assistant-black.svg" className="w-[1.8rem]" alt="" />
                    <span className={`w-fit text-left ${isSidebarExpanded ? "text-[1.2rem] font-semibold" : "hidden"}`}>Assistant</span>
                    {isSidebarExpanded ? <span className="absolute text-primary top-[-25%] left-[40%]"><img src="/icons/experiment.svg" alt="" /></span> : null}
                </div>
                <div className={`${sidebar == "analytics" && isSidebarExpanded ? "bg-[#00B07426] rounded-lg" : ""} relative py-[.4rem] flex flex-row items-center cursor-pointer w-full gap-2 ${isSidebarExpanded ? "justify-center" : "w-full justify-center"}`} onClick={() => {navigate("/analytics"); dispatch(setSidebar("analytics"))}}>
                    {sidebar == "analytics" && !isSidebarExpanded ? <div className="absolute bg-[#00B074] h-full w-[4px] left-0"></div> : null}
                    <img src="/icons/analytics-google.svg" className="w-[1.8rem]" alt="" />
                    <span className={`w-fit text-left ${isSidebarExpanded ? "text-[1.2rem] font-semibold" : "hidden"}`}>Analytics</span>
                </div>
                <div className={`${sidebar == "education" && isSidebarExpanded ? "bg-[#00B07426] rounded-lg" : ""} relative py-[.4rem] flex flex-row items-center cursor-pointer w-full gap-2 ${isSidebarExpanded ? "justify-center" : "w-full justify-center"}`} onClick={() => {navigate("/education"); dispatch(setSidebar("education"))}}>
                    {sidebar == "education" && !isSidebarExpanded ? <div className="absolute bg-[#00B074] h-full w-[4px] left-0"></div> : null}
                    <img src="/icons/education-google.svg" className="w-[1.8rem]" alt="" />
                    <span className={`w-fit text-left ${isSidebarExpanded ? "text-[1.2rem] font-semibold" : "hidden"}`}>Education</span>
                </div>
                <div className={`mt-[3rem] py-[.4rem] flex flex-row items-center cursor-pointer w-full gap-2 ${isSidebarExpanded ? "justify-center" : "w-full justify-center"}`} onClick={logoutUser}>
                    <img src="/icons/logout-google.svg" className="w-[1.8rem]" alt="" />
                    <span className={`w-fit text-left ${isSidebarExpanded ? "text-[1.2rem] font-semibold" : "hidden"}`}>Sign Out</span>
                </div>
            </div>


        </div>
    )
}

export default SideBar