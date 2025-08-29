import Image from "next/image";
import banner from '@/images/Laurel-garments-ero.png';


const Lounge = ()=>{
    return (
        <div className="md:flex md:justify-between md:items-center space-y-[20px] max-w-screen mx-auto mb-5 pt-10 p-3.5 overflow-hidden md:w-[900px]">
                <div className="flex-col text-green-900 gap-y-[50px] h-[300px] pt-15">
                  <div className="mb-2">
                    <h1 className="capitalize text-2xl font-bold font-serif">More Than Just Laundary.</h1>
                  <p className=" text-md font-serif">Relax,refresh, or work while your clothes are being handed</p>
                  </div>
                  <div className="mb-2 flex-col">
                    <div className="flex gap-2 w-[200px] mb-2">
                    <p className="font-medium"> Free 45-Min wait lounge </p>
                    </div>
                    <div className="flex gap-2 w-[200px] mb-2">
                    <p className="font-medium"> VIP Lounge #5,000/hr</p>
                    </div>
                    <div className="flex gap-2 w-[200px]  mb-2">
                    <p className="font-medium"> Mini Cafe <br/>Pastries,Snacks,Drinks</p>
                    </div>
                  </div>
                  
                </div>
                <div className="md:flex hidden">
                  <Image src={banner} alt="banner" width={200} height={200}/> 
                </div>
                
        </div>
    )
}

export default Lounge;