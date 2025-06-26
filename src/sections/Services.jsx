import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';
import React from 'react'
import { GiWeightLiftingUp } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { GiTeacher } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";
import { TbCoinRupee } from "react-icons/tb";

const Services = () => {
    return (
        <section className='flex flex-row gap-20 max-lg:gap-4 overflow-x-auto justify-center items-center p-4'>
            <Card className='w-[12vw] h-[15vw] max-lg:w-[20vw] max-lg:h-[20vw] justify-center items-center flex flex-col' sx={{ background: (theme) => theme.palette.secondary.main, borderRadius: '50%' }} >
                <CardMedia className='flex justify-center items-center'>
                    <CgGym className='text-[2vw] max-lg:text-[5vw]' />
                </CardMedia>
                <CardContent>
                    <Typography sx={{
                        fontSize: {
                            xs: '1.8vw',  // small screens
                            sm: '1.6vw',  // medium
                            md: '1.3vw',    // large
                        },
                        textAlign: 'center',
                    }} variant='body1'>
                        Top Equipments
                    </Typography>
                </CardContent>
            </Card>
            <Card className='w-[15vw] h-[15vw] max-lg:w-[20vw] max-lg:h-[20vw] justify-center items-center flex flex-col' sx={{ background: (theme) => theme.palette.secondary.main, borderRadius: '50%' }} >
                <CardMedia className='flex justify-center items-center'>
                    <TbCoinRupee className='text-[2vw] max-lg:text-[5vw]' />
                </CardMedia>
                <CardContent>
                    <Typography sx={{
                        fontSize: {
                            xs: '1.8vw',  // small screens
                            sm: '1.6vw',  // medium
                            md: '1.3vw',    // large
                        },
                        textAlign: 'center',
                    }} variant='body1'>
                        Low Cost
                    </Typography>
                </CardContent>
            </Card>
            <Card className='w-[15vw] h-[15vw] max-lg:w-[20vw] max-lg:h-[20vw] justify-center items-center flex flex-col' sx={{ background: (theme) => theme.palette.secondary.main, borderRadius: '50%' }} >
                <CardMedia>
                    <GiTeacher className='text-[2vw] max-lg:text-[5vw]' />
                </CardMedia>
                <CardContent>
                    <Typography sx={{
                        fontSize: {
                            xs: '1.8vw',  // small screens
                            sm: '1.6vw',  // medium
                            md: '1.3vw',    // large
                        },
                        textAlign: 'center',
                    }} variant='body1'>
                        Personal Coaching
                    </Typography>
                </CardContent>
            </Card>
            <Card className='w-[15vw] h-[15vw] max-lg:w-[20vw] max-lg:h-[20vw] justify-center items-center flex flex-col' sx={{ background: (theme) => theme.palette.secondary.main, borderRadius: '50%' }} >
                <CardMedia >
                    <HiUserGroup className='text-[2vw] max-lg:text-[5vw]' />
                </CardMedia>
                <CardContent>
                    <Typography sx={{
                        fontSize: {
                            xs: '1.8vw',  // small screens
                            sm: '1.6vw',  // medium
                            md: '1.3vw',    // large
                        },
                        textAlign: 'center',
                    }} variant='body1'>
                        Community Feel
                    </Typography>
                </CardContent>
            </Card>

        </section >
    )
}

export default Services
