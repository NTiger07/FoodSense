import { useMemo, useState } from "react";
import { toast } from "react-toastify";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import moment from "moment";
import axios from "axios";


const InventoryItem = (props: any) => {
    const { item, setInventoryList, getItems } = props

    const [open, setOpen] = useState(false);


    const setBackdropStyle = useMemo(() => {
        if (item[0] % 2 == 0) {  // even number
            return { backgroundColor: "#263238", };
        }
        return { backgroundColor: "#37474F", };
    }, [item]);

    const [itemQuantity, setItemQuantity] = useState(item[1].units as number)
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
        axios.delete(`http://localhost:3000/items/${item[1]._id}`)
        .then(() => {
            toast.info("Item removed")
            setOpen(false)
            getItems()
        })
        .catch((err) => {
            console.error(err)
        })
        
    };

    const trashItem = () => {
        axios.post(`http://localhost:3000/items/trash/${item[1]._id}`)
            .then(() => {
                toast.info("Item Trashed")
                setOpen(false)
                getItems()
            })
            .catch((err) => {
                console.error(err)
            })
    }




    return (
        <div className="relative py-[2%] text-[#F9F9F9]" style={setBackdropStyle}>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
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
                        {Number(item[0]) + 1 }
                    </div>
                    <div className="w-[80%]">
                        {item[1].itemName}
                    </div>
                </div>
                <div className="flex items-center w-[70%]">
                    <div className="flex w-[30%] gap-[5%]">
                        {itemQuantity < 10 ? 0 : ""}{itemQuantity} ({item[1].gramsPerUnit})
                        <span className="cursor-pointer" onClick={() => { setItemQuantity(itemQuantity - 1 + 2); setSaveVisible(true) }}><img src="/icons/add.svg" alt="" /></span>
                        <span className="cursor-pointer" onClick={() => { if (itemQuantity > 1) { setItemQuantity(itemQuantity - 1) } setSaveVisible(true) }}><img src="/icons/minus.svg" alt="" /></span>
                    </div>
                    <div className="w-[20%]">
                        {moment(item[1].expiryDate).format('DD-MM-YYYY')}
                    </div>
                    <div className="w-[50%]">
                        {/* {item[1].notes} */}
                        <input type="text" defaultValue={item[1].itemNotes} className="bg-transparent outline-none border-none cursor-pointer" onChange={(e) => {setSaveVisible(true); setItemNotes(e.target.value)}}/>
                    </div>
                </div>
                {saveVisible && (<div className="absolute right-10 flex flex-row items-center cursor-pointer" onClick={updateItem}>
                    <a className="[text-decoration:none] w-fit cursor-pointer flex flex-row items-center justify-start gap-[4px] pr-[.5rem] text-primary-red">
                        <img className="relative w-[30px]" alt="" src="/icons/save.svg" />
                        {/* <div className="relative font-semibold text-[#A05000]">Save changes</div> */}
                    </a>
                </div>)}
                <div className="absolute right-2 pr-[.3rem] cursor-pointer" onClick={() => setOpen(true)}>
                    <img src="/icons/delete-google.svg" className="w-[30px]" alt="" />
                </div>

            </div>
        </div>
    )
}

export default InventoryItem