import navStyles from "../styles/Navbar.module.scss";
import Link from "next/link";

const NavItem = ({ item }) => {
  return (
    <li className={navStyles.navbar__item}>
      <Link href={item.slug}>
        <a className={navStyles.navbar__link}>
          <span className={navStyles.navbar__span}>0{item.id}: </span>
          {item.name}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
