import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full h-[30vh] bg-black p-4'>
            <div className='text-white flex flex-row justify-between'>
                <div>
                    <ul >
                        <Typography >About Us</Typography>
                        <Typography>Contact Us</Typography>
                        <Typography>Privacy Policy</Typography>
                        <Typography>Terms of use</Typography>
                    </ul>
                </div>
                <div>
                    <Typography variant='h6'>All Membership Options</Typography>
                    <ul>
                        <Typography>Gym Day Pass</Typography>
                        <Typography>Students Membership</Typography>
                        <Typography>1 Month Membership</Typography>
                        <Typography>3 Months Membership</Typography>
                        <Typography>6 Months Membership</Typography>
                        <Typography>12 Months Membership</Typography>
                        <Typography>Bring a Guest</Typography>
                    </ul>
                </div>
                <div >
                    <form className='flex flex-col w-[30vw] gap-6'>
                        <input className="border border-dashed border-gray-500 rounded-xs" placeholder='Enter your Email Id'></input>
                        <Button variant='outlined'>Subscribe for latest offers</Button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer
