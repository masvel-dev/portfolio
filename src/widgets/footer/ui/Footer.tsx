import { motion } from "framer-motion";
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
import { PiGithubLogoFill } from "react-icons/pi";

import { contacts } from "@/shared/config/contacts";

const MotionLink = motion.a;

export function Footer() {
  const socialLinks = [
    { href: `mailto:${contacts.email}`, icon: <HiEnvelope />, label: "Email", isExternal: false },
    { href: contacts.telegram, icon: <FaTelegramPlane />, label: "Telegram", isExternal: true },
    { href: contacts.linkedin, icon: <FaLinkedinIn />, label: "LinkedIn", isExternal: true },
    { href: contacts.github, icon: <PiGithubLogoFill />, label: "GitHub", isExternal: true },
  ];

  return(
    <footer className="border-t border-gray-200">
      <div className="w-full max-w-6xl mx-auto px-3 flex justify-between items-center py-6">
        <p className="text-sm opacity-80">Kopan.dev &copy; {new Date().getFullYear()}. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <span className="text-gray-500 text-sm opacity-90 after:content-['—'] after:pl-4">Get in touch</span>

          <nav aria-label="Contact links" className="flex gap-3">
            {socialLinks.map(({ href, icon, label, isExternal }) => (
              <MotionLink
                key={label}
                href={href}
                aria-label={label}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-accent"
              >
                {icon}
              </MotionLink>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  );
}