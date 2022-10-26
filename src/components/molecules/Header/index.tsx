import { IconButton } from '@mui/material'
import React from 'react'
import { StyledHeader } from './styles'
import LogoutIcon from '@mui/icons-material/Logout'
import Logo from '../../atoms/Logo'

const Header: React.FC<{
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({
  onClick,
}) => {

    return (
      <StyledHeader >
        <a href="hhttps://www.nubceo.com/" target="blank">
          <Logo />
        </a>
        <IconButton
          aria-label="home"
          color="inherit"
          size="medium"
          style={{ marginRight: '0.62rem', color: '#fff' }}
          onClick={(event) => onClick(event)}
        >
          <LogoutIcon />
        </IconButton>
      </StyledHeader>
    )
  }

export default Header