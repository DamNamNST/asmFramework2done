import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer'


const WebsiteLayout = () => {
  return (
    <div>
      
      <main>
        <Outlet></Outlet>
            
      </main>
      <Footer></Footer>
    </div>
  )
}

export default WebsiteLayout
