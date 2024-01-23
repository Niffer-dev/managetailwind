import { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import heroImg from './assets/hero-img.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav className='py-[40px] px-[60px] flex items-center justify-between'>
        <Link to="/">logo</Link>
        <ul className='flex gap-10'>
          <li>
            <Link to="#">Pricing</Link>
          </li>
          <li>
            <Link to="#">Product</Link>
          </li>
          <li>
            <Link to="#">About Us</Link>
          </li>
          <li>
            <Link to="#">Careers</Link>
          </li>
          <li>
            <Link to="#">Community</Link>
          </li>
        </ul>
        <button className='bg-orange-500 text-white py-[5px] px-[15px] rounded-full'>Get Started</button>
      </nav>

      <section className='py-[40px] px-[60px] flex md:flex-row flex-col-reverse items-center justify-center md:justify-between'>
        <div className='lg:w-[45%] md:w-[70%] text-center md:text-left'>
          <h2 className='font-bold lg:text-[45px] md:text-[35px] text-[20px]'>Bring everyone together to build better products.</h2>
          <p className='text-[20px] text-gray-500 mt-[5px] mb-[15px]'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view</p>
          <button className='bg-orange-500 text-white py-[5px] px-[15px] rounded-full'>Get Started</button>
        </div>
        <img src={heroImg} alt="" className='w-[70%] md:w-[50%]'/>
      </section>
    </BrowserRouter>
  )
}

export default App
