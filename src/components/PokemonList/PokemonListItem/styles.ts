import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

export default styled(Grid)`
  .pokemon-list-item {
    &__card {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px -2px, rgba(0, 0, 0, 0.14) 0px 1px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    }
    &__link {
      text-decoration: none;
      color: ${(props) => props.theme.palette.text.primary};
      display: block;
      padding: ${(props) => props.theme.typography.pxToRem(16)} ${(props) => props.theme.typography.pxToRem(24)};
    }
    &__content {
      padding: 0;
    }
    &__img {
      height: ${(props) => props.theme.typography.pxToRem(300)};
      background-size: contain;
    }
  }
`
