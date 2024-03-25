import { Box, Button} from "@mui/material";
import { useState, useRef } from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const AdminEditImage = ({ sendPicture, onChangeImg }: any) => {
  const [isTrue, setIsTrue] = useState<boolean>(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<any[]>([]);

  const uploadFile = () => {
    if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
      const selectedFile = fileInputRef.current.files[0];
      try {
        const fileURL = URL.createObjectURL(selectedFile);
        setFiles([fileURL]);
        onChangeImg(fileURL);
      } catch (error) {
        console.error("Error creating object URL:", error);
      }
    }
  };

  const editImage = () => {
    setIsTrue(true);
    fileInputRef.current?.click();
  };

  const saveChanges = () => {
    setIsTrue(false);
    setFiles([])
  };

  return (
    <Box>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={uploadFile}
      />
      <Button
        variant="outlined"
        sx={{
          cursor: "pointer",
          bgcolor: "white",
          color: "black",
          mr: 5,
        }}
        startIcon={<ModeEditIcon />}
        onClick={editImage}
      />
      <Button
        variant="contained"
        color="success"
        onClick={saveChanges}
        disabled={!files.length}
      >
        Save
      </Button>
    </Box>
  );
};

export default AdminEditImage;
