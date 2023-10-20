import { useMemo } from "react";

const InventoryItem = (props: any) => {
    const { item } = props

    const setBackdropStyle = useMemo(() => {
        if (item[1].id % 2 == 0) {  // even number
            return { backgroundColor: "#37474F", };
        }
        return { backgroundColor: "#263238", };
    }, [item]);

    return (
        <div className="py-[2%] text-[#F9F9F9]" style={setBackdropStyle}>
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
                        {item[1].quantity}
                        <span className="cursor-pointer"><img src="/assets/add.svg" alt="" /></span>
                        <span className="cursor-pointer"><img src="/assets/minus.svg" alt="" /></span>
                    </div>
                    <div className="w-[20%]">
                        {item[1].expiry_date}
                    </div>
                    <div className="w-[60%]">
                        {item[1].notes}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InventoryItem