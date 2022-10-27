import { Box as BMT } from '@mui/material';
import styled from 'styled-components';
import { devices } from '../../shared/utils';

export const Layout = styled.div`

    @media ${devices.laptop} {
        .bg-main {
            background-size: cover;
            background-color: #fafafa;
            background-image: url('https://source.unsplash.com/random');
            background-repeat: no-repeat;
            background-position: center;
        }
    }
`

export const Box = styled(BMT)`
    justify-contener: right;
    align-items: right;
`;

export const Header = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const FormLogin = styled.form`
    width: 100%;
`

export const Copyright = styled.div`
    display: flex;
    justify-content: center;
    max-width: 20rem;
    padding: 1rem 0;
    width: 100%;
`