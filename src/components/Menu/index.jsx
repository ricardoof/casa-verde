import styled from "styled-components"

const Header = styled.header`
    display: flex;
    justify-content: space-between;
`

const StyledList = styled.ul`
    display: flex;
    list-style: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: #202020;
    gap: 1rem;
    cursor: pointer;
    
`

export default function Menu() {
    return (
        <Header>
            <img src="images/logo.png" />
            <StyledList>
                <li>Como fazer</li>
                <li>/</li>
                <li>Ofertas</li>
                <li>/</li>
                <li>Depoimentos</li>
                <li>/</li>
                <li>Vídeos</li>
                <li>/</li>
                <li>Meu carrinho</li>
            </StyledList>
        </Header>
    )
}