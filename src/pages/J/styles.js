import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-size: large;
    margin: 1rem;
    text-align: center;
`;

export const Main = styled(Link)`
    display: flex;
    align-items: center;

    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};

    height: 3rem;
    width: 3rem;
    border-radius: 2rem;
`;