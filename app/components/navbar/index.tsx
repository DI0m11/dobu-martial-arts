import { Link } from "@remix-run/react";
import { Form, Link } from "@remix-run/react";
import logo from "~/assets/jpg/dobu Logo.jpg";
import NavbarLink from "./NavbarLink";
import { useState } from "react";
import { useOptionalUser } from "~/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useOptionalUser();
  console.log({ user });
  return (
    <header className=" bg-black  md:flex md:justify-between">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <img className="h-16 w-auto" src={logo} alt="Dobu Martial Arts Gym" />
        </div>
        <div className="md:hidden">
          <button
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : null}

              {!isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              ) : null}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } px-2 pt-2 pb-4 md:flex md:items-center`}
      >
        <NavbarLink url="/">Home</NavbarLink>
        <NavbarLink url="/about">About Us</NavbarLink>
        <NavbarLink url="/classes">Classes</NavbarLink>
        <NavbarLink url="/membership">Membership</NavbarLink>
        <Link
          to="/login"
          type="button"
          className="mt-4 rounded border-2 border-neutral-700 bg-neutral-300 px-4 py-2 text-neutral-900 transition-colors hover:bg-neutral-100 lg:mt-0 lg:ml-4"
        >
          Login
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
