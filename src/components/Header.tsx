import React from 'react'


interface Props {
  setShowSideBar: (showSideBar: boolean) => void
  showSideBar: boolean
}

const Header = (props:Props) => {
  return (
    <div className='w-full bg-slate-500'>Header
      <button onClick={()=>{
        props.setShowSideBar(!props.showSideBar)
      }} className='bg-black text-white'>click here</button>
    </div> 
  )
}

export default Header