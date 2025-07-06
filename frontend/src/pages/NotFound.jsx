import React, { useEffect, useState } from 'react'
import theme from '../constants/theme'
import Typography from '@mui/material/Typography'
import logo from '../assets/logo.png'
import LoadingSpinner from '../components/Loader/LoadingSpinner'

const NotFound = () => {
    const [imageLoaded, setImageLoaded] = useState(false)
    useEffect(() => { setImageLoaded(true) }, [logo])
    return (
        <div className='w-full h-[70vh] items-center justify-items-center text-center' style={{ backgroundColor: "#0f1923" }}>
            {imageLoaded ? <img className='object-cover flex max-w-[400px] w-full h-auto' src={logo} /> : <LoadingSpinner />}
            <Typography variant='h5' color={theme.palette.primary.main}>Coming Soon...</Typography>
            <br />
            <Typography variant='body' color={theme.palette.primary.main}>Muscles aren't the only thing we're building. <br />Our app is flexing soon!</Typography>
        </div>
    )
}

export default NotFound
