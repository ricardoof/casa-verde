import styled from "styled-components"
import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import { Outlet } from "react-router-dom"

const DefaultContainer = styled.main`
    background-image: ${props => `url(${props.$background})`};
    background-repeat: no-repeat;
    background-position: top right;
`

const Div = styled.div`
    margin: 0 20rem;
`

export default function Default({ background }) {
    return (
        <DefaultContainer $background={background}>
            <Div>
                <Menu />
                <Outlet />
            </Div>
            <Footer />
        </DefaultContainer>
    )
}