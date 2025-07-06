import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { ThemeProvider } from '@emotion/react'
import theme from './constants/theme'
import BuyPlan from './pages/BuyPlan'
import Layout from './Layout'
import AllMemberships from './pages/AllMemberships'
import LogIn from './pages/LogIn'
import ProtectedRoutes from './components/ProtectedRoutes'
import Completed from './pages/Completed'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LogIn method={'login'} />} />
            <Route path="/register" element={<LogIn method={'register'} />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path='/memberships' element={<AllMemberships />} />
              <Route path="/buy-membership" element={<ProtectedRoutes><BuyPlan /></ProtectedRoutes>} />
              <Route path="/registered" element={<Completed />}></Route>
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
