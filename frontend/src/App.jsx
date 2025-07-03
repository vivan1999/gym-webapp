import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { ThemeProvider } from '@emotion/react'
import theme from './constants/theme'
import BuyPlan from './pages/BuyPlan'
import Layout from './Layout'
import AllMemberships from './pages/AllMemberships'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path='/memberships' element={<AllMemberships />} />
              <Route path="/buy-membership" element={<BuyPlan />} />
              <Route path="*" element={<NotFound />}>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
