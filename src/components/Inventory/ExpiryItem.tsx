import axios from "axios"
import moment from "moment"
import { useEffect } from "react"

const ExpiryItem = (props: any) => {
    const { item, getItems } = props
    useEffect(() => {
        trashExpired()
    }, [])
    const trashExpired = () => {
        if (moment(item[1].expiryDate).fromNow().slice(-3) === "ago") {
            axios.post(`http://localhost:3000/items/trash/${item[1]._id}&expire`)
                .then(() => {
                    getItems()
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }
    return (
        <div className="flex flex-row items-center justify-between mb-[5%] font-semibold">
            <span className="w-[57%]">{item[1].itemName.slice(0, 14)}{item[1].itemName.length > 14 ? "..." : ""}</span>
            <span className="w-[43%]">{moment(item[1].expiryDate).fromNow()}</span>
        </div>
    )
}

export default ExpiryItem