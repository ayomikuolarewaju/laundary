
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/Laurel-garments-logo.png'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-green-900 hover:text-green-600 transition-colors">
              <Image src={logo} alt='logo' width={100} height={100}/>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Empowering teams with seamless collaboration tools. Create groups, manage members, and work together efficiently with our intuitive platform.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-twitter-line text-gray-400 hover:text-blue-600 cursor-pointer transition-colors"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-facebook-line text-gray-400 hover:text-blue-600 cursor-pointer transition-colors"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-linkedin-line text-gray-400 hover:text-blue-600 cursor-pointer transition-colors"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</Link></li>
              <li><Link href="/integrations" className="text-gray-600 hover:text-blue-600 transition-colors">Integrations</Link></li>
              <li><Link href="/security" className="text-gray-600 hover:text-blue-600 transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-600 hover:text-blue-600 transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 TeamSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
