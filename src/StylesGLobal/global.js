import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html,body,#root{
        height: 100%;
        background: #f0fff0;
        font-family: 'Roboto', sans-serif;
    }
    
    a {
        text-decoration: none;
    }

    button{
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
    }

    input{
        font-family: 'Roboto', sans-serif;
    }

    li{
        list-style: none;
    }
`;
