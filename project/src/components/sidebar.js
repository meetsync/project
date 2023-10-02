import React from 'react'
import "../App.css"
import { SidebarData } from './sidebarData';

function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className='SideBarImg'>
            
        </div>

        <ul className='SidebarList'>
       {SidebarData.map((val,key)=> {
        return (
            <li 
                key={key} 
                className='row'
                onClick={()=> {window.location.pathname = val.link;
                }}
            >
                <div>{val.title}</div></li>
        )
       }
       )}
       </ul>
    </div>
  )
}

export default Sidebar;