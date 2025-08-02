import React from 'react';
import { useForm } from 'react-hook-form';

function Contactform({ ContactStyle }) {
    
    const {

        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }

    } = useForm();
    
    const onSubmit = async (data) => {
        
        try {
            
            const response = await fetch('https://pixelgence-backend.onrender.com/api/send/contact/form/data', {

                headers: { "Content-Type": "application/json; charset=utf-8" },
                method: "POST",
                body: JSON.stringify(data)

            });

            let res = response.json();
            console.log(data, res);
            reset();

        } catch (error) {
            
            console.log(error);

        }

    };

    return (

        <>
        
            <form onSubmit={handleSubmit(onSubmit)} className={ContactStyle.formStyle}>

                <input type="text" placeholder='Your name'{...register('fullname', { required: { value: true, message: "Enter your name" } })} />
                
                {errors.fullname && <div className={ContactStyle.errorContactFromMessage}>{ errors.fullname.message }</div>}

                <input type="email" placeholder='Your email' {...register('email', { required: { value: true, message: "Enter your email" }, maxLength: {value: 20, message: "Maxlength is 20"}})} /><br />
                
                {errors.email && <div className={ContactStyle.errorContactFromMessage}>{ errors.email.message }</div>}

                <textarea cols={64} rows={6} placeholder='Your message' {...register('message', {required: {value: true, message: "Type your message..."}})}></textarea>

                {errors.message && <div className={ContactStyle.errorContactFromMessage}>{ errors.message.message }</div>}

                {isSubmitting && <div className={ContactStyle.formSubmissionMessage}> Form is submitting. Please wait... </div>}
                <button type='submit'>SEND</button>

            </form>
            
        </>

    );

}

export default Contactform;