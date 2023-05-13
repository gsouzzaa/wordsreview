import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

:root {
    font-size: 62.5%;
}

body, input, button {
    font-size: 5rem;
}

a {
    text-decoration: none;
    color: black;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover,
a:hover {
    filter: brightness(.8);
}`

