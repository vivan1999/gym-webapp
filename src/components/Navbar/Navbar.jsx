import React from 'react'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
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
        <AppBar position="sticky" sx={{ backgroundColor: "black", padding: 3 }}>
            <div className='flex justify-between items-center w-full max-w-full'>
                <div><Typography color='primary'>Classic Health</Typography></div>
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
                        <div className='w-[30vw]'>
                            <Container sx={{ padding: 4 }}>
                                <div className='flex items-center'>
                                    <IconButton>
                                        <MdAccountCircle color='black' />
                                    </IconButton>
                                    <Typography>Login/Sign Up</Typography>
                                </div>
                                <div>
                                    <ul className='flex flex-col gap-6'>{navLinks.map((nav, index) => {
                                        return <li key={index}><a href={nav.href}>{nav.name}</a></li>
                                    })}</ul>
                                </div>
                            </Container>
                        </div>
                    </Drawer>
                </div>
            </div >
        </AppBar >
    )
}

export default Navbar
