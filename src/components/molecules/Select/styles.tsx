import styled, { css } from "styled-components";
import SelectMT from "@mui/material/Select";
interface ISelect {
    background?:string,
    colorText?:string,
    height?: string,
    width?:string,
}

const SelectUi = styled(SelectMT)<ISelect>`
    ${({ background, theme }) => background ? css`background: ${theme.palette[background]};` : ''}
    ${({ colorText, theme }) => colorText ? css`color: ${theme.palette[colorText]} !important;` : ''}
    ${({ width }) => width ? css `width: ${width};` : ''}
    ${({ height }) => height ? css `height: ${height};` : ''}
    border:none;
    display: flex;
    font-family: 'Montserrat' !important;
`

export default SelectUi;