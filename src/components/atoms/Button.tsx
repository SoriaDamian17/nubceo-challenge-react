import { Button as BMT } from '@mui/material/';
import styled from 'styled-components';

export const Button = styled(BMT)`
    height: 3rem;
    width: 100%;
    max-width: 10rem;
    color: ${({theme}) => theme.palette.secondary}!important;
    background-color: ${({theme}) => theme.palette.primary} !important;
    font-weight: bold;
    font-size: 1.5rem;
    &:hover {
        background-color: ${({theme}) => theme.palette.secondary};
    }
`;