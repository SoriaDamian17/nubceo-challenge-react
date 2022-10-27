import { Button as BMT } from '@mui/material/';
import styled from 'styled-components';

type ITheme = 'primary' | 'secondary';

export const Button = styled(BMT)<{
    background?: ITheme,
    color?: ITheme,
    maxWidth?: string,
}>`
    height: 3rem;
    width: 100%;
    max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '10rem'}!important;
    color: ${({color, theme}) => color ? theme.palette[color] : theme.palette.secondary}!important;
    background-color: ${({background, theme}) => background ? theme.palette[background] : theme.palette.primary} !important;
    font-weight: bold;
    font-size: 1.5rem;
    &:hover {
        background-color: ${({theme}) => theme.palette.darkGrey}!important;
    }
`;