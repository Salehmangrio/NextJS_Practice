import Navbar from '@/components/Navbar'
import React from 'react'

export const metadata={
  title:"Login",
  description:'Created by Saleh'
}

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout