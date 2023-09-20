import Button from "../button";
import MenuIcon from "../icons/menu-icon";

export default function Navbar() {
  return (
    <nav className="px-6 py-8 flex justify-between border-b border-b-secondary-100">
      <h1 className="text-primary-100 font-clash-display font-bold text-xl">
        get<span className="text-primary-200">linked</span>
      </h1>

      <div className="hidden">
        <ul>
          <li>timeline</li>
          <li>overview</li>
          <li>
            faq<span>s</span>
          </li>
          <li>contact</li>
        </ul>

        <Button label="register" />
      </div>

      <button>
        <MenuIcon />
      </button>
    </nav>
  );
}
