import styled from 'styled-components'

export default styled.div`
  font-size: ${(props) => props.theme.typography.pxToRem(16)};
  .ability-detail {
    &__owners {
      flex-wrap: wrap;
      display: flex;
      margin-top: ${(props) => props.theme.typography.pxToRem(24)};
    }
  }
`
