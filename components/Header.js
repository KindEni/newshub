import styled from "styled-components";

const HeaderContainer = styled.div`
background-color: blue;
color: white;
`
const Title = styled.h1`
font-size: 2rem
`;

export default function Header() {
    return (
        <HeaderContainer>
            <Title>NewsHub</Title>
        </HeaderContainer>
    )
        
    
}