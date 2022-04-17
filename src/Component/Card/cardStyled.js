import styled from 'styled-components';

export const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    border: 1px solid black;
    border-radius: 8px;
    margin: auto;
    text-align:center;
    background: linear-gradient(
        180deg,
        rgb(36, 36, 36) 0%,
        #121212 54%,
        #121212 100%
      );
    
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    color: white;
`;

export const Image = styled.img`
    width: 100%;
`;

export const Button = styled.button`
    background-color: green;
    color: #fff;
    width: 100%;
    border: none;
    border-radius: 5px;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
`;