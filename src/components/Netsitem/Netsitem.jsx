import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ListItem, Typography,List, useMediaQuery } from '@mui/material';
import GROUP47 from './Group 47.png';
import GROUP52 from './Group 52.png';
import GROUP51 from './Group 51.png';
import GROUP50 from './Group 50.png';
import GROUP48 from './Group 48.png';
import ICONS from './icons.png';
import LINE from './LINE.png';
import CONE from './CONE.png';
import BORDERLINES from './BORDERLINES.png';
import BTNS from './BTN.png'
import LINE2 from './LINE2.png'
export default function Netsitem() {
  const matches = useMediaQuery('(min-width:700px)')
  console.log(matches)
  return (
    <Box pb={20} sx={{
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
                }}>NETS ITEM</p>
                    <Typography sx={{
                        fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        maxWidth:"900px",
                        margin:"auto",
                        fontWeight:200,
                        marginBottom:"1.5rem"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

        </Grid>

        <Grid container>
          <Grid item xs={12} md={12}>
            <Box sx={{
              justifyContent:"space-evenly",
              textAlign:"center",
              
            }}>
                      <img src={GROUP47} alt="" style={{
                        margin:"0 0.5rem"
                      }} />
                      <img src={GROUP52} alt="" style={{
                        margin:"0 0.5rem"
                      }} />
                      <img src={GROUP51} alt="" style={{
                        margin:"0 0.5rem"
                      }} />
                      <img src={GROUP50} alt="" style={{
                        margin:"0 0.5rem"
                      }} />
                      <img src={GROUP48} alt="" style={{
                        margin:"0 0.5rem"
                      }} />
            </Box>
          </Grid>
        </Grid>
        {/* <Grid xs={16} sm={6} md={2}>
        <img src={GROUP47} alt="" style={{
          maxWidth:"500px"
        }} />
        </Grid>
        <Grid xs={6} sm={6} md={2}>
        <img src={GROUP52} alt="" style={{
          maxWidth:"500px",
        }}  />  
        </Grid>
        {/* style={{width: !matches ? '50%' : "100%",paddingLeft: !matches ? "2rem": "2rem" }}  */}
        {/* <Grid xs={6} sm={6} md={2}>
        <img src={GROUP51} alt="" style={{
          maxWidth:"500px"
        }}   />  
        </Grid> */}
        {/* <Grid xs={6} sm={6} md={2}>
        <img src={GROUP50} alt="" style={{
          maxWidth:"500px"
        }}  />  
        </Grid> */}
        {/* <Grid xs={6} sm={6} md={2}>
        <img src={GROUP48} alt="" style={{
          maxWidth:"500px"
        }}  />   
        </Grid> */}
        <Grid xs={12}  md={12} >
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
                        maxWidth:"900px",
                        margin:"auto",
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
