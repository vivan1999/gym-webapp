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
            <Card className='w-[15vw] h-[15vw] max-lg:w-[30vw] max-lg:h-[15vh] justify-center items-center flex flex-col' sx={{ background: 'linear-gradient(to bottom right, white, #d1d6e0)', borderRadius: 30 }} >
                <CardMedia >
                    <CgGym size={50} />
                </CardMedia>
                <CardContent>
                    <Typography variant='body1'>
                        Top Equipments
                    </Typography>
                </CardContent>
            </Card>
            <Card className='w-[15vw] h-[15vw] max-lg:w-[30vw] max-lg:h-[15vh] justify-center items-center flex flex-col' sx={{ background: 'linear-gradient(to bottom right, white, #d1d6e0)', borderRadius: 30 }} >
                <CardMedia >
                    <TbCoinRupee size={50} />
                </CardMedia>
                <CardContent>
                    <Typography variant='body1'>
                        Low Cost
                    </Typography>
                </CardContent>
            </Card>
            <Card className='w-[15vw] h-[15vw] max-lg:w-[30vw] max-lg:h-[15vh] justify-center items-center flex flex-col' sx={{ background: 'linear-gradient(to bottom right, white, #d1d6e0)', borderRadius: 30 }} >
                <CardMedia >
                    <GiTeacher size={50} />
                </CardMedia>
                <CardContent>
                    <Typography variant='body1'>
                        Personal Coaching
                    </Typography>
                </CardContent>
            </Card>
            <Card className='w-[15vw] h-[15vw] max-lg:w-[30vw] max-lg:h-[15vh] justify-center items-center flex flex-col' sx={{ background: 'linear-gradient(to bottom right, white, #d1d6e0)', borderRadius: 30 }} >
                <CardMedia >
                    <HiUserGroup size={50} />
                </CardMedia>
                <CardContent>
                    <Typography variant='body1'>
                        Community Feel
                    </Typography>
                </CardContent>
            </Card>

        </section>
    )
}

export default Services
