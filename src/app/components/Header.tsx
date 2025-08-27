
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/Laurel-garments-logo.png'

export default function Header() {
  return (
    <header className=" sticky top-0 z-50 md:justify-center md:items-center max-w-9xl mx-auto md:w-[700px] mb-[30px]">
      <div className="px-6 py-4 max-w-7xl">
        <div className="flex ">
          <div className="flex md:flex-col md:items-center space-y-[50px] mt-5 md:space-y-0 md:justify-center md:w-[700px] md:mx-auto">
            <Link href="/" className="text-2xl font-bold text-green-900 hover:text-green-600 transition-colors">
              <Image src={logo} alt='logo' width={100} height={100}/>
            </Link>
            <nav className="hidden md:flex space-x-6 mt-10 text-green-900 justify-between items-center w-[700px] mx-auto">
              <Link href="/" className="hover:text-green-600 font-bold transition-color">
                Services
              </Link>
              <Link href="/groups" className=" hover:text-green-600 font-bold transition-color">
                Plans
              </Link>
              <Link href="/dashboard" className="hover:text-green-600 font-bold transition-color">
                Lifestyle
              </Link>
                  <Link href="/dashboard" className="hover:text-green-600 font-bold transition-color">
                Contact
              </Link>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}
