import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items:center;
  color: ${props => props.theme.colors.accent};
  line-height: 16px;
  letter-spacing: 1px;
  padding: 4px;
`
