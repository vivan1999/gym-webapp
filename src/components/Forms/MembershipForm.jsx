import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import TextField from '@mui/material/TextField'
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'

const MembershipForm = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("Email is Required"),
        firstName: Yup.string().required("Enter First Name"),
        lastName: Yup.string().required("Enter Last Name")
    })
    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Controller control={control} name='email' render={(field) => (
                    <TextField {...field} label="Email" error={errors.email} helperText={errors.email?.message}>
                    </TextField>)}>
                </Controller>
                <Button type="submit">Submit Buy</Button>
            </Box>
        </div>
    )
}

export default MembershipForm
