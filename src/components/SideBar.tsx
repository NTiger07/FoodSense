import { useNavigate } from "react-router-dom"

const SideBar = () => {
const navigate = useNavigate()
    return (
        <div className="bg-yellow h-[100vh] w-[100%] flex flex-col">
            <span>SideBar</span>
            <span onClick={() => navigate("/")}>DashBoard</span>
            <span onClick={() => navigate("/inventory")}>Inventory</span>
        </div>
    )
}

export default SideBar