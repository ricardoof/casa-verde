import styled from "styled-components";
import Menu from "../Menu";
import NewsLetter from "../NewsLetter";

const HomeContainer = styled.div`
    background-image: ${props => `url(${props.$homeBackground})`};
    background-repeat: no-repeat;
`

export default function Home({ homeBackground }) {
    return (
        <HomeContainer $homeBackground={homeBackground} >
            <Menu />
            <NewsLetter />
        </HomeContainer>
    )
}