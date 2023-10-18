import React from 'react'
import {RxDashboard} from 'react-icons/rx'
import {LiaWalletSolid} from 'react-icons/lia'
import {LuLayoutDashboard} from 'react-icons/lu'
import {FiBox} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {LuBadgePercent} from 'react-icons/lu'
import {TbHelpSquareRounded} from 'react-icons/tb'
import {FiChevronRight} from 'react-icons/fi'
import profile from "../src/assets/profle.png"



function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <RxDashboard  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <LuLayoutDashboard className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FiBox className='icon'/> Product
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FiUsers className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <LiaWalletSolid className='icon'/> Income
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <LuBadgePercent className='icon'/> Promote
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <TbHelpSquareRounded className='icon'/> Help
                </a>
            </li>

            <li className='sidebar-list-item profile'>
                
                    
                    <a>
                        
                        
                       
                        <div className='profile'>
                           <img className='profile-photo' src={profile} />
                        </div>

                        <div className='profile-name'>
                            Suyog  
                        </div>
                    </a>

                    
                    
                    
                
            </li>
            
        </ul>
    </aside>
  )
}

export default Sidebar