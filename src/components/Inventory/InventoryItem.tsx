import { useMemo, useState } from "react";
import { toast } from "react-toastify";


const InventoryItem = (props: any) => {
    const { item, setInventoryList } = props

    const setBackdropStyle = useMemo(() => {
        if (item[1].id % 2 == 0) {  // even number
            return { backgroundColor: "#37474F", };
        }
        return { backgroundColor: "#263238", };
    }, [item]);

    const [itemQuantity, setItemQuantity] = useState(item[1].quantity as number)
    const [saveVisible, setSaveVisible] = useState(false)


    const updateQuantity = () => {
        const storedInventoryList = JSON.parse(localStorage.getItem("inventoryList") || "[]");
        const itemIndex = storedInventoryList.findIndex((storedItem) => storedItem.id === item[1].id);
        if (itemIndex !== -1) {
            storedInventoryList[itemIndex].quantity = itemQuantity;
            localStorage.setItem("inventoryList", JSON.stringify(storedInventoryList));
        }
        setItemQuantity(itemQuantity);
        setSaveVisible(false)
        toast.success("Inventory Updated")
    }

    const removeItem = () => {
        const storedInventoryList = JSON.parse(localStorage.getItem("inventoryList") || "[]");
        const itemIndex = storedInventoryList.findIndex((storedItem) => storedItem.id === item[1].id);
        if (itemIndex !== -1) {
            storedInventoryList.splice(itemIndex, 1);
            localStorage.setItem("inventoryList", JSON.stringify(storedInventoryList));
        }

        setInventoryList(storedInventoryList);
    };

    return (
        <div className="relative py-[2%] text-[#F9F9F9]" style={setBackdropStyle}>
            <div className="flex flex-row items-center">
                <div className="w-[30%] flex">
                    <div className="w-[20%] flex justify-center">
                        {item[1].id}
                    </div>
                    <div className="w-[80%]">
                        {item[1].name}
                    </div>
                </div>
                <div className="flex items-center w-[70%]">
                    <div className="flex w-[20%] gap-[5%]">
                        {itemQuantity < 10 ? 0 : ""}{itemQuantity}
                        <span className="cursor-pointer" onClick={() => {setItemQuantity(itemQuantity - 1 + 2); setSaveVisible(true)}}><img src="/assets/add.svg" alt="" /></span>
                        <span className="cursor-pointer" onClick={() => { if (itemQuantity > 1) { setItemQuantity(itemQuantity - 1) } setSaveVisible(true) }}><img src="/assets/minus.svg" alt="" /></span>
                    </div>
                    <div className="w-[20%]">
                        {item[1].expiry_date}
                    </div>
                    <div className="w-[60%]">
                        {item[1].notes}
                    </div>
                </div>
                {saveVisible && (<div className="absolute right-20 flex flex-row items-center cursor-pointer" onClick={updateQuantity}>
                    <a className="[text-decoration:none] w-fit cursor-pointer flex flex-row items-center justify-start gap-[4px] text-primary-red">
                        <img className="relative w-6 h-6" alt="" src="/assets/save.svg" />
                        <div className="relative font-semibold text-[#A05000]">Save changes</div>
                    </a>
                </div>)}
                <div className="absolute right-2 pr-[2rem] cursor-pointer" onClick={removeItem}>
                    X
                </div>

            </div>
        </div>
    )
}

export default InventoryItem