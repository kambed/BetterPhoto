import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import Box from "@mui/material/Box";

interface TextFieldWithButtonParams {
    handleCreate: (newItem: string) => void;
    label: string;
}

function TextFieldWithButton({handleCreate, label}: TextFieldWithButtonParams) {
    const [newItem, setNewItem] = useState("");

    function handleNewItemChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewItem(event.target.value);
    }

    function handleNewItem() {
        handleCreate(newItem);
    }

    return (
        <Box className="d-flex gap-3 align-items-center w-100">
            <TextField className="w-100" label={label}
                       variant="standard" value={newItem}
                       onChange={handleNewItemChange}/>
            <Button onClick={handleNewItem}>
                Add
            </Button>
        </Box>
    )
}

export default TextFieldWithButton;
