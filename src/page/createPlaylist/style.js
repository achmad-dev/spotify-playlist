import {css} from '@emotion/css'

export const ColumnStyle = css`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`

export const FlexStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
`