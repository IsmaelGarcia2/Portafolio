import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow p-4 z-50">
      <ul className="flex justify-center gap-8">
        <li><Link to="About" smooth={true} className="hover:text-blue-500 cursor-pointer">About</Link></li>
        <li><Link to="Skills" smooth={true} className="hover:text-blue-500 cursor-pointer">Skills</Link></li>
        <li><Link to="Projects" smooth={true} className="hover:text-blue-500 cursor-pointer">Projects</Link></li>
        <li><Link to="Contact" smooth={true} className="hover:text-blue-500 cursor-pointer">Contact</Link></li>
      </ul>
    </nav>
  );
}
