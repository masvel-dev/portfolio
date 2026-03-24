import { HiEnvelope } from "react-icons/hi2";
import { FaTelegramPlane, FaLinkedinIn, FaFileAlt } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

import { Button, type ButtonProps } from "@/shared/ui/Button";
import { contacts } from "@/shared/config/contacts";

const socialLinks = [
  {
    type: "mailto",
    href: contacts.email,
    icon: <HiEnvelope />,
    className: "text-lg",
  },
  {
    type: "link",
    href: contacts.telegram,
    icon: <FaTelegramPlane />,
    className: "text-xl pt-[2px] pr-[2px]",
  },
  {
    type: "link",
    href: contacts.linkedin,
    icon: <FaLinkedinIn />,
    className: "text-xl",
  },
  {
    type: "link",
    href: contacts.github,
    icon: <PiGithubLogoFill />,
    className: "text-xl",
  },
  {
    type: "link",
    href: contacts.cv,
    icon: <FaFileAlt />,
    styleType: "style3",
    className: "px-5",
    text: "View Resume",
  },
] satisfies ButtonProps[];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3 mt-8">
      {socialLinks.map((btn, index) => (
        <Button key={index} {...btn} />
      ))}
    </div>
  );
}