import { useMemo, useState } from "react";
import { toast } from "react-toastify";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import moment from "moment";


const InventoryItem = (props: any) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const { item, setInventoryList } = props
    const setBackdropStyle = useMemo(() => {
        if (item[1].id % 2 == 0) {  // even number
            return { backgroundColor: "#37474F", };
        }
        return { backgroundColor: "#263238", };
    }, [item]);

    const [itemQuantity, setItemQuantity] = useState(item[1].quantity as number)
    const [itemNotes, setItemNotes] = useState(item[1].notes)
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
    }

    const updateNotes = () => {
        const storedInventoryList = JSON.parse(localStorage.getItem("inventoryList") || "[]");
        const itemIndex = storedInventoryList.findIndex((storedItem) => storedItem.id === item[1].id);
        if (itemIndex !== -1) {
            storedInventoryList[itemIndex].notes = itemNotes;
            localStorage.setItem("inventoryList", JSON.stringify(storedInventoryList));
        }
        setItemNotes(itemNotes);
        setSaveVisible(false)
    }

    const updateItem = () => {
        updateQuantity()
        updateNotes()
        toast.info("Inventory Updated")
    }

    const removeItem = () => {
        const storedInventoryList = JSON.parse(localStorage.getItem("inventoryList") || "[]");
        const itemIndex = storedInventoryList.findIndex((storedItem) => storedItem.id === item[1].id);
        if (itemIndex !== -1) {
            storedInventoryList.splice(itemIndex, 1);
            localStorage.setItem("inventoryList", JSON.stringify(storedInventoryList));
        }

        setInventoryList(storedInventoryList);
        handleClose()
        toast.info("Item removed")
    };

    const trashItem = () => {
        const storedInventoryListJSON = localStorage.getItem("inventoryList");
        const storedInventoryList = JSON.parse(storedInventoryListJSON) || [];

        const storedTrashListJSON = localStorage.getItem("trashList");
        const storedTrashList = JSON.parse(storedTrashListJSON) || [];

        const itemIndex = storedInventoryList.findIndex((storedItem) => storedItem.id === item[1].id);

        if (itemIndex !== -1) {
            const trashedItem = storedInventoryList.splice(itemIndex, 1)[0];
            storedTrashList.push(trashedItem);

            // Update local storage for both lists
            localStorage.setItem("inventoryList", JSON.stringify(storedInventoryList));
            localStorage.setItem("trashList", JSON.stringify(storedTrashList));

            setInventoryList(storedInventoryList);
        }

        handleClose();
        toast.info("Item trashed");

    }




    return (
        <div className="relative py-[2%] text-[#F9F9F9]" style={setBackdropStyle}>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Trash Item?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you want to move this item to trash or remove it from your inventory?"
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={removeItem}>Remove Item</Button>
                    <Button onClick={trashItem}>
                        Trash Item
                    </Button>
                </DialogActions>
            </Dialog>
            <div className="flex flex-row items-center">
                <div className="w-[30%] flex">
                    <div className="w-[20%] flex justify-center">
                        {Number(item[0] + 1)}
                    </div>
                    <div className="w-[80%]">
                        {item[1].itemName}
                    </div>
                </div>
                <div className="flex items-center w-[70%]">
                    <div className="flex w-[20%] gap-[5%]">
                        {itemQuantity < 10 ? 0 : ""}{itemQuantity}
                        <span className="cursor-pointer" onClick={() => { setItemQuantity(itemQuantity - 1 + 2); setSaveVisible(true) }}><img src="/icons/add.svg" alt="" /></span>
                        <span className="cursor-pointer" onClick={() => { if (itemQuantity > 1) { setItemQuantity(itemQuantity - 1) } setSaveVisible(true) }}><img src="/icons/minus.svg" alt="" /></span>
                    </div>
                    <div className="w-[20%]">
                        {moment(item[1].expiryDate).format('DD-MM-YYYY')}
                    </div>
                    <div className="w-[60%]">
                        {/* {item[1].notes} */}
                        <input type="text" defaultValue={item[1].itemNotes} className="bg-transparent outline-none border-none cursor-pointer" onChange={(e) => {setSaveVisible(true); setItemNotes(e.target.value)}}/>
                    </div>
                </div>
                {saveVisible && (<div className="absolute right-20 flex flex-row items-center cursor-pointer" onClick={updateItem}>
                    <a className="[text-decoration:none] w-fit cursor-pointer flex flex-row items-center justify-start gap-[4px] pr-[.5rem] text-primary-red">
                        <img className="relative w-[30px]" alt="" src="/icons/save.svg" />
                        {/* <div className="relative font-semibold text-[#A05000]">Save changes</div> */}
                    </a>
                </div>)}
                <div className="absolute right-2 pr-[2rem] cursor-pointer" onClick={handleClickOpen}>
                    <img src="/icons/delete-bin-line.svg" className="w-[30px]" alt="" />
                </div>

            </div>
        </div>
    )
}

export default InventoryItem