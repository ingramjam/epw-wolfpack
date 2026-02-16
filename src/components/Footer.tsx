import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">W</span>
              </div>
              <div>
                <p className="text-sm font-bold">ESCONDIDO</p>
                <p className="text-xs text-blue-200">POP WARNER</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Building champions on and off the field since 1968.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="hover:text-white transition-colors">
                  Calendar
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="/board" className="hover:text-white transition-colors">
                  Board Members
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="hover:text-white transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sponsorship
                </a>
              </li>
              <li>
                <a href="https://rebelsportsgroup.com/escondido_pop_warner/shop/home" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  EPW Store
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=61573142541072"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/escondidopopwarner/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-blue-200 transition-colors"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
            <p className="text-blue-100 text-sm">
              Have questions? Get in touch with us for more information.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100 text-sm">
            <p>
              &copy; {currentYear} Escondido Pop Warner. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
