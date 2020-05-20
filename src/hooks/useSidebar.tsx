import { useContext } from 'react'
import { SidebarContext } from '../components/Sidebar'

export const useSidebar = () => useContext(SidebarContext)
