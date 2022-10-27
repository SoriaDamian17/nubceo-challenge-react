import styled from "styled-components"

export const Container = styled.div<{
    height?: string | number
}>`
    align-items: flex-end;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    height: ${(props) => props.height ? props.height : "auto"};
    justify-content: center;
`