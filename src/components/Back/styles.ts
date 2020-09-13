import styled from 'styled-components'

export default styled.button`
  margin-bottom: ${(props) => props.theme.typography.pxToRem(30)};
  display: inline-flex;
  background: transparent;
  border: none;
  align-items: center;
  padding: 0;
  font-family: inherit;
  font-size: ${(props) => props.theme.typography.pxToRem(20)};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`
