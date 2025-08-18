
'use client';

import Link from 'next/link';
import {Pacifico} from 'next/font/google';

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' });

export default function Header() {
 

  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-[rgb(225,250,235)]">
      <div className="px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="flex md:flex-col items-center space-y-[50px] mt-5 md:space-y-0  md:justify-between w-full">
            <Link href="/" className="text-2xl font-bold text-green-800 hover:text-green-600 transition-colors">
              Ajootu
            </Link>
            <nav className="hidden md:flex space-x-6 mt-10 text-800[rgb(225,250,260)] font-bold]">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/groups" className=" hover:text-blue-600 transition-colors">
                Plans
              </Link>
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
                Lifestyle
              </Link>
                  <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}
