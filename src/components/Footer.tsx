import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* Newsletter CTA */}
      <div className="border-b border-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-blue-100">Get the latest news and announcements</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 md:flex-none px-4 py-3 rounded-lg text-gray-900 font-semibold"
              />
              <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-black text-xl">W</span>
              </div>
              <div>
                <p className="text-sm font-black">ESCONDIDO</p>
                <p className="text-xs">POP WARNER</p>
              </div>
            </Link>
            <p className="text-blue-100 text-sm mb-4">
              Youth football programs for ages 5-14. Building champions on and off the field since 1974.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61573142541072" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-yellow-400 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/escondidopopwarner/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-yellow-400 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@escondidopopwarner" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-yellow-400 transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link href="/programs" className="text-blue-100 hover:text-yellow-400 transition-colors">Flag Football</Link></li>
              <li><Link href="/programs" className="text-blue-100 hover:text-yellow-400 transition-colors">Tackle Football</Link></li>
              <li><Link href="/programs" className="text-blue-100 hover:text-yellow-400 transition-colors">Cheerleading</Link></li>
              <li><a href="https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/22184&app_name=Escondido+Pop+Warner&portalid=22184&instancekey=tshq" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-yellow-400 transition-colors font-bold">Register Now</a></li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="font-bold text-lg mb-4">Organization</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-blue-100 hover:text-yellow-400 transition-colors">About EPW</Link></li>
              <li><Link href="/board" className="text-blue-100 hover:text-yellow-400 transition-colors">Leadership</Link></li>
              <li><Link href="/volunteer" className="text-blue-100 hover:text-yellow-400 transition-colors">Volunteer</Link></li>
              <li><Link href="/calendar" className="text-blue-100 hover:text-yellow-400 transition-colors">Calendar</Link></li>
            </ul>
          </div>

          {/* Leagues */}
          <div>
            <h4 className="font-bold text-lg mb-4">Leagues & Partners</h4>
            <ul className="space-y-2">
              <li><a href="https://www.popwarner.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-yellow-400 transition-colors">National Pop Warner</a></li>
              <li><a href="https://www.wccpopwarner.org" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-yellow-400 transition-colors">West Coast Conference</a></li>
              <li><a href="https://rebelsportsgroup.com/escondido_pop_warner/shop/home" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-yellow-400 transition-colors">Official Store</a></li>
              <li><Link href="/news" className="text-blue-100 hover:text-yellow-400 transition-colors">News & Updates</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="text-sm">📍 Escondido, California</li>
              <li className="text-sm">📱 Phone: (760) 555-0123</li>
              <li className="text-sm">📧 Email: info@epwwolfpack.com</li>
              <li className="mt-4"><a href="https://login.stacksports.com/login?client_id=612b0399b1854a002e427f78&redirect_uri=https://core-api.bluesombrero.com/login/redirect/portal/22184&app_name=Escondido+Pop+Warner&portalid=22184&instancekey=tshq" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-500 text-blue-900 px-4 py-2 rounded font-bold hover:bg-yellow-400 transition-colors text-sm">Register</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-blue-200 text-sm">
            <p>&copy; {currentYear} Escondido Pop Warner. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
