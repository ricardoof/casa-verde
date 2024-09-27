import styled from "styled-components"
import TextField from "../TextField"
import mail from './mail.png'
import plant from './plant.png'
import { useState } from "react"

const StyledNewsLetter = styled.div`
    display: flex;
    justify-content: space-between;
`

const NewsLetterContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 585px;
    top: 200px;
    color: #202020;
    h1 {
        font-family: "Elsie Swash Caps", serif;
        font-size: 82px;
        margin: 12px 0 24px 0;
    }
    p {
        margin-right: 90px;
    }
`

const Form = styled.form`
    display: flex;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.2);
    height: 65px;
    background-color: #FFF;
    align-items: center;
    margin-top: 37px;
    img {
        margin: 10px;
    }
`

const Button = styled.button`
    background-color: #FFCB47;
    color: #FFF;
    border: none;
    width: 250px;
    height: 65px;
    cursor: pointer;
`

const Image = styled.div`
    margin-left: 350px;
    width: 700px;
    img {
        width: 100%;
    }
`

export default function NewsLetter() {
    const [email, setEmail] = useState('');

    const whenSave = async (event) => {
        event.preventDefault();

        if (email === '') {
            alert('Escreva um e-mail válido');
            return;
        }

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`);
                setEmail('');
            } else {
                alert('Erro ao enviar e-mail. Tente novamente mais tarde.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar e-mail. Tente novamente mais tarde.');
        }
    };

    return (
        <StyledNewsLetter>
            <NewsLetterContent>
                <p>Sua casa com as </p>
                <h1>melhores plantas</h1>
                <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
                <Form onSubmit={whenSave}>
                    <img src={mail} />
                    <TextField
                        label="email"
                        type="email"
                        value={email}
                        placeholder="Insira seu e-mail"
                        whenChange={value => setEmail(value)}
                    />
                    <Button>Assinar newsletter</Button>
                </Form>
            </NewsLetterContent>
            <Image>
                <img src={plant} />
            </Image>
        </StyledNewsLetter>
    )
}