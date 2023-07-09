const sgMail = require('@sendgrid/mail');
require('dotenv').config();
const { BASE_URL } = process.env;

const { TEST_SENDGRID_KEY } = process.env;

sgMail.setApiKey(TEST_SENDGRID_KEY);

const sendEmail = async (email, verificationToken) => {
        const mail = {
            to: email,
            subject: 'Verify your email',
            html: `<p>Click verify email ${BASE_URL}/api/auth/verify/${verificationToken}</p>`,
            from: 'pantoninazhanovna@gmail.com',
        };

        await sgMail
            .send(mail)
            .then(() => console.log('Email send sucessfully'))
            .catch((err) => console.log(err.message));
        return true;
};
    
module.exports = sendEmail;