import { Grid } from "@mui/material";
import styled from "styled-components";
import { devices } from "../../shared/utils";

export const Container = styled(Grid)`
    @media ${devices.mobileS} and (max-width: 560px) {
        padding: 0 1rem;
    }
`

export const Cover = styled.img`
    height: auto;
    max-width: 30rem;
    width: 100%;
`
export const Spotify = styled.iframe`
    border-radius: 1rem;
    height: 12rem;
    width: 100%;
    max-width: 30rem;
    border: 0;
`
export const BoxBand = styled.div`
    display: flex;
    flex-direction: row;
`
export const Information = styled.div`
    display: flex;
    flex-direction: column;
`

export const Pill = styled.span`
    background: ${({ theme }) => theme.palette.secondary};
    border-radius: 1rem;
    color: ${({ theme }) => theme.palette.primary};
`