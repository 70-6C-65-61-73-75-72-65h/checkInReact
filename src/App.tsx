import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

interface Props {
  
}

export default function App({}: Props): ReactElement {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
