import React from 'react'
import { useForm, Controller, useWatch } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import TextField from '@mui/material/TextField'
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import Checkbox from '@mui/material/Checkbox'
import FormHelperText from '@mui/material/FormHelperText'

const MembershipForm = () => {
    const titleOptions = ["Mr", "Mrs", "Miss"]

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("Email is Required"),
        title: Yup.string().required("*"),
        firstName: Yup.string().required("Enter First Name"),
        lastName: Yup.string().required("Enter Last Name"),
        contact: Yup.string().required("Enter Phone Number").matches(/^[0-9]{10}$/, 'Contact number must be 10 digits'),
        dob: Yup.string().required("Enter date of birth").max(new Date(), "Date not valid"),
        gender: Yup.string().required("Please select gender"),
        address: Yup.string().min(3, "Too short"),
        services: Yup.string().required("Choose one."),
        declaration: Yup.string().required("Choose one."),
        condition: Yup.string(),
        medication: Yup.string().required("Choose one."),
        medicationInfo: Yup.string(),
        agreement: Yup.boolean().oneOf([true], "You must accept the terms and conditions.").required("You must accept the terms and conditions.")
    })
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema), defaultValues: {
            email: "",
            title: "Mr",
            firstName: "",
            lastName: "",
            contact: "",
            dob: "",
            gender: "Male",
            address: "",
            services: "None",
            declaration: "No",
            condition: "",
            medication: "No",
            medicationInfo: "",
            agreement: false
        }
    })

    const declarationValue = useWatch({ control, name: 'declaration' })
    const medicationValue = useWatch({ control, name: 'medication' })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <Typography variant="h4">Membership Agreement</Typography>
            <Box sx={{ paddingTop: 3 }} component="form" onSubmit={handleSubmit(onSubmit)}>
                <div className='gap-3 flex flex-col justify-center items-start'>
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
                    <Controller control={control} name="gender" render={({ field }) => (
                        <FormControl error={errors.gender}>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup row {...field}>
                                <FormControlLabel value="Male" control={<Radio />} label="Male"></FormControlLabel>
                                <FormControlLabel value="Female" control={<Radio />} label="Female"></FormControlLabel>
                            </RadioGroup>
                        </FormControl>
                    )}></Controller>
                    <Controller control={control} name='address' render={({ field }) => (
                        <TextField {...field} fullWidth label="Address" error={errors.address} helperText={errors.address?.message}></TextField>
                    )}>
                    </Controller>
                    <Controller control={control} name="declaration" render={({ field }) => (
                        <FormControl error={errors.declaration}>
                            <Typography variant='body1'>Health Decalaration</Typography>
                            <FormLabel>Do you have any existing medical conditions?</FormLabel>
                            <RadioGroup row {...field}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes"></FormControlLabel>
                                <FormControlLabel value="No" control={<Radio />} label="No"></FormControlLabel>
                            </RadioGroup>
                        </FormControl>
                    )}></Controller>
                    {declarationValue == "Yes" && (
                        <Controller control={control} name="condition" render={({ field }) => (
                            <TextField {...field} sx={{ width: '60vw' }} multiline label="Please specify if any" error={errors.condition}></TextField>
                        )}>
                        </Controller>)}
                    <Controller control={control} name="medication" render={({ field }) => (
                        <FormControl error={errors.medication}>
                            <FormLabel>Are you currently on any medication?</FormLabel>
                            <RadioGroup row {...field}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes"></FormControlLabel>
                                <FormControlLabel value="No" control={<Radio />} label="No"></FormControlLabel>
                            </RadioGroup>
                        </FormControl>
                    )}></Controller>
                    {medicationValue == "Yes" && (
                        <Controller control={control} name="medicationInfo" render={({ field }) => (
                            <TextField {...field} sx={{ width: '60vw' }} multiline label="Please specify if any" error={errors.medicationInfo}></TextField>
                        )}>
                        </Controller>)}
                    <Controller control={control} name='services' render={({ field }) => (
                        <FormControl error={errors.services}>
                            <FormLabel>Add on services :</FormLabel>
                            <RadioGroup row {...field}>
                                {["None", "Personal Training", "Nutrition Consulting", "Group Classes (Yoga, Zumba)"].map((value) => {
                                    return <FormControlLabel value={value} control={<Radio />} label={value}></FormControlLabel>
                                })}
                            </RadioGroup>
                        </FormControl>
                    )}>
                    </Controller>
                    <Controller control={control} name='agreement' render={({ field }) => (
                        <FormControl error={errors.agreement}>
                            <FormControlLabel control={<Checkbox />} label="I hereby declare that the information provided is true to the best of my knowledge and I agree to abide by CHCs rules and regulations."></FormControlLabel>
                            <FormHelperText>{errors.agreement?.message}</FormHelperText>
                        </FormControl>
                    )}>
                    </Controller>
                    <div className='flex justify-center items-center w-full flex-row'>
                        <Button type="submit" variant='contained' color='secondary' sx={{ width: { xs: '50vw', sm: '30vw' } }}>Submit</Button>
                    </div>
                </div>
            </Box >
        </>
    )
}

export default MembershipForm
