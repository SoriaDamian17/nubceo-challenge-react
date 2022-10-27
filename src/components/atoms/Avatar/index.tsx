import styled from "styled-components";
import AvatarMT from '@mui/material/Avatar';

export const Avatar = styled(AvatarMT)`
    background: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.secondary};
    margin: 1rem 0 0;
`