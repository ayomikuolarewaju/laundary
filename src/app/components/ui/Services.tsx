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

const servicetypes:Types = [
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
    <div className="flex justify-center items-center bg-white">
        <div className="flex-col justify-center items-center text-green-900 gap-y-[50px] w-full p-2">
          <div className="m-5 text-center">
            <h1 className="capitalize text-2xl font-bold font-serif">Services</h1>
          
          </div>
          <div>
            <div className='text-3xl font-bold text-center capitalize font-serif'>
              <h2>what we offer</h2>  
            </div>
            <div className='grid grid-cols-2 items-center justify-center w-[500px] mx-auto'>
             {
                servicetypes.map((type:Types,index:number)=>(
                    <div key={index} >
                    <div>
                        <Image src={type.img} alt='image' width={300} />
                        <h3 className="text-green-950 capitalize text-lg font-bold pl-4 pt-3">{type.title}</h3>
                        <p className="w-[250px] pl-5 pt-3">{type.description}</p>
                        <button className="ml-5 p-2 text-white bg-green-950 text-white text-center rounded-md mt-3">{type.btn}</button>
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

export default Services