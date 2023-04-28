import { Link } from "@remix-run/react";

type NavbarLinkProps = {
  children: React.ReactNode;
  url: string;
};
const NavbarLink = ({ children, url }: NavbarLinkProps) => {
  return (
    <Link
      to={url}
      className="front-semibold mt-1 block rounded py-1 px-2 text-white hover:bg-slate-800 md:ml-2"
    >
      {children}
    </Link>
  );
};
export default NavbarLink;
