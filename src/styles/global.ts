import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, button {
        font-family: Arial, Helvetica, sans-serif;
    }
`

export default GlobalStyle