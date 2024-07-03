import styled from "styled-components"
import logo from './logo.png'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
`

const StyledList = styled.ul`
    display: flex;
    list-style: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    cursor: pointer;
    a {
        text-decoration: none;
        color: #202020;
        margin: 0 1rem;
    }
`

export default function Menu() {
    return (
        <Header>
            <img src={logo} />
            <StyledList>
                <li>
                    <a href="/">Como fazer</a>
                    /
                </li>
                <li>
                    <a href="/">Ofertas</a>
                    /
                </li>
                <li>
                    <a href="/">Depoimentos</a>
                    /
                </li>
                <li>
                    <a href="/">Vídeos</a>
                    /
                </li>
                <li>
                    <a href="/">Meu carrinho</a>
                </li>
            </StyledList>
        </Header>
    )
}