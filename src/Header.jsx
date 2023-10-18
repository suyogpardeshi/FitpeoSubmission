import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <h3>Hello Fitpeo </h3>
        </div>

        
        <div className='header-right'>
          <div className='search-box'>
            <BsSearch  className='icon-search'/>
            <span className='search-text' >Search</span>
          </div>
        
        </div>
    </header>
  )
}

export default Header

