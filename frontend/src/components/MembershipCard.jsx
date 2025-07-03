import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import student_pass from '../assets/student_pass.png';
import { useNavigate } from 'react-router-dom';

const MembershipCard = ({ image, title, subTitle }) => {
    const navigate = useNavigate()
    const [membership, setMembership] = useState("")
    const handleSelect = (name) => {
        navigate(`/buy-membership?membership=${name}`)
    }
    return (
        <Card className='w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] flex flex-col items-center text-center' sx={{ background: 'linear-gradient(to bottom right, white, #9ca3af)' }} >
            <CardMedia>
                <img src={image} />
            </CardMedia>
            <CardContent>
                <Typography color='secondary' variant='h4'>
                    {title}
                </Typography>
                <Typography color='secondary' variant='body1'>
                    {subTitle}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' color="secondary" size='small' onClick={() => handleSelect(title)}>Buy {title} Membership</Button>
            </CardActions>
        </Card>
    )
}

export default MembershipCard
