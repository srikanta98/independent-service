import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import "./Register.css"
import Loading from '../../Shared/Loading/Loading';


const Registar = () => {
    //atar button ta shortcut,bortoman man change kore dibe,toggle type
     const[agree,setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }
    

    if(loading || updating){
        return <Loading></Loading>
    }

    if(user){
      console.log('check')
    }

    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

   
         await createUserWithEmailAndPassword(email,password);
         await updateProfile({ displayName:name });
         alert('Updated profile');
         navigate('/home');
      

       
    }


    return (
        <div>
            <div className='register-form'>
            <h2 style={{textAlign: 'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="" placeholder='Password' required/>

                <input onClick={() =>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'text-primary ps-2' : 'text-danger ps-2'} htmlFor="terms">Accept terms and condition</label>

                <input disabled={!agree} className='w-50 mx-auto btn btn-primary' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-pr4imary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
        </div>
    );
};

export default Registar;