import styled from "styled-components"

const StepContainer = styled.div`
    display: flex;
    gap: 13px;
    font-size: 22px;
    align-items: center;
`

const Circle = styled.div`
    background-color: #FFCB47;
    width: 52px;
    height: 52px;
    border-radius: 50%;
`

export default function Step({ text }) {
    return (
        <StepContainer>
            <Circle />
            <p>{text}</p>
        </StepContainer>
    )
}