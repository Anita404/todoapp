import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        height: 100vh;
        font-family: 'Josefin Sans';
        background-color: ${({ theme }) => theme.bgColor};
        transition: all 0.5s linear;
    }

    #app {
        height: inherit;
    }

    * {
        margin: 0;
        padding: 0;
    }

    input {
        all: unset;
    }

    button {
        all: unset;
    }
`;
