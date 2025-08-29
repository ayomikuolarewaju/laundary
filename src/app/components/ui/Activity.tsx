import React from 'react'
import Image from 'next/image'
import towel from '@/images/Laurel-garments-2.png'
import iron from '@/images/Laurel-garments-3.png'
import deliver from '@/images/Laurel-garments-4.png'
import basket from '@/images/Laurel-garments-5.png'


 interface Types  {
        title:string,
        img:string,
        description:string,
        btn:string
    }

function Activity() {

    const servicetypes = [
    {
        title : 'schedule pickup',img:towel
    },
    {
        title : 'we pickup',img:iron
    },    
    {
        title : 'we wash & deliver',img:deliver
    },
    {
        title : 'relax or lounge in',img:basket
    }   
]

  return (
    <div className="flex md:justify-center md:items-center mb-10 max-w-screen mx-auto overflow-hidden">
        <div className="flex-col justify-center items-center text-green-900 gap-y-[50px] w-full p-5">
          <div>
            <div className='text-3xl font-bold text-center capitalize font-serif justify-center items-center text-green-950 my-5 mx-auto'>
              <h2>How it works</h2>  
            </div>
            <div className='md:flex  md:items-center md:justify-center md:w-[900px] md:mx-auto'>
             {
                servicetypes.map((type,index:number)=>(
                    <div key={index} >
                    <div className="flex flex-col">
                        <Image src={type.img} alt='image' width={300} />
                        <h3 className="text-green-950 capitalize text-lg font-bold pl-4 pt-3">{type.title}</h3>
                    </div>
                  </div>
                ))
             }
            </div>
          </div>
        
        </div>
       
      </div>
  )
}

export default Activity



