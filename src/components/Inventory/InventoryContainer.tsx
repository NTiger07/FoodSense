import { useState } from "react"
import InventoryItem from "./InventoryItem"

const InventoryContainer = () => {
  const [inventoryList, setInventoryList] = useState([
    { "id": 1, "name": "dd", "quantity": "3", "expiry_date": "1" },
  ])
  const [length, setLength] = useState(1)

  const addItem = () => {
    if (inventoryList[length - 1].name !== "") {
      setInventoryList([...inventoryList, { "id": length, "name": "", "quantity": "", "expiry_date": "" }])
      setLength(length + 1)
    }
  }

const InventoryItems = Object.entries(inventoryList).map((item) => {
  return(
    <InventoryItem item={item}/>
  )
  
})
  


  return (
    <div>
      <div className="SEARCH">
        Search and account
      </div>
      <div className="flex flex-col">
        Inventory
        <span>0 Items</span>
      </div>
      <div>
        {InventoryItems}
      </div>
      <div className="ADDITEM w-fit hover:bg-crimson-100 cursor-pointer" onClick={addItem}>
        <a className="[text-decoration:none] flex flex-row items-center justify-start gap-[4px] text-primary-red">
          <img className="relative w-6 h-6" alt="" src="/assets/add.svg" />
          <div className="relative font-semibold">Add Item</div>
        </a>
      </div>
    </div>
  )
}

export default InventoryContainer