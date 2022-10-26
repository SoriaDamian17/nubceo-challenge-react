import styled from "styled-components";

export const Spinner = styled.div`
    border-left-color: #fff;
    border-radius: 50%;
    border: 4px solid #1976d2;
    height: 2rem;
    width: 2rem;

    animation: spin 1s ease infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`