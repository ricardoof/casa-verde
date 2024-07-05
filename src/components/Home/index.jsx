import styled from "styled-components";
import Menu from "../Menu";
import NewsLetter from "../NewsLetter";
import Steps from "../Steps";
import Offers from "../Offers";
import Footer from "../Footer";

const HomeContainer = styled.div`
    background-image: ${props => `url(${props.$homeBackground})`};
    background-repeat: no-repeat;
    background-position: top right;
    width: 100vw;
    height: 100vh;
`

const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20rem 5rem 20rem;
`

export default function Home({ homeBackground, plants }) {
    return (
        <HomeContainer $homeBackground={homeBackground} >
            <HomeContent>
                <Menu />
                <NewsLetter />
                <Steps />
                <Offers plants={plants} />
                <Footer />
            </HomeContent>
        </HomeContainer>
    )
}