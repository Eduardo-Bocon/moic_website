import { headers } from "next/headers";
import Link from "next/link";

const UpBar = () => {

    interface NavLinkProps {
        href: string;
        label: string;
      }
      
      const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
        <Link legacyBehavior href={href}>
          <a className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
            {label}
          </a>
        </Link>
      );

return (
    <header className="bg-white w-full h-20 flex flex-row ">
        <img src="/logo-moic.svg" className={'h-20 w-36 flex justify-center ml-16'} alt="" />
        <div className="flex justify-end w-full content-center">
            <nav className="md:flex flex self-center mr-12">
                <NavLink href="/" label="Home" />
                <NavLink href="/" label="Partners" />
                <NavLink href="/" label="Cases" />
                <NavLink href="/" label="Solutions" />
                <NavLink href="/" label="Team" />
            </nav>
           <img src="/logo_twitter.png" className={'h-10 w-10 flex self-center mr-16'} alt="" /> 
        </div>
        
    </header>
);
}

export default UpBar;