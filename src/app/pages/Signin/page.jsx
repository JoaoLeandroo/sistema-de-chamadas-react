"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../Signin/signin.css'

export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                    />
                </div>

                <form className='form-login'>
                    <input 
                        type="text" 
                        placeholder='email@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                        type="password" 
                        placeholder='************'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type='submit'>Logar</button>
                </form>

                <Link href={'/'} className='link-login-register'>Crie Sua Conta</Link>
            </div>
        </div>
    )
}