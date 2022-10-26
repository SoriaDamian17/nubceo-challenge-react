import { Grid } from "@mui/material";
import styled, { keyframes } from "styled-components";
import { fadeIn, fadeOut } from 'react-animations';

export const HeaderBand = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 0;
`
const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`;

export const Band = styled(Grid)`
    &.fadeIn {
        animation: 1s ${fadeInAnimation};
    }
    &.fadeOut {
        animation: 1s ${fadeOutAnimation};
    }
`