import React from 'react'
import AsideNavbar from '../../Components/AsideComponent/AsideNav'
import Navbar from '../../Components/Navbar/Navbar'
import WorkspaceDetails from '../../Components/WorkspaceDetails/WorkspaceDetails'


function WorkspacePage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <AsideNavbar />
      <div className="w-full">
        <Navbar />
        <WorkspaceDetails />
      </div>
    </div>
  )
}

export default WorkspacePage