import styled from "styled-components"
import plant from './produto-01.png'
import arrow from './arrow.png'

const OfferContainer = styled.div`
    display: flex;
    
    width: 379px;
    height: 200px;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.2);
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 90px;
    gap: 1rem;
    padding: 27px;
    h3 {
        font-family: "Elsie Swash Caps", serif;
        font-size: 32px;
        font-style: Black;
    }
    div {
        display: flex;
        gap: 1rem;
        align-items: center;
        button {
            background-color: transparent;
            border: none;
            cursor: pointer;
            color: #FFCB47;
        }
        img {
            width: 14px;
            height: 8px;
        }
    }
`

export default function Offer() {
    return (
        <OfferContainer>
            <img src={plant} alt="" />
            <Text>
                <h3>Ajuga reptans</h3>
                <p>R$20,00</p>
                <div>
                    <button>Comprar</button>
                    <img src={arrow} alt="" />
                </div>
            </Text>
        </OfferContainer>
    )
}