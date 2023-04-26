import styled from 'styled-components'
import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: #686868;
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};

    display: grid;
    place-items: center;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 10rem auto;
    grid-row-gap: 2rem;
    grid-template-areas: 
    "header header header"
    "a7 a6 a5"
    "a4 a3 a2"
    "a b c"
    "d e f"
    "g h i"
    "j k l"
    "m n o";
`;

export const A7 = styled(Link)`
    grid-area: a7;

    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 8rem;
    width: 8rem;
    border-radius: 2rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_7A};
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const A6 = styled(Link)`
    grid-area: a6;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 8rem;
    width: 8rem;
    border-radius: 2rem;

    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_6A};
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const A5 = styled(Link)`
    grid-area: a5;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 8rem;
    width: 8rem;
    border-radius: 2rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_5A};
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
`;

export const A4 = styled(Link)`
    grid-area: a4;

    align-items: center;
    display: flex;
    justify-content: center;

    height: 8rem;
    width: 8rem;
    border-radius: 2rem;    

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_4A};
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
`;

export const A3 = styled(Link)`
    grid-area: a3;

    
    display: flex;
    align-items: center;
    justify-content: center;

    height: 8rem;
    width: 8rem;
    border-radius: 2rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_3A};
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const A2 = styled(Link)`
    grid-area: a2;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 8rem;
    width: 8rem;
    border-radius: 2rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_2A};
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const A = styled(Link)`
    grid-area: a;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 8rem;
    width: 8rem;
    border-radius: 2rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_A};
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const B = styled(Link)`
grid-area: b;

display: flex;
align-items: center;
justify-content: center;

height: 8rem;
width: 8rem;
border-radius: 2rem;

background-color: ${({theme}) => theme.COLORS.BACKGROUND_B};
color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const C = styled(Link)`
    grid-area: c;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 8rem;
    width: 8rem;
    border-radius: 2rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_C};
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const D = styled(Link)`
grid-area: d;

display: flex;
align-items: center;
justify-content: center;

height: 8rem;
width: 8rem;
border-radius: 2rem;

background-color: ${({theme}) => theme.COLORS.BACKGROUND_D};
color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const E = styled(Link)`
    grid-area: e;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 8rem;
    width: 8rem;
    border-radius: 2rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_E};
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const F = styled(Link)`
grid-area: f;

display: flex;
    align-items: center;
justify-content: center;

height: 8rem;
width: 8rem;
border-radius: 2rem;

background-color: ${({theme}) => theme.COLORS.BACKGROUND_F};
color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const G = styled(Link)`
    grid-area: g;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 8rem;
    width: 8rem;
    border-radius: 2rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_G};
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const H = styled(Link)`
grid-area: h;

display: flex;
    align-items: center;
justify-content: center;

height: 8rem;
width: 8rem;
border-radius: 2rem;

background-color: ${({theme}) => theme.COLORS.BACKGROUND_H};
color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const I = styled(Link)`
    grid-area: i;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 8rem;
    width: 8rem;
    border-radius: 2rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_I};
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const J = styled(Link)`
grid-area: j;

display: flex;
    align-items: center;
justify-content: center;

height: 8rem;
width: 8rem;
border-radius: 2rem;

background-color: ${({theme}) => theme.COLORS.BACKGROUND_J};
color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const K = styled(Link)`
    grid-area: k;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 8rem;
    width: 8rem;
    border-radius: 2rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_K};
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const L = styled(Link)`
grid-area: l;

display: flex;
align-items: center;
justify-content: center;

height: 8rem;
width: 8rem;
border-radius: 2rem;

background-color: ${({theme}) => theme.COLORS.BACKGROUND_L};
color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const M = styled(Link)`
    grid-area: m;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 8rem;
    width: 8rem;
    border-radius: 2rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_M};
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const N = styled(Link)`
grid-area: n;

display: flex;
align-items: center;
justify-content: center;

height: 8rem;
width: 8rem;
border-radius: 2rem;

background-color: ${({theme}) => theme.COLORS.BACKGROUND_N};
color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;

export const O = styled(Link)`
    grid-area: o;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 8rem;
    width: 8rem;
    border-radius: 2rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_O};
    color: ${({theme}) => theme.COLORS.BACKGROUND_TEXT};
`;