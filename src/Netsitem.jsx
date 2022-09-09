import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ListItem, Typography,List, useMediaQuery } from '@mui/material';
import GROUP47 from './images/Group 47.png';
import GROUP52 from './images/Group 52.png';
import GROUP51 from './images/Group 51.png';
import GROUP50 from './images/Group 50.png';
import GROUP48 from './images/Group 48.png';
import ICONS from './images/icons.png';
import LINE from './images/LINE.png';
import CONE from './images/CONE.png';
import BORDERLINES from './images/BORDERLINES.png';
import BTNS from './images/BTN.png'
import LINE2 from './images/LINE2.png'
export default function Netsitem() {
  const matches = useMediaQuery('(min-width:600px)')
  console.log(matches)
  return (
    <Box pb={5} sx={{
      // backgroundColor: "#373030",
        background:`linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(5, 5, 29, 1) 8%)`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundBlendMode :"overlay"
        // opacity:0.15,
        // height:"100vh,"
    }}>
      <Grid container>
        <Grid xs={12} md={12} >
      <p  style={{
                    fontSize:"4em",
                    fontFamily:"Metal Mania",
                    fontStyle: "Regular",
                    fontWeight:400,
                    background:"linear-gradient(180deg, #FFDC1F 0%, #ED1515 100%)",
                    WebkitBackgroundClip:"text",
                    WebkitTextFillColor:"transparent",
                    textAlign:"center",
                    textTransform:"uppercase",
                }}>NETS ITEM</p>
                    <Typography sx={{
                        fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        padding:"0 7rem",
                        fontWeight:200,
                        marginBottom:"1.5rem"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

        </Grid>
        <Grid xs={12} md={2}>
        <img src={GROUP47} alt="" style={{width: !matches ? '60%' : "100%", paddingLeft: !matches ? "2rem": "1rem" }} />
        </Grid>
        <Grid xs={12} md={2} >
        <img src={GROUP52} alt="" style={{width: !matches ? '60%' : "100%",paddingLeft: !matches ? "2rem": "2rem" }}  />  
        </Grid>
        <Grid xs={12} md={2} >
        <img src={GROUP51} alt="" style={{width: !matches ? '60%' : "100%",paddingLeft: !matches ? "2rem": "3rem" }}  />  
        </Grid>
        <Grid xs={12} md={2} >
        <img src={GROUP50} alt="" style={{width: !matches ? '60%' : "100%",paddingLeft: !matches ? "2rem": "4rem" }} />  
        </Grid>
        <Grid xs={12} md={2} >
        <img src={GROUP48} alt="" style={{width: !matches ? '60%' : "100%",paddingLeft: !matches ? "2rem": "5rem" }} />  
        </Grid>
        <Grid xs={12} md={12} >
        <img src={ICONS} alt="" width={'8%'} style={{ float:"right", marginRight:"120px"}} />  
        </Grid>

        <Grid xs={12} md={12} >

        <p  style={{
                    fontSize:"4em",
                    fontFamily:"Metal Mania",
                    fontStyle: "Regular",
                    fontWeight:400,
                    background:"linear-gradient(180deg, #FFDC1F 0%, #ED1515 100%)",
                    WebkitBackgroundClip:"text",
                    WebkitTextFillColor:"transparent",
                    textAlign:"center",
               
                    textTransform:"uppercase",
                }}>WHATS THETAN COIN?</p>

                    <Typography sx={{
                        fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        padding:"0 7rem",
                        fontWeight:200,
                        marginBottom:"1.5rem"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

        </Grid>
        <Grid xs={12} md={12}>
        <img src={LINE} alt="" width={'100%'} />
        </Grid>
        <Grid xs={12} md={3}>
        <img src={CONE} alt="" width={'80%'} style={{marginTop:"-3rem"}}/>
        </Grid>
        <Grid xs={12} md={2}>
            <List sx={{color:"white"}}>
              <ListItem>Special Events</ListItem>
              <ListItem>Battle Pass</ListItem>
              <ListItem>Ranking Rewards</ListItem>
              <ListItem>Quest</ListItem>
              <ListItem>Guild War</ListItem>
              <ListItem>Tournament</ListItem>
            </List>
          </Grid>
          <Grid xs={12} md={4} >
        <img src={BORDERLINES} alt="" style={{display: !matches ? 'none' : "block" }} />
        </Grid>
        <Grid xs={12} md={3}>
        <img src={BTNS} alt="" style={{ width:"60%", paddingLeft:"70px"}}/>
        <Typography sx={{fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        fontWeight:200,
                        marginTop:"-45px",
                        marginLeft:"30px"
                        }}>EXCHANGE</Typography>
        <img src={BTNS} alt="" style={{ width:"60%", paddingLeft:"70px",marginTop:"40px"}}/>
        <Typography sx={{fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        fontWeight:200,
                        marginTop:"-45px",
                        marginLeft:"30px"
                        }}>TRADE</Typography>
        <img src={BTNS} alt="" style={{ width:"60%", paddingLeft:"70px", marginTop:"55px"}}/>
        <Typography sx={{fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        fontWeight:200,
                        marginTop:"-45px",
                        marginLeft:"30px"
                        }}>THETAN BOX</Typography>
        </Grid>
        <Grid xs={12} md={12}>
        <img src={LINE2} alt="" width={'100%'} />
        </Grid>
      </Grid>
    </Box>
  );
}
