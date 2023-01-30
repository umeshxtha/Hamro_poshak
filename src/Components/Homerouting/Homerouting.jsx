import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Routes,Route,navigate} from 'react-router-dom'
import Contactus from '../Contactus/Contactus'
import SKills from '../Home/Skills/Skills'
import Lists from '../Lists/Lists'

const Homerouting = () => {
  return (
    <>
    <Routes>
      <Route path={'/skills'} element={<SKills/>} />

      <Route path={'/contactus'} element={<Contactus/>} />
      <Route path={'/lists'} element={<Lists/>}/>


    </Routes>
    </>
  )
}

export default Homerouting
