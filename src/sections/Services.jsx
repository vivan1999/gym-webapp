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
        <section className='flex flex-row gap-20 max-lg:gap-4 justify-center items-center p-4 w-full overflow-scroll'>
            <Card className='min-w-[70px] min-h-[70px] w-[15vw] h-[15vw] max-lg:w-[20vw] max-lg:h-[20vw] justify-center items-center flex flex-col' sx={{ background: (theme) => theme.palette.secondary.main, borderRadius: '50%' }} >
                <CardMedia className='flex justify-center items-center'>
                    <CgGym className='text-[7vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw]' />
                </CardMedia>
                <CardContent sx={{ ':last-child': { paddingBottom: 0 }, paddingTop: { xs: 0.5, sm: 0.8, md: 3 } }}>
                    <Typography sx={{
                        fontSize: {
                            xs: '2.5vw',  // small screens
                            sm: '1.6vw',  // medium
                            md: '1.3vw',    // large
                        },
                        textAlign: 'center',
                    }} >
                        Top Equipments
                    </Typography>
                </CardContent>
            </Card>
            <Card className='min-w-[70px] min-h-[70px] w-[15vw] h-[15vw] max-lg:w-[20vw] max-lg:h-[20vw] justify-center items-center flex flex-col' sx={{ background: (theme) => theme.palette.secondary.main, borderRadius: '50%' }} >
                <CardMedia className='flex justify-center items-center'>
                    <TbCoinRupee className='text-[7vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw]' />
                </CardMedia>
                <CardContent sx={{ ':last-child': { paddingBottom: 0 }, paddingTop: { xs: 0.5, sm: 0.8, md: 3 } }}>
                    <Typography sx={{
                        fontSize: {
                            xs: '2.5vw',  // small screens
                            sm: '1.6vw',  // medium
                            md: '1.3vw',    // large
                        },
                        textAlign: 'center',
                    }} variant='body1'>
                        Low Cost
                    </Typography>
                </CardContent>
            </Card>
            <Card className=' min-w-[70px] min-h-[70px] w-[15vw] h-[15vw] max-lg:w-[20vw] max-lg:h-[20vw] justify-center items-center flex flex-col' sx={{ background: (theme) => theme.palette.secondary.main, borderRadius: '50%' }} >
                <CardMedia>
                    <GiTeacher className='text-[7vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw]' />
                </CardMedia>
                <CardContent sx={{ ':last-child': { paddingBottom: 0 }, paddingTop: { xs: 0.5, sm: 0.8, md: 3 } }}>
                    <Typography sx={{
                        fontSize: {
                            xs: '2.5vw',  // small screens
                            sm: '1.6vw',  // medium
                            md: '1.3vw',    // large
                        },
                        textAlign: 'center',
                    }} variant='body1'>
                        Personal Coaching
                    </Typography>
                </CardContent>
            </Card>
            <Card className='min-w-[70px] min-h-[70px] w-[15vw] h-[15vw] max-lg:w-[20vw] max-lg:h-[20vw] justify-center items-center flex flex-col' sx={{ background: (theme) => theme.palette.secondary.main, borderRadius: '50%' }} >
                <CardMedia >
                    <HiUserGroup className='text-[7vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw]' />
                </CardMedia>
                <CardContent sx={{ ':last-child': { paddingBottom: 0 }, paddingTop: { xs: 0.5, sm: 0.8, md: 3 } }}>
                    <Typography sx={{
                        fontSize: {
                            xs: '2.5vw',  // small screens
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
