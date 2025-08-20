export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-700 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-white text-lg font-bold">Jeremy Barber</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Cloud Engineer & Full-Stack Developer. Designing scalable cloud
            solutions, automation workflows, and building modern web
            applications. AWS Solutions Architect - Associate certified.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-bold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="/posts" className="hover:text-white">
                Posts
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white text-lg font-bold">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="mailto:jeremydanielbarber@gmail.com"
                className="hover:text-white"
              >
                jeremydanielbarber@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/jeremy-bar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Jeremy Barber. All rights reserved.
      </div>
    </footer>
  );
}
