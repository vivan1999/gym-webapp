import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { ThemeProvider } from '@emotion/react'
import theme from './constants/theme'
import BuyPlan from './pages/BuyPlan'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="*" element={<NotFound />}>
            </Route>
            <Route path="/buy-membership" element={<BuyPlan />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
