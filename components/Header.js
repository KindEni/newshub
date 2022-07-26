import styled from "styled-components";

const HeaderContainer = styled.div`
background-color: orange;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`
const Title = styled.h1`
hehight: 64px;
pointer-events: none;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <Title>NewsHub</Title>
        </HeaderContainer>
    )
        
    
}