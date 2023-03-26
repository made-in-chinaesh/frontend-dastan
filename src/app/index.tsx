import React, { FC } from 'react'
import { withProviders } from './providers'
import './index.scss'
import { Routing } from 'pages'

const App: FC = () => {
	return <Routing />
}

export default withProviders(App)
