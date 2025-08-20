import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import banner from '@/images/Laurel-garments-ero.png'
import Services from "./components/ui/Services";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#e1faeb]">
      <div>
        <Header />
      </div>
      <div className="flex justify-center items-center space-y-[20px] mb-5">
        <div className="flex-col text-green-900 gap-y-[50px] h-[200px] p-2">
          <div className="mb-2">
            <h1 className="capitalize text-4xl font-bold font-serif">your laundary.</h1>
          <h1 className="capitalize font-bold text-3xl font-serif">our priority</h1>
          </div>
          <div className="mb-2">
            <p className="font-medium">Reliable laundary care <br/> with modern convenience </p>
          </div>
          <div className="flex-col gap-2 w-[200px] h-[100px] mb-2">
          <div className="bg-green-600 text-white p-4 rounded-[20px] ring-1 ring-green-50 text-center font-bold mb-2 "> 
            <button>Schedule Pickup</button>
          </div>
          <div className="ring-2 ring-green-900 p-4 rounded-[20px] text-green-900 font-bold text-center mb-2 w-[130px]">
            <button>View Plans</button>
          </div>
        </div>
        </div>
        <div>
          <Image src={banner} alt="banner" width={200} height={200}/>
        </div>
        
      </div>
      <Services/>
      <Footer/>
    </div>
  );
}
