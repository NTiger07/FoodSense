import moment from "moment"

const ExpiryItem = (props: any) => {
    const { item } = props
    return (
        <div className="flex flex-row items-center justify-between mb-[5%] font-semibold">
            <span>{item[1].itemName}</span>
            <span>{moment(item[1].expiryDate).format('MMMM YYYY')}</span>
        </div>
    )
}

export default ExpiryItem