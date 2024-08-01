import { cn } from "../app/utils/cn";

type FooterProps = {
  className?: string,
}

const Footer = ({className}: FooterProps) => (
  <footer className={cn(
    'flex justify-center text-xs text-zinc-400',
    className,
  )}>
    <span>© 2024 Endriw Schiavenato. All rights reserved.</span>
  </footer>
);

export default Footer;
