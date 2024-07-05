import styled from "styled-components";
import Menu from "../../components/Menu";
import NewsLetter from "../../components/NewsLetter";
import Steps from "../../components/Steps";
import Offers from "../../components/Offers";
import Footer from "../../components/Footer";

const HomeContainer = styled.div`
    background-image: ${props => `url(${props.$homeBackground})`};
    background-repeat: no-repeat;
    background-position: top right;
`

const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20rem;
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