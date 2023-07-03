import React from 'react'
import './Part1.css'

export default function Part1() {
  return (
    <div className='imgBackground'>
        <article className='mx-auto relative h-44 w-10/12 md:w-7/12'>
            <div className='flex pt-10 md:mb-0 mb-2'>
                <h1 className='text-8xl font-bold text-slate-500'>01</h1>
                <div className='pt-10'>
                    <h1 className='text-2xl font-bold text-slate-700'>HISTORY</h1>
                    <div className='bg-slate-500 h-3.5 w-3.5'></div>
                </div>
            </div>
            <div className='text-md md:ml-16 text-justify'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, voluptate quaerat sint laudantium vitae, inventore earum eius voluptatibus animi voluptates ipsam accusamus. Cumque iure laudantium reprehenderit deleniti fugit magni eos.</p>
            </div>
        </article>
    </div>
  )
}
