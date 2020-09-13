import styled from 'styled-components'

export default styled.div`
  font-size: ${(props) => props.theme.typography.pxToRem(16)};
  .pokemons-detail {
    &__row {
      display: flex;
      flex-direction: column;
      ${(props) => props.theme.breakpoints.up('tablet')} {
        flex-direction: row;
      }
    }
    &__left_col {
      width: 100%;
      ${(props) => props.theme.breakpoints.up('tablet')} {
        width: 300px;
      }
    }
    &__right_col {
      flex: 1 0 auto;
      padding-left: 0;
      ${(props) => props.theme.breakpoints.up('tablet')} {
        padding-left: ${(props) => props.theme.typography.pxToRem(60)};
      }
    }
    &__img {
      background-size: contain;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      width: 100%;
      height: 300px;
      margin-bottom: ${(props) => props.theme.typography.pxToRem(24)};
    }
    &__table_head .MuiTableCell-head {
      color: #fff;
      background-color: #83848f;
    }
    &__abilities {
      display: flex;
      margin-top: ${(props) => props.theme.typography.pxToRem(24)};
      &_title {
        margin: 0;
        font-size: ${(props) => props.theme.typography.pxToRem(16)};
        font-weight: 400;
        margin-right: ${(props) => props.theme.typography.pxToRem(16)};
      }
      &_item {
        margin-right: ${(props) => props.theme.typography.pxToRem(16)};
        text-decoration: none;
        color: ${(props) => props.theme.palette.secondary.main};
      }
    }
  }
`
