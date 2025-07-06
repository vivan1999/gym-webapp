import Typography from '@mui/material/Typography'
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../components/Loader/LoadingSpinner'
import logo from '../assets/logo.png'
import theme from '../constants/theme'

const Completed = () => {
    const [imageLoaded, setImageLoaded] = useState(false)
    useEffect(() => { setImageLoaded(true) }, [logo])

    return (
        <div className='w-full h-[70vh] items-center justify-items-center text-center' style={{ backgroundColor: "#0f1923" }}>
            {imageLoaded ? <img className='object-cover flex max-w-[250px] w-full h-auto' src={logo} /> : <LoadingSpinner />}
            <Typography variant='h5' color={theme.palette.primary.main}>Thankyou for choosing us!</Typography>
            <br />
            <Typography variant='body' color={theme.palette.primary.main}>We've received your request. You're welcome to visit the gym anytime to begin your <strong>1-day free trial</strong>.<br /><br /> After your trial, payment can be made <strong>manually at the gym</strong>. We look forward to seeing you!</Typography>
        </div>
    )
}

export default Completed
