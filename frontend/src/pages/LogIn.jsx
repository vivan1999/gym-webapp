import React, { useState } from 'react'
import LoginForm from '../components/Forms/LoginForm'
import theme from '../constants/theme'
import logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'


const LogIn = ({ method }) => {
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const urlRoute = { 'login': '/api/user/token/', 'register': '/api/user/register/' }
    return (
        <section style={{ backgroundColor: "#0f1923", height: "100vh", width: "100vw" }}>
            <section className='h-[25vh] w-full'>
                <div className='h-full flex flex-row justify-center items-center object-cover p-10' style={{ backgroundColor: "#0f1923", height: '100%' }}>
                    <Link to={"/"}>
                        <img className='h-full w-full sm:w-[30vw] object-cover' src={logo} />
                    </Link>
                </div>
            </section>
            <div className='pt-10'>
                <LoginForm method={method} route={urlRoute[method]} from={from} />
            </div>

        </section>
    )
}

export default LogIn
