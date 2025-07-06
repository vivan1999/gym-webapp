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
import theme from '../constants/theme'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
            <footer className='w-full bg-black p-4 max-sm:p-1' style={{ backgroundColor: "#0f1923" }}>
                <Box sx={{ padding: 0.5 }}>
                    <div className='text-white flex flex-row justify-between'>
                        <div className='w-[50vw] flex justify-between pt-2'>
                            <div >
                                <List sx={{ padding: 0, justifyContent: 'start', paddingRight: 1 }}>
                                    <ListItem sx={{ padding: 0 }}>
                                        <ListItemButton sx={{ padding: { xs: 0, sm: 1 } }} onClick={() => navigate('/timings')}>
                                            <ListItemText><Typography variant='body1' color='primary'>Opening Hours</Typography></ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem sx={{ padding: 0 }}>
                                        <ListItemButton sx={{ padding: { xs: 0, sm: 1 } }} onClick={() => navigate('/about')}>
                                            <ListItemText><Typography variant='body1' color='primary'>About Us</Typography></ListItemText>
                                        </ListItemButton>
                                    </ListItem >
                                    <ListItem sx={{ padding: 0 }}>
                                        <ListItemButton sx={{ padding: { xs: 0, sm: 1 } }} onClick={() => navigate('/contact')}>
                                            <ListItemText><Typography variant='body1' color='primary'>Contact Us</Typography></ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem sx={{ padding: 0 }}>
                                        <ListItemButton sx={{ padding: { xs: 0, sm: 1 } }} onClick={() => navigate('/privacy-policy')}>
                                            <ListItemText><Typography variant='body1' color='primary'>Privacy Policy</Typography></ListItemText>
                                        </ListItemButton>
                                    </ListItem >
                                    <ListItem sx={{ padding: 0 }}>
                                        <ListItemButton sx={{ padding: { xs: 0, sm: 1 } }} onClick={() => navigate('/terms-of-use')}>
                                            <ListItemText><Typography variant='body1' color='primary'>Terms Of Use</Typography></ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </div>
                            <div >
                                <List sx={{ padding: 0, justifyContent: 'start' }}>
                                    <ListItem sx={{ padding: 0 }}>
                                        <ListItemButton sx={{ padding: { xs: 0, sm: 1 } }} onClick={() => navigate('/memberships')}>
                                            <ListItemText><Typography variant='body1' color='primary'>Membership Options</Typography></ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem sx={{ padding: 0 }}>
                                        <ListItemButton sx={{ padding: { xs: 0, sm: 1 } }} onClick={() => navigate('/personal-coaching')}>
                                            <ListItemText><Typography variant='body1' color='primary'>Personal Coaching</Typography></ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem sx={{ padding: 0 }}>
                                        <ListItemButton sx={{ padding: { xs: 0, sm: 1 } }}>
                                            <ListItemText><Typography variant='body1' color='primary' onClick={() => navigate('/bring-a-guest')}>Bring a Guest</Typography></ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem sx={{ padding: 0 }}>
                                        <ListItemButton sx={{ padding: { xs: 0, sm: 1 } }}>
                                            <ListItemText><Typography variant='body1' color='primary' onClick={() => navigate('/refer')}>Refer & Earn</Typography></ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                        <div className='w-[30vw] flex flex-col justify-start items-center'>
                            <div className='flex w-[25vw] h-[25vw] lg:w-[15vw] lg:h-[10vh] overflow-hidden justify-start'>
                                <img className='w-full h-full object-cover' src={logo} />
                            </div>
                            <form className='flex flex-col gap-4 justify-center items-center'>
                                <TextField size='small' variant='outlined' color='primary' placeholder='Enter Email' sx={{ 'input::placeholder': { fontSize: { xs: 8, sm: 16 } }, fontSize: { xs: 6, sm: 16 } }}></TextField>
                                <Button variant='outlined'><Typography sx={{ fontSize: { xs: 6, sm: 16 } }}>Subscribe</Typography></Button>
                            </form>
                        </div>
                    </div>
                </Box>
            </footer>
            <section className='relative items-center justify-items-center' style={{ backgroundColor: theme.palette.primary.main }}>
                <Typography variant='body1'>Established in 2002</Typography>
            </section>
        </>
    )
}

export default Footer
