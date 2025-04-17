"use client"

import Link from 'next/link'
import { FaFileInvoice, FaHome, FaUsers, FaCalendar  } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'


const Links = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: FaHome
    },
    {
        name: "Invoices",
        href: "/dashboard/invoices",
        icon: FaFileInvoice
    },
    {
        name: "Customers",
        href: "/dashboard/customers",
        icon: FaUsers
    },
    {
        name: "Calendar",
        href:"dashboard/calendar",
        icon: FaCalendar

    },
    {
        name: "form",
        href:"dashboard/form",
        icon: FaCalendar

    }

]
 const NavLinks = () => {
    const pathname = usePathname()
    console.log(pathname);  
    
  return (
    <> 
        {Links.map(x=>{
               const LinIcon = x.icon
               return(
               <Link key={x.href} href={x.href} className={twMerge('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-700 p-3 text-lg text-white font-bold hover:bg-slate-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',pathname === x.href && 'bg-sky-500')}>
               <LinIcon className='w-6'/>
               <p className='hidden: md-block'>{x.name}</p>
           
               </Link>
               )
            }) }  
            </>
  )
}

export default NavLinks

