import React from 'react'
import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import api from '../../api'
import Typography from '@mui/material/Typography'

const LoginForm = () => {

    const validationSchema = Yup.object().shape({
        username: Yup.string().email("Invalid Email").required("Please Enter the email address."),
        password: Yup.string().required("Not valid")
    })
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: { username: "", password: "" }
    })
    const onSubmit = (data) => {
        console.log("login details", data)

    }

    const commonInputSx = {
        width: '100%',
        '& .MuiInputBase-input': {
            color: (theme) => theme.palette.primary.main,
        },
        '& .MuiInputLabel-root': {
            color: (theme) => theme.palette.primary.main,
        },
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: (theme) => theme.palette.primary.main,
        },
    };

    return (
        <div className='w-full h-full'>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-10 items-center justify-center'>
                    <Controller control={control} name='username' render={({ field }) => (
                        <TextField {...field} sx={{ ...commonInputSx, width: "60vw" }} label="Username" error={errors.username} helperText={errors.username?.message}>
                        </TextField>
                    )}>
                    </Controller>
                    <Controller control={control} name='password' render={({ field }) => (
                        <TextField fullWidth {...field} sx={{ ...commonInputSx, width: "60vw" }} type='password' label="Password" error={errors.password} helperText={errors.password?.message}>
                        </TextField>
                    )}>
                    </Controller>
                    <Button type="submit" variant='contained' color='secondary' sx={{ width: { xs: '50vw', sm: '30vw' } }}>Login</Button>
                    <Typography sx={{ color: (theme) => theme.palette.primary.main }}><a href='/register'>Don't have any account? Sign Up</a></Typography>
                </div>
            </Box>
        </div>
    )
}

export default LoginForm
