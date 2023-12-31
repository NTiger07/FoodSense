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
import ItemDataType from "../../types/ItemDataType";



const InventoryItem = (props: any) => {
    const { item, getItems } = props

    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false)


    const setBackdropStyle = useMemo(() => {
        if (item[0] % 2 == 0) {  // even number
            return { backgroundColor: "#A7A49C", };
        }
        return { backgroundColor: "#90C3a5", };
    }, [item]);

    const [saveVisible, setSaveVisible] = useState(false)

    const [itemData, setItemData] = useState<ItemDataType>({
        units: item[1].units as number,
        itemNotes: item[1].notes
    })


    const updateItem = () => {
        const newItemData = {
            units: itemData.units,
            itemNotes: itemData.itemNotes
        }

        axios
            .put(`${import.meta.env.VITE_LOCAL_URL}items/${item[1]._id}`, newItemData)
            .then(() => {
                toast.info("Inventory Updated")
                setSaveVisible(false)
                getItems()
            })
            .catch((err) => {
                console.error(err)
            })

    }

    const removeItem = () => {
        axios.delete(`${import.meta.env.VITE_LOCAL_URL}items/${item[1]._id}`)
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
        axios.post(`${import.meta.env.VITE_LOCAL_URL}items/trash/${item[1]._id}&trash`)
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
                        Do you want to move this item to trash or remove it from your inventory? (Removing it clears all records of the item)"
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
                        {Number(item[0]) + 1}
                    </div>
                    <div className="w-[80%] flex items-center flex-wrap">
                        {item[1].itemName.length > 20 ? `${item[1].itemName.slice(0, 20)}...` : item[1].itemName}
                    </div>
                </div>
                <div className="flex items-center w-[70%]">
                    <div className="flex items-center justify-between w-[30%] gap-[5%]">
                        <span>
                            {itemData.units as number < 10 ? 0 : ""}{itemData.units} ({item[1].gramsPerUnit})
                        </span>

                        <div className="flex items-center w-[32%] mr-[5px]">
                            <span className="cursor-pointer" onClick={() => { setItemData({ ...itemData, units: itemData.units as number + 1 }); setSaveVisible(true) }}><img src="/icons/add.svg" alt="" /></span>
                            <span className="cursor-pointer" onClick={() => { if (itemData.units as number > 1) { setItemData({ ...itemData, units: itemData.units as number - 1 }) } setSaveVisible(true) }}><img src="/icons/minus.svg" alt="" /></span>
                        </div>

                    </div>
                    <div className="w-[20%]">
                        {moment(item[1].expiryDate).format('DD-MM-YYYY')}
                    </div>
                    <div className="w-[50%]">
                        {/* {editMode ? (
                            <input type="text" defaultValue={item[1].itemNotes} className="bg-transparent outline-none border-none cursor-pointer" onChange={(e) => { setSaveVisible(true); setItemData({ ...itemData, itemNotes: e.target.value }) }} />
                        ) :
                            <span onClick={() => setEditMode(true)}>{item[1].itemNotes}</span>} */}
                        <span>{item[1].itemNotes}</span>
                    </div>
                </div>
                {saveVisible && (<div className="absolute right-10 flex flex-row items-center cursor-pointer" onClick={updateItem}>
                    <a className="[text-decoration:none] w-fit cursor-pointer flex flex-row items-center justify-start gap-[4px] pr-[.5rem] text-primary-red">
                        <img className="relative w-[30px]" alt="" src="/icons/save.svg" />
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