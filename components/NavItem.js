import navStyles from "../styles/Navbar.module.scss";
import Link from "next/link";

const NavItem = ({ item }) => {
  return (
    <li className={navStyles.item}>
      <Link href={item.slug}>
        <a className={navStyles.link}>
          <span className={navStyles.span}>{"<"}</span>
          {item.name}
          <span className={navStyles.span}>{" />"}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
