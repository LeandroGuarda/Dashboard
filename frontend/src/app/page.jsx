
import Footer from './components/Footer';
import { Header } from './components/Header'
import { bebasFonts } from './ui/fonts'
import { BsArrowRight } from "react-icons/bs"; 
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  return (
   <main className='flex min-h-screen flex-col'>
    <Header/>
    <div className='mt-4 mx-auto flex grow flex-col gap-4 md:flex-row w-4/5'>
    <div className='flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20'>
    <p className={`${bebasFonts.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
      <strong>Welcome to dashboead</strong> Dashboard Tutorial React.js
    </p>
    <a href='/dashboard/form' className='flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base'>
    <span>Login</span> <BsArrowRight/>
    </a>
   


    </div>
    <div className=' flex items-center justify-center o-6 md:w-3/5 md:px-28 md:py-12'></div>


      {/* imagenes del home de muestra */}
    {/* <img src='/hero-desktop.png' alt='"Screenshots of the dasboard' width={1000} height={700} className='hidden md:block'/>
    <img src='/hero-mobile.png' alt='"Screenshots of the dasboard' width={560} height={620} className='block md:hidden'/> */}

    </div>
   
   </main>
   
  )
}

export default Home

