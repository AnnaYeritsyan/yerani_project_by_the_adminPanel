import { Box, Paper, Typography } from "@mui/material";
import { homeslider } from '../Admin-homeslider'
import React, { useState, useRef } from "react";

const CarouselModalImg = (save: any) => {

    //   erb true e petq e vercni srcy poxvac u dni homeslideri imageum


    const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [files, setFiles] = useState<any[]>([]);
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
    // console.log(files)
    // files.map((f:any)=>{
    //     console.log(f)

    // })
    if (save.save) {
        for (let i = 0; i < homeslider.length; i++) {
            // console.log(files[0])
            homeslider[i].image = files[0]
            // console.log(homeslider[0].image)
        }
    }
    // else{
    //     console.log("datark")
    // }


    const handleImageClick = (index: number) => {
        if (fileInputRefs.current[index]) {
            fileInputRefs.current[index]!.click();
        }
    };
    return (
        <Box>
            <Paper>
                {
                    homeslider.map((e: any, index: number) => {
                        return <>
                            <Paper sx={{ border: '2px dashed green', m: 2, width: 1, height: '550px' }}>


                                <Box sx={{ bgcolor: 'primary.main', height: '400px', textAlign: 'center' }}>

                                    <img
                                        //  src={e.image} width={'400px'} height={'400px'}
                                        src={files[index] || e.image}
                                        alt={`Product ${index + 1} Photo`}
                                        style={{ cursor: "pointer", }}
                                        // width={"80%"}
                                        height={"400px"}
                                        onClick={() => handleImageClick(index)}
                                    />
                                    {/* <input
                                        type="file"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        ref={(ref) => (fileInputRefs.current[index] = ref)}
                                        onChange={(e) => uploadFile(index, e)}
                                    /> */}

                                    {/* /> */}
                                </Box>
                            </Paper>

                        </>

                    })
                }

            </Paper>
        </Box>
    );
};
export default CarouselModalImg;