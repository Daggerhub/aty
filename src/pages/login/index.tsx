import { useState } from 'react';
import Model from '../../components/model';
import TextInput from '../../components/textInput';
import Button from '../../components/button';
import { Link, useNavigate } from 'react-router-dom';
import { TextConstants } from './constants';

function Login() {
  const [authCredentials, setAuthCredentials] = useState({name: '', password: ''})
  const handleInputChange = (e: any) => {
    setAuthCredentials({...authCredentials, [e.target.name]: e.target.value})
  }
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/posts') 
  }
  return (
    <div className=''>
      <Model show={true} setShow={() => {}} styles='border border-[#27292D] w-[463px]'>
         <div className='text-center mt-[40px] mb-[45px]'>
            <div className='text-sm font-medium text-base mb-2'>{TextConstants.header}</div>
            <div className='text-xl font-semibold text-white'>{TextConstants.subHeader}</div>
         </div>
         <div className='px-6 pb-6 flex flex-col gap-3'>
            <TextInput title="Name" type='text' name='name' onChange={(e) => handleInputChange(e)} value={authCredentials.name} placeholder='Enter your email or username'/>
            <TextInput title="Password" type='password' name='password' onChange={(e) => handleInputChange(e)} value={authCredentials.password} placeholder='Enter your password'/>
            <Button text='Login' onClick={handleButtonClick} size='lg' type='primary' />
            <div className='text-base text-sm'>{TextConstants.registerText} <Link to={'/register'} className='text-white text-sm'>{TextConstants.registerLinkText}</Link></div>
         </div>
      </Model>
    </div>
  );
}

export default Login;
