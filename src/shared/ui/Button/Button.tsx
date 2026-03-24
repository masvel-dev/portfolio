import type { ReactNode } from "react";
import { Link as ScrollLink } from "react-scroll";

type BaseProps = {
  text?: string;
  icon?: ReactNode;
  styleType?: "style1" | "style2" | "style3";
  className?: string;
};

type ScrollButtonProps = BaseProps & {
  type: "scroll";
  scrollTo: string;
};

type LinkButtonProps = BaseProps & {
  type: "link";
  href: string;
};

type MailtoButtonProps = BaseProps & {
  type: "mailto";
  href: string;
};

type NativeButtonProps = BaseProps & {
  type?: "button";
  onClick?: () => void;
};

export type ButtonProps =
  | ScrollButtonProps
  | LinkButtonProps
  | MailtoButtonProps
  | NativeButtonProps;

const baseClasses =
  "flex items-center justify-center gap-2 rounded-[50px] min-w-12 h-12 shadow-lg duration-200 cursor-pointer";

const styleMap = {
  style1:
    "bg-gray-100/75 text-accent border border-gray-200/50 hover:bg-accent hover:text-white hover:border-transparent transition-colors",
  style2:
    "bg-accent text-white hover:bg-accent-hover transition-colors",
  style3:
    "bg-accent text-white hover:scale-105 transition-transform",
};

export const Button = (props: ButtonProps) => {
  const {
    text,
    icon,
    styleType = "style1",
    className = "",
  } = props;

  const classes = `${baseClasses} ${styleMap[styleType]} ${className}`;

  const content = (
    <>
      {text && <span>{text}</span>}
      {icon}
    </>
  );

  switch (props.type) {
    case "scroll":
      return (
        <ScrollLink to={props.scrollTo} smooth duration={500} className={classes}>
          {content}
        </ScrollLink>
      );

    case "mailto":
      return (
        <a href={`mailto:${props.href}`} className={classes}>
          {content}
        </a>
      );

    case "link":
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );

    default:
      return (
        <button onClick={props.onClick} className={classes}>
          {content}
        </button>
      );
  }
};