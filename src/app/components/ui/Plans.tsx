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

function Plans() {

const servicetypes = [
    {
        title : 'essential plan',img:towel,description:'4 loads per month',btn:'subscribe',price:'#10,000' 
    },
    {
        title : 'classic plan',img:iron,description:'6 loads + 2 pickups per week',btn:'subscribe',price:'#15,000'
    },
    {
        title : 'premium plan',img:deliver,description:'10 loads + unlimited pickups',btn:'subscribe',price:'#25,0000'
    }
]


  return (
    <div className="flex justify-center items-center bg-white mb-[50px]">
        <div className="flex-col justify-center items-center text-green-900 gap-y-[50px] w-full p-2">
          <div className="m-5 text-center">
            <h1 className="capitalize text-2xl font-bold font-serif">Plans</h1>
          
          </div>
          <div>
            <div className='text-2xl text-center capitalize font-serif justify-center items-center text-green-950 mb-5 mx-auto'>
              <h2>choose a subscription plan that suits your needs.</h2>  
            </div>
            <div className='flex items-center justify-center w-[700px] mx-auto'>
             {
                servicetypes.map((type,index:number)=>(
                    <div key={index} className='bg-white rounded-md mb-10'>
                    <div>
                        <Image src={type.img} alt='image' width={300} height={300} />
                        <h3 className="text-green-950 capitalize text-lg font-bold pl-4 pt-3">{type.title}</h3>
                        <p className="w-[250px] pl-5 pt-3">{type.description}</p>
                        <button className="ml-5 p-2 text-white bg-green-950 text-center rounded-md mt-3">{type.btn}</button>
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

export default Plans
