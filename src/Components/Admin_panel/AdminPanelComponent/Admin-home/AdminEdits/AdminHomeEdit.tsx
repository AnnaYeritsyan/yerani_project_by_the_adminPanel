import { Box, Button, Input, TextField } from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useState } from "react";




const AdminHomeEdit = ({favorite, onDataChange}:any) => {
    const [edtInput, setEdtInput] = useState<boolean>(false);
    const [editedText, setEditedText] = useState<string>(favorite);
    // const [editLongTxt, setEditLongTxt] = useState<string>(favorite)
    const edit = () => {
      setEdtInput(true);
      // console.log(favorite)
    };
  
    const saveChanges = () => {
        setEdtInput(false)
      onDataChange(editedText);
    //  longTxt(editLongTxt)
    };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditedText(e.target.value);
    };
  
    return (
      <Box sx={{ display:"flex",justifyContent: "space-between"}}>
       
        {edtInput ? (
          <TextField
          id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
            value={editedText}
            onChange={handleInputChange}
            sx={{width:'450px'}}
          />
        ) : (
          <Button
            variant='outlined'
            sx={{
              cursor: 'pointer',
              bgcolor: 'white',
              color: 'black',
              mr: 5,
            }}
            startIcon={<ModeEditIcon />}
            onClick={edit}
          />
        )}
        <Button variant="contained" color="success" onClick={saveChanges}>
          Save
        </Button>
      </Box>
    );
  };
export default AdminHomeEdit;