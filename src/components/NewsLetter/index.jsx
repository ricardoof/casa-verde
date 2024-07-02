import styled from "styled-components"
import TextField from "../TextField"

const StyledNewsLetter = styled.div`
    display: flex;
    justify-content: space-between;
`

const NewsLetterContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 500px;
    top: 140px;
    gap: 35px;
    color: #202020;
    h1 {
        font-family: "Elsie Swash Caps", serif;
        font-size: 82px;
        margin: 0;
    }
    p {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
    }
`

const Div = styled.div`
    display: flex;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);
    height: 65px;
    background-color: #FFF;
    align-items: center;
`

const Button = styled.button`
    background-color: #FFCB47;
    color: #FFF;
    border: none;
    width: 194px;
    height: 65px;
    cursor: pointer;
`

const Image = styled.div`
    margin-left: 250px;
`

export default function NewsLetter() {
    return (
        <StyledNewsLetter>
            <NewsLetterContent>
                <p>Sua casa com as </p>
                <h1>melhores plantas</h1>
                <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
                <Div>
                    <img src="./src/assets/mail.png" />
                    <TextField />
                    <Button>Assinar newsletter</Button>
                </Div>
            </NewsLetterContent>
            <Image>
                <img src="./src/assets/planta-home.png" />
            </Image>
        </StyledNewsLetter>
    )
}