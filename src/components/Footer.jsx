import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full h-[30vh] bg-black p-4'>
            <div className='text-white flex flex-row justify-between'>
                <div>
                    <ul >
                        <li >About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of use</li>
                    </ul>
                </div>
                <div>
                    <Typography variant='h6'>All Membership Options</Typography>
                    <ul>
                        <li>Gym Day Pass</li>
                        <li>Students Membership</li>
                        <li>1 Month Membership</li>
                        <li>3 Months Membership</li>
                        <li>6 Months Membership</li>
                        <li>12 Months Membership</li>
                        <li>Bring a Guest</li>
                    </ul>
                </div>
                <div >
                    <form className='flex flex-col p-10 gap-6'>
                        <input className="border border-dashed border-gray-500 rounded-xs" placeholder='Enter your Email Id'></input>
                        <Button variant='outlined'>Subscribe for latest offers</Button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer
