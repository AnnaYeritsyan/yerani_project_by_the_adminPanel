import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { buttonStyle, commondFlex, commondFlexCenter, flexrow } from "../../../style";
import { useState } from "react";
import AdminHomeEdit from "./AdminEdits/AdminHomeEdit";

const AdminContactUs = () => {
    const [txt, setTxt] = useState<string>('Contact us')
    const [inp, setInp] = useState<boolean>(false)
    const [longTxt, setLongTxt]=useState<any>(`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
   `)


const txtChange =(changeTxt:any, edit:any)=>{
      setInp(edit)
    setTxt(changeTxt)
    console.log(edit)
}
const longTxtChange=(lT:any, edit:any)=>{
    setInp(edit)
    setLongTxt(lT)
}
    
    return (
        <Box
            sx={{
                height: { md: 585, xs: 940 },
                p: 1,
                ...commondFlex,
                ...commondFlexCenter,
            }}
        >
            <Box
                sx={{
                    height: 500,
                    width: "100%",
                    ...commondFlex,
                    ...commondFlexCenter,
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        ...commondFlex,
                        flexDirection: { md: "row", xs: "column" },
                        justifyContent: 'space-evenly'
                    }}
                >
                    <Box
                        sx={{
                            ...commondFlex,
                            justifyContent: "space-between",
                            mr: 14,
                            width: { md: "500px", xs: 1 },
                            height: { md: "473px", xs: "auto" },
                        }}
                    >

                        <Typography gutterBottom variant="h5" component="div" sx={{ width: "98%", ...commondFlex, alignItems: 'flex-start', color: "primary.main" }}>
                            <Link to={'#'} style={{ textDecoration: "none", }}>
                                <Typography component={'span'} color='primary.main'>
                                    {txt}  </Typography>
                                    
                                <ArrowForwardIosIcon sx={{ fontSize: "11px", color: "primary.main" }} />
                            </Link>
                            <AdminHomeEdit favorite={txt} onDataChange={txtChange}/> 
                        </Typography>
                        <Box>
                            <Typography component={"span"}>
                                {longTxt}
                            </Typography>
                            <AdminHomeEdit favorite={longTxt} onDataChange={longTxtChange} />
                        </Box>
                        <Box>
                            <iframe
                                width="100%"
                                height="266"
                                scrolling="no"
                                src="https://maps.google.com/maps?width=100%25&amp;height=266&amp;hl=en&amp;q=Armenia,%20Ararat,%20Lanjazat+(Yerani)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            >
                                <a href="https://www.maps.ie/population/">Find Population on Map</a>
                            </iframe>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: { md: "558px", xs: 1 },
                            height: { md: "auto", xs: 390 }
                        }}
                    >
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            sx={{
                                height: "100%",
                                ...commondFlex,
                                flexDirection: { md: 'column', xs: 'column' },
                                justifyContent: "space-between",
                            }}
                        >
                            <Box sx={{ height: '80%', ...commondFlex, justifyContent: "space-between" }}>
                                <Typography component={'div'} sx={{ ...flexrow, justifyContent: "space-between", width: "100%", }}>
                                    <TextField id="outlined-basic" label="First name" variant="outlined" sx={{ width: '46%', bgcolor: "#ECECEC" }} />
                                    <TextField id="outlined-basic" label="Last name" variant="outlined" sx={{ width: '46%', bgcolor: "#ECECEC" }} />
                                </Typography>

                                <TextField label="Mail" variant="outlined" sx={{ bgcolor: "#ECECEC" }} />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={5}
                                    sx={{ bgcolor: "#ECECEC" }}
                                />
                            </Box>
                            <Button type="submit" variant="contained" sx={{ ...buttonStyle }}>Send</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default AdminContactUs;
