import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const HomeLink = styled(Link)`
    position: fixed;
    top: 0;
    left: 0;
    margin: .4rem;
    
    a.HomeLink-link {
        color: #333;
        height: 1rem;
        width: 1rem;
    }
`;