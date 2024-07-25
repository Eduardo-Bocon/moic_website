import { headers } from "next/headers";
import Link from "next/link";

const UpBar = () => {

    interface NavLinkProps {
        href: string;
        label: string;
      }
      
      const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
        <Link legacyBehavior href={href}>
          <a className="text-black hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium">
            {label}
          </a>
        </Link>
      );

return (
    <header className="bg-white w-full h-20 flex flex-row justify-between shadow-md z-10">
        <img src="/logo-moic.svg" className={'h-20 w-36 flex justify-center ml-16'} alt="" />
        <div className="flex flex-row justify-center ">
            <nav className="md:flex flex self-center justify-self-center mr-8 space-x-11">
                <NavLink href="/" label="Home" />
                <NavLink href="/" label="Partners" />
                <NavLink href="/" label="Cases" />
                <NavLink href="/" label="Solutions" />
                <NavLink href="/" label="Team" />
            </nav>
        </div>
        
    
        <Link href="https://x.com/moic_digital" className="self-center">
            <img src="/logo_twitter.png" className={'h-9 w-9 flex self-center mr-16'} alt="" /> 
        </Link>

        
    </header>
);
}

export default UpBar;