import { useState } from "react"
import AddInventoryItem from "./AddInventoryItem"
import InventoryItem from "./InventoryItem"
import ExpiryItem from "./ExpiryItem"

const InventoryContainer = () => {
  const [inventoryList, setInventoryList] = useState([
    { "id": 1, "name": "Indomie Noodles", "quantity": "40", "expiry_date": "13/10/24", "notes": "For Sundays" },
    { "id": 2, "name": "Indomie Noodles", "quantity": "40", "expiry_date": "13/10/24", "notes": "For Sundays" },
  ])
  const [length, setLength] = useState(1)
  const [addInventory, setAddInventory] = useState(false)

  const addItem = () => {
    // if (inventoryList[length - 1].name !== "") {
    // setInventoryList([...inventoryList, { "id": length, "name": "", "quantity": "", "expiry_date": "", "notes": "" }])
    // setLength(length + 1)
    // }
  }

  const InventoryItems = Object.entries(inventoryList).map((item) => {
    return (
      <InventoryItem item={item} />
    )
  })
  const expiryDates = Object.entries(inventoryList).map((item) => {
    return (
      <ExpiryItem item={item} />
    )
  })


  return (
    <div className="h-[100vh] mx-[2%] mt-[2%]">
      <div className="SEARCH">
        Search and account
      </div>

      <div className="flex flex-col bg-[#37474F] shadow-lg rounded-lg p-[1.5rem] my-[2%]">
        <span>{inventoryList.length} Item(s)</span>
      </div>



      <div className="flex flex-row justify-between">

        <div className="ITEMS flex flex-col h-fit w-[65%] bg-[#37474F]">


          <div className="HEADER flex items-center py-[2%] w-full text-light-black font-semibold">

            <div className="NAMEID flex w-[30%]">
              <div className="flex w-[20%] justify-center">
                #
              </div>

              <div className="flex w-[80%]">
                Name
              </div>
            </div>

            <div className="REST flex flex-row items-center w-[70%]">
              <div className="w-[20%]">Quantity</div>
              <div className="w-[20%]">Expiry Date</div>
              <div className="w-[60%]">Notes</div>
            </div>
          </div>



          <div className="flex flex-col">
            {InventoryItems}
          </div>

          <div className="bg-[#263238] pt-[7%]">

            {addInventory && <AddInventoryItem inventoryList={inventoryList} setInventoryList={setInventoryList}/>}
          </div>




          <div className="ADDSAVE bg-[#263238] flex py-[1rem] px-[2rem] justify-between" onClick={addItem}>
            <a className="[text-decoration:none] w-fit cursor-pointer flex flex-row items-center justify-start gap-[4px] text-primary-red">
              <img className="relative w-6 h-6" alt="" src="/assets/add.svg" />
              <div className="relative font-semibold text-[#A05000]" onClick={() => setAddInventory(true)}>Add Item</div>
            </a>

            <a className="[text-decoration:none] w-fit cursor-pointer flex flex-row items-center justify-start gap-[4px] text-primary-red">
              <img className="relative w-6 h-6" alt="" src="/assets/save.svg" />
              <div className="relative font-semibold text-[#A05000]">Save changes</div>
            </a>
          </div>
        </div>


        <div className="INCOMINGEXPIRY p-[1rem] bg-[#37474F] w-[30%] h-[50vh] rounded-lg shadow-lg">
          <span className="text-light-black font-semibold text-[1.2rem]">Incoming Expiry Dates</span>
          <div className="flex flex-col mt-[2%]">
            {expiryDates}
          </div>
        </div>
      </div>



    </div>
  )
}

export default InventoryContainer