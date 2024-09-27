import styled from "styled-components";
import NewsLetter from "../../components/NewsLetter";
import Steps from "../../components/Steps";
import Offers from "../../components/Offers";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20rem;
`

export default function Home({ plants, background }) {
    return (
        <HomeContainer>
            <NewsLetter />
            <Steps />
            <Offers plants={plants} />
        </HomeContainer>
    )
}