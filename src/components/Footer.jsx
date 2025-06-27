import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React from 'react'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'
import logo from '../assets/logo.png'
import TextField from '@mui/material/TextField'

const Footer = () => {
    return (
        <footer className='w-full bg-black p-4 max-sm:p-1' style={{ backgroundColor: "#0f1923" }}>
            <Box sx={{ padding: 0.5 }}>
                <div className='text-white flex flex-row justify-between'>
                    <div className='w-[50vw] flex justify-evenly'>
                        <div>
                            <List >
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemButton>
                                        <ListItemText><Typography variant='body1'>Opening Hours</Typography></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemButton>
                                        <ListItemText><Typography >About Us</Typography></ListItemText>
                                    </ListItemButton>
                                </ListItem >
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemButton>
                                        <ListItemText><Typography >Contact Us</Typography></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemButton>
                                        <ListItemText><Typography >Privacy Policy</Typography></ListItemText>
                                    </ListItemButton>
                                </ListItem >
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemButton>
                                        <ListItemText><Typography >Terms Of Use</Typography></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </div>
                        <div >
                            <List >
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemButton>
                                        <ListItemText><Typography >Membership Options</Typography></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemButton>
                                        <ListItemText><Typography >Personal Coaching</Typography></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemButton>
                                        <ListItemText><Typography >Bring a Guest</Typography></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemButton>
                                        <ListItemText><Typography >Refer & Earn</Typography></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </div>
                    </div>
                    <div className='w-[30vw] flex flex-col justify-center items-center'>
                        <div className='flex w-[25vw] h-[25vw] lg:w-[15vw] lg:h-[10vh] overflow-hidden'>
                            <img className='w-full h-full object-cover' src={logo} />
                        </div>
                        <form className='flex flex-col gap-6'>
                            <TextField variant='outlined' color='primary' placeholder='Enter Email'></TextField>
                            <Button variant='outlined'><Typography variant='body1'>Subscribe</Typography></Button>
                        </form>
                    </div>
                </div>
            </Box>
        </footer>
    )
}

export default Footer
