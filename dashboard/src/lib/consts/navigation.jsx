import { HiOutlineCog, HiOutlineCube,HiOutlineQuestionMarkCircle,HiOutlineViewGrid } from 'react-icons/hi'
import { RxBarChart } from "react-icons/rx";

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'sales',
        label: 'All Sales',
        path: '/sales',
        icon: <RxBarChart />
    },
    {
        key: 'stokes',
        label: 'Stokes',
        path: '/stokes',
        icon: <HiOutlineCube />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/supports',
        icon: <HiOutlineQuestionMarkCircle />
    }
]