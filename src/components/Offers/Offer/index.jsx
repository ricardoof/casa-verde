import styled from "styled-components"

const OfferContainer = styled.div`
    display: flex;
    width: 380px;
    height: 200px;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.2);
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    gap: 16px;
    margin: 20px;
    h3 {
        font-family: "Elsie Swash Caps", serif;
        font-size: 32px;
        font-style: Black;
    }
    p {
        color: #202020;
    }
`

const Image = styled.div`
    width: 200px;
    height: 200px;
    img {
        width: 100%;
        height: 100%;
    }
`

const Buy = styled.div`
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
`

export default function Offer({ plant }) {
    return (
        <OfferContainer>
            <Image>

            <img src={plant.image} alt={`Image of ${plant.name}`} />
            </Image>
            <Text>
                <h3>{plant.name}</h3>
                <p>{plant.price}</p>
                <Buy>
                    <button>Comprar</button>
                    <img src="/images/arrow.png" alt="" />
                </Buy>
            </Text>
        </OfferContainer>
    )
}