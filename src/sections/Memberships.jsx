import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import React from 'react'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import student_pass from '../assets/student_pass.png';
import monthsgym from '../assets/3_months_gym.jpg'

const Memberships = () => {
    return (
        <section className='p-6'>
            <Typography variant='h4' className='pb-10'>Memberships We Offer</Typography>
            <div className='flex gap-12 max-lg:gap-4 justify-center items-center'>
                <Card className='w-[25vw] max-lg:w-[30vw] justify-center items-center flex flex-col' sx={{ background: 'linear-gradient(to bottom right, white, #9ca3af)' }} >
                    <CardMedia >
                        <img src={student_pass} />
                    </CardMedia>
                    <CardContent>
                        <Typography variant='h4'>
                            Student
                        </Typography>
                        <Typography variant='body1'>
                            Avail Student Offers & Get extra 10% OFF on any membership.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='outlined' size='small'>Buy Student Membership</Button>
                    </CardActions>
                </Card>
                <Card className='w-[25vw] max-lg:w-[30vw] justify-center items-center flex flex-col' sx={{ background: 'linear-gradient(to bottom right, white, #9ca3af)' }} >
                    <CardMedia >
                        <img src={monthsgym} />
                    </CardMedia>
                    <CardContent>
                        <Typography variant='h4'>
                            3 Months
                        </Typography>
                        <Typography variant='body1'>
                            Avail 3 months membership offer at just 3500 Rs.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='outlined' size='small'>Buy for 3 Months</Button>
                    </CardActions>
                </Card>
                <Card className='w-[25vw] max-lg:w-[30vw] justify-center items-center flex flex-col' sx={{ background: 'linear-gradient(to bottom right, white, #9ca3af)' }} >
                    <CardMedia >
                        <img src={monthsgym} />
                    </CardMedia>
                    <CardContent>
                        <Typography variant='h4'>
                            6 Months
                        </Typography>
                        <Typography variant='body1'>
                            Avail 6 months membership offer at just 6500 Rs.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='outlined' size='small'>Buy for 6 Months</Button>
                    </CardActions>
                </Card>
                <Button variant='outlined' >Explore More</Button>
            </div>

        </section>
    )
}

export default Memberships
