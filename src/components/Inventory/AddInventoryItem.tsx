import { useState } from "react"

const AddInventoryItem = (props: any) => {
    const { inventoryList, setInventoryList } = props

    const addInventory = () => {
        setInventoryList([...inventoryList, {"id": inventoryList.length + 1, "name": name, "quantity": quantity, "expiry_date": expiryDate, "notes": notes}])
    }

    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [notes, setNotes] = useState("")

    return (

        <div className="flex items-center justify-between mb-[3%] gap-2 bg-[#263238] text-light-black font-medium">
            <div className="NAME flex w-[100%] md:w-[33%] mb-[5%] md:mb-0 flex-col items-start justify-center">
                <div className="relative font-medium mb-[5%] text-[#f9f9f9]">Name</div>
                <input
                    className="outline-none w-[100%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                    type="text"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="QUANTITY flex w-[100%] md:w-[15%] mb-[5%] md:mb-0 flex-col items-start justify-center">
                <div className="relative font-medium mb-[5%] text-[#f9f9f9]">Quantity</div>
                <div className="flex items-center justify-between">
                    <input
                        className="outline-none w-[60%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                        type="number"
                        defaultValue={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </div>

            </div>

            <div className="EXPIRY flex w-[100%] md:w-[33%] mb-[5%] md:mb-0 flex-col items-start justify-center">
                <div className="relative font-medium mb-[5%] text-[#f9f9f9]">Expiry Date</div>
                <div className="flex items-center justify-between">
                    <input
                        className="outline-none w-[60%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                        type="text"
                        defaultValue={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                    />
                    {/* <DatePicker
                        label="Start Date"
                        value={startTimeProp}
                        onChange={handleStartTimeChange}
                        format="DD-MM-YYYY"
                    /> */}
                </div>

            </div>

            <div className="NOTES flex w-[100%] md:w-[33%] mb-[5%] md:mb-0 flex-col items-start justify-center">
                <div className="relative font-medium mb-[5%] text-[#f9f9f9]">Notes</div>
                <div className="flex items-center justify-between">
                    <input
                        className="outline-none w-[60%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                        type="text"
                        defaultValue={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        required
                    />
                </div>

            </div>

            <button
                className="cursor-pointer py-[10px] px-[30px] bg-[transparent] rounded-3xs flex flex-row items-start justify-start border-[1px] border-solid border-primary-red"
                onClick={addInventory}
            >
                <b className="relative text-base font-work-sans text-primary-red text-left">
                    Add
                </b>
            </button>
        </div>
    )
}

export default AddInventoryItem