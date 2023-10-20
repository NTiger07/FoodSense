const ExpiryItem = (props: any) => {
    const { item } = props
    return (
        <div className="flex flex-row items-center justify-between mb-[5%] font-semibold">
            <span>{item[1].name}</span>
            <span>{item[1].expiry_date}</span>
        </div>
    )
}

export default ExpiryItem