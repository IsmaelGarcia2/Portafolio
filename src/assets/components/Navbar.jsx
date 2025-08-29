import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm shadow-lg p-4 z-50 transition-all">
      <ul className="flex justify-center items-center gap-8 mx-auto">
        {["Home","About","Skills","Projects","Contact"].map((section) => (
          <li key={section}>
            <Link
              to={section}
              smooth={true}
              spy={true}
              offset={-70}
              activeClass="text-blue-400 font-semibold"
              className="cursor-pointer text-white hover:text-blue-400 transition-colors"
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
