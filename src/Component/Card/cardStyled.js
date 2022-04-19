import styled from 'styled-components';

export const Div = styled.div`
    display: grid;
    border: 1px solid black;
    border-radius: 8px;
    margin: auto;
    text-align:center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    color: white;
    margin: auto;
`;

export const Image = styled.img`
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
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