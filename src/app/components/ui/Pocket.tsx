import Image from "next/image";
import banner from '@/images/Laurel-garments-ero.png';


const Pocket = ()=>{
    return (

        <div className="md:flex md:justify-center md:items-center space-x-[70px] w-[700px] mx-auto  bg-white overflow-hidden p-[50px]">
           <div className="flex-col text-green-900 gap-y-[50px] h-[300px] p-2">
               <div className="mb-2">
                  <h1 className="capitalize text-5xl font-bold font-serif mb-10">
                     laundary in <br/> your pocket</h1>
                </div>
                <div className="mb-2">
                    <p className="font-medium">Book pickups,manage plans <br/> and track your laundry- <br/> all from your phone.</p>
                </div>
                <div className="bg-green-600 text-white p-4 rounded-[20px] ring-1 ring-green-50 text-center font-bold mb-2 cursor-pointer hover:bg-green-700 transition-all duration-300 mt-[70px] w-[200px]"> 
                <button>Download Now</button>
            </div>
            </div>
            
            <div className="md:flex hidden">
             <Image src={banner} alt="banner" width={200} height={200}/> 
          </div>
      
        </div>
    )
}

export default Pocket