import { Box, Typography } from "@mui/material";
import RepeatName from "../RepeatName";
import park from '../../accets/Img/aboutUsImg/park.png';
import grapered from '../../accets/Img/aboutUsImg/grapered.png';
import grapeblack from '../../accets/Img/aboutUsImg/grapeblack.png';
import grapeyard from '../../accets/Img/aboutUsImg/grapeyard.png';
import { commondFlex, flexrow } from "../style";


const section = [
  {
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis enim velit mollit.
    Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.  Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
    deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
    consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat
    duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit`,
    img: park,
  },
  {
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    img: grapered,
  },
  {
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis enim velit mollit.
    Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit mollit.  Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
    deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
    consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat
    duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    Velit officia consequat duis enim velit`,
    img: grapeblack,
  },
  {
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis enim velit mollit.
        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit.  Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non
        deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
        consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat
        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit`,
    img: grapeyard,
  },
];

const AboutUs = () => {
  return (
    <Box sx={{ mt: '63px' }}>
      <RepeatName />
      <Box  sx={{...commondFlex, alignItems:'center'}}>
        {section.map((e: any, idx: number) => {
          const isEven = idx % 2 === 0;
          const flexDirection = isEven ? 'row' : 'row-reverse';

          return (
            <Box
              key={idx}
              height={'358px'}
              sx={{...flexrow,flexDirection:{lg:flexDirection,xs:'column'} , width:'83%', m:4, height: {md:'80%',xs:'90%'}}}
            >
              <Typography component={'span'} p='26px'>{e.description}</Typography>
              <img src={e.img} alt={`section-${idx}`} height={'358px'} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default AboutUs;
