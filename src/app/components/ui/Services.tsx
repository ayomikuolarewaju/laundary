import Image from 'next/image'
import React from 'react'
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

function Services() {

const servicetypes = [
    {
        title : 'wash & fold',img:towel,description:'expert cleaning and folding of your laundary',btn:'add to order'
    },
    {
        title : 'wash & iron',img:iron,description:'washed ironed and ready to wear',btn:'add to order'
    },
    {
        title : 'pickup & delivery',img:deliver,description:'convenient service to your door',btn:'add to order'
    },
    {
        title : 'express same day',img:basket,description:'fast track service when you are in a hurry',btn:'add to order'
    }   
]


  return (
    <div className="md:flex-col md:justify-center md:items-center overflow-hidden bg-white pb-10 max-w-screen text-black">
        
          <div className="pt-5 text-center flex-col md:w-[900px] md:mx-auto md:justify-center md:items-center">
            <h1 className="capitalize text-2xl font-bold font-serif">Services</h1>
             <h2>what we offer</h2> 
          </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:items-center md:justify-center md:w-[900px] mx-auto'>
             {
                servicetypes.map((type,index:number)=>(
                    <div key={index} >
                        <Image src={type.img} alt='image' width={300}/>
                        <h3 className="text-green-950 capitalize text-lg font-bold pl-4 pt-3">{type.title}</h3>
                        <p className="w-[250px] pl-5 pt-3">{type.description}</p>
                        <button className="ml-5 p-2 text-white bg-green-950 text-center rounded-md mt-3 cursor-pointer hover:bg-gray-400 hover:text-sm">{type.btn}</button>
                  </div>
                ))
             }
            </div>  
    </div>
  )
}

export default Services