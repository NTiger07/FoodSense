import axios from "axios";
import ExpiryItem from "../Inventory/ExpiryItem";
import { useEffect, useState } from "react";

const IncomingDates = (props: any) => {
    const { userData } = props
    const [inventoryList, setInventoryList] = useState([])

    useEffect(() => {
        getItems()
    }, [])


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


    return (
        <div className="INCOMINGEXPIRY p-[1rem] bg-[#00B074] w-full h-[50vh] rounded-lg shadow-lg">
            <span className="text-light-black font-semibold text-[1.2rem">Incoming Expiry Dates</span>
            <div className="flex flex-col mt-[2%]">
                {expiryDates.length > 0 ? expiryDates : (<span className="text-[1.1rem] font-medium">There are no incoming expiry dates.</span>)}
            </div>
        </div>
    )
}

export default IncomingDates