import React from 'react'
import ChatBox from '../../Components/ChatBox/ChatBox'
import AsideNavbar from '../../Components/AsideComponent/AsideNav'
import Navbar from '../../Components/Navbar/Navbar'

function ChatPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <AsideNavbar />
      <div className="w-full">
        <Navbar />
        <ChatBox />
      </div>
    </div>
  )
}

export default ChatPage