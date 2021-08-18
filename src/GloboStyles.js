import { createGlobalStyle } from "styled-components";

export const GloboStyles = createGlobalStyle`
    :root{
        --primary: #fe0000;
        --textPrimary: "000000"

    }
    *{
        margin: 0px;
        padding: 0px;
        outline: 0px;

        box-sizing: border-box;

    }
    body{
        font-family: sans-serif, Arial;
        color: var(---textPrimary);
    }
`;