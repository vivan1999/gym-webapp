import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { CiMenuFries } from 'react-icons/ci'
import { MdAccountCircle } from 'react-icons/md'
import "../Navbar/Navbar.css"
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import { navLinks } from '../../constants'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import SvgIcon from '@mui/material/SvgIcon'
import logo from '../../assets/logo.png'
import ListItemIcon from '@mui/material/ListItemIcon'
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        console.log(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const [openDrawer, setOpenDrawer] = useState(false)
    const handleDrawer = (event) => {
        setOpenDrawer(!openDrawer)
    }

    return (
        <AppBar position="sticky" sx={{ backgroundColor: "#0f1923", padding: 1 }}>
            <div className='flex justify-between items-center w-full max-w-full'>
                <div className='flex items-center w-[10vh] h-[8vh] md:w-[10vw] overflow-hidden'>
                    <img className='w-full h-full object-cover' src={logo} />
                </div>
                <div className='gap-6 hidden lg:flex'>
                    <ul className='flex gap-6'>{navLinks.map((nav) => {
                        return <li><a href={nav.href}><Typography color='primary'>{nav.name}</Typography></a></li>
                    })}
                        <li>
                            <Typography color='primary' onClick={handleClick}>Membership Options</Typography>
                            <Menu color='secondary' anchorEl={anchorEl} open={open} onClose={handleClose}>
                                <MenuItem><Typography color='primary'>Week Pass</Typography></MenuItem>
                                <MenuItem><Typography color='primary'>Bring a guest</Typography></MenuItem>
                                <MenuItem><Typography color='primary'>All Other Options</Typography></MenuItem>
                            </Menu>
                        </li>
                    </ul>
                </div>
                <div className='max-lg:hidden'>
                    <IconButton>
                        <div className='flex gap-2'>
                            <MdAccountCircle color='white' />
                            <Typography color='white'>Login</Typography>
                        </div>
                    </IconButton>
                </div>
                <div className='lg:hidden'>
                    <IconButton onClick={handleDrawer}>
                        <CiMenuFries color='white' />
                    </IconButton>
                    <Drawer anchor='right' open={openDrawer} onClose={handleDrawer}>

                        <Box className='w-[70vw] h-full' role="presentation" sx={{ background: '#0f1923' }} >
                            <div className='flex items-center w-full h-[12vh] sm:h-[30vh] m-2'>
                                <img className='w-full h-full object-cover' src={logo} />
                            </div>
                            <List sx={{ paddingTop: 5 }}>
                                <div className='flex items-center pl-5'>
                                    <IconButton>
                                        <SvgIcon color='primary' >
                                            <MdAccountCircle />
                                        </SvgIcon>
                                    </IconButton>
                                    <Typography>Login/Sign Up</Typography>
                                </div>
                                {navLinks.map((nav, index) => {
                                    return <ListItem key={nav.name} sx={{ paddingRight: 0 }}>
                                        <ListItemButton>
                                            <ListItemText><Typography>{nav.name}</Typography></ListItemText>
                                            <ListItemIcon>
                                                <SvgIcon color='primary'>
                                                    <IoIosArrowForward />
                                                </SvgIcon>
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                })}
                            </List>
                        </Box>
                    </Drawer>
                </div>
            </div >
        </AppBar >
    )
}

export default Navbar
