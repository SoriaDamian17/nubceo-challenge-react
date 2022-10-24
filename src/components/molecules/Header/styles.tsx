import styled from "styled-components";
import { devices } from "../../../shared/utils";

import { HeaderProps } from "./types";

export const StyledHeader = styled.header<HeaderProps>`
  align-items: center;
  align-self: ${({ align = 'flex-start' }) => align};
  background-color: ${({ theme }) => theme.palette.secondary};
  display: flex;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  height: 3rem;
  justify-content: space-around;
  width: 100%;

  & .btn-small {
    height: 1.6rem;
  }

  @media ${devices.laptop} {
    justify-content: space-around!important;
  }
  
  @media ${devices.mobileS} {
    justify-content: space-around;
    padding: 0.5rem;
  }
`
