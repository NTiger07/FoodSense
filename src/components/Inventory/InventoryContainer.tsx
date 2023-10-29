import { useEffect, useState } from "react"
import AddInventoryItem from "./AddInventoryItem"
import InventoryItem from "./InventoryItem"
import ExpiryItem from "./ExpiryItem"
import axios from "axios"

const InventoryContainer = () => {
  useEffect(() => {
    getItems()
  }, [])

  const storedInventoryListJSON = localStorage.getItem("inventoryList");
  const storedInventoryList = JSON.parse(storedInventoryListJSON)


  const [inventoryList, setInventoryList] = useState(storedInventoryList || [])


  localStorage.setItem("inventoryList", JSON.stringify(inventoryList || []))
  const [addInventory, setAddInventory] = useState(false)


  const InventoryItems = Object.entries(inventoryList).map((item) => {
    return (
      <InventoryItem item={item} setInventoryList={setInventoryList} />
    )
  })

  const expiryDates = Object.entries(inventoryList).map((item) => {
    return (
      <ExpiryItem item={item} />
    )
  })

  const getItems = () => {
    axios
      // .get("http://localhost:3000/items/all")
      .get("http://localhost:3000/dashboard")
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }

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
              <div className="w-[20%]">Units</div>
              <div className="w-[20%]">Expiry Date</div>
              <div className="w-[60%]">Notes</div>
            </div>

          </div>



          <div className="flex flex-col">
            {InventoryItems}
          </div>

          <div className="bg-[#263238] pt-[7%]">

            {addInventory && <AddInventoryItem inventoryList={inventoryList} setInventoryList={setInventoryList} setAddInventory={setAddInventory} />}
          </div>




          <div className="ADDSAVE bg-[#263238] flex py-[1rem] px-[2rem] justify-between">
            <a className="[text-decoration:none] w-fit cursor-pointer flex flex-row items-center justify-start gap-[4px] text-primary-red">
              <img className="relative w-6 h-6" alt="" src="/assets/add.svg" />
              <div className="relative font-semibold text-[#A05000]" onClick={() => setAddInventory(!addInventory)}>Add Item</div>
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