import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Memberships from '../sections/Memberships'
import Footer from '../components/Footer'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const Home = () => {
    const theme = useTheme()
    return (
        <div>
            <section>
                <Navbar />
            </section>
            <section>
                <Hero />
            </section>
            <section>
                <Services />
            </section>
            <section>
                <Memberships />
            </section>
            <Footer />
            <section className='relative items-center justify-items-center' style={{ backgroundColor: theme.palette.primary.main }}>
                <Typography variant='body1'>Established in 2002</Typography>
            </section>
        </div>
    )
}

export default Home
