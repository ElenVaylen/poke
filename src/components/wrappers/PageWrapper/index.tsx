import React from 'react'
import { Container } from '@material-ui/core'
import Back from 'components/Back'
import GeneralWrapper from 'components/wrappers/GeneralWrapper'

const PageWrapper: React.FC = ({ children }) => (
  <GeneralWrapper>
    <div className='abilities-page'>
      <Container>
        <Back />
        {children}
      </Container>
    </div>
  </GeneralWrapper>
)

export default PageWrapper
