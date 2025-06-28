import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import TextField from '@mui/material/TextField'
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'

const MembershipForm = () => {
    const titleOptions = ["Mr", "Mrs", "Miss"]

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("Email is Required"),
        title: Yup.string().required("*"),
        firstName: Yup.string().required("Enter First Name"),
        lastName: Yup.string().required("Enter Last Name"),
        contact: Yup.string().required("Enter Phone Number").matches(/^[0-9]{10}$/, 'Contact number must be 10 digits'),
        dob: Yup.date().required("Enter date of birth").max(new Date(), "Date not valid")
    })
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema), defaultValues: {
            email: "",
            title: "Mr",
            firstName: "",
            lastName: "",
            contact: "",
            dob: ""
        }
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <Typography variant="h4">Membership Agreement</Typography>
            <Box sx={{ height: '70vh', paddingTop: 3 }} component="form" onSubmit={handleSubmit(onSubmit)}>
                <div className='gap-3 flex flex-col justify-center items-center'>
                    <Controller control={control} name='email' render={({ field }) => (
                        <TextField {...field} fullWidth label="Email" error={errors.email} helperText={errors.email?.message}>
                        </TextField>
                    )}>
                    </Controller>
                    <div className='flex flex-row gap-2 w-full'>
                        <Controller control={control} name="title" render={({ field }) => (
                            <TextField {...field} select sx={{ width: { xs: 150, sm: 200 } }} error={errors.title}>
                                {titleOptions.map((value) => (
                                    <MenuItem key={value} >{value}</MenuItem>
                                ))}
                            </TextField>
                        )}></Controller>
                        <Controller control={control} name="firstName" render={({ field }) => (
                            <TextField {...field} fullWidth label="First Name" error={errors.firstName} helperText={errors.firstName?.message}></TextField>
                        )}>
                        </Controller>
                        <Controller control={control} name="lastName" render={({ field }) => (
                            <TextField {...field} fullWidth label="Last Name" error={errors.lastName} helperText={errors.lastName?.message}></TextField>
                        )}>
                        </Controller>
                    </div>
                    <Controller control={control} name="contact" render={({ field }) => (
                        <TextField {...field} fullWidth type='tel' label="Contact" error={errors.contact} helperText={errors.contact?.message}></TextField>
                    )}>
                    </Controller>
                    <Controller control={control} name='dob' render={({ field }) => (
                        <TextField {...field} fullWidth type='date' label="Date of birth" error={errors.dob} helperText={errors.dob?.message}></TextField>
                    )}>
                    </Controller >

                    <Button type="submit" variant='contained' color='secondary' sx={{ width: { xs: '50vw', sm: '30vw' } }}>Submit</Button>
                </div>
            </Box >
        </>
    )
}

export default MembershipForm
