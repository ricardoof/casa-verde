import styled from "styled-components"

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFCB47;
    color: #FFF;
    width: 100vw;
    height: 5rem;
`

export default function Footer() {
    return (
        <FooterContainer>Desenvolvido por Ricardo Ferreira.</FooterContainer>
    )
}