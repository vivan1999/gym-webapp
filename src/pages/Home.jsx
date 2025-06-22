import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Memberships from '../sections/Memberships'
import Footer from '../components/Footer'

const Home = () => {
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
            <section className='bg-amber-50 relative items-center justify-items-center'><p>Established in 2002</p>
            </section>
        </div>
    )
}

export default Home
