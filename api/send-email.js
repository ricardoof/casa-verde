// api/send-email.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return res.status(400).json({ error: 'Email inválido' });
        }
        const name = email.split('@');
        const msg = {
            to: email,
            from: 'ricardoferreira4496@gmail.com', // Substitua pelo seu e-mail verificado
            subject: 'Newsletter da Casa Verde',
            text: `Olá ${name},
                Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas.
                Até logo!`,
            html: '<strong>Boas-vindas à Casa Verde!</strong>',
        };

        try {
            await sgMail.send(msg);
            res.status(200).json({ message: 'Email enviado' });
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error.response ? error.response.body : error.message);
            res.status(500).json({ error: 'Erro ao enviar e-mail' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
}

