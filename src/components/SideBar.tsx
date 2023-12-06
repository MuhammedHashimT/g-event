import React from 'react'

interface Props {
  showSideBar: boolean
}

const SideBar = (props:Props) => {
  return (
    <div className={
      ' w-64 h-screen bg-black text-white transition-transform duration-500 transform ' +
      (props.showSideBar ? 'translate-x-0' : '-translate-x-full')
    
    }>SideBar</div>
  )
}

export default SideBar