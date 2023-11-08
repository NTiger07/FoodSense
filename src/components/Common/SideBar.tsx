import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { clearUser } from "../../redux/userSlice"
import { useDispatch } from "react-redux"


const SideBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isSidebarExpanded, setIsSideBarExpanded] = useState(false)

    const logoutUser = () => {
        dispatch(clearUser())
        navigate("/auth/login")
    }

    return (
        <div className={`relative bg-[#37474F] transition-all h-[100vh] w-[100%] flex flex-col shadow-xl pt-[30%] pb-[5rem] ${isSidebarExpanded ? "w-[15rem] top-0 absolute z-20 h-[100vh]" : ""}`} onMouseEnter={() => setIsSideBarExpanded(true)} onMouseLeave={() => setIsSideBarExpanded(false)}>
            <div className="w-full flex justify-center mb-[6rem] cursor-pointer" onClick={() => setIsSideBarExpanded(!isSidebarExpanded)}>
                <img src="/icons/menu-google.svg" className="w-[1.8rem]" alt="" />
            </div>
            <div className="flex flex-col w-full items-center justify-center gap-[3rem] text-[#000000]">
                <div className={`flex flex-row items-center cursor-pointer w-[70%] gap-2 ${isSidebarExpanded ? "" : "w-full justify-center"}`} onClick={() => navigate("/dashboard")}>
                    <img src="/icons/home-google.svg" className="w-[1.8rem]" alt="" />
                    <span className={`w-[100%] text-left ${isSidebarExpanded ? "text-[1.2rem] font-semibold" : "hidden"}`}>Dashboard</span>
                </div>
                <div className={`relative flex flex-row items-center cursor-pointer w-[70%] gap-2 ${isSidebarExpanded ? "" : "w-full justify-center"}`} onClick={() => navigate("/inventory")}>
                    <img src="/icons/inventory-google.svg" className="w-[1.8rem]" alt="" />
                    <span className={`w-[100%] text-left ${isSidebarExpanded ? "text-[1.2rem] font-semibold" : "hidden"}`}>Inventory</span>
                </div>
                <div className={`flex flex-row items-center cursor-pointer w-[70%] gap-2 ${isSidebarExpanded ? "" : "w-full justify-center"}`} onClick={() => navigate("/assistant")}>
                    <img src="/icons/assistant-black.svg" className="w-[1.8rem]" alt="" />
                    <span className={`w-[100%] text-left ${isSidebarExpanded ? "text-[1.2rem] font-semibold" : "hidden"}`}>Assistant</span>
                    {isSidebarExpanded ? <span className="absolute bg-[] text-primary top-[41%] left-[50%]">Experiment</span> : null}
                </div>
                <div className={`flex flex-row items-center cursor-pointer w-[70%] gap-2 ${isSidebarExpanded ? "" : "w-full justify-center"}`} onClick={() => navigate("/analytics")}>
                    <img src="/icons/analytics-google.svg" className="w-[1.8rem]" alt="" />
                    <span className={`w-[100%] text-left ${isSidebarExpanded ? "text-[1.2rem] font-semibold" : "hidden"}`}>Analytics</span>
                </div>
                <div className={`flex flex-row items-center cursor-pointer w-[70%] gap-2 ${isSidebarExpanded ? "" : "w-full justify-center"}`} onClick={() => navigate("/education")}>
                    <img src="/icons/education-google.svg" className="w-[1.8rem]" alt="" />
                    <span className={`w-[100%] text-left ${isSidebarExpanded ? "text-[1.2rem] font-semibold" : "hidden"}`}>Education</span>
                </div>
                <div className={`mt-[5rem] flex flex-row items-center cursor-pointer w-[70%] gap-2 ${isSidebarExpanded ? "" : "w-full justify-center"}`} onClick={logoutUser}>
                    <img src="/icons/logout-google.svg" className="w-[1.8rem]" alt="" />
                    <span className={`w-[100%] text-left ${isSidebarExpanded ? "text-[1.2rem] font-semibold" : "hidden"}`}>Sign Out</span>
                </div>
            </div>


        </div>
    )
}

export default SideBar