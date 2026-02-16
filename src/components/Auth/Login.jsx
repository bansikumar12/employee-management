import React, { useState } from 'react';


const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const submitHandler = (e) => {
  e.preventDefault();
  handleLogin(email, password);
  console.log({ email, password });
  setEmail('');
  setPassword('');
};



  return (
    <div className='flex justify-center bg-black h-screen  items-center'>
      <div className='border-2 bg-black  rounded-md'>
        <form
          onSubmit={submitHandler}
          className='flex flex-col border-green-300 border-2 p-10 rounded-4xl items-center justify-center'
        >
          <p className='text-white text-xl mr-80'>Email</p>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className=' border-2 border-green-300 text-white  w-96 p-2 py-1 my-2 rounded-md'
          />
            <p className='text-white text-xl mr-72'>Password</p> 
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className=' border-2 border-green-300 text-white w-96 p-2 py-1 my-2 rounded-md'
            
          />

          <button
            type='submit'
            className='bg-yellow-600 border-2 active:scale-0 text-xl border-green-300 text-white w-96 p-2 py-1 my-2 rounded-md'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
