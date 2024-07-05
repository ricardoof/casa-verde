import styled from "styled-components"
import Offer from "./Offer"

const OffersContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 1200px;
    height: 568px;
    align-items: center;
    margin: 2rem 0;
    p {
        font-size: 22px;
        color: #202020;
    }
    h2 {
        font-family: "Elsie Swash Caps", serif;
        font-size: 82px;
    }
`
const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`

export default function Offers({ plants }) {
    return (
        <OffersContainer>
            <p>Conheça nossas</p>
            <h2>ofertas</h2>
            <Products>
                {plants.map(plant =>
                    <Offer
                        plant={plant}
                        key={plant.id}
                    />)}
            </Products>
        </OffersContainer>
    )
}