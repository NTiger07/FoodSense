import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs";
import { useState } from "react"
import { toast } from "react-toastify";

const AddInventoryItem = (props: any) => {
    const { inventoryList, setInventoryList, setAddInventory } = props

    const addInventory = () => {
        setInventoryList([...inventoryList, { "id": inventoryList.length + 1, "name": name, "quantity": quantity, "expiry_date": expiryDate, "notes": notes }])
        localStorage.setItem("inventoryList", JSON.stringify(inventoryList))
        setAddInventory(false)
        setName("")
        setQuantity("")
        setExpiryDate("")
        setNotes("")
        toast.info("Item added")
    }
    const handleExpiryDateChange = (time) => {
        setExpiryDate(dayjs(time, 'DD-MM-YYYY').format('DD-MM-YYYY'))
    }

    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [notes, setNotes] = useState("")

    return (
        // bg - [#263238]
        <div className="flex h-[5rem] items-center w-[100%] justify-between mb-[3%] text-light-black font-medium">
            <div className="flex h-[5rem] flex-row items-center w-[95%] gap-1">
                <div className="NAME flex w-[30%] mb-0 flex-col items-start justify-center">
                    {/* <div className="relative font-medium mb-[5%] text-[#f9f9f9]">Name</div> */}
                    <input
                        className="outline-none h-[3rem] w-[100%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                        type="text"
                        defaultValue={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="QUANTITY flex w-[10%] mb-0 flex-col items-start justify-center">
                    {/* <div className="relative font-medium mb-[5%] text-[#f9f9f9]">Quantity</div> */}
                    <div className="flex items-center justify-between">
                        <input
                            className="outline-none h-[3rem] w-full bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                            type="number"
                            placeholder="Units"
                            defaultValue={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required
                        />
                    </div>

                </div>

                <div className="EXPIRY flex w-[23%] mb-0 flex-col items-start justify-center">
                    {/* <div className="relative font-medium mb-[5%] text-[#f9f9f9]">Expiry Date</div> */}
                    <div className="flex items-center justify-between">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Expiry Date"
                                value={dayjs(expiryDate)}
                                onChange={handleExpiryDateChange}
                                format="DD-MM-YYYY"
                            />
                        </LocalizationProvider>


                    </div>

                </div>

                <div className="NOTES flex w-[37%] mb-0 flex-col items-start justify-center">
                    {/* <div className="relative font-medium mb-[5%] text-[#f9f9f9]">Notes</div> */}
                    <div className="flex items-center justify-between w-full">
                        <textarea
                            className="outline-none min-h-[3rem] h-[3rem] max-h-[5rem] w-full bg-whites-plain rounded-6xs box-border flex flex-row pt-[4%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                            placeholder="Add Notes"
                            defaultValue={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            required
                        />
                    </div>

                </div>
            </div>

            <div className="w-[5%] ml-[.7rem] flex justify-center h-[2.2rem] items-center">
                <button
                    className="cursor-pointer bg-[transparent] h-[100%] w-[90%] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-[#A05000]"
                    onClick={addInventory}
                >
                    {/* <b className="relative text-base font-work-sans text-[#A05000] text-center">
                        Add 
                    </b> */}
                    <img src="/assets/add.svg" alt="" />
                </button>
            </div>

        </div>
    )
}

export default AddInventoryItem