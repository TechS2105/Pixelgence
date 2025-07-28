import React from 'react';
import { useForm } from 'react-hook-form';

function Newsletterform() {

    const {

        register,
        handleSubmit,
        // reset,
        formState: { errors }

    } = useForm();

    const onSubmit = (data) => console.log(data);
    
    return (

        <>
        
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="email" placeholder='Your Email' {...register("email", { required: { value: true, message: "This field is required" }, maxLength: {value: 50, message: "Maxlength is 50"}})} />
                
                {errors.email &&  errors.email.message}

                <button type="submit"> Subscribe </button>

            </form>
            
        </>

    );

}

export default Newsletterform;