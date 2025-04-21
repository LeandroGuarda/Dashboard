
import Footer from './components/Footer';
import { Header } from './components/Header'
import Form from './components/utils/form/page';
import { bebasFonts } from './ui/fonts'
import { BsArrowRight } from "react-icons/bs";
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  return (
    <div>
      <main className='flex min-h-screen flex-col pb-8'>
        <Header />

        <Form />
        </main >
    </div >
   
  

  
   
  )
}

export default Home

