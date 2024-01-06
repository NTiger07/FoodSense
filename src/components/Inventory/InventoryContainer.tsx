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

  const [order, setOrder] = useState(1)
  const [query, setQuery] = useState("")

  useEffect(() => {
    getItems()
  }, [order, query])

  const [inventoryList, setInventoryList] = useState([])
  const [addInventory, setAddInventory] = useState(false)

  const toggleOrder = () => {
    order == 1 ? setOrder(prev => prev - 2) : setOrder(prev => prev + 2)
  }

  const params = {
    order: order,
    query: query
  }




  const getItems = () => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}items/all/${userData?.id}`, { params: params })
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

  const InventoryItems = Object.entries(inventoryList)
    .map((item) => {
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

          <div className="ITEMS flex flex-col h-fit w-[65%] ">

            <div className="SEARCH mx-[1%] text-[#000]">
              <div className="flex h-[1rem] flex-row items-center justify-between my-[5%]">
                <div className="flex h-[100%] flex-row items-center">
                  <div className="h-[2.5rem] cursor-pointer rounded-6xs mr-[5%] px-[5%] bg-whites-plain box-border overflow-hidden flex flex-row items-center justify-center border border-greys-etherium" onClick={toggleOrder}>
                    <img className="w-[.9rem]" alt="" src="/icons/arrows-exchange-alt-v.svg" />
                  </div>

                  <div className="w-[100%] h-[2.5rem] py-[5px] md:py-[13px] px-[15px] items-center justify-start flex flex-row bg-whites-plain rounded-6xs shadow-[0px_1px_2px_rgba(28,_39,_49,_0.08)] box-border border-[1px] border-solid border-greys-etherium">
                    <img src="/icons/search-icon.svg" alt="" />
                    <input
                      className="pl-[20px] w-[100%] text-[1.1rem] outline-none appearance-none"
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search"
                    />
                  </div>
                </div>

                <div className="flex text-base h-[100%] w-[40%] justify-end flex-row items-center">
                  <div className="relative rounded-3xs ml-[5%] px-[3%] h-[2.5rem] bg-whites-plain box-border flex flex-row items-center justify-center border border-greys-etherium">
                    <div className="flex items-center cursor-pointer">
                      <div className="overflow-hidden flex flex-row p-[3px] items-center justify-center gap-[8px]">
                        <img
                          className="relative w-[18.01px] h-[18.01px]"
                          alt=""
                          src="/icons/calendar.svg"
                        />
                        <div className="relative box-border w-px h-[13px] border-r-[1px] border-text-black mr-[5px]" />
                      </div>
                      <div className="relative tracking-[0.02em] leading-[120%] inline-block w-[89px] shrink-0">
                        Date
                      </div>
                      <div className="overflow-hidden flex flex-col py-[5.5px] px-0.5 items-center justify-center">
                        <img
                          className="relative w-2.5 h-[6.5px]"
                          alt=""
                          src="/icons/one-arrow-down.svg"
                        />
                      </div>
                    </div>

                    {/* <div className={`absolute top-[120%] right-[-50%] flex justify-between gap-3 items-center w-max ${isDateRangeOpen ? " ": "hidden"}`}>
                          

                        <DatePicker
                            label="Start Date"
                            value={startTimeProp}
                            onChange={handleStartTimeChange}
                            format="DD-MM-YYYY"
                        />
                        <DatePicker
                            label="End Date"
                            value={endTimeProp}
                            onChange={handleEndTimeChange}
                            format="DD-MM-YYYY"
                        />
                        </div> */}
                  </div>


                </div>
              </div>
            </div>

            <div className="HEADER flex items-center py-[2%] w-full text-light-black font-semibold bg-[#00B074]">

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