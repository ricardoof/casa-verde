import styled from "styled-components"

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const StyledList = styled.ul`
    display: flex;
    list-style: none;
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
            <img src="/images/logo.png" />
            <nav>
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
            </nav>
        </Header>
    )
}