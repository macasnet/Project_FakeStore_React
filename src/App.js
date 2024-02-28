import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NotFound from './Pages/NotFound'
import Detail from './Pages/Detail'
import HomePage from './Pages/HomePage/HomePage'
import Products from './Pages/Products'
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products'  >
            <Route index element={<Products />} />
            <Route path='detail/:id' element={<Detail />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}
