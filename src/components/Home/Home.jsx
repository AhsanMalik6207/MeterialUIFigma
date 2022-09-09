import React from 'react'
import {Box, Container, Grid, Typography} from '@mui/material'
import BG from './homebg.png'
import GROUP2 from './Group 2.png'
import STICK from './Rectangle.png'
import FIRST from './first.png'
import SECOND from './second.png'
import GROUP1 from './Group 1.png'


function Home() {
  return (
    <>

    <Box sx={{
        backgroundImage:`url(${BG})`,
        backgroundRepeat:"no-repeat",
        objectFit:"cover",
        objectPosition:"center",
        paddingBottom:"12rem",
        paddingTop:"5rem",
        backgroundSize:{xs:"cover"}
    }}>
        <Container>
        
            <Grid container>

                <Grid item xs={12} md={6}>
                        
           <Typography  sx={{
                    fontSize:"8em",
                    fontFamily:"Metal Mania",
                    fontWeight:400,
                    color:"#FFFFFF",
                    textAlign:"left",
                    lineHeight:"129.4px",
                    marginBottom:"1.5rem"
               
                }}>THETRAN <br />ARENA</Typography>
                    <Typography sx={{
                        fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"left",
                        // padding:"0 7rem",
                        fontWeight:200,
                        marginBottom:"1.5rem"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

                    <Typography sx={{
                        fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        fontWeight:200,
                        color:"#5D5FEF"

                        
                    }}>
                    #ThetenArena #MobaNFT #FreeToPlay #BattleToEran
                    </Typography>
                   
                </Grid>

                
                <Grid item xs={12} md={6} sx={{
                    display:{xs:"none", sm:"none",  md:"block"}
                }}>
                    

                <Grid container>
                <Box sx={{
                        width:"100%",
                        position:"relative",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        marginTop:"-5rem",
                        marginLeft:"-3rem",
                    display:{xs:"none", sm:"none",  md:"block"},
                    


                        
                        
                    }}>
                        <img src={SECOND} alt="" style={{
                            width:"70%",
                            opacity:0.13,
                            marginTop:"-6rem",
                            maxWidth:{xs:"300px", md:"auto"}
                        }} />
                        <img src={FIRST} alt="" style={{
                            width:"30%",
                            maxWidth:{xs:"300px", md:"auto"},
                            opacity:0.13,

                        }} />

                        <img src={STICK} alt="" style={{
                            position:"absolute",
                            right:"-2rem",
                            top:0,
                            transform:"translateX(-55%)",
                            maxWidth:{xs:"100px", md:"auto"}


                        }} />

                        <img src={GROUP1} alt="" style={{
                            position:"absolute",
                            right:"-2rem",
                            top:"16rem",
                            transform:"translateX(-25%)",
                            maxWidth:"400px"


                        }} />
                    </Box>
                </Grid>

                    
                    
                </Grid>


            </Grid>
            </Container>
    </Box>
      
    </>
  )
}

export default Home
