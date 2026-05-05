import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext, { dark, light } from "../Hooks/ThemeContext";

const LINKS = {
  Shop: ["Electronics", "Clothing", "Jewelry", "Accessories"],
  Account: ["My Profile", "My Orders", "Wishlist", "Help Center"],
  Company: ["About Us", "Careers", "Press", "Blog"],
};

const SOCIAL = [
  { icon: "fa-brands fa-instagram", label: "Instagram" },
  { icon: "fa-brands fa-x-twitter", label: "X" },
  { icon: "fa-brands fa-facebook", label: "Facebook" },
  { icon: "fa-brands fa-youtube", label: "YouTube" },
];

const Footer = () => {
  const [theme] = useContext(ThemeContext);

  const mutedText = theme ? "text-slate-500" : "text-slate-400";
  const linkStyle = `text-sm transition-colors duration-150 ${
    theme
      ? "text-slate-400 hover:text-slate-100"
      : "text-slate-500 hover:text-slate-900"
  }`;

  return (
    <footer
      className="w-full transition-colors duration-300"
      style={theme ? dark.footer : light.footer}
    >
      {/* Bottom bar */}
      <div
        className={`border-t ${theme ? "border-white/5" : "border-white/10"}`}
      >
        <div className="max-w-7xl mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className={`text-xs ${mutedText}`}>
            © 2026 NextBUY. All rights reserved. Made with ❤️ by Aditya Kumar.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (t) => (
                <a
                  key={t}
                  href="#"
                  className={`text-xs transition-colors ${mutedText} hover:text-blue-400`}
                >
                  {t}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
