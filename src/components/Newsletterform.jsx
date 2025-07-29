import React from 'react';
import { useForm } from 'react-hook-form';

function Newsletterform({FooterStyle}) {

    const {

        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }

    } = useForm();

    const onSubmit = async (data) => {
        
        try { 

            const response = await fetch('http://localhost:3000/api/send/newsletter/mail', {

                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                method: "POST",
                body: JSON.stringify(data)

            });

            const res = response.json();
            console.log(data, res);
            reset();

        } catch (error) {
            
            console.log(error);

        }

    };
    
    return (

        <>
        
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="email" placeholder='Your Email' {...register("email", { required: { value: true, message: "Please enter your email" }, maxLength: {value: 50, message: "Maxlength is 50"}})} />
                
                {errors.email && <div className={FooterStyle.errorMessageStyle}>{errors.email.message}</div>}<br/>

                {isSubmitting && <div className={FooterStyle.errorMessageStyle}>Form is submitting. Please wait...</div>}<br />
                <button type="submit"> Subscribe </button>

            </form>
            
        </>

    );

}

export default Newsletterform;