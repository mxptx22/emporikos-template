import { jsx } from '@emotion/react'
/** @jsxImportSource @emotion/react */
import React from 'react' // eslint-disable-line
import tw from 'twin.macro'
import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom'

import '@fontsource/assistant/200.css'
import '@fontsource/assistant/300.css'
import '@fontsource/assistant/400.css'
import '@fontsource/assistant/500.css'
import '@fontsource/assistant/600.css'
import '@fontsource/assistant/700.css'
import '@fontsource/assistant/800.css'

import '@fontsource/raleway/100.css'
import '@fontsource/raleway/200.css'
import '@fontsource/raleway/300.css'
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/500.css'
import '@fontsource/raleway/600.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/800.css'

import '@fontsource/bitter'
import '@fontsource/la-belle-aurore'

import '@fontsource/el-messiri/400.css'
import '@fontsource/el-messiri/500.css'
import '@fontsource/el-messiri/600.css'
import '@fontsource/el-messiri/700.css'
import Home from './Pages/home'
import About from './Pages/subpages/about'
import Services from './Pages/subpages/services'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
