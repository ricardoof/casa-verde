import styled from "styled-components";
import Menu from "../Menu";
import NewsLetter from "../NewsLetter";
import Steps from "../Steps";
import Offers from "../Offers";

const HomeContainer = styled.div`
    background-image: ${props => `url(${props.$homeBackground})`};
    background-repeat: no-repeat;
    background-position: top right;
`

const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20rem;
`

export default function Home({ homeBackground }) {
    return (
        <HomeContainer $homeBackground={homeBackground} >
            <HomeContent>
                <Menu />
                <NewsLetter />
                <Steps />
                <Offers />
            </HomeContent>
        </HomeContainer>
    )
}