import styled from "styled-components"

const Input = styled.input`
    width: 100%;
    height: 100%;
    background-color: transparent;
    box-sizing: border-box;
    border: none;
    padding: 10px;
`

export default function TextField({ value, type, whenChange, placeholder }) {
    const whenTyping = (event) => {
        whenChange(event.target.value)
    }

    return (
        <>
            <Input value={value} type={type} onChange={whenTyping} placeholder={placeholder} />
        </>
    )
}