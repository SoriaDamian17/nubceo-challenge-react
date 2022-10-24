import React from 'react'
import { devices } from '../../shared/utils'
import styled from 'styled-components'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'span' | 'linkLabel' | 'loginLabel' | 'versionLabel'
interface TypographyProps {
  align?: 'center' | 'left' | 'right'
  bold?: boolean
  children?: any
  className?: string
  color?: string
  fontSize?: string
  htmlFor?: string
  onClick?: () => void
  style?: any
  variant: Variant
}

const components: any = {
  h1: styled.h1<TypographyProps>`
    color: ${({ color, theme }) => color ?? theme.palette.primary};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: ${({ fontSize }) => fontSize ?? '1.56rem'};
    font-weight: 700;
    text-align: ${({ align = 'left' }) => align};
  `,
  h2: styled.h2<TypographyProps>`
    color: ${({ theme, color = 'primary' }) => theme.palette[color]};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: ${({ fontSize = '1rem' }) => fontSize};
    font-weight: 700;
    line-height: 1.8rem;
    text-align: ${({ align = 'left' }) => align};
  `,
  h3: styled.h3<TypographyProps>`
    color: ${({ theme, color = 'black' }) => theme.palette[color]};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: ${({ fontSize = '1rem' }) => fontSize};
    text-align: ${({ align = 'left' }) => align};
  `,
  h4: styled.h4<TypographyProps>`
    color: ${({ theme, color = 'black' }) => theme.palette[color]};
    font-size: ${({ fontSize = '1rem' }) => fontSize};
    text-align: ${({ align = 'left' }) => align};
  `,
  h5: styled.h5<TypographyProps>`
    color: ${({ theme, color = 'black' }) => theme.palette[color]};
    text-align: ${({ align = 'left' }) => align};
  `,
  h6: styled.h6<TypographyProps>`
    color: ${({ theme, color = 'black' }) => theme.palette[color]};
    font-size: ${({ fontSize = '1rem' }) => fontSize};
    font-weight: 400;
    line-height: 1.25rem;
    text-align: ${({ align = 'left' }) => align};
  `,
  label: styled.label<TypographyProps>`
    color: ${({ theme, color = 'primary' }) => theme.palette[color]};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: ${({ fontSize = '1rem' }) => fontSize};
    font-weight: ${({ bold = true }) => bold ? '700' : '500'};
    text-align: ${({ align = 'left' }) => align};
    @media ${devices.mobileS} and (max-width: 35rem) {
      font-size: .8rem;
    }
  `,
  p: styled.p<TypographyProps>`
    color: ${({ color, theme }) => color ?? theme.palette.black};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: ${({ fontSize = '1.2rem' }) => fontSize};
    font-weight: 400;
    text-align: ${({ align = 'left' }) => align};
  `,
  span: styled.span<TypographyProps>`
    font-family: ${({ theme }) => theme.font.primary};
  `,
  linkLabel: styled.span<TypographyProps>`
    color: ${({ color, theme }) => color ?? theme.palette.grey_medium};
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.primary};
    font-size: ${({ fontSize = '0.87rem' }) => fontSize};
    font-weight: 600;
    line-height:1.5rem;
  `,
  loginLabel: styled.span<TypographyProps>`
    color: ${({ theme }) => theme.palette.grey_medium};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: ${({ fontSize = '0.87rem' }) => fontSize};
    font-weight: 600;
    line-height:1.5rem;
  `,
  versionLabel: styled.span<TypographyProps>`
    color: ${({ theme }) => theme.palette.version};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: ${({ fontSize = '1.06rem' }) => fontSize};
    font-weight: 600;
    line-height: 1.5rem;
  `,
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  ...props
}: TypographyProps) => {
  const El = components[variant]
  return <El {...props}>{children}</El>
}

export default Typography
