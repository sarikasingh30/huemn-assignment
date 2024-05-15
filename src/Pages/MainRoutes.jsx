import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainComponent } from '../Components/MainComponent/MainComponent'
import { WishList } from './WishList'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainComponent/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
    </Routes>
  )
}
