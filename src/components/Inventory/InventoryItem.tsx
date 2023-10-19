const InventoryItem = (props: any) => {
    const { item } = props;
    return (

        <div className="flex items-center justify-between mb-[3%] gap-2">
            <div className="MEDICATION flex w-[100%] md:w-[33%] mb-[5%] md:mb-0 flex-col items-start justify-start">
                <div className="relative font-medium mb-[5%]">Medication</div>
                <input
                    className="font-work-sans outline-none w-[100%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                    type="text"
                    defaultValue={item[1].name}
                    // onChange={(e) => updatePrescription(parseInt(prescription[0], 10), e.target.value)}
                    required
                />
            </div>

            <div className="DOSAGE flex w-[100%] md:w-[33%] mb-[5%] md:mb-0 flex-col items-start justify-start">
                <div className="relative font-medium mb-[5%]">Dosage</div>
                <div className="flex items-center justify-between">
                    <input
                        className="font-work-sans outline-none w-[60%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                        type="text"
                        defaultValue={item[1].quantity}
                        // onChange={(e) => updateDosage(parseInt(prescription[0], 10), e.target.value)}
                        required
                    />
                    <div className="flex bg-[#114ff5] rounded p-[5%] items-center justify-center w-[39%] text-[#fff] text-[.8rem] font-semibold leading-[1.2rem]">/ Day</div>
                </div>

            </div>

            <div className="DURATION flex w-[100%] md:w-[33%] mb-[5%] md:mb-0 flex-col items-start justify-start">
                <div className="relative font-medium mb-[5%]">Duration</div>
                <div className="flex items-center justify-between">
                    <input
                        className="font-work-sans outline-none w-[60%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                        type="text"
                        defaultValue={item[1].expiry_date}
                        // onChange={(e) => updateDuration(parseInt(prescription[0], 10), e.target.value)}
                        required
                    />
                    <div className="flex bg-[#114ff5] rounded p-[5%] items-center justify-center w-[39%] text-[#fff] text-[.8rem] font-semibold leading-[1.2rem]">Days</div>

                </div>

            </div>
        </div>
    )
}

export default InventoryItem