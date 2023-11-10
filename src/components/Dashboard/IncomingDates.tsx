import axios from "axios";
import ExpiryItem from "../Inventory/ExpiryItem";
import { useEffect, useState } from "react";

const IncomingDates = (props: any) => {
    const { userData } = props
    const [inventoryList, setInventoryList] = useState([])

    useEffect(() => {
        getItems()
    }, [])

    const expiryDates = Object.entries(inventoryList)
        .sort((a, b) => new Date(a[1].expiryDate) - new Date(b[1].expiryDate))
        .slice(0, 7)
        .map((item) => {
            return <ExpiryItem item={item} />;
        });

    const getItems = () => {
        axios
            .get(`${import.meta.env.VITE_LOCAL_URL}items/all/${userData.id}`)
            .then((res) => {
                setInventoryList(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }


    return (
        <div className="INCOMINGEXPIRY p-[1rem] bg-[#37474F] w-full h-[50vh] rounded-lg shadow-lg">
            <span className="text-light-black font-semibold text-[1.2rem">Incoming Expiry Dates</span>
            <div className="flex flex-col mt-[2%]">
                {expiryDates}
            </div>
        </div>
    )
}

export default IncomingDates