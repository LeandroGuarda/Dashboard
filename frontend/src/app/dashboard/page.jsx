
import { Bebas_Neue } from 'next/font/google'
import SideNav from '../components/SideNav'
import { bebasFonts } from '../ui/fonts'
import {InfoCard} from 'anjrot-components'


  const Dashboard = () => {
  return (
  <main>
    <h1 className={`${bebasFonts.className} text-2xl mb-4 md:text-2xl`}>Deshboard</h1>
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
    <InfoCard title="Leandro" value={3365} type="pending"/>
    <InfoCard title="Leandro" value={3365} type="pending"/>
    <InfoCard title="Leandro" value={3365} type="pending"/>
    <InfoCard title="Leandro" value={3365} type="pending"/>
    </div>
  </main>
     
  )
}

export default Dashboard

