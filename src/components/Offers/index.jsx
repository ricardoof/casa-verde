import styled from "styled-components"
import Offer from "./Offer"

const OffersContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 2rem;
    p {
        font-size: 22px;
        color: #202020;
    }
    h2 {
        font-family: "Elsie Swash Caps", serif;
        font-size: 82px;
        font-style: Black;
    }
    div {

    }
`

export default function Offers() {
    return (
        <OffersContainer>
            <p>Conheça nossas</p>
            <h2>ofertas</h2>
            <div>
                <Offer />
            </div>
        </OffersContainer>
    )
}