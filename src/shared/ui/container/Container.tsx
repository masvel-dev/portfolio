import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6">
      {children}
    </div>
  );
}