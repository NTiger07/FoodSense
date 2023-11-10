import moment from "moment"

const ExpiryItem = (props: any) => {
    const { item } = props
    return (
        <div className="flex flex-row items-center justify-between mb-[5%] font-semibold">
            <span className="w-[57%]">{item[1].itemName.slice(0, 14)}{item[1].itemName.length > 14 ? "..." : ""}</span>
            <span className="w-[43%]">{moment(item[1].expiryDate).fromNow()}</span>
        </div>
    )
}

export default ExpiryItem