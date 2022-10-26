import styled from "styled-components";

export const Cover = styled.img`
    height: auto;
    max-width: 20rem;
    width: 100%;
`
export const Spotify = styled.iframe`
    border-radius: 1rem;
    height: 15rem;
    width: 100%;
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
    padding: 1rem;
`