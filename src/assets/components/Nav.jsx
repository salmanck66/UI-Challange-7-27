import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faUser } from '@fortawesome/free-solid-svg-icons'; 
const nav = () => {
  return (
    <div className='flex justify-between px-10 py-5  border-b-2 border-slate-300'>
      <div className='logo'>
        <span className='text-xl font-bold'>Ski.ai</span>
      </div>
      <div className="contents">
        <ul className='flex gap-10 text-md font-semibold'>
            <li>Dashboard</li>
            <li>Insight</li>
            <li>Training</li>
            <li>Rehab</li>
            <li><FontAwesomeIcon fill='none' icon={faBell} /></li>
            <li><FontAwesomeIcon icon={faUser} /></li>
        </ul>
      </div>
    </div>
  )
}

export default nav
