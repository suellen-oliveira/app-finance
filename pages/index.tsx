import styled from "styled-components";
import Login from "./../src/pages/Login/index";

export default function Home() {
  return (
    <>
      <Login />
    </>
  );
}

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
