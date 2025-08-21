export type FooterProps = {
  footerData: {
    brand: {
      name: string;
      description: string;
    };
    quickLinks: Array<{
      href: string;
      label: string;
    }>;
    contact: Array<{
      href: string;
      label: string;
      external?: boolean;
    }>;
    copyright: string;
  };
};

export default function Footer({ footerData }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-700 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-white text-lg font-bold">
            {footerData.brand.name}
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            {footerData.brand.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-bold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            {footerData.quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white text-lg font-bold">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerData.contact.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} {footerData.copyright}
      </div>
    </footer>
  );
}
