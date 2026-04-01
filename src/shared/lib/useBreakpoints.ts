import { useBreakpoint } from "./useBreakpoint";
import { breakpoints } from "../config/breakpoints";

export const useBreakpoints = () => {
  const sm = useBreakpoint(breakpoints.sm);
  const md = useBreakpoint(breakpoints.md);
  const lg = useBreakpoint(breakpoints.lg);
  const xl = useBreakpoint(breakpoints.xl);

  return { sm, md, lg, xl };
};