import styled from "styled-components";
import NewsLetter from "../../components/NewsLetter";
import Steps from "../../components/Steps";
import Offers from "../../components/Offers";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Home({ plants }) {
    return (
        <HomeContainer>
            <NewsLetter />
            <Steps />
            <Offers plants={plants} />
        </HomeContainer>
    )
}