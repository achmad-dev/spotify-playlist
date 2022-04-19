import {css} from '@emotion/css'

export const ColumnStyle = css`
    display: grid;
    
    grid-template-columns: repeat(3, 1fr);
    
    grid-auto-rows: auto;
    
    grid-gap: 1rem;
`;

export const FlexStyle = css`
    display: flex;
    justify-content: center;
    flex: wrap;
    margin: auto;
`;