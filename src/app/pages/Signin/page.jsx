"use client"

import { useState, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../Signin/signin.css'
import { AuthContext } from '@/app/contexts/auth'

export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const { signIn } = useContext(AuthContext)

    function handleSignIn(e) {
        e.preventDefault()

        if(email !== "" && password !== "") {
            signIn(email, password)
            console.log("Logado com sucesso")
        }
    }

    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <Image
                        className='image-login'
                        src={'/assets/logo.png'}
                        width={100}
                        height={100}
                        alt='Logo sistema de chamados'
                        priority={true}
                    />
                </div>

                <form className='form-login' onSubmit={handleSignIn}>
                    <input 
                        type="text" 
                        placeholder='email@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                        type="password" 
                        placeholder='*******'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type='submit'>Logar</button>
                </form>

                <Link href={'/pages/SignUp'} className='link-login-register'>Crie Sua Conta</Link>
            </div>
        </div>
    )
}