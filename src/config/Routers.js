import React from 'react'

import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Episode from '../pages/Episode'
import Location from '../pages/Location'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path="/episode" element={<Episode />} />
            <Route path="/location" element={<Location />} />
            <Route path="/" exact element={<Home />} />
        </Routes>
    </div>
  )
}

export default Routers