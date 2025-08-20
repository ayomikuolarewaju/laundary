
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/Laurel-garments-logo.png'

export default function Header() {
  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-[rgb(225,250,235)]">
      <div className="px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="flex md:flex-col items-center space-y-[50px] mt-5 md:space-y-0  md:justify-between w-full">
            <Link href="/" className="text-2xl font-bold text-green-900 hover:text-green-600 transition-colors">
              <Image src={logo} alt='logo' width={100} height={100}/>
            </Link>
            <nav className="hidden md:flex space-x-6 mt-10 text-green-900 ">
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
