import styled from 'styled-components'
import { Props } from 'components/Filter/index'

export default styled.div<Partial<Props>>`
  margin-bottom: ${(props) => props.theme.typography.pxToRem(30)};
`
