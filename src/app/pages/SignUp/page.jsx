"use client"

import { useState, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../Signin/signin.css'

import { AuthContext } from '@/app/contexts/auth'

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signUp, loadingAuth } = useContext(AuthContext)

    async function handleSubmit(e) {
        e.preventDefault()

        if(name !== "" && email !== "" && password !== "") {
            await signUp(email, password, name)
            console.log("Cadastrado com sucesso")
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

                <form className='form-login' onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder='Informe seu nome'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input 
                        type="email" 
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

                    <button type='submit'>
                        {loadingAuth ? "Carregando..." : "Cadastrar"}
                    </button>
                </form>

                <Link href={'/pages/Signin'} className='link-login-register'>Já possui uma conta? Clique aqui</Link>
            </div>
        </div>
    )
}