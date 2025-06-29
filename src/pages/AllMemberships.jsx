import Typography from '@mui/material/Typography'
import React from 'react'
import { memberships } from '../constants'
import MembershipCard from '../components/MembershipCard'

const AllMemberships = () => {
    return (
        <section className='sm:p-10 p-5 pt-7 pb-8 '>
            <Typography variant='h4' sx={{ padding: 2 }}>All Memberships We Offer</Typography>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                {memberships.map((value) => {
                    return <MembershipCard title={value.title} image={value.image} subTitle={value.subTitle} />
                })}
            </div>
        </section>
    )
}

export default AllMemberships
