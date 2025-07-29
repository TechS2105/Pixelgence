import nodeMailer from 'nodemailer';
import env from 'dotenv';

env.config();

/** GET the root end point message */
const serverGetMessage = (req, res) => {

    res.json({ message: "Server is running...." });

}

/** GET mail sever end point message */
const mailGetMessage = (req, res) => {

    res.json({ message: "Mail server is running successfully...." });

}

/** Create nodemailer template for send mail */
const newsletterMail = nodeMailer.createTransport({

    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    logger: false,
    debug: true,
    secure: true,
    secureConnection: true,
    auth: {
        
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,

    },

    tls: {

        rejectUnauthorized: true

    }

});

/** Verify nodemailer connection */
newsletterMail.verify((error) => {

    if (error) {
        
        console.log(error);

    } else {
        
        console.log("Ready to send...");

    }

});

/** Create newsletter POST end point for send newsletter subscription to admin mail*/
const sendNewsletterMail = (req, res) => {

    const { email } = req.body;

    const mail = {

        from: `${email}`,
        to: process.env.EMAIL,
        subject: "Pixelgence Newsletter Subscription",
        html: `${email} has been successfully subscribed our newsletter.`,

    }

    newsletterMail.sendMail(mail, (error) => {

        if (error) {
            
            res.json(error);

        } else {
            
            res.json({

                code: 200,
                message: "Newsletter mail has been send successfully."

            });

        }

    });

}

export default {

    serverGetMessage,
    mailGetMessage,
    sendNewsletterMail,

}