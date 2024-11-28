import { useTheme } from "@emotion/react"
import { AppBar, Typography, Toolbar, Box, useMediaQuery, Button, MenuItem, List, ListItem, IconButton, ListItemText, Drawer } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styled from "@emotion/styled";
import gsap from "gsap";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));
  

const Navbar = () => {
  const bounce = useRef(null)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const theme = useTheme()
    const [makeJump, setMakeJump] = useState(false)
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

    useEffect(()=>{
      const jump = bounce.current
      gsap.fromTo(jump,
        {y: -200},
       { y: 0, 
        duration: 1,
        ease: "bounce.out"}
      );
    }, [makeJump])

    
    const toggleDrawer = (open)=>{
        setDrawerOpen(open)
    }

    const menuItems = ['Home','Skills', 'Blog', 'Projects']

  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position="static" sx={{backgroundColor: "secondary.light", padding: "0 5rem 0"}}>
        <Toolbar>
            <Typography variant="h5" sx={({flexGrow: 1, position: "relative", top: "0", zIndex: 2, fontWeight: "bolder", fontFamily: "Noto Sans KR, sans-serif"})}>
             Alfiya Siddique</Typography>
            <Box sx={{
          width: 50, 
          height: 50, 
          borderRadius: "50%",
          backgroundColor: "secondary.main",
          opacity: ".5",
          position: "absolute",
          top: "-10px",
          left: "55px",
          zIndex: "1",
          cursor: "pointer",
          mt: 2,
        }} ref={bounce} onMouseOver={()=>setMakeJump(!makeJump)}></Box>
            {!isSmallScreen? (
                <>
                    {menuItems.map((item)=>(
                        <MenuItem key={item} sx={{ 
    fontSize: "1.4rem", margin: "0 20px 0"}}>
                        {item}
                        </MenuItem>
                    ))}
                    <Button color="inherit" variant="outlined" sx={{fontSize: "1.2rem"}}>
              Hire Me
            </Button>
                </>
            ): (
                <IconButton color="inherit" edge = "start" onClick={()=>toggleDrawer(true)}>
                    <MenuIcon/>
                </IconButton>
            )}
        </Toolbar>

        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <DrawerHeader>
        <IconButton onClick={()=>toggleDrawer(false)}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          </DrawerHeader>
        <List sx={{ width: 250, margin: "0 20px 0" }}>
          {menuItems.map((item) => (
            <ListItem button key={item}  sx={{margin: "0 20px 0", fontSize: "1.3rem"}} >
              <ListItemText primary={item}/>
            </ListItem>
          ))}
          <ListItem button>
            <Button variant="contained" fullWidth sx={{fontSize: "1.3rem"}}>
              Hire Me
            </Button>
          </ListItem>
        </List>
        </Drawer>
    </AppBar>
    </Box>
  )
}

export default Navbar
