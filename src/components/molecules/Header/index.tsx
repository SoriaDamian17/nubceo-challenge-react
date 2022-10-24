import { IconButton } from '@mui/material'
import React from 'react'
import { StyledHeader } from './styles'
import LogoutIcon from '@mui/icons-material/Logout'
import Logo from '../../atoms/Logo'


const Header: React.FC = () => {

    return (
      <StyledHeader >
        <a href="https://engbim.com/products/sirvey/" target="blank">
          <Logo />
        </a>
        <IconButton
          aria-label="home"
          color="inherit"
          size="medium"
          style={{ marginRight: '0.62rem' }}
        >
          <LogoutIcon />
        </IconButton>
      </StyledHeader>
    )
  }

export default Header