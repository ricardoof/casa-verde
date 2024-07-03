import styled from "styled-components"
import TextField from "../TextField"
import mail from './mail.png'
import plant from './plant.png'

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
    }
`

const Div = styled.div`
    display: flex;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.2);
    height: 65px;
    background-color: #FFF;
    align-items: center;
`

const Button = styled.button`
    background-color: #FFCB47;
    color: #FFF;
    font-size: 16px;
    border: none;
    width: 194px;
    height: 65px;
    cursor: pointer;
`

const Image = styled.div`
    margin-left: 300px;
`

export default function NewsLetter() {
    return (
        <StyledNewsLetter>
            <NewsLetterContent>
                <p>Sua casa com as </p>
                <h1>melhores plantas</h1>
                <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
                <Div>
                    <img src={mail} />
                    <TextField />
                    <Button>Assinar newsletter</Button>
                </Div>
            </NewsLetterContent>
            <Image>
                <img src={plant} />
            </Image>
        </StyledNewsLetter>
    )
}