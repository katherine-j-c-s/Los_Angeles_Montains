import './App.css'
import logo from './assets/Logo.png'

import img1 from './assets/photo1458442310124dd_0.png'
import img2 from './assets/photo14439809957068d_0.png'

import Part1 from './components/Part1/Part1'
import Presentation from './components/Presentation/Presentation'
import Carousel from './components/Carousel/Carousel'
import Part2 from './components/Part2/Part2'

const images = [img1, img2, img1, img2, img2, img1, img2, img1, img1, img2, img1, img2]

function App() {
  return (
    <main>
      <div className='home'>
        <nav className='flex mt-3 justify-between md:px-20 px-2'>
          <img className='mt-0 h-8 w-8' src={logo} alt="img" />
          <div className='flex text-white font-mono text-xl w-60 justify-between'>
            <p>01 HISTORY</p>
            <p>02 TEAM</p>
          </div>
        </nav>
        <Presentation />
      </div>
      <div className='relative top-96 pt-16 -pb-10 flex w-full justify-between md:px-40 px-1'>
        <div className='flex'>
          <img src={logo} className='mt-32 mr-2 h-8 w-8' alt="img" />
          <div>
            <h1 className='font-bold mt-32 text-md text-slate-600'>LOSANGELES</h1>
            <h1 className='font-bold text-md text-blue-900'>MONTAINS</h1>
          </div>
        </div>
        <div className='flex mt-36 text-slate-700 font-mono text-xsmd w-44 justify-between'>
          <p>01 HISTORY</p>
          <p>02 TEAM</p>
        </div>
      </div>
      <div className='h-5'></div>
      <div className='mt-96'>
        <Part1 />
      </div>
      <Carousel images={images} />
      <div className='-mt-32 mb-10 w-full md:px-32 px-2 flex md:flex-row flex-col justify-center'>
        <div className='flex md:pt-6 pt-2'>
          <h1 className='md:text-9xl text-6xl font-bold text-slate-500'>02</h1>
          <div className='md:pt-16 pt-5'>
            <h1 className='text-2xl font-bold text-slate-700'>CLIMB</h1>
            <div className='bg-slate-500 md:h-4 md:w-4 h-1 w-1'></div>
          </div>
        </div>
        <div className='text-md md:w-8/12 mt-10 md:ml-16'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, itaque! Perferendis voluptatibus maxime temporibus aliquid tempore eveniet eos sapiente quisquam assumenda adipisci modi totam explicabo, quasi harum, cumque, fugiat asperiores?
          </p>
        </div>
      </div>
      <div className='w-full md:px-32 flex bg-slate-900 h-10'>
        <div className='h-full w-fit text-xl pt-1 px-2 text-slate-800 font-bold bg-slate-400'>
          <h1>MOUNTAIN 1</h1>
        </div>
        <div className='h-full w-fit text-xl pt-1 px-2 text-slate-300 font-bold '>
          <h1>MOUNTAIN 2</h1>
        </div>
      </div>
      <Part2 />
      <footer className='w-full flex justify-between h-16 pt-2 md:px-32 bg-slate-700'>
        <div className='flex'>
          <img src={logo} className='mt-2 mr-2 h-8 w-8' alt="img" />
          <div>
            <h1 className='md:font-bold  text-md text-slate-600'>LOSANGELES</h1>
            <h1 className='md:font-bold  text-md text-slate-600'>MONTAINS</h1>
          </div>
        </div>
        <div className='text-slate-600 md:font-bold text-md mt-3'>
          <p>COPY RIGHT 2016. RIGHTS RESERVED</p>
        </div>
      </footer>
    </main>
  )
}

export default App
