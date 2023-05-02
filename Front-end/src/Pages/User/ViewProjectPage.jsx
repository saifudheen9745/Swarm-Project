import React from 'react'
import ViewProjectComponent from '../../Components/ViewProjectComponent/ViewProjectComponent'
import AsideNavbar from '../../Components/AsideComponent/AsideNav'
import Navbar from '../../Components/Navbar/Navbar'

function ViewProjectPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <AsideNavbar />
      <div className="w-full">
        <Navbar />
        <ViewProjectComponent />
      </div>
    </div>
  )
}

export default ViewProjectPage