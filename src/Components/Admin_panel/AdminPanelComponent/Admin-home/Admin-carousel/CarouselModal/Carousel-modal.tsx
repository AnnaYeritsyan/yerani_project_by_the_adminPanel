import  React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CarouselModalImg from './CarouselModalImg';
import { homeslider } from '../Admin-homeslider';

const style = {
  position: 'absolute' as 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: ' 90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CarouselModal(openVal: any,) {

  const [open, setOpen] = useState(openVal);
  const [save, setSave] = useState(false)
  const handleClose = () => { 
    setOpen(false) 
  // console.log(homeslider)
  }
const saveChanges = ()=>{
  setSave(true)
 
//   for (let i = 0; i < homeslider.length; i++) {
//     console.log(files[0])
//     homeslider[i].image = files[0]
//     console.log(homeslider[0].image)
// }

}

  return (
    <Box sx={{ position: 'absolute', top: "100%" }}>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={{
          overflow: "auto"
        }}
      >
        <Fade in={open}>


          <Box sx={style}>
            <Typography component='h2' onClick={handleClose} sx={{ cursor: 'pointer' }}>X</Typography>
            <Button variant="contained" color="success" onClick={saveChanges}>
              Success
            </Button>
            {/*<Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            <CarouselModalImg save={save} />

          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
