import React from 'react'
import { render } from 'react-dom'
import App from './App'
import hydrateOnFocus from './hydrateOnFocus'

const renderOrHydrate = window.__CAME_FROM_SSR__ ? hydrateOnFocus : render

renderOrHydrate(<App />, document.getElementById('root'))
