import InventoryContainer from "../../components/Inventory/InventoryContainer"

const Inventory = (props: any) => {
  const { userData } = props
  
  return (
    <div className="h-[100%] flex flex-row w-[100vw]">
      <div className="w-[0%]">
        {/* <SideBar /> */}
      </div>
      <div className="w-[95%]">
        <InventoryContainer userData={userData}/>
      </div>
    </div>
  )
}

export default Inventory