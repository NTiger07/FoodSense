import { useNavigate } from "react-router-dom"

const SideBar = () => {
const navigate = useNavigate()
    return (
        <div className="bg-yellow h-[100vh] w-[100%] flex flex-col">
            <span>SideBar</span>
            <span onClick={() => navigate("/")}>DashBoard</span>
            <span onClick={() => navigate("/inventory")}>Inventory</span>
            <span onClick={() => navigate("/assistant")}>Assistant</span>
            <span onClick={() => navigate("/analytics")}>Analytics</span>
            <span onClick={() => navigate("/education")}>Education</span>
        </div>
    )
}

export default SideBar