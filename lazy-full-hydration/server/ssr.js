import React from 'react'
import { renderToString } from 'react-dom/server'
import fs from 'fs'
import path from 'path'
import App from '../client/App'


const cameFromSsrScript = '<script>window.__CAME_FROM_SSR__=true</script>'

const ssr = () => {
  const htmlPath = path.resolve(__dirname, '../client/index.html')
  const rawHTML = fs.readFileSync(htmlPath).toString()

  return (req, res) => {
    const [htmlBeforeRootDiv, htmlAfterRootDiv] = rawHTML.split('<div id="root"></div>')
    const renderedApp = renderToString(<App />)

    res.send([htmlBeforeRootDiv, cameFromSsrScript, '<div id="root">', renderedApp, '</div>', htmlAfterRootDiv].join(''))
  }
}

export default ssr
