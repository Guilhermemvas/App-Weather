import styled from "styled-components";

const HeaderWrapper = styled.header`
    text-align: center;
    margin-top: 20px;
`;

const Title = styled.h1`
    font-size: 2rem;
    color: #333;
`;

const Header = () => {
  return (
    <HeaderWrapper>
        <Title>App de Clima</Title>
    </HeaderWrapper>
  )
}

export default Header;