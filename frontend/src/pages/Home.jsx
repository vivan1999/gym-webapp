import React, { useEffect } from 'react'
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
            <section className='pt-5 pb-8'>
                <Hero />
            </section>
            <section>
                <Services />
            </section>
            <section>
                <Memberships />
            </section>
        </div>
    )
}

export default Home
