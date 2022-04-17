import React from 'react';

const Checkout = () => {
    return (
        <div>
           <div className='register-form'>
            <h2 style={{textAlign: 'center'}}>Please Register</h2>
            <form>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="city" name="password" id="" placeholder='city' required/>
                <input type="country" name="password" id="" placeholder='country' required/>

                <input type="checkbox" name="terms" id="terms" />
                <label className= 'text-danger ps-2' htmlFor="terms">Accept terms and condition</label>

                <input  className='w-50 mx-auto btn btn-primary' type="submit" value="Register" />
            </form>
            
        </div>
        </div>
    );
};

export default Checkout;