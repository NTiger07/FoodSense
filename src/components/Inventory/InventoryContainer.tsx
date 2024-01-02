import { useEffect, useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddInventoryItem from "./AddInventoryItem"
import InventoryItem from "./InventoryItem"
import ExpiryItem from "./ExpiryItem"
import axios from "axios"

const InventoryContainer = (props: any) => {
  const { userData } = props

  useEffect(() => {
    getItems()
  }, [])

  const [inventoryList, setInventoryList] = useState([])
  const [addInventory, setAddInventory] = useState(false)




  const getItems = () => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}items/all/${userData?.id}`)
      .then((res) => {
        setInventoryList(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const expiryDates = Object.entries(inventoryList)
    .sort((a, b) => new Date(a[1].expiryDate) - new Date(b[1].expiryDate))
    .slice(0, 7)
    .map((item) => {
      return <ExpiryItem item={item} getItems={getItems} />;
    });

  const InventoryItems = Object.entries(inventoryList).map((item) => {
    return (
      <InventoryItem item={item} getItems={getItems} />
    )
  })

  return (
    <div className="h-[100vh]">
      <Dialog
        open={addInventory}
        fullWidth
        maxWidth="sm"
        onClose={() => setAddInventory(false)}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add item"}
        </DialogTitle>
        <DialogContent style={{ height: '50vh' }}>
          <AddInventoryItem userData={userData} setAddInventory={setAddInventory} getItems={getItems} />
        </DialogContent>
      </Dialog>


      <div className="w-full p-[1rem] text-[1.5rem] mb-[2%] font-semibold flex flex-col h-[30vh] bg-[url('/images/inventory.jpg')] bg-cover">
        <span className="text-[3rem] font-extrabold">INVENTORY</span>
        Manage and keep track of items in your inventory
      </div>

      {inventoryList.length > 0 ? (<><div className="flex flex-col bg-[#00B074] shadow-lg rounded-lg p-[1.5rem] my-[2%] mx-[2%]">
        <span>{inventoryList.length} Item(s)</span>
      </div>



        <div className="flex flex-row justify-between pb-[3%] mx-[2%]">

          <div className="ITEMS flex flex-col h-fit w-[65%] bg-[#00B074]">


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
                <div className="w-[30%]">Units (Grams/Unit)</div>
                <div className="w-[20%]">Expiry Date</div>
                <div className="w-[50%]">Notes</div>
              </div>

            </div>
            <div className="flex flex-col">
              {InventoryItems}
            </div>

          </div>


          <div className="INCOMINGEXPIRY p-[1rem] bg-[#00B074] w-[30%] h-[50vh] rounded-lg shadow-lg">
            <span className="text-light-black font-semibold text-[1.2rem]">Incoming Expiry Dates</span>
            <div className="flex flex-col mt-[2%]">
              {expiryDates}
            </div>
          </div>
        </div></>) : (
        <div className="mx-[2%] h-[60vh] flex items-center justify-center">
            <span className="text-[#000] font-semibold text-[1.3rem] flex items-center justify-center">There are currently no items in your inventory. Click on Add Item to add an item.</span></div>
          )}

      <div className="ADD bg-white rounded-lg flex py-[1rem] px-[2rem] justify-between absolute right-9 bottom-2 cursor-pointer" onClick={() => setAddInventory(!addInventory)}>
        <a className="[text-decoration:none] w-fit flex flex-row items-center justify-start gap-[4px] text-primary-red">
          <img className="relative w-6 h-6" alt="" src="/icons/add.svg" />
          <div className="relative font-semibold text-[#00B074]">Add Item</div>
        </a>
      </div>


    </div>
  )
}

export default InventoryContainer