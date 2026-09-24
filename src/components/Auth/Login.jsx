import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className='min-h-screen w-full bg-[#111] flex items-center justify-center px-4'>

            <div className='w-full max-w-md bg-[#1c1c1c] border border-gray-700 rounded-2xl p-8 sm:p-10 shadow-2xl'>

                
                <div className='text-center mb-8'>
                    <h1 className='text-3xl font-bold text-white'>
                        Employee Management
                    </h1>

                    <p className='text-gray-400 text-sm mt-2'>
                        Login to your account
                    </p>
                </div>

                <form
                    onSubmit={submitHandler}
                    className='flex flex-col'
                >

                    {/* Email */}
                    <label className='text-sm font-medium text-gray-300 mb-2'>
                        Email
                    </label>

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='outline-none bg-[#252525] text-white border border-gray-700 focus:border-emerald-500 font-medium text-sm py-3 px-4 rounded-lg transition'
                        type='email'
                        placeholder='Enter your email'
                    />

                    {/* Password */}
                    <label className='text-sm font-medium text-gray-300 mb-2 mt-5'>
                        Password
                    </label>

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='outline-none bg-[#252525] text-white border border-gray-700 focus:border-emerald-500 font-medium text-sm py-3 px-4 rounded-lg transition'
                        type='password'
                        placeholder='Enter password'
                    />

                    {/* Login Button */}
                    <button
                        type='submit'
                        className='mt-7 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-semibold text-sm py-3 rounded-lg transition duration-200'
                    >
                        Log In
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Login
