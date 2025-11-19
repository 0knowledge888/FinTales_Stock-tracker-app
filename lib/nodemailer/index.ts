import nodemailer from 'nodemailer';
import { WELCOME_EMAIL_TEMPLATE } from '@/lib/nodemailer/templates';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
    },
});

export const sendWelcomeEmail = async ({ email, name, intro}: WelcomeEmailData) => {
    const htmltTemplate = WELCOME_EMAIL_TEMPLATE
    .replace('{{name}}', name)
    .replace('{{intro}}', intro);

    const mailOptions = {
        from: `"Fintales" <fintales@contact.ai>`,
        to: email,
        subject: 'Bienvenue chez Fintales - votre App qui vous donne le contrôle sur vos finances!',
        text: 'Nous sommes ravis de vous avoir à bord.',
        html: htmltTemplate,
    };
    await transporter.sendMail(mailOptions);
}


