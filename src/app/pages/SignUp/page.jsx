"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../Signin/signin.css'

export default function SignUp() {
    const [name, setName] = useState('')
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
                        placeholder='Informe seu nome'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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

                    <button type='submit'>Cadastrar</button>
                </form>

                <Link href={'/pages/Signin'} className='link-login-register'>Já possui uma conta? Clique aqui</Link>
            </div>
        </div>
    )
}