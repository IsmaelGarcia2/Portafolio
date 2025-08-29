import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow p-4 z-50">
      <ul className="flex justify-center gap-8">
        <li>
          <Link
            to="About"
            smooth={true}
            spy={true}
            offset={-70}
            activeClass="text-blue-500 font-semibold"
            className="cursor-pointer hover:text-blue-500"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="Skills"
            smooth={true}
            spy={true}
            offset={-70}
            activeClass="text-blue-500 font-semibold"
            className="cursor-pointer hover:text-blue-500"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="Projects"
            smooth={true}
            spy={true}
            offset={-70}
            activeClass="text-blue-500 font-semibold"
            className="cursor-pointer hover:text-blue-500"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="Contact"
            smooth={true}
            spy={true}
            offset={-70}
            activeClass="text-blue-500 font-semibold"
            className="cursor-pointer hover:text-blue-500"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
