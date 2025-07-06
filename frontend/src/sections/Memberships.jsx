import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import React from 'react'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { memberships } from '../constants/index';
import student_pass from '../assets/student_pass.png';
import monthsgym from '../assets/3_months_gym.jpg'
import { useNavigate } from 'react-router-dom';

const Memberships = () => {
    const navigate = useNavigate()

    return (
        <section className='p-6'>
            <Typography variant='h4' className='pb-10'>Memberships We Offer</Typography>
            <div className='flex max-lg:flex-col gap-12 max-lg:gap-4 justify-center items-center w-full'>
                <Card className='w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] flex flex-col items-center text-center' sx={{ background: 'linear-gradient(to bottom right, white, #9ca3af)' }} >
                    <CardMedia>
                        <img src={memberships[0]["image"]} />
                    </CardMedia>
                    <CardContent>
                        <Typography color='secondary' variant='h4'>
                            {memberships[0]["title"]}
                        </Typography>
                        <Typography color='secondary' variant='body1'>
                            {memberships[0]["subTitle"]}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' color="secondary" size='small' onClick={() => navigate(`/buy-membership?membership=${memberships[0]["title"]}`)}>Buy {memberships[0]["title"]} Membership</Button>
                    </CardActions>
                </Card>
                <Card className='w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] flex flex-col items-center text-center' sx={{ background: 'linear-gradient(to bottom right, white, #9ca3af)' }} >
                    <CardMedia>
                        <img src={memberships[1]["image"]} />
                    </CardMedia>
                    <CardContent>
                        <Typography color='secondary' variant='h4'>
                            {memberships[1]["title"]}
                        </Typography>
                        <Typography color='secondary' variant='body1'>
                            {memberships[1]["subTitle"]}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' color="secondary" size='small' onClick={() => navigate(`/buy-membership?membership=${memberships[1]["title"]}`)}>Buy {memberships[1]["title"]} Membership</Button>
                    </CardActions>
                </Card>
                <Card className='w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] flex flex-col items-center text-center' sx={{ background: 'linear-gradient(to bottom right, white, #9ca3af)' }} >
                    <CardMedia>
                        <img src={memberships[2]["image"]} />
                    </CardMedia>
                    <CardContent>
                        <Typography color='secondary' variant='h4'>
                            {memberships[2]["title"]}
                        </Typography>
                        <Typography color='secondary' variant='body1'>
                            {memberships[2]["subTitle"]}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' color="secondary" size='small' onClick={() => navigate(`/buy-membership?membership=${memberships[2]["title"]}`)}>Buy {memberships[2]["title"]} Membership</Button>
                    </CardActions>
                </Card>
                <Button className='max-lg:w-[80vw]' variant='outlined' sx={{ color: (theme) => theme.palette.secondary.main, borderColor: (theme) => theme.palette.secondary.main, backgroundColor: (theme) => theme.palette.primary.main }} onClick={() => navigate('/memberships')}>Explore More</Button>
            </div>

        </section>
    )
}

export default Memberships
