import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, useMediaQuery } from '@mui/material';
import logo from './images/logo.png'
import GROUP47 from './components/Netsitem/Group 47.png';
import GROUP52 from './components/Netsitem/Group 52.png';
import GROUP51 from './components/Netsitem/Group 51.png';
import GROUP50 from './components/Netsitem/Group 50.png';
import { height } from '@mui/system';
const drawerWidth = 240;
const navItems = ['Home', 'Game', 'NFTs'];
const team = ['Team', 'RoadMap', 'Partner']


function DrawerAppBar(props) {
  const matches = useMediaQuery('(min-width:700px)')

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{
      textAlign: 'center',
    }}>
      {/* // marging-top & bottom */}
      <Typography variant="h6" sx={{ my: 2 }}>
        Mobile
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <List>
      {images.map(({ img }) => (
                <div className="cards">
                  <div>
                    <img src={img} alt="" />
                  </div>
                </div>))}
      </List> */}
      <List>
        {team.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{
        backgroundColor: 'cyan',
        backgroundColor: 'transparent',
        height: 100,
        lineHeight: '90px',
        position: "absolute",

      }}>
        <Toolbar sx={{
          justifyContent: 'space-around',
        }}>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mt: 3, mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Grid container spacing={1}>

            <Grid item xs={12} md={4} sx={{
            }}>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{
                    color: 'black',
                    color: '#fff',
                    padding: 2,
                    fontWeight: 600


                  }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={4} sx={{display:'flex', alignItems:"center", justifyContent:"center" }}>
              <Box sx={{ display: { xs: 'none', sm: 'block', } }}>
                <div>
                  <img src={logo} alt="" style={{  height:"6rem", width: "60rem", marginTop: "2rem" }} />
                </div>
              </Box>


            </Grid>


            <Grid item xs={12} md={4} sx={{
            }}>

              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {team.map((item) => (
                  <Button key={item} sx={{
                    color: 'black',
                    color: '#fff',
                    padding: 2,
                    fontWeight: 600

                  }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>





      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;