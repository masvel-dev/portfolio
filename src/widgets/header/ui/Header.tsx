import { useBreakpoints } from "@/shared/lib/useBreakpoints"

import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";

export const Header = () => {
  const { md } = useBreakpoints();

  return md ? <DesktopHeader /> : <MobileHeader />;
};