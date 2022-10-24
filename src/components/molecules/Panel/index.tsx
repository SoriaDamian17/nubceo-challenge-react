import styled, { css } from 'styled-components'
import { PanelProps } from './types'

const Panel = styled.div<PanelProps>`
  ${({ height }) => `height: ${height}`};
  ${({ minHeight }) => `min-height: ${minHeight}`};
  ${({ width }) => `width: ${width}`};
  align-items: ${({ align = 'flex-start' }) => align};
  background-color: ${({ theme, color }) => color || theme.palette.grey};
  border-radius: ${({ borderRadius = 0 }) => borderRadius}px;
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  margin: ${({ margin }) => margin};
  padding: ${({ padding = '0px' }) => padding};
  ${({ shadow }) =>
  shadow &&
  css`filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))  drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));`};
  ${({ maxWidth }) => `max-width: ${maxWidth}`};
  `

export default Panel