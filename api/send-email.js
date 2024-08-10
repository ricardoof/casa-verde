// api/send-email.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        const msg = {
            to: email,
            from: 'your-email@example.com', // Substitua pelo seu endereço de e-mail verificado no SendGrid
            subject: 'Newsletter da Casa Verde',
            text: `Olá,
                Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas.
                Até logo!`,
            html: '<strong>Boas-vindas à Casa Verde!</strong>',
        };

        try {
            await sgMail.send(msg);
            res.status(200).json({ message: 'Email enviado' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao enviar e-mail' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
}
