import React from 'react'

import LoginForm from '../components/Forms/LoginForm'
import theme from '../constants/theme'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const LogIn = () => {
    return (
        <section style={{ backgroundColor: "#0f1923", height: "100vh", width: "100vw" }}>
            <section className='h-[25vh] w-full'>
                <div className='h-full flex flex-row justify-center items-center object-cover' style={{ backgroundColor: "#0f1923", height: '100%' }}>
                    <Link to={"/"}>
                        <img className='h-full w-full sm:w-[30vw] object-cover' src={logo} />
                    </Link>
                </div>
            </section>
            <div className='pt-10'>
                <LoginForm />
            </div>

        </section>
    )
}

export default LogIn
