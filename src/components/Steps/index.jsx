import styled from "styled-components"
import plant from './mask-group.png'
import Step from "./Step"

const StepsContainer = styled.section`
    display: flex;
    width: 995px;
    height: 440px;
    &div {
        width: 585px;
    }
    img {
        width: 100%;
    }
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 70px 32px;
    p {
        font-size: 22px;
        color: #202020;
    }
    h2 {
        font-family: "Elsie Swash Caps", serif;
        font-size: 42px;
        font-style: Black;
    }
`

export default function Steps() {
    return (
        <StepsContainer>
            <div>
                <img src={plant} alt="" />
            </div>
            <Text>
                <p>Como conseguir </p>
                <h2>minha planta</h2>
                <Step text="Escolha suas plantas" />
                <Step text="Faça seu pedido" />
                <Step text="Aguarde na sua casa" />
            </Text>
        </StepsContainer>
    )
}