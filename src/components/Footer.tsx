import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import { openCookieSettings } from "./CookiesConsent";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/company/pk5-agro-allied", color: "hover:text-[#0A66C2]" },
    { icon: Facebook, label: "Facebook", url: "https://web.facebook.com/profile.php?id=61588136807800", color: "hover:text-[#1877F2]" },
    { icon: Twitter, label: "X (Twitter)", url: "https://x.com/PK5AgroAllied", color: "hover:text-[#000000]" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/pk5agroallied/", color: "hover:text-[#E4405F]" },
  ];

  return (
  <footer className="bg-primary text-primary-foreground pt-16 pb-8">
    <div className="container-wide section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">
            PK5<span className="text-gold"> Agro-Allied</span>
          </h3>
          <p className="font-body text-primary-foreground/60 text-sm leading-relaxed mb-6">
            Cultivating excellence across the agricultural landscape since 2021.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, label, url, color }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`transition-colors ${color}`}
                title={label}
              >
                <Icon className="w-5 h-5 text-primary-foreground/60 hover:text-gold" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 text-gold">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2">
            {["About Us", "Products", "Sustainability", "Careers", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(" ", "-").replace("about-us", "about")}`}
                className="font-body text-sm text-primary-foreground/60 hover:text-gold transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Products */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 text-gold">
            Products
          </h4>
          <div className="flex flex-col gap-2">
            {["Palm Kernel", "Cocoa", "Plantain"].map((item) => (
              <Link
                key={item}
                to="/products"
                className="font-body text-sm text-primary-foreground/60 hover:text-gold transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 text-gold">
            Contact Us
          </h4>
          <ul className="space-y-4 font-body text-sm">
            {/* USA Office */}
            <li className="flex flex-col gap-1">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href="https://www.google.com/maps?q=5901%20Peachtree%20Dunwoody%20Road,%20Suite%20A310,%20Atlanta,%20GA%2030328,%20USA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <strong className="font-bold text-primary-foreground">USA Office: </strong>
                  5901 Peachtree Dunwoody Road, Suite A310, Atlanta, GA 30328, USA
                </a>
              </div>
              <div className="flex items-center gap-2 ml-6">
                <Phone size={14} className="shrink-0 text-gold" />
                <a href="tel:+14044365533" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  +1 (404) 436-5533
                </a>
              </div>
            </li>

            {/* Enugu Office */}
            <li className="flex flex-col gap-1">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2%2F4%2C+Nza+Street%2C+Independence+Layout+Enugu%2C+Enugu+State%2C+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <strong className="font-bold text-primary-foreground">Enugu, Nigeria Office: </strong>
                  2/4, Nza Street, Independence Layout Enugu, Enugu State, Nigeria
                </a>
              </div>
            </li>

            {/* Lagos Office */}
            <li className="flex flex-col gap-1">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=No.+5B%2C+Ikosi+Road%2C+Oregun%2C+Ikeja%2C+Lagos%2C+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <strong className="font-bold text-primary-foreground">Lagos, Nigeria Office: </strong>
                  No. 5B, Ikosi Road, Oregun, Ikeja, Lagos, Nigeria
                </a>
              </div>
              <div className="flex items-center gap-2 ml-6">
                <Phone size={14} className="shrink-0 text-gold" />
                <a href="tel:+2348081254905" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  +234 (808) 125-4905
                </a>
              </div>
            </li>

            {/* Email */}
            <li className="flex items-center gap-2.5 pt-1">
              <Mail size={16} className="shrink-0 text-gold" />
              <a href="mailto:Info@pk5agroallied.com" className="text-primary-foreground/70 hover:text-gold transition-colors">
                Info@pk5agroallied.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-primary-foreground/40">
          ©{new Date().getFullYear()} PK5 Agro-Allied. All rights reserved.
        </p>

        <div className="flex gap-6">
          <button
            onClick={openCookieSettings}
            className="font-body text-xs text-primary-foreground/60 hover:text-gold transition-colors"
          >
            Cookie Settings
          </button>
        </div>
      </div>
    </div>
  </footer>
);
};

export default Footer;