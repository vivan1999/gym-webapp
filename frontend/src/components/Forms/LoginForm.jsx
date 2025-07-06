import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import api from '../../api'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants'

const LoginForm = ({ method, route, from }) => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")

    const validationSchema = {
        'login': Yup.object().shape({
            username: Yup.string().email("Invalid Email").required("Please Enter the email address."),
            password: Yup.string().required("Not valid")
        }),
        'register': Yup.object().shape({
            username: Yup.string().email("Invalid Email").required("Please Enter the email address."),
            password: Yup.string().required("Not valid"),
            confirm_password: Yup.string().oneOf([Yup.ref('password'), null], "Password does not match").required("Required")
        })
    }
    const defaultValues = {
        login: {
            username: "",
            password: "",
        },
        register: {
            username: "",
            password: "",
            confirm_password: "",
        }
    };

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema[method]),
        defaultValues: defaultValues[method]
    })

    useEffect(() => {
        reset(defaultValues[method])
        setErrorMessage("")
    }, [method])

    const onSubmit = (data) => {
        console.log("login details", data)
        api.post(route, data).then((res) => {
            console.log(res)
            if (method == 'login') {
                if (res.status == 200) {
                    console.log("fetched token")
                    localStorage.setItem(ACCESS_TOKEN, res.data['access'])
                    localStorage.setItem(REFRESH_TOKEN, res.data['refresh'])
                    localStorage.setItem('email', data.username)
                    navigate(from, { replace: true })
                } else {
                    setErrorMessage("Error while logging in! Try Again.")
                }
            }
            else {
                navigate('/login')
            }
        }).catch((error) => {
            console.log(error)
            if (error.response && error.response?.data && error.response.data.username) {
                setErrorMessage(error.response?.data.username)
            }
            else if (error.response && error.response?.data && error.response?.data?.detail) {
                setErrorMessage(error.response.data.detail)
            } else {
                setErrorMessage("User Not Found!")
            }
        })

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
                    {errorMessage && <Typography variant='body1' color='error'>{errorMessage}</Typography>}
                    {method == "login" ? <Typography variant='h4' sx={{ color: (theme) => theme.palette.primary.main }}>Login To Classic Health Gym</Typography> : <Typography variant='h4' sx={{ color: (theme) => theme.palette.primary.main }}>Register</Typography>}
                    <Controller control={control} name='username' render={({ field }) => (
                        <TextField {...field} sx={{ ...commonInputSx, width: "60vw" }} label="Email" error={errors.username} helperText={errors.username?.message}>
                        </TextField>
                    )}>
                    </Controller>
                    <Controller control={control} name='password' render={({ field }) => (
                        <TextField fullWidth {...field} sx={{ ...commonInputSx, width: "60vw" }} type='password' label="Password" error={errors.password} helperText={errors.password?.message}>
                        </TextField>
                    )}>
                    </Controller>
                    {method == "register" && <Controller control={control} name='confirm_password' render={({ field }) => (
                        <TextField fullWidth {...field} sx={{ ...commonInputSx, width: "60vw" }} type='password' label="Confirm Password" error={errors.confirm_password} helperText={errors.confirm_password?.message}>
                        </TextField>
                    )}>
                    </Controller>}
                    {method == "login" ? <Button type="submit" variant='contained' color='secondary' sx={{ width: { xs: '50vw', sm: '30vw' } }}>Login</Button> : <Button type="submit" variant='contained' color='secondary' sx={{ width: { xs: '50vw', sm: '30vw' } }}>Submit</Button>}
                    {method == "login" ? <Button sx={{ color: (theme) => theme.palette.primary.main }} onClick={() => {
                        navigate('/register')
                    }}>Don't have any account? Sign Up</Button> : <Button sx={{ color: (theme) => theme.palette.primary.main }} onClick={() => navigate('/login')}>Back To Login</Button>}
                </div>
            </Box>
        </div>
    )
}

export default LoginForm
