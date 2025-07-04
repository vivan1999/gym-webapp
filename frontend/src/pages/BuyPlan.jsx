import React from 'react'
import MembershipForm from '../components/Forms/MembershipForm'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import MembershipCard from '../components/MembershipCard'
import { memberships } from '../constants/index'

const BuyPlan = () => {
    return (
        <div>
            <section className='sm:p-10 p-5 pt-7 pb-8'>
                <MembershipForm />
            </section>
        </div>
    )
}

export default BuyPlan
