import React from 'react'
import AsideNavbar from '../../Components/AsideComponent/AsideNav'
import Navbar from '../../Components/Navbar/Navbar'
import UserAccount from '../../Components/UserAccount/UserAccount'

function UserAccountPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <AsideNavbar />
      <div className="w-full">
        <Navbar />
        <UserAccount />
      </div>
    </div>
  )
}

export default UserAccountPage