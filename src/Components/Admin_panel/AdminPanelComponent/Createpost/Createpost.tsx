import React, { useState, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import addPhoto from "../../accets/imgAdmin/addPhoto.png";
import TextField from "@mui/material/TextField";
import AddchartIcon from "@mui/icons-material/Addchart";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from '@mui/icons-material/Delete';

interface obj {
    id: number
    name: string
}

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: "center",
}));

const Createpost = () => {
    let obj: obj = {
        id: 0,
        name: 'discription'
    }
    const [files, setFiles] = useState<any[]>([]);
    const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [productSections, setProductSections] = useState<any[]>([obj]);
    const [del, setDel] = useState<boolean>(false)
    const [counter, setCounter] = useState<number>(1);

    const addProductSection = () => {
        const newId = counter;
        setCounter(counter + 1);

        const newObj: obj = {
            id: newId,
            name: 'description'
        };

        setProductSections([...productSections, newObj]);
    };

    
    const uploadFile = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files && e.target.files[0];

        if (selectedFile) {
            try {
                const fileURL = URL.createObjectURL(selectedFile);
                const newFiles = [...files];
                newFiles[index] = fileURL;
                setFiles(newFiles);
            } catch (error) {
                console.error("Error creating object URL:", error);
            }
        }
    };

      const handleImageClick = (index: number) => {
        if (fileInputRefs.current[index]) {
          fileInputRefs.current[index]!.click();
        }
      };

    const deleteProduct = (index:number) =>{
      
      let filterItem = productSections.filter((f:any)=>
            f.id !== index
        )
        setProductSections(filterItem)
      
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained" startIcon={<AddchartIcon />} sx={{ color: "white", mr: 3 }} onClick={() => { addProductSection() }}>
                    Add
                </Button>
                <Button variant="contained" sx={{ color: "white", mr: 3 }} startIcon={<SaveIcon />}>
                    Save
                </Button>
            </Box>


            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h1" component={"h1"} color={"primary.main"}>
                    Add New Product
                </Typography>
                <Box sx={{display: 'flex',flexWrap:'wrap', width: '80%', border: '1px solid black', justifyContent: 'space-evenly'}}>
                {
             
                productSections.map((e: any, index: number) => (
                    <Box key={e.id} sx={{    display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
                        <Box  sx={{ display: "flex", border: "1px solid black" }}>
                            <Box>
                                <img
                                    src={files[index] || addPhoto}
                                    alt={`Product ${index + 1} Photo`}
                                    style={{ cursor: "pointer", borderRadius: "26px" }}
                                    width={"220px"}
                                    height={"300px"}
                                    onClick={() => handleImageClick(index)}
                                />

                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    ref={(ref) => (fileInputRefs.current[index] = ref)}
                                    onChange={(e) => uploadFile(index, e)}
                                />
                            </Box>
                            <Box sx={{ width: "80%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", p: 3 }}>
                                <TextField id="outlined-multiline-flexible" label="Product Name" multiline fullWidth placeholder="Product Name" />
                                <TextField id="outlined-multiline-static" label="Description" multiline fullWidth sx={{ m: 2 }} placeholder="Say more about this product" />
                            </Box>

                        </Box>
                        <Button variant="contained" startIcon={<DeleteIcon />} sx={{ color: "white" }} onClick={() => deleteProduct(e.id)}>
                            Delete
                        </Button>
                    </Box>
                ))}
                     </Box>
            </Box>

        </Box>
    );
};

export default Createpost;
