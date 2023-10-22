import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { useState, useEffect } from "react"

const AddInventoryItem = (props: any) => {
    const { inventoryList, setInventoryList, setAddInventory } = props

    const addInventory = () => {
        setInventoryList([...inventoryList, {"id": inventoryList.length + 1, "name": name, "quantity": quantity, "expiry_date": expiryDate, "notes": notes}])
        localStorage.setItem("inventoryList", JSON.stringify(inventoryList))
        setAddInventory(false)
        setName("")
        setQuantity("")
        setExpiryDate("")
        setNotes("")
    }

    // useEffect(() => {
    //     setName("")
    //     setQuantity("")
    //     setExpiryDate("")
    //     setNotes("")
    // }, [addInventory])

    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [notes, setNotes] = useState("")

    return (
        // bg - [#263238]
        <div className="flex h-[5rem] items-center w-[100%] justify-between mb-[3%] text-light-black font-medium">
            <div className="flex h-[5rem] flex-row items-center w-[88%] gap-1">
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
                            placeholder="Quantity"
                            defaultValue={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required
                        />
                    </div>

                </div>

                <div className="EXPIRY flex w-[15%] mb-0 flex-col items-start justify-center">
                    {/* <div className="relative font-medium mb-[5%] text-[#f9f9f9]">Expiry Date</div> */}
                    <div className="flex items-center justify-between">
                        <input
                            className="outline-none h-[3rem] w-[100%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                            type="text"
                            defaultValue={expiryDate}
                            placeholder="Expiry Date"
                            onChange={(e) => setExpiryDate(e.target.value)}
                            required
                        />
                        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Expiry Date"
                            value={expiryDate}
                            // onChange={(e) => setExpiryDate(dayjs(e.target.value))}
                            onChange={(e) => console.log(e.target.value)}
                            format="DD-MM-YYYY"
                        />
                    </LocalizationProvider> */}

                    </div>

                </div>

                <div className="NOTES flex w-[45%] mb-0 flex-col items-start justify-center">
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
            
            <div className="w-[12%] flex justify-center h-[3rem] items-center">
                <button
                    className="cursor-pointer bg-[transparent] h-[100%] w-[90%] rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-[#A05000]"
                    onClick={addInventory}
                >
                    <b className="relative text-base font-work-sans text-[#A05000] text-center">
                        Add
                    </b>
                </button>
            </div>
           
        </div>
    )
}

export default AddInventoryItem