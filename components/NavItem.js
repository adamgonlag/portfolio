import navStyles from "../styles/Navbar.module.scss";
import Link from "next/link";

const NavItem = ({ item }) => {
  return (
    <li className={navStyles.item}>
      <Link href={item.slug}>
        <a className={navStyles.link}>
          <span className={navStyles.span}>0{item.id}: </span>
          {item.name}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
