import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 100vh;
    font-size: large;
    margin: 1rem;
    display: flex;
    flex-direction: column;
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