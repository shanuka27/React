import classNames from 'classnames';
import React from 'react'
import { FcBullish } from "react-icons/fc";
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-teal-700 hover:no-underline active:bg-teal-800 rounded-sm text-base'

export default function Sidebar() {
  return (
    <div className='bg-teal-600 w-60 p-3 flex flex-col text-white'>
        <div className='flex item-center gap-2 px-1 py-3'>
            <FcBullish fontSize={24}/>
            <span className='text-teal-100 text-lg'>Nandana Tea Factory</span>
        </div>
        <div className='flex-1 py-8 flex flex-col gap-0.5 '>
            {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
                <SidebarLink key={item.key} item={item} />
                 
            ))}
        </div>
        <div>
            <hr/>
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item} />
            ))}
             <div className={classNames('text-red-900 cursor-pointer',linkClasses)}>
                <span className='text-xl'><HiOutlineLogout /></span>
                LogOut
            </div>
        </div>
    </div>
  )
}

function SidebarLink({ item }){
    const { pathname} = useLocation()

    return(
        <Link to={item.path} className={classNames( pathname===item.path ? 'bg-teal-700 text-white' : 'text-netural-400',linkClasses)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}