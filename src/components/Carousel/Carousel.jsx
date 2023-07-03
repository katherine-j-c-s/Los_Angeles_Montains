import React, { useEffect, useState } from 'react'

export default function Carousel({images}) {
    console.log(images);
    const [showImg, setShowImg] = useState([])
    const [subGroups,setSubGroup] = useState(0)
    const [first, setFirst] = useState(0)
    const [last, setLast] = useState(4)

    const moveGroup = (i) => {
        const newStart = i * 4
        setFirst(newStart)
        setLast(newStart + 4)
    }

    useEffect(()=>{
        setSubGroup(Math.ceil((images.length - 1)/4))
        setShowImg(images.slice(first,last))
    },[first, last])

  return (
    <div className='w-full relative -top-32 bg-slate-500 py-3'>
        <div className='flex md:w-8/12 w-full justify-evenly mx-auto'>
            {showImg.map((img,i)=>(
                <div className='w-fit' key={i}>
                    <img src={img} alt="img" className='md:h-40 md:w-60 h-20' />
                </div>
            ))}
        </div>
        <div className='flex w-fit mx-auto mt-5'>
        {Array(subGroups).fill().map((_,i)=>(
            <div onClick={()=>moveGroup(i)} className='mx-2 h-2 w-2 rounded-full bg-cyan-200' key={i}></div>
        ))}
        </div>
    </div>
  )
}
