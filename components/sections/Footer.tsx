export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-ghostteam-black)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GT</span>
              </div>
              <span className="text-xl font-bold">Gradient Tweet</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Create beautiful tweet images with vibrant gradient backgrounds directly in ChatGPT.
            </p>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-[var(--color-ghostteam-green)] transition-colors text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-[var(--color-ghostteam-green)] transition-colors text-sm"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-[var(--color-ghostteam-green)] transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#waitlist"
                  className="text-gray-400 hover:text-[var(--color-ghostteam-green)] transition-colors text-sm"
                >
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[var(--color-ghostteam-green)] transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[var(--color-ghostteam-green)] transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[var(--color-ghostteam-green)] transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[var(--color-ghostteam-green)] transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Gradient Tweet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
